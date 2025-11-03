// Firebase v10 modular CDN for the monthly analytics database (second DB)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getDatabase, ref, get, onValue, off, query, orderByChild, startAt, endAt } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';

// Project: esp32monitoring (monthly analytics DB)
// Source: user-provided config
const monthlyFirebaseConfig = {
  apiKey: "AIzaSyAJvhdBfLdUeZaPglFQsHfsIlxanY2scfY",
  authDomain: "esp32monitoring-f842f.firebaseapp.com",
  databaseURL: "https://esp32monitoring-f842f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "esp32monitoring-f842f",
  storageBucket: "esp32monitoring-f842f.firebasestorage.app",
  messagingSenderId: "680606266535",
  appId: "1:680606266535:web:7b9970ff1cc712eeb59782"
};

// Use a named app to keep it separate from the primary DB used in dashboard.html
const monthlyApp = initializeApp(monthlyFirebaseConfig, 'monthlyApp');
const monthlyDb = getDatabase(monthlyApp);

const monthInput = document.getElementById('monthInput');
const deviceSelect = document.getElementById('deviceSelect');
const refreshBtn = document.getElementById('refreshBtn');
const tableBody = document.getElementById('monthlyTable');

const statSamples = document.getElementById('statSamples');
const statTemp = document.getElementById('statTemp');
const statPh = document.getElementById('statPh');
const statOxy = document.getElementById('statOxy');
const statTurb = document.getElementById('statTurb');

let chart;
let currentUnsubscribe = null;

function defaultMonthValue() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
}

function tsToLocalString(ts) {
  const d = new Date(Number(ts));
  return d.toLocaleString('en-PH', { timeZone: 'Asia/Manila' });
}

function mean(numbers) {
  if (!numbers.length) return 0;
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

function ensureChart(ctx) {
  if (chart) return chart;
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [
        { label: 'Avg Temp (°C)', data: [], borderColor: '#0D47A1', tension: 0.3 },
        { label: 'Avg pH', data: [], borderColor: '#FFC107', tension: 0.3 },
        { label: 'Avg O2 (mg/L)', data: [], borderColor: '#00BCD4', tension: 0.3 },
        { label: 'Avg Turbidity (NTU)', data: [], borderColor: '#a259ec', backgroundColor: 'rgba(162,89,236,0.1)', tension: 0.3 },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.08)' }, ticks: { color: '#e2e8f0' } },
        y: { grid: { color: 'rgba(255,255,255,0.08)' }, ticks: { color: '#e2e8f0' } }
      },
      plugins: { legend: { labels: { color: '#e2e8f0' } } }
    }
  });
  return chart;
}

function groupByDay(rows) {
  const map = new Map();
  rows.forEach(r => {
    const d = new Date(Number(r.deviceTimestamp || r.timestamp || 0));
    if (isNaN(d)) return;
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    const arr = map.get(key) || [];
    arr.push(r);
    map.set(key, arr);
  });
  return Array.from(map.entries()).sort((a,b)=> a[0].localeCompare(b[0]));
}

function collectCandidates(year, month) {
  return [
    `monthlyReadings/${year}-${month}`,
    `monthlyReadings/${year}/${month}`,
    `MonthlyReadings/${year}-${month}`,
    `Monthly/${year}/${month}`,
    `Monthly/${year}-${month}`,
    `MonthlyData/${year}/${month}`,
    `monthReadings/${year}/${month}`,
    'monthlyReadings',
    'MonthlyReadings',
    'Monthly',
    'MonthlyData',
    'monthReadings',
    'sensorReadings',
    'readings',
    'sensors',
    'data',
    'logs',
    '',
    '/'
  ];
}

// Deeply flatten nested objects/arrays to a list of reading-like objects
function normalizeRows(raw) {
  const out = [];
  const stack = [];
  const pushIfRecord = (key, obj) => {
    if (obj && typeof obj === 'object') {
      // Heuristic: treat as record if it has any of typical fields
      const hasValue = ['temperature','temp','ph','pH','dissolvedOxygen','oxygen','do','turbidity','ntu']
        .some(k => k in obj);
      const hasTs = ['deviceTimestamp','timestamp','time','createdAt','date','datetime']
        .some(k => k in obj);
      if (hasValue || hasTs) {
        out.push({ key, ...obj });
        return true;
      }
    }
    return false;
  };
  const visit = (node, prefix='') => {
    if (Array.isArray(node)) {
      node.forEach((v,i)=>{
        if (!pushIfRecord(`${prefix}${i}`, v)) visit(v, `${prefix}${i}/`);
      });
    } else if (node && typeof node === 'object') {
      if (pushIfRecord(prefix.replace(/\/$/,''), node)) return;
      Object.entries(node).forEach(([k,v])=>{
        if (!pushIfRecord(`${prefix}${k}`, v)) visit(v, `${prefix}${k}/`);
      });
    }
  };
  visit(raw, '');
  return out;
}

function extractTimestamp(rec) {
  let ts = rec.deviceTimestamp ?? rec.timestamp ?? rec.time ?? rec.createdAt ?? rec.date ?? rec.datetime ?? rec.deviceIso;
  if (ts == null) return NaN;
  // Parse ISO string or number-like
  if (typeof ts === 'string') {
    const n = Number(ts);
    if (!Number.isNaN(n)) ts = n; else {
      const d = new Date(ts);
      const ms = d.getTime();
      return Number.isFinite(ms) ? ms : NaN;
    }
  }
  ts = Number(ts);
  if (!Number.isFinite(ts)) return NaN;
  // If seconds, convert to ms
  if (ts < 1e12) ts = ts * 1000;
  return ts;
}

function mapReading(rec) {
  const temperature = rec.temperature ?? rec.temp;
  const ph = rec.ph ?? rec.pH ?? rec.phLevel;
  const dissolvedOxygen = rec.dissolvedOxygen ?? rec.oxygen ?? rec.do;
  const turbidity = rec.turbidity ?? rec.ntu;
  const deviceId = rec.deviceId ?? rec.sensorId ?? rec.device ?? rec.sensor ?? rec.id ?? rec.key;
  const timestamp = extractTimestamp(rec);
  return { key: rec.key, temperature, ph, dissolvedOxygen, turbidity, deviceId, timestamp };
}

function detachRealtime() {
  if (typeof currentUnsubscribe === 'function') {
    try { currentUnsubscribe(); } catch (_) {}
  }
  currentUnsubscribe = null;
}

async function fetchRangeByTimestampField(basePath, tsField, startMs, endMs) {
  try {
    const baseRef = basePath && basePath !== '/' ? ref(monthlyDb, basePath) : ref(monthlyDb);
    const qRef = query(baseRef, orderByChild(tsField), startAt(startMs), endAt(endMs - 1));
    const snap = await get(qRef);
    if (snap.exists()) return normalizeRows(snap.val());
  } catch (_) {}
  return [];
}

async function loadMonthlyData() {
  const ym = (monthInput.value || defaultMonthValue());
  const [year, month] = ym.split('-');
  // Try multiple likely paths; prefer ones already grouped by month
  const candidates = collectCandidates(year, month);

  // First successful snapshot wins
  let pickedPath = null;
  let raw = null;
  for (const p of candidates) {
    try {
      const r = p && p !== '/' ? ref(monthlyDb, p) : ref(monthlyDb);
      const snap = await get(r);
      if (snap.exists()) {
        pickedPath = p;
        raw = snap.val();
        break;
      }
    } catch (_) { /* continue */ }
  }

  let data = normalizeRows(raw);

  // Filter by month
  const monthStart = new Date(Number(year), Number(month) - 1, 1).getTime();
  const monthEnd = new Date(Number(year), Number(month), 1).getTime();
  // If the chosen path is a raw collection (e.g., sensorReadings) with large data,
  // try efficient range queries; otherwise fall back to client filtering.
  if (pickedPath && /sensorReadings|readings|data|logs|sensors/i.test(pickedPath)) {
    const byDeviceTs = await fetchRangeByTimestampField(pickedPath, 'deviceTimestamp', monthStart, monthEnd);
    const byTs = await fetchRangeByTimestampField(pickedPath, 'timestamp', monthStart, monthEnd);
    const merged = [...byDeviceTs, ...byTs];
    const seen = new Set();
    data = merged.filter(r => {
      const key = r.key || JSON.stringify(r);
      if (seen.has(key)) return false; seen.add(key); return true;
    });
    if (data.length === 0 && raw) {
      // fallback to filtering the raw snapshot
      data = normalizeRows(raw);
    }
  }

  data = data.map(mapReading).filter(r => Number.isFinite(r.timestamp) && r.timestamp >= monthStart && r.timestamp < monthEnd);

  // Optional device filter
  const deviceId = deviceSelect.value || '';
  if (deviceId) {
    data = data.filter(r => (r.deviceId || r.sensorId || '').toString() === deviceId);
  }

  // Populate device selector options from current dataset
  const uniqueDevices = Array.from(new Set(data.map(r => (r.deviceId || r.sensorId || '').toString()).filter(Boolean)));
  const current = deviceSelect.value;
  deviceSelect.innerHTML = '<option value="">All devices</option>' + uniqueDevices.map(d=>`<option value="${d}">${d}</option>`).join('');
  if (uniqueDevices.includes(current)) deviceSelect.value = current;

  // Table
  tableBody.innerHTML = '';
  const fmt = (v) => (Number.isFinite(Number(v)) ? Number(v).toFixed(1) : '');
  data.sort((a,b)=> (a.timestamp||0) - (b.timestamp||0));
  data.forEach(r => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${tsToLocalString(r.timestamp)}</td>
      <td>${fmt(r.temperature)}</td>
      <td>${fmt(r.ph)}</td>
      <td>${fmt(r.dissolvedOxygen)}</td>
      <td>${fmt(r.turbidity)}</td>
    `;
    tableBody.appendChild(tr);
  });

  if (data.length === 0) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td colspan="5" style="opacity:.8;">No readings found for ${year}-${month}. Try another month.</td>`;
    tableBody.appendChild(tr);
  }

  // Stats
  statSamples.textContent = String(data.length);
  statTemp.textContent = mean(data.map(r => Number(r.temperature))).toFixed(1);
  statPh.textContent = mean(data.map(r => Number(r.ph))).toFixed(1);
  statOxy.textContent = mean(data.map(r => Number(r.dissolvedOxygen))).toFixed(1);
  statTurb.textContent = mean(data.map(r => Number(r.turbidity))).toFixed(1);

  // Chart by day (averages)
  const ctx = document.getElementById('monthlyChart');
  if (!ctx) return;
  const c = ensureChart(ctx);
  const byDay = groupByDay(data);
  const labels = byDay.map(([d]) => d);
  const avgTemp = byDay.map(([_, arr]) => mean(arr.map(x=>Number(x.temperature))).toFixed(2));
  const avgPh = byDay.map(([_, arr]) => mean(arr.map(x=>Number(x.ph))).toFixed(2));
  const avgOxy = byDay.map(([_, arr]) => mean(arr.map(x=>Number(x.dissolvedOxygen))).toFixed(2));
  const avgTurb = byDay.map(([_, arr]) => mean(arr.map(x=>Number(x.turbidity))).toFixed(2));
  c.data.labels = labels;
  c.data.datasets[0].data = avgTemp;
  c.data.datasets[1].data = avgPh;
  c.data.datasets[2].data = avgOxy;
  c.data.datasets[3].data = avgTurb;
  c.update();

  // Setup realtime updates for the chosen path when possible
  detachRealtime();
  if (pickedPath) {
    const r = ref(monthlyDb, pickedPath);
    const handler = (snap) => {
      raw = snap.val();
      // Re-run the same rendering steps quickly
      let live = normalizeRows(raw).map(mapReading).filter(rec => Number.isFinite(rec.timestamp) && rec.timestamp >= monthStart && rec.timestamp < monthEnd);
      const deviceId = deviceSelect.value || '';
      if (deviceId) live = live.filter(x => (x.deviceId || '').toString() === deviceId);
      // Rebuild table
      tableBody.innerHTML = '';
      live.sort((a,b)=> (a.timestamp||0) - (b.timestamp||0));
      live.forEach(r2 => {
        const tr2 = document.createElement('tr');
        tr2.innerHTML = `
          <td>${tsToLocalString(r2.timestamp)}</td>
          <td>${fmt(r2.temperature)}</td>
          <td>${fmt(r2.ph)}</td>
          <td>${fmt(r2.dissolvedOxygen)}</td>
          <td>${fmt(r2.turbidity)}</td>
        `;
        tableBody.appendChild(tr2);
      });
      if (live.length === 0) {
        const tr0 = document.createElement('tr');
        tr0.innerHTML = `<td colspan="5" style="opacity:.8;">No readings found for ${year}-${month}. Try another month.</td>`;
        tableBody.appendChild(tr0);
      }
      // Stats
      statSamples.textContent = String(live.length);
      statTemp.textContent = mean(live.map(r => Number(r.temperature))).toFixed(1);
      statPh.textContent = mean(live.map(r => Number(r.ph))).toFixed(1);
      statOxy.textContent = mean(live.map(r => Number(r.dissolvedOxygen))).toFixed(1);
      statTurb.textContent = mean(live.map(r => Number(r.turbidity))).toFixed(1);
      // Chart
      const byDayLive = groupByDay(live);
      const labelsLive = byDayLive.map(([d]) => d);
      const avgTempLive = byDayLive.map(([_, arr]) => mean(arr.map(x=>Number(x.temperature))).toFixed(2));
      const avgPhLive = byDayLive.map(([_, arr]) => mean(arr.map(x=>Number(x.ph))).toFixed(2));
      const avgOxyLive = byDayLive.map(([_, arr]) => mean(arr.map(x=>Number(x.dissolvedOxygen))).toFixed(2));
      const avgTurbLive = byDayLive.map(([_, arr]) => mean(arr.map(x=>Number(x.turbidity))).toFixed(2));
      c.data.labels = labelsLive;
      c.data.datasets[0].data = avgTempLive;
      c.data.datasets[1].data = avgPhLive;
      c.data.datasets[2].data = avgOxyLive;
      c.data.datasets[3].data = avgTurbLive;
      c.update();
    };
    onValue(r, handler);
    currentUnsubscribe = () => off(r, 'value', handler);
  }
}

function initDefaults() {
  if (!monthInput.value) monthInput.value = defaultMonthValue();
}

document.addEventListener('DOMContentLoaded', () => {
  initDefaults();
  refreshBtn.addEventListener('click', loadMonthlyData);
  monthInput.addEventListener('change', loadMonthlyData);
  deviceSelect.addEventListener('change', loadMonthlyData);
  loadMonthlyData();
});



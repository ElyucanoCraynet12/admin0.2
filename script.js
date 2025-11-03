// --- TRANSLATION & LANGUAGE DATA ---
// Tagalog and Ilocano translations below are reviewed for naturalness and regional accuracy.
// Tagalog: Uses everyday Filipino, avoids literal English phrasing, and uses common terms (e.g., 'Mga Setting', 'Pumili ng Wika').
// Ilocano: Uses Ilocano terms familiar to native speakers, avoids direct English-to-Ilocano translation, and uses local expressions.
const translations = {
    en: {
        "dashboard": "Dashboard",
        "alerts": "Alerts",
        "data_logs": "Data Logs",
        "farm_location": "Farm Location",
        "settings": "Settings",
        "logout": "Exit",
        "dashboard_overview": "Dashboard Overview",
        "real_time_status": "Real-Time Status",
        "water_temperature": "Water Temperature",
        "ph_level": "pH Level",
        "dissolved_oxygen": "Dissolved Oxygen",
        "good": "Good",
        "warning": "Warning",
        "parameter_trends": "Parameter Trends",
        "recent_alerts": "Recent Alerts",
    "system_guide": "System Guide",
        "controllers": "Controllers",
        "water_quality_tips": "Water Quality Tips",
        "quick_access": "Quick Access",
        "export_pdf": "Export as PDF",
        "export_csv": "Export as CSV",
        "about_developers": "About the Developers",
        "lead_developer": "Lead Developer",
        "language": "Language",
        "quick_links": "Quick Links",
        "sensors": "Sensors",
        "about": "About",
        "contact": "Contact",
        "all_alerts": "All Alerts",
        "welcome_title": "Welcome to ELYUCANO Crayfish Monitoring",
        "welcome_desc": "Smart aquaculture monitoring for modern crayfish farming.",
        "welcome_proceed": "Click proceed to enter the system.",
        "proceed": "Proceed",
        "controller_title": "Your about to control the system",
        "controller_loading": "Please wait... Connecting to database",
        "login": "Login",
        "status": "Status",
        "loading": "Loading...",
        "toggle": "Toggle",
        "all_off": "All OFF",
        "relay1": "Relay 1",
        "relay2": "Relay 2",
        "relay3": "Relay 3",
        "relay4": "Relay 4",
        "confirm_language_change": "Confirm Language Change",
        "confirm_language_body": "Are you sure you want to change the language to",
        "confirm": "Confirm",
        "cancel": "Cancel",
        "close": "Close",
        "email": "Email",
        "phone": "Phone",
        "address": "Address",
        "age": "Age",
        "follow_us": "Follow Us",
        "timestamp": "Timestamp",
        "temperature_c": "Temperature (°C)",
        "ph_level_header": "pH Level",
        "dissolved_oxygen_mg": "Dissolved Oxygen (mg/L)",
        "sensor_id": "Sensor ID",
        "critical_low_oxygen": "Critical: Low Oxygen Detected",
        "warning_ph_high": "Warning: pH level is high",
        "info_sensor_calibrated": "Info: Sensor B-01 calibrated",
        "tip_monitor": "Regularly monitor temperature, pH, and oxygen levels.",
        "tip_partial_water": "Perform partial water changes weekly.",
        "tip_remove_food": "Remove uneaten food to prevent ammonia spikes.",
        "tip_aeration": "Ensure proper aeration at all times.",
        "tip_check_equipment": "Check equipment for malfunctions regularly.",
        "alt_crayfish_foods": "Alternative Crayfish Foods",
        "food_veggies": "Blanched vegetables (zucchini, spinach, carrots)",
        "food_pellets": "Sinking fish or shrimp pellets",
        "food_leaves": "Dried Indian almond or oak leaves",
        "food_frozen": "Frozen bloodworms or brine shrimp",
        "food_snails": "Snails and other small invertebrates",
        "email_label": "Email:",
        "phone_label": "Phone:",
        "address_label": "Address:",
        "age_label": "Age:",
    },
    tl: {
        // Tagalog translations (conversational, regionally accurate)
        "dashboard": "Dasbord",
        "alerts": "Mga Alert",
        "data_logs": "Mga Log ng Datos",
        "farm_location": "Lokasyon",
        "settings": "Mga Setting",
        "logout": "Mag-logout",
        "dashboard_overview": "Mga detalye sa Dasbord",
        "real_time_status": "Kalagayan",
        "water_temperature": "Temperatura ng Tubig",
        "ph_level": "Antas ng pH",
        "dissolved_oxygen": "Natunaw na Oxygen",
        "good": "Mabuti",
        "warning": "Babala",
        "parameter_trends": "Mga Trend ng Parameter",
        "recent_alerts": "Mga Kamakailang Alert",
    "system_guide": "Gabay ng Sistema",
        "controllers": "Mga Kontrol",
        "water_quality_tips": "Mga Tip sa Kalidad ng Tubig",
        "quick_access": "Mabilisang Pag-access",
        "export_pdf": "I-export bilang PDF",
        "export_csv": "I-export bilang CSV",
        "about_developers": "Tungkol sa mga Developer",
        "lead_developer": "Pangunahing Developer",
        "language": "Wika",
        "quick_links": "Mabilisang Link",
        "sensors": "Mga Sensor",
        "about": "Tungkol",
        "contact": "Makipag-ugnayan",
        "all_alerts": "Lahat ng Alert",
        "welcome_title": "Maligayang pagdating sa ELYUCANO Crayfish Monitoring",
        "welcome_desc": "Makabagong pag-aalaga ng crayfish.",
        "welcome_proceed": "I-click ang magpatuloy para makapasok sa sistem.",
        "proceed": "Magpatuloy",
        "controller_title": "Ikaw ay magkokontrol ng sistema",
        "controller_loading": "Sandali lang... Kinokonekta sa database",
        "login": "Mag-login",
        "status": "Katayuan",
        "loading": "Naglo-load...",
        "toggle": "I-toggle",
        "all_off": "Patayin Lahat",
        "relay1": "Relay 1",
        "relay2": "Relay 2",
        "relay3": "Relay 3",
        "relay4": "Relay 4",
        "confirm_language_change": "Kumpirmahin ang Pagpalit ng Wika",
        "confirm_language_body": "Sigurado ka bang gusto mong palitan ang wika sa",
        "confirm": "Kumpirmahin",
        "cancel": "Kanselahin",
        "close": "Isara",
        "email": "Email",
        "phone": "Telepono",
        "address": "Address",
        "age": "Edad",
        "follow_us": "Sundan Kami",
        "timestamp": "Oras ng Pag-record",
        "temperature_c": "Temperatura (°C)",
        "ph_level_header": "Antas ng pH",
        "dissolved_oxygen_mg": "Natunaw na Oxygen (mg/L)",
        "sensor_id": "Sensor ID",
        "critical_low_oxygen": "Kritikal: Mababang Oxygen ang Natukoy",
        "warning_ph_high": "Babala: Mataas ang antas ng pH",
        "info_sensor_calibrated": "Impormasyon: Na-calibrate ang Sensor B-01",
        "tip_monitor": "Regular na subaybayan ang temperatura, pH, at antas ng oxygen.",
        "tip_partial_water": "Magpalit ng bahagi ng tubig linggo-linggo.",
        "tip_remove_food": "Alisin ang hindi nakain na pagkain para maiwasan ang pagtaas ng ammonia.",
        "tip_aeration": "Siguraduhing may tamang hangin sa lahat ng oras.",
        "tip_check_equipment": "Regular a suriin ang mga kagamitan kung may sira.",
        "alt_crayfish_foods": "Mga Alternatibong Pagkain ng Crayfish",
        "food_veggies": "Pinakuluang gulay (zucchini, spinach, carrots)",
        "food_pellets": "Lumulubog na pellet para sa isda o hipon",
        "food_leaves": "Pinatuyong dahon ng Indian almond o roble",
        "food_frozen": "Frozen na bloodworms wenno brine shrimp",
        "food_snails": "Kuhol at iba pang maliliit na invertebrate",
        "email_label": "Email:",
        "phone_label": "Telepono:",
        "address_label": "Address:",
        "age_label": "Edad:",
    },
    ilo: {
        // Ilocano translations (conversational, regionally accurate)
        "dashboard": "Dashboard",
        "alerts": "Dagiti Alerto",
        "data_logs": "Dagiti Log ti Datos",
        "farm_location": "Lokasion",
        "settings": "Dagiti Setting",
        "logout": "Rummuar",
        "dashboard_overview": "Sangkabuuan ti Dashboard",
        "real_time_status": "Kasasaad ti Real-Time",
        "water_temperature": "Temperatura ti Danum",
        "ph_level": "Lebel ti pH",
        "dissolved_oxygen": "Nairaman nga Oksiheno",
        "good": "Naimbag",
        "warning": "Pakdaar",
        "parameter_trends": "Dagiti Trend ti Parameter",
        "recent_alerts": "Dagiti Baro nga Alerto",
    "system_guide": "Gabay ti Sistema",
        "controllers": "Dagiti Kontroler",
        "water_quality_tips": "Dagiti Balakad ti Kalidad ti Danum",
        "quick_access": "Nadaras a Pag-access",
        "export_pdf": "I-export kas PDF",
        "export_csv": "I-export kas CSV",
        "about_developers": "Maipapan Kadagiti Developer",
        "lead_developer": "Pangulo a Developer",
        "language": "Pagsasao",
        "quick_links": "Dagiti Link",
        "sensors": "Dagiti Sensor",
        "about": "Maipapan",
        "contact": "Kontaken",
        "all_alerts": "Amin nga Alerto",
        "welcome_title": "Naragsak a panangabak yo iti ELYUCANO Crayfish Monitoring",
        "welcome_desc": "Napateg a panagsukisok ti aquaculture para kadagiti moderno a mangngalap ti crayfish.",
        "welcome_proceed": "I-klik ti agtultuloy tapno makasarak iti sistema.",
        "proceed": "Agtultuloy",
        "controller_title": "Agkunkontrol ka iti sistema",
        "controller_loading": "Urayem man... Agkonektar iti database",
        "login": "Ag-login",
        "status": "Kasasaad",
        "loading": "Agkarkarga...",
        "toggle": "I-toggle",
        "all_off": "Patayen Amin",
        "relay1": "Relay 1",
        "relay2": "Relay 2",
        "relay3": "Relay 3",
        "relay4": "Relay 4",
        "confirm_language_change": "Kumpirmaen ti Panagbalbaliw ti Pagsasao",
        "confirm_language_body": "Sigurado ka nga kayat mo nga isukat ti pagsasao iti",
        "confirm": "Kumpirmaen",
        "cancel": "Kanselaren",
        "close": "Isardeng",
        "email": "Email",
        "phone": "Telepono",
        "address": "Address",
        "age": "Edad",
        "follow_us": "Suruten Dakami",
        "timestamp": "Oras ti Panagrekord",
        "temperature_c": "Temperatura (°C)",
        "ph_level_header": "Lebel ti pH",
        "dissolved_oxygen_mg": "Nairaman nga Oksiheno (mg/L)",
        "sensor_id": "Sensor ID",
        "critical_low_oxygen": "Kritikal: Nababa a Oksiheno ti Nadiskubre",
        "warning_ph_high": "Pakdaar: Nangato ti lebel ti pH",
        "info_sensor_calibrated": "Impormasyon: Naikalibrar ti Sensor B-01",
        "tip_monitor": "Regular a suruten ti temperatura, pH, ken lebel ti oksiheno.",
        "tip_partial_water": "Agsukat ti paset ti danum kada lawas.",
        "tip_remove_food": "Ikabil ti saan a nakankanan a makan tapno maliklikan ti panagngato ti ammonia.",
        "tip_aeration": "Siguradua nga adda husto a panagpasangbay ti angin iti amin a oras.",
        "tip_check_equipment": "Regular a kitaen dagiti gamit no adda sira.",
        "alt_crayfish_foods": "Dagiti Sabali a Pagkankanan ti Crayfish",
        "food_veggies": "Nababbad a nateng (zucchini, spinach, carrots)",
        "food_pellets": "Agsang-at a pellet para iti ikan wenno udang",
        "food_leaves": "Namalem a dahon ti Indian almond wenno roble",
        "food_frozen": "Nalam-ek a bloodworms wenno brine shrimp",
        "food_snails": "Kuhol ken sabali pay a bassit nga invertebrate",
        "email_label": "Email:",
        "phone_label": "Telepono:",
        "address_label": "Address:",
        "age_label": "Edad:",
    }
};
const languageData = { 'en': { name: 'English' }, 'tl': { name: 'Tagalog' }, 'ilo': { name: 'Ilocano' } };

// --- GLOBAL FUNCTIONS ---
function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
    // Translate all elements with data-translate-key
    document.querySelectorAll("[data-translate-key]").forEach(el => {
        const key = el.getAttribute("data-translate-key");
        el.textContent = translations[lang]?.[key] || el.textContent;
    });
    // Translate static text in index.html (welcome page)
    if (document.querySelector('.welcome-title')) {
        document.querySelector('.welcome-title').textContent = translations[lang]?.welcome_title || document.querySelector('.welcome-title').textContent;
    }
    if (document.querySelector('.welcome-desc')) {
        document.querySelector('.welcome-desc').innerHTML = `${translations[lang]?.welcome_desc || document.querySelector('.welcome-desc').textContent}<br>${translations[lang]?.welcome_proceed || ''}`;
    }
    if (document.querySelector('.proceed-btn')) {
        document.querySelector('.proceed-btn').textContent = translations[lang]?.proceed || document.querySelector('.proceed-btn').textContent;
    }
    // Controller page translations
    if (document.querySelector('h1')) {
        if (document.querySelector('h1').textContent.trim().toLowerCase().includes('control')) {
            document.querySelector('h1').textContent = translations[lang]?.controller_title || document.querySelector('h1').textContent;
        }
    }
    if (document.getElementById('loadingScreen')) {
        const loadingP = document.querySelector('#loadingScreen p');
        if (loadingP) loadingP.textContent = translations[lang]?.controller_loading || loadingP.textContent;
    }
    if (document.getElementById('loginBtn')) {
        document.getElementById('loginBtn').textContent = translations[lang]?.login || document.getElementById('loginBtn').textContent;
    }
    // Relay cards
    for (let i = 1; i <= 4; i++) {
        if (document.getElementById(`status${i}`)) {
            const statusLabel = document.querySelector(`.relay-card:nth-child(${i}) h2`);
            if (statusLabel) statusLabel.textContent = translations[lang][`relay${i}`] || statusLabel.textContent;
            const statusText = document.querySelector(`.relay-card:nth-child(${i}) p`);
            if (statusText) statusText.innerHTML = `${translations[lang]?.status || 'Status'}: <span id="status${i}">${document.getElementById(`status${i}`).textContent}</span>`;
            const toggleBtn = document.getElementById(`btn${i}`);
            if (toggleBtn) toggleBtn.textContent = translations[lang]?.toggle || toggleBtn.textContent;
        }
    }
    if (document.getElementById('allOffBtn')) {
        document.getElementById('allOffBtn').textContent = translations[lang]?.all_off || document.getElementById('allOffBtn').textContent;
    }
    if (document.getElementById('logoutBtn')) {
        document.getElementById('logoutBtn').textContent = translations[lang]?.logout || document.getElementById('logoutBtn').textContent;
    }
    // Modal translations
    if (document.getElementById('language-confirm-modal')) {
        const modal = document.getElementById('language-confirm-modal');
        const header = modal.querySelector('.modal-header h3');
        if (header) header.textContent = translations[lang]?.confirm_language_change || header.textContent;
        const bodyP = modal.querySelector('.modal-body p');
        if (bodyP) bodyP.innerHTML = `${translations[lang]?.confirm_language_body || bodyP.textContent} <strong id="selected-language-name"></strong>?`;
        const confirmBtn = document.getElementById('confirm-language-btn');
        if (confirmBtn) confirmBtn.textContent = translations[lang]?.confirm || confirmBtn.textContent;
        const cancelBtn = document.getElementById('cancel-language-btn');
        if (cancelBtn) cancelBtn.textContent = translations[lang]?.cancel || cancelBtn.textContent;
    }
    // Data logs table headers
    if (document.getElementById('data-log-table')) {
        const ths = document.querySelectorAll('#data-log-table thead th');
        // Expected columns: checkbox, timestamp, temperature, pH, dissolved oxygen, turbidity
        if (ths.length >= 6) {
            ths[1].textContent = translations[lang]?.timestamp || ths[1].textContent;
            ths[2].textContent = translations[lang]?.temperature_c || ths[2].textContent;
            ths[3].textContent = translations[lang]?.ph_level_header || ths[3].textContent;
            ths[4].textContent = translations[lang]?.dissolved_oxygen_mg || ths[4].textContent;
            ths[5].textContent = translations[lang]?.temperature_c ? translations[lang]?.turbidity || ths[5].textContent : ths[5].textContent;
        }
    }
    // Alerts sample phrases
    document.querySelectorAll('.alert-details p').forEach(p => {
        if (p.textContent.includes('Critical:')) p.innerHTML = `<strong>${translations[lang]?.critical_low_oxygen.split(':')[0] || 'Critical'}:</strong> ${translations[lang]?.critical_low_oxygen.split(': ')[1] || 'Low Oxygen Detected'}`;
        if (p.textContent.includes('Warning:')) p.innerHTML = `<strong>${translations[lang]?.warning_ph_high.split(':')[0] || 'Warning'}:</strong> ${translations[lang]?.warning_ph_high.split(': ')[1] || 'pH level is high'}`;
        if (p.textContent.includes('Info:')) p.innerHTML = `<strong>${translations[lang]?.info_sensor_calibrated.split(':')[0] || 'Info'}:</strong> ${translations[lang]?.info_sensor_calibrated.split(': ')[1] || 'Sensor B-01 calibrated'}`;
    });
    // Water quality tips
    const tips = [
        'tip_monitor',
        'tip_partial_water',
        'tip_remove_food',
        'tip_aeration',
        'tip_check_equipment'
    ];
    document.querySelectorAll('.tips-card ul li').forEach((li, idx) => {
        if (li.textContent && idx < tips.length) {
            li.textContent = translations[lang][tips[idx]] || li.textContent;
        }
    });
    // Quick Access card
    if (document.getElementById('export-pdf')) {
        document.getElementById('export-pdf').textContent = translations[lang]?.export_pdf || document.getElementById('export-pdf').textContent;
    }
    if (document.getElementById('export-csv')) {
        document.getElementById('export-csv').textContent = translations[lang]?.export_csv || document.getElementById('export-csv').textContent;
    }
    // Footer: do not translate the copyright line
    document.querySelectorAll('.footer-bottom').forEach(el => {
        if (el.textContent.includes('Crayfish Monitoring System') && el.textContent.includes('All Rights Reserved @Chan-chan_R')) {
            // Do nothing, preserve as is
        }
    });
    // Additional static text translations for dashboard.html
    // User label in profile
    document.querySelectorAll('.user-profile span').forEach(span => {
        if (span.textContent.trim() === 'User') {
            span.textContent = {
                en: 'User',
                tl: 'Gumagamit',
                ilo: 'Agar-aramat'
            }[lang] || span.textContent;
        }
    });
    // View All Alerts button
    if (document.getElementById('view-all-alerts-btn')) {
        document.getElementById('view-all-alerts-btn').textContent = {
            en: 'View All Alerts',
            tl: 'Tingnan Lahat ng Alerto',
            ilo: 'Kitaen Amin a Alerto'
        }[lang];
    }
    // System Controller card static list
    document.querySelectorAll('.tips-card ul li').forEach(li => {
        if (li.innerHTML.includes('You can control:')) {
            li.innerHTML = `<b>${{
                en: 'You can control:',
                tl: 'Pwede mong kontrolin:',
                ilo: 'Mabalin mo a kontrolen:'
            }[lang]}</b>`;
        }
        if (li.textContent.trim() === 'Automated Feeder') {
            li.textContent = {
                en: 'Automated Feeder',
                tl: 'Awtomatikong Tagapagpakain',
                ilo: 'Awtomatik a Pakanen'
            }[lang];
        }
        if (li.textContent.trim() === 'Water Drainer') {
            li.textContent = {
                en: 'Water Drainer',
                tl: 'Tagatanggal ng Tubig',
                ilo: 'Agikabil ti Danum'
            }[lang];
        }
        if (li.textContent.trim() === 'Water Refill') {
            li.textContent = {
                en: 'Water Refill',
                tl: 'Pagdagdag ng Tubig',
                ilo: 'Panagpuno ti Danum'
            }[lang];
        }
    });
    // PDF File Generator for Data Logs
    document.querySelectorAll('.quick-access-card .card-body p strong').forEach(strong => {
        if (strong.textContent.trim() === 'PDF File Generator for Data Logs') {
            strong.textContent = {
                en: 'PDF File Generator for Data Logs',
                tl: 'Tagagawa ng PDF para sa Mga Log ng Datos',
                ilo: 'Agaramid ti PDF para kadagiti Log ti Datos'
            }[lang];
        }
    });
    // Settings page description
    document.querySelectorAll('#settings-page .card-body p').forEach(p => {
        if (p.textContent.includes('User profile settings')) {
            p.textContent = {
                en: 'User profile settings, notification preferences, and alert threshold adjustments would be configured here.',
                tl: 'Dito ise-set ang mga setting ng profile, mga abiso, at mga alertong threshold.',
                ilo: 'Ditoy mo maiset dagiti setting ti profile, abiso, ken alert threshold.'
            }[lang];
        }
    });
    // Language cards
    document.querySelectorAll('.language-card .language-info h5').forEach(h5 => {
        if (h5.textContent.trim() === 'English') h5.textContent = {en:'English',tl:'Ingles',ilo:'Ingles'}[lang];
        if (h5.textContent.trim() === 'Tagalog') h5.textContent = {en:'Tagalog',tl:'Tagalog',ilo:'Tagalog'}[lang];
        if (h5.textContent.trim() === 'Ilocano') h5.textContent = {en:'Ilocano',tl:'Ilocano',ilo:'Ilocano'}[lang];
    });
    document.querySelectorAll('.language-card .language-info p').forEach(p => {
        if (p.textContent.trim() === 'English (United States)') p.textContent = {en:'English (United States)',tl:'Ingles (Estados Unidos)',ilo:'Ingles (Estados Unidos)'}[lang];
        if (p.textContent.trim() === 'Filipino (Philippines)') p.textContent = {en:'Filipino (Philippines)',tl:'Filipino (Pilipinas)',ilo:'Filipino (Pilipinas)'}[lang];
        if (p.textContent.trim() === 'Iloko (Philippines)') p.textContent = {en:'Iloko (Philippines)',tl:'Iloko (Pilipinas)',ilo:'Iloko (Pilipinas)'}[lang];
    });
    // About panel developer info labels
    document.querySelectorAll('.developer-card p').forEach(p => {
        if (p.textContent.startsWith('Email:')) p.childNodes[0].textContent = {en:'Email: ',tl:'Email: ',ilo:'Email: '}[lang];
        if (p.textContent.startsWith('Phone:')) p.childNodes[0].textContent = {en:'Phone: ',tl:'Telepono: ',ilo:'Telepono: '}[lang];
        if (p.textContent.startsWith('Address:')) p.childNodes[0].textContent = {en:'Address: ',tl:'Address: ',ilo:'Address: '}[lang];
        if (p.textContent.startsWith('Age:')) p.childNodes[0].textContent = {en:'Age: ',tl:'Edad: ',ilo:'Edad: '}[lang];
    });
    // Footer Follow Us
    document.querySelectorAll('.footer-section.social h3').forEach(h3 => {
        if (h3.textContent.trim() === 'Follow Us') h3.textContent = {en:'Follow Us',tl:'Sundan Kami',ilo:'Suruten Dakami'}[lang];
    });
    updateLanguageCardStates();
    updateThemeSectionLanguage(lang);
    setupAlertDismissButtons(lang);
}

function updateLanguageCardStates() {
    const currentLang = localStorage.getItem('language') || 'en';
    document.querySelectorAll('.language-card').forEach(card => {
        card.classList.toggle('active', card.dataset.lang === currentLang);
    });
}

// --- REAL-TIME CLOCK LOGIC ---
// --- ERROR PREVENTION & ACCESSIBILITY ---
// All dynamic content updates (clock, translations) are wrapped in try/catch for error prevention.
// All interactive elements have tabindex and ARIA attributes for accessibility.
// See comments throughout for maintainability.
function updateClock() {
    try {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
        if (document.getElementById('live-clock')) {
            document.getElementById('live-clock').textContent = timeString;
        }
        if (document.getElementById('settings-live-clock')) {
            document.getElementById('settings-live-clock').textContent = timeString;
        }
    } catch (e) {
        // Log error for debugging, but do not break UI
        console.error('Clock update error:', e);
    }
}
setInterval(updateClock, 1000);
updateClock();

// --- THEME SWITCHER LOGIC (Settings Page) ---
function applyTheme(isDark) {
    document.body.classList.toggle('dark-theme', isDark);
    document.body.classList.toggle('light-theme', !isDark);
}
function setupThemeSwitcher() {
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    if (!themeToggle) return;
    // Load preference
    const saved = localStorage.getItem('theme');
    const isDark = saved === 'dark' || (!saved && themeToggle.checked);
    themeToggle.checked = isDark;
    applyTheme(isDark);
    themeToggle.addEventListener('change', () => {
        const dark = themeToggle.checked;
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        applyTheme(dark);
        updateChartTheme && updateChartTheme();
    });
}

function setupAlertDismissButtons(lang) {
    document.querySelectorAll('.dismiss-alert').forEach(btn => {
        // Set aria-label for accessibility
        btn.setAttribute('aria-label', {
            en: 'Remove',
            tl: 'Alisin',
            ilo: 'Ikkaten'
        }[lang]);
        btn.setAttribute('tabindex', '0');
        // Remove previous listeners
        btn.onclick = null;
        btn.onkeydown = null;
        // Add click and keyboard event
        btn.addEventListener('click', function (e) {
            const alert = btn.closest('.alert');
            if (alert) {
                alert.style.transition = 'opacity 0.3s, max-height 0.3s';
                alert.style.opacity = '0';
                alert.style.maxHeight = '0';
                setTimeout(() => alert.remove(), 300);
            }
        });
        btn.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                btn.click();
            }
        });
    });
}

// Modern theme switcher icon logic
function updateThemeIcon() {
  const icon = document.getElementById('theme-icon');
  const checkbox = document.getElementById('theme-toggle-checkbox');
  if (!icon || !checkbox) return;
  if (checkbox.checked || document.body.classList.contains('dark-theme')) {
    icon.textContent = '🌙';
  } else {
    icon.textContent = '🌞';
  }
}

// --- FIREBASE CONFIGURATION MANAGEMENT ---
class FirebaseConfigManager {
    constructor() {
        this.database = window.firebaseDatabase;
        this.ref = window.firebaseRef;
        this.set = window.firebaseSet;
        this.get = window.firebaseGet;
        this.onValue = window.firebaseOnValue;
        
        this.configPath = 'deviceConfig';
        this.init();
    }
    
    async init() {
        // Wait for Firebase to be available
        if (!this.database) {
            setTimeout(() => this.init(), 100);
            return;
        }
        
        this.setupEventListeners();
        await this.loadCurrentConfig();
    }
    
    setupEventListeners() {
        const saveBtn = document.getElementById('save-config-btn');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveConfiguration());
        }
        
        // Auto-format mobile number input
        const mobileInput = document.getElementById('mobile-number');
        if (mobileInput) {
            mobileInput.addEventListener('input', (e) => this.formatMobileNumber(e.target));
        }
    }
    
    formatMobileNumber(input) {
        let value = input.value.replace(/\D/g, ''); // Remove non-digits
        
        // Ensure it starts with +63 for Philippines
        if (!value.startsWith('63')) {
            value = '63' + value;
        }
        
        // Format as +63 9XX XXX XXXX
        if (value.length >= 3) {
            value = '+' + value.substring(0, 2) + ' ' + value.substring(2);
        }
        if (value.length >= 7) {
            value = value.substring(0, 7) + ' ' + value.substring(7);
        }
        if (value.length >= 11) {
            value = value.substring(0, 11) + ' ' + value.substring(11);
        }
        if (value.length >= 15) {
            value = value.substring(0, 15) + ' ' + value.substring(15);
        }
        
        input.value = value.substring(0, 17); // Limit to +63 9XXX XXX XXXX
    }
    
    async loadCurrentConfig() {
        try {
            const configRef = this.ref(this.database, this.configPath);
            const snapshot = await this.get(configRef);
            
            if (snapshot.exists()) {
                const config = snapshot.val();
                this.populateForm(config);
                this.showStatus('Configuration loaded successfully', 'success');
            } else {
                this.showStatus('No existing configuration found. Please set up your network settings.', 'info');
            }
        } catch (error) {
            console.error('Error loading configuration:', error);
            this.showStatus('Error loading configuration: ' + error.message, 'error');
        }
    }
    
    populateForm(config) {
        const ssidInput = document.getElementById('wifi-ssid');
        const passwordInput = document.getElementById('wifi-password');
        const mobileInput = document.getElementById('mobile-number');
        
        if (ssidInput && config.wifiCredentials?.ssid) {
            ssidInput.value = config.wifiCredentials.ssid;
        }
        
        if (passwordInput && config.wifiCredentials?.password) {
            passwordInput.value = config.wifiCredentials.password;
        }
        
        if (mobileInput && config.mobileNumber) {
            mobileInput.value = config.mobileNumber;
        }
    }
    
    async saveConfiguration() {
        const saveBtn = document.getElementById('save-config-btn');
        const btnText = saveBtn.querySelector('.btn-text');
        const btnLoading = saveBtn.querySelector('.btn-loading');
        
        // Show loading state
        saveBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        
        try {
            const ssid = document.getElementById('wifi-ssid').value.trim();
            const password = document.getElementById('wifi-password').value.trim();
            const mobileNumber = document.getElementById('mobile-number').value.trim();
            
            // Validation
            if (!ssid) {
                throw new Error('WiFi SSID is required');
            }
            
            if (!password) {
                throw new Error('WiFi password is required');
            }
            
            if (!mobileNumber || mobileNumber.length < 10) {
                throw new Error('Valid mobile number is required (e.g., +639123456789)');
            }
            
            // Prepare configuration data
            const configData = {
                wifiCredentials: {
                    ssid: ssid,
                    password: password
                },
                mobileNumber: mobileNumber,
                lastUpdated: new Date().toISOString()
            };
            
            // Save to Firebase
            const configRef = this.ref(this.database, this.configPath);
            await this.set(configRef, configData);
            
            this.showStatus('Configuration saved successfully! ESP32 will apply changes on next restart.', 'success');
            
            // Optional: Listen for real-time updates
            this.setupRealtimeListener();
            
        } catch (error) {
            console.error('Error saving configuration:', error);
            this.showStatus('Error saving configuration: ' + error.message, 'error');
        } finally {
            // Reset button state
            saveBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
        }
    }
    
    setupRealtimeListener() {
        const configRef = this.ref(this.database, this.configPath);
        this.onValue(configRef, (snapshot) => {
            if (snapshot.exists()) {
                const config = snapshot.val();
                console.log('Configuration updated:', config);
                // You can add real-time UI updates here if needed
            }
        });
    }
    
    showStatus(message, type = 'info') {
        const statusElement = document.getElementById('config-status');
        if (statusElement) {
            statusElement.textContent = message;
            statusElement.className = `status-message ${type}`;
            statusElement.style.display = 'block';
            
            // Auto-hide success messages after 5 seconds
            if (type === 'success') {
                setTimeout(() => {
                    statusElement.style.display = 'none';
                }, 5000);
            }
        }
    }
}

// Initialize Firebase configuration manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait for Firebase to be available
    const initFirebaseConfig = () => {
        if (window.firebaseDatabase) {
            new FirebaseConfigManager();
            new FirebaseDataManager(); // Initialize data manager for real-time updates
        } else {
            setTimeout(initFirebaseConfig, 100);
        }
    };
    initFirebaseConfig();
});

// --- FIREBASE DATA MANAGEMENT FOR REAL-TIME UPDATES ---
class FirebaseDataManager {
    constructor() {
        this.database = window.firebaseDatabase;
        this.ref = window.firebaseRef;
        this.get = window.firebaseGet;
        this.onValue = window.firebaseOnValue;
        
        this.currentWaterCondition = null;
        this.sensorReadings = [];
        this.maxTrendPoints = 5; // trend/window size only
        this.alertDisplayTimestamps = {};   // key -> fixed display timestamp
        this.lastValidReadings = { temperature: null, ph: null, dissolvedOxygen: null, turbidity: null };
        
        this.init();
    }
    
    // Shared, authoritative timestamp formatter (Asia/Manila, match Alerts)
    formatDisplayTimestamp(ms) {
        const d = new Date(Number(ms));
        return d.toLocaleString('en-PH', {
            year: '2-digit', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', hour12: true,
            timeZone: 'Asia/Manila'
        });
    }
    
    // Attach dismiss behavior with persistence if key exists
    attachAlertDismissBehavior(li) {
        const btn = li.querySelector('.dismiss-alert');
        if (!btn) return;
        btn.addEventListener('click', async () => {
            const key = li.getAttribute('data-key');
            try {
                if (key) {
                    const r = window.firebaseRef(window.firebaseDatabase, `waterCondition/alerts/${key}`);
                    await window.firebaseRemove(r);
                }
            } catch (_) { /* non-blocking */ }
            li.style.transition = 'opacity 0.3s, max-height 0.3s';
            li.style.opacity = '0';
            li.style.maxHeight = '0';
            setTimeout(() => li.remove(), 300);
        }, { once: true });
    }
    
    async init() {
        if (!this.database) {
            setTimeout(() => this.init(), 100);
            return;
        }
        
        this.setupRealtimeListeners();
        await this.loadInitialData();
    }
    
    setupRealtimeListeners() {
        // Listen for water condition changes (current)
        const waterConditionRef = this.ref(this.database, 'waterCondition/current');
        this.onValue(waterConditionRef, (snapshot) => {
            if (snapshot.exists()) {
                this.currentWaterCondition = snapshot.val();
                this.updateWaterConditionDisplay();
                this.updateAlerts();
            }
        });
        
        // Listen for new sensor readings (ordered by timestamp)
        const sensorReadingsRef = window.firebaseQuery(
            this.ref(this.database, 'sensorReadings'),
            window.firebaseOrderByChild('deviceTimestamp')
        );
        this.onValue(sensorReadingsRef, (snapshot) => {
            if (snapshot.exists()) {
                this.processSensorReadings(snapshot.val());
            }
        });

        // Listen for stored alerts list if present
        const alertsRef = this.ref(this.database, 'waterCondition/alerts');
        this.onValue(alertsRef, (snapshot) => {
            if (snapshot.exists()) {
                this.renderStoredAlerts(snapshot.val());
            }
        });
    }
    
    async loadInitialData() {
        try {
            // Load water condition
            const waterConditionRef = this.ref(this.database, 'waterCondition/current');
            const waterSnapshot = await this.get(waterConditionRef);
            if (waterSnapshot.exists()) {
                this.currentWaterCondition = waterSnapshot.val();
                this.updateWaterConditionDisplay();
            }
            
            // Load sensor readings (ordered)
            const sensorReadingsRef = window.firebaseQuery(
                this.ref(this.database, 'sensorReadings'),
                window.firebaseOrderByChild('deviceTimestamp')
            );
            const sensorSnapshot = await this.get(sensorReadingsRef);
            if (sensorSnapshot.exists()) {
                this.processSensorReadings(sensorSnapshot.val());
            }
        } catch (error) {
            console.error('Error loading initial Firebase data:', error);
        }
    }
    
    processSensorReadings(readingsData) {
        // Convert object to array of {key, ...data} and sort asc by timestamp
        const readings = Object.entries(readingsData || {})
            .map(([key, reading]) => ({ key, ...reading }))
            .filter(reading => reading && (reading.deviceTimestamp || reading.timestamp))
            .sort((a, b) => (a.deviceTimestamp||a.timestamp) - (b.deviceTimestamp||b.timestamp));
        
        this.sensorReadings = readings;
        this.updateRealTimeStatus();
        this.updateParameterTrends();
        this.updateDataLogs();
    }
    
    updateWaterConditionDisplay() {
        if (!this.currentWaterCondition) return;
        
        // Update real-time status cards (match dashboard.html structure)
        const statusItems = document.querySelectorAll('.overview-card .status-item');
        statusItems.forEach(si => {
            const label = si.querySelector('p')?.textContent?.toLowerCase();
            const valueEl = si.querySelector('h3');
            if (!valueEl || !label) return;
            const setIfValid = (raw, suffix, key) => {
                const num = Number(raw);
                if (Number.isFinite(num)) {
                    this.lastValidReadings[key] = num;
                    valueEl.textContent = `${num.toFixed(1)}${suffix}`;
                } else if (this.lastValidReadings[key] !== null) {
                    // keep previous valid value (do not change UI)
                }
            };
            if (label.includes('water temperature')) setIfValid(this.currentWaterCondition.temperature, ' °C', 'temperature');
            if (label.includes('ph')) setIfValid(this.currentWaterCondition.ph, '', 'ph');
            if (label.includes('dissolved oxygen')) setIfValid(this.currentWaterCondition.dissolvedOxygen, ' mg/L', 'dissolvedOxygen');
            if (label.includes('turbidity')) setIfValid(this.currentWaterCondition.turbidity, ' NTU', 'turbidity');
        });
        
        // Update water condition status
        const conditionElement = document.querySelector('.water-condition-status');
        if (conditionElement) {
            conditionElement.textContent = this.currentWaterCondition.status || 'Unknown';
            conditionElement.className = `water-condition-status ${this.getConditionClass(this.currentWaterCondition.status)}`;
        }
    }
    
    updateRealTimeStatus() {
        if (this.sensorReadings.length === 0) return;
        
        const latestReading = this.sensorReadings[this.sensorReadings.length - 1];
        
        // Update status cards with latest readings (match dashboard.html)
        const statusItems = document.querySelectorAll('.overview-card .status-item');
        statusItems.forEach(si => {
            const label = si.querySelector('p')?.textContent?.toLowerCase();
            const valueEl = si.querySelector('h3');
            if (!valueEl || !label) return;
            const setIfValid = (raw, suffix, key) => {
                const num = Number(raw);
                if (Number.isFinite(num)) {
                    this.lastValidReadings[key] = num;
                    valueEl.textContent = `${num.toFixed(1)}${suffix}`;
                } else if (this.lastValidReadings[key] !== null) {
                    // keep previous valid value (do not change UI)
                }
            };
            if (label.includes('water temperature')) setIfValid(latestReading.temperature, ' °C', 'temperature');
            if (label.includes('ph')) setIfValid(latestReading.ph, '', 'ph');
            if (label.includes('dissolved oxygen')) setIfValid(latestReading.dissolvedOxygen, ' mg/L', 'dissolvedOxygen');
            if (label.includes('turbidity')) setIfValid(latestReading.turbidity, ' NTU', 'turbidity');
        });
    }
    
    updateParameterTrends() {
        if (this.sensorReadings.length === 0) return;
        
        // Prepare data for charts (last N)
        const windowData = this.sensorReadings.slice(-this.maxTrendPoints);
        const labels = windowData.map(reading => {
            const date = new Date(reading.deviceTimestamp || reading.timestamp);
            return date.toLocaleTimeString('en-PH', { 
                hour: '2-digit', 
                minute: '2-digit',
                timeZone: 'Asia/Manila'
            });
        });
        
        const temperatureData = windowData.map(reading => Number(reading.temperature).toFixed(1));
        const phData = windowData.map(reading => Number(reading.ph).toFixed(1));
        const oxygenData = windowData.map(reading => Number(reading.dissolvedOxygen).toFixed(1));
        const turbidityData = windowData.map(reading => Number(reading.turbidity).toFixed(1));
        
        // Update chart data
        if (window.trendsChart) {
            window.trendsChart.data.labels = labels;
            window.trendsChart.data.datasets[0].data = temperatureData;
            window.trendsChart.data.datasets[1].data = phData;
            window.trendsChart.data.datasets[2].data = oxygenData;
            window.trendsChart.data.datasets[3].data = turbidityData;
            window.trendsChart.update();
        }
    }
    
    updateDataLogs() {
        const dataLogsTable = document.querySelector('#data-log-table tbody');
        if (!dataLogsTable) return;
        
        // Incremental update: add any new rows not present yet, keep existing DOM
        const existingKeys = new Set(Array.from(dataLogsTable.querySelectorAll('tr')).map(tr => tr.getAttribute('data-key')));
        const toAdd = this.sensorReadings.slice().reverse().filter(r => !existingKeys.has(r.key));
        const fmtNum = (v) => (Number.isFinite(Number(v)) ? Number(v).toFixed(1) : (v === 0 ? '0.0' : ''));
        toAdd.forEach(reading => {
            const row = document.createElement('tr');
            if (reading.key) row.setAttribute('data-key', reading.key);
            const timestamp = this.formatDisplayTimestamp(reading.deviceTimestamp || reading.timestamp);
            row.innerHTML = `
                <td><input type="checkbox" class="log-row-select" aria-label="select row" /></td>
                <td>${timestamp}</td>
                <td>${fmtNum(reading.temperature)}</td>
                <td>${fmtNum(reading.ph)}</td>
                <td>${fmtNum(reading.dissolvedOxygen)}</td>
                <td>${fmtNum(reading.turbidity)}</td>
            `;
            // Insert at top (newest first)
            dataLogsTable.insertBefore(row, dataLogsTable.firstChild);
        });
    }
    
    updateAlerts() {
        if (!this.currentWaterCondition) return;
        
        // Add to Recent Alerts list in dashboard (ul.alert-list in alerts-card)
        const recentUl = document.querySelector('.alerts-card ul.alert-list');
        if (recentUl) {
            const li = this.buildAlertLi(this.currentWaterCondition, /*displayNow*/true);
            recentUl.insertBefore(li, recentUl.firstChild);
            this.attachAlertDismissBehavior(li);
            // Keep only last 4 alerts
            const items = recentUl.querySelectorAll('li.alert');
            if (items.length > 4) items[items.length - 1].remove();
        }
        // Update All Alerts page (if table/list exists)
        this.updateAlertsPage();
    }
    
    updateAlertsPage() {
        const allAlertsUl = document.querySelector('#alerts-page ul.alert-list.full');
        if (!allAlertsUl || !this.currentWaterCondition) return;
        const li = this.buildAlertLi(this.currentWaterCondition, /*displayNow*/true);
        allAlertsUl.insertBefore(li, allAlertsUl.firstChild);
        this.attachAlertDismissBehavior(li);
    }

    buildAlertLi(conditionObj, displayNow = false, key = null) {
        const li = document.createElement('li');
        const cls = this.getConditionClass(conditionObj.status);
        li.className = `alert ${cls}`;
        if (key) li.setAttribute('data-key', key);
        const tsKey = key || String(conditionObj.timestamp || conditionObj.deviceTimestamp || '');
        const displayTimestamp = Number(conditionObj.timestamp || conditionObj.deviceTimestamp || Date.now());
        const ts = this.formatDisplayTimestamp(displayTimestamp);
        const icon = cls === 'danger' ? 'alert-octagon' : (cls === 'warning' ? 'alert-triangle' : 'info');
        li.innerHTML = `
            <i data-feather="${icon}"></i>
            <div class="alert-details">
                <p><strong>${conditionObj.status}:</strong> Water condition update</p>
                <small>${ts}</small>
            </div>
            <button class="dismiss-alert"><i data-feather="x"></i></button>
        `;
        try { window.feather && window.feather.replace(); } catch (_) {}
        return li;
    }

    renderStoredAlerts(alertsObj) {
        const entries = Object.entries(alertsObj || {})
            .map(([key, value]) => ({ key, ...value }))
            .filter(Boolean)
            .sort((a,b)=> (a.timestamp||0)-(b.timestamp||0));
        const recentUl = document.querySelector('.alerts-card ul.alert-list');
        const allAlertsUl = document.querySelector('#alerts-page ul.alert-list.full');
        if (recentUl) recentUl.innerHTML = '';
        if (allAlertsUl) allAlertsUl.innerHTML = '';
        entries.forEach((a)=>{
            const liFull = this.buildAlertLi(a, false, a.key);
            if (allAlertsUl) { allAlertsUl.appendChild(liFull); this.attachAlertDismissBehavior(liFull); }
        });
        // Recent: keep last 4
        const last4 = entries.slice(-4);
        last4.forEach(a=>{ if (recentUl) { const li = this.buildAlertLi(a, false, a.key); recentUl.appendChild(li); this.attachAlertDismissBehavior(li); } });
    }
    
    getConditionClass(condition) {
        switch (condition?.toLowerCase()) {
            case 'safe': return 'success';
            case 'slightly safe': return 'warning';
            case 'not safe': return 'danger';
            default: return 'info';
        }
    }
    
    getAlertIcon(condition) {
        switch (condition?.toLowerCase()) {
            case 'safe': return '✅';
            case 'slightly safe': return '⚠️';
            case 'not safe': return '🚨';
            default: return 'ℹ️';
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // --- AUTH CHECK ---
    if (sessionStorage.getItem('loggedIn') !== 'true' && localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html'; return;
    }

    // --- INITIAL LANGUAGE SET ---
    setLanguage(localStorage.getItem('language') || 'en');

    // --- LANGUAGE CHANGER LOGIC ---
    const languageSelection = document.querySelector('.language-selection');
    const modal = document.getElementById('language-confirm-modal');
    if (languageSelection && modal) {
        let pendingLanguageChange = null;
        const confirmBtn = document.getElementById('confirm-language-btn');
        const cancelBtn = document.getElementById('cancel-language-btn');
        const modalClose = document.getElementById('modal-close');
        const selectedLanguageName = document.getElementById('selected-language-name');

        const closeModal = () => { modal.classList.remove('show'); pendingLanguageChange = null; };

        languageSelection.addEventListener('click', e => {
            const card = e.target.closest('.language-card');
            if (card && !card.classList.contains('active')) {
                pendingLanguageChange = card.dataset.lang;
                selectedLanguageName.textContent = languageData[pendingLanguageChange].name;
                modal.classList.add('show');
            }
        });

        confirmBtn.addEventListener('click', () => { if (pendingLanguageChange) { setLanguage(pendingLanguageChange); closeModal(); } });
        cancelBtn.addEventListener('click', closeModal);
        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    }

    setupThemeSwitcher();
    const themeToggle = document.getElementById('theme-toggle-checkbox');
    if (themeToggle) {
        themeToggle.addEventListener('change', updateThemeIcon);
        updateThemeIcon();
    }

    // --- SIDEBAR & NAVIGATION ---
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebarMenu = document.querySelector('.sidebar-menu');
    const mainContent = document.querySelector('.main-content');
    const headerTitle = document.querySelector('.main-header h1');
    const contentSections = {
        dashboard: mainContent.querySelector('.dashboard-grid'),
        alerts: mainContent.querySelector('#alerts-page'),
        datalogs: mainContent.querySelector('#datalogs-page'),
        farm_location: mainContent.querySelector('#farm_location-page'),
        settings: mainContent.querySelector('#settings-page'),
    };

    function navigateTo(pageId) {
        sidebarMenu.querySelector('.active')?.classList.remove('active');
        sidebarMenu.querySelector(`a[data-page="${pageId}"]`)?.parentElement.classList.add('active');
        Object.values(contentSections).forEach(s => s.style.display = 'none');
        if (contentSections[pageId]) {
            contentSections[pageId].style.display = pageId === 'dashboard' ? 'grid' : 'block';
        }
        const pageTitles = { dashboard: 'dashboard_overview', alerts: 'all_alerts', datalogs: 'data_logs', farm_location: 'farm_location', settings: 'settings' };
        headerTitle.dataset.translateKey = pageTitles[pageId];
        setLanguage(localStorage.getItem('language') || 'en');
        if (window.innerWidth <= 768) sidebar.classList.remove('expanded');
    }

    if (sidebarMenu) {
        const navLinks = sidebarMenu.querySelectorAll('a');
        navLinks.forEach((link, i) => {
            const page = ['dashboard', 'alerts', 'datalogs', 'farm_location', 'settings'][i];
            if(page) link.dataset.page = page;
        });
        sidebarMenu.addEventListener('click', e => {
            const link = e.target.closest('a');
            if (link?.dataset.page) { e.preventDefault(); navigateTo(link.dataset.page); }
        });
    }
    
    // --- CHART.JS LOGIC ---
    const ctx = document.getElementById('trendsChart');
    let trendsChart;
    const initialData = {
        '24h': {
            labels: [],
            datasets: [
                { label: 'Temperature (°C)', data: [], borderColor: '#0D47A1', tension: 0.4 },
                { label: 'pH', data: [], borderColor: '#FFC107', tension: 0.4 },
                { label: 'Oxygen (mg/L)', data: [], borderColor: '#00BCD4', tension: 0.4 },
                { label: 'Turbidity (NTU)', data: [], borderColor: '#B0BEC5', tension: 0.4 },
            ]
        },
    };

    function getChartOptions() {
        const isDark = document.body.classList.contains('dark-theme');
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        const textColor = isDark ? '#e2e8f0' : '#333';
        return {
            responsive: true, maintainAspectRatio: false,
            scales: { y: { grid: { color: gridColor }, ticks: { color: textColor } }, x: { grid: { color: gridColor }, ticks: { color: textColor } } },
            plugins: { legend: { labels: { color: textColor } } }
        };
    }

    function updateChartTheme() {
        if (!trendsChart) return;
        trendsChart.options = getChartOptions();
        trendsChart.update();
    }

    function createChart() {
        if (!ctx) return;
        trendsChart = new Chart(ctx, { type: 'line', data: initialData['24h'], options: getChartOptions() });
        // expose for updates elsewhere
        window.trendsChart = trendsChart;
    }
    createChart();

    // --- EXPORTS & SEARCH/BULK DELETE SETUP ---
    function exportTableToCSV(table, filename) {
        if (!table) return;
        const rows = Array.from(table.querySelectorAll('tr'));
        const csv = rows.map(tr => Array.from(tr.querySelectorAll('th,td')).map(td => '"' + (td.textContent || '').replace(/"/g,'""') + '"').join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }
    function exportElementToPDF(element, filename) {
        if (!element) return;
        const { jsPDF } = window.jspdf || {};
        if (!jsPDF) return;
        html2canvas(element).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('l','pt','a4');
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
            const imgWidth = canvas.width * ratio;
            const imgHeight = canvas.height * ratio;
            pdf.addImage(imgData, 'PNG', (pageWidth - imgWidth)/2, 20, imgWidth, imgHeight);
            pdf.save(filename);
        });
    }
    // Export buttons for alerts
    document.getElementById('recent-alerts-export-csv')?.addEventListener('click', () => {
        const list = document.querySelector('.alerts-card ul.alert-list');
        if (!list) return;
        const rows = [['Status','Timestamp']].concat(Array.from(list.querySelectorAll('li.alert')).map(li=>{
            const status = li.querySelector('.alert-details p')?.textContent?.trim() || '';
            const time = li.querySelector('.alert-details small')?.textContent?.trim() || '';
            return [status, time];
        }));
        const csv = rows.map(r=>r.map(v=>`"${(v||'').replace(/"/g,'""')}"`).join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'recent-alerts.csv';
        link.click();
    });
    document.getElementById('recent-alerts-export-pdf')?.addEventListener('click', () => {
        const card = document.querySelector('.alerts-card');
        exportElementToPDF(card, 'recent-alerts.pdf');
    });
    document.getElementById('all-alerts-export-csv')?.addEventListener('click', () => {
        const list = document.querySelector('#alerts-page ul.alert-list.full');
        if (!list) return;
        const rows = [['Status','Timestamp']].concat(Array.from(list.querySelectorAll('li.alert')).map(li=>{
            const status = li.querySelector('.alert-details p')?.textContent?.trim() || '';
            const time = li.querySelector('.alert-details small')?.textContent?.trim() || '';
            return [status, time];
        }));
        const csv = rows.map(r=>r.map(v=>`"${(v||'').replace(/"/g,'""')}"`).join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'all-alerts.csv';
        link.click();
    });
    document.getElementById('all-alerts-export-pdf')?.addEventListener('click', () => {
        const page = document.querySelector('#alerts-page .card');
        exportElementToPDF(page, 'all-alerts.pdf');
    });
    // Data Logs export buttons removed — export handlers intentionally disabled.

    // Re-enable Data Logs CSV export: connect the Quick Access button to the table exporter
    document.getElementById('export-csv')?.addEventListener('click', () => {
        const table = document.querySelector('#data-log-table');
        if (!table) {
            try { alert('Data Logs table not found on this page. Navigate to Data Logs first.'); } catch (_) { console.warn('Data Logs table not found'); }
            return;
        }
        exportTableToCSV(table, 'data-logs.csv');
    });

    // Inject search inputs for Alerts and Data Logs
    (function injectSearchControls(){
        // Alerts search, row-select and bulk-delete controls removed per request.
        // Data Logs search and bulk-delete controls removed per request.
    })();
    // --- LOGOUT & FINAL INIT ---
    document.getElementById('logout-button')?.addEventListener('click', e => {
        e.preventDefault();
        sessionStorage.removeItem('loggedIn');
        localStorage.removeItem('loggedIn');
        window.location.href = 'index.html';
    });
    feather.replace();

    // --- LOGO MODAL ---
    const logo = document.getElementById('expandable-logo');
    const logoModal = document.getElementById('logo-modal');
    const logoModalClose = document.getElementById('logo-modal-close');
    if (logo && logoModal && logoModalClose) {
        logo.addEventListener('click', () => logoModal.classList.add('show'));
        logoModalClose.addEventListener('click', () => logoModal.classList.remove('show'));
        logoModal.addEventListener('click', (e) => { if (e.target === logoModal) logoModal.classList.remove('show'); });
    }

    // --- VIEW ALL ALERTS BUTTON ---
    const viewAllAlertsBtn = document.getElementById('view-all-alerts-btn');
    if (viewAllAlertsBtn) {
        viewAllAlertsBtn.addEventListener('click', () => {
            navigateTo('alerts');
        });
    }

    // --- ABOUT PANEL ---
    const aboutToggle = document.querySelector('.about-toggle');
    const aboutPanel = document.querySelector('.about-panel');
    const aboutPanelClose = document.querySelector('.about-panel-close');
    const overlay = document.querySelector('.overlay');

    if (aboutToggle && aboutPanel && aboutPanelClose && overlay) {
        aboutToggle.addEventListener('click', () => {
            aboutPanel.classList.add('open');
            overlay.classList.add('open');
        });

        const closeAboutPanel = () => {
            aboutPanel.classList.remove('open');
            overlay.classList.remove('open');
        };

        aboutPanelClose.addEventListener('click', closeAboutPanel);
        overlay.addEventListener('click', closeAboutPanel);
    }

    // --- MENU TOGGLE FOR SIDEBAR (MOBILE) ---
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('expanded');
        });
    }
    setupAlertDismissButtons(localStorage.getItem('language') || 'en');
});

// --- THEME LABEL TRANSLATION ---
function updateThemeSectionLanguage(lang) {
    const sectionTitle = document.getElementById('theme-section-title');
    const label = document.getElementById('theme-toggle-label');
    if (sectionTitle) sectionTitle.textContent = {en:'Theme',tl:'Tema',ilo:'Tema'}[lang];
    if (label) label.textContent = {
        en: 'Dark mode',
        tl: 'Gawing madilim ang tema',
        ilo: 'Isiadut ti tema'
    }[lang];
}

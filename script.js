// 1) dark mode toggle
const darkModeButton = document.getElementById("darkmode");
const body = document.body;

darkModeButton.addEventListener('click', () => {
    body.classList.toggle("dark-mode");
});

// 2) show date
function showDate() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    const dateElement = document.getElementById('datetime');
    if (dateElement) {
        dateElement.textContent = dateTimeString;
    }
}

setInterval(showDate, 1000);

// 3) cookie clicker - samo če element obstaja
const cookieButton = document.getElementById('cookieButton');
if (cookieButton) {
    let cookies = 0;

    function updateCookie() {
        const cookieCount = document.getElementById('cookieCount');
        if (cookieCount) {
            cookieCount.textContent = cookies;
        }
    }

    function cookieClick() {
        cookies += 1;
        updateCookie();
    }

    cookieButton.addEventListener('click', cookieClick);
}

// Language translations
const translations = {
    'sl': {
        'nav-about': 'O nas',
        'nav-teachers': 'Profesorji in AI',
        'nav-students': 'Dijaki in AI',
        'nav-calculator': 'Kalkulator',
        'dark-mode': 'Temni način',
        'home-title': 'Uporaba AI v šolah',
        'cookie-text': 'Trenutno imaš <span id="cookieCount">0</span> Piškotkov',
        'cookie-button': 'Pritisni',
        'about-title': 'O nas',
        'about-text': 'Na AI za šole smo predani uporabi umetne inteligence za preobrazbo izobraževanja. Naša platforma je zasnovana tako, da podpira tako študente kot profesorje z vključevanjem orodij umetne inteligence, ki izboljšajo učenje, poenostavijo administrativna opravila in spodbujajo globlje vključevanje v izobraževalne vsebine.',
        'teachers-title': 'Profesorji in AI',
        'teachers-text': 'Profesorji uporabljajo umetno inteligenco za avtomatizacijo ocenjevanja in spremljanje napredka študentov. Prav tako jim AI omogoča prilagajanje učnega načrta, da bolje ustreza potrebam posameznikov.',
        'students-title': 'Dijaki in AI',
        'students-text': 'Mnogi študenti urejajo vsebino, ustvarjeno z AI: 41% vedno popravi rezultate, le 3% pa tega ne počne. Glavni primeri uporabe UI med študenti vključujejo pisanje, reševanje domačih nalog, raziskovanje akademskih virov, pomoč pri matematiki in učenje jezikov.',
        'calculator-title': 'Kalkulator',
        'calc-clear': 'C',
        'calc-error': 'Napaka',
        'calculator-description': 'To je naš preprost kalkulator za prosti čas. Uporabljate ga lahko za osnovne matematične operacije in vam bo v pomoč pri vsakdanjih izračunih.'
    },
    'en': {
        'nav-about': 'About Us',
        'nav-teachers': 'Teachers and AI',
        'nav-students': 'Students and AI',
        'nav-calculator': 'Calculator',
        'dark-mode': 'Dark Mode',
        'home-title': 'AI in Schools',
        'cookie-text': 'You currently have <span id="cookieCount">0</span> Cookies',
        'cookie-button': 'Click',
        'about-title': 'About Us',
        'about-text': 'At AI for Schools, we are dedicated to using artificial intelligence to transform education. Our platform is designed to support both students and teachers by incorporating AI tools that enhance learning, simplify administrative tasks, and promote deeper engagement in educational content.',
        'teachers-title': 'Teachers and AI',
        'teachers-text': 'Teachers use artificial intelligence to automate assessment and monitor student progress. AI also enables them to adapt the curriculum to better meet individual needs.',
        'students-title': 'Students and AI',
        'students-text': 'Many students edit AI-generated content: 41% always revise the results, while only 3% do not. The main uses of AI among students include writing, homework solving, academic research, math assistance, and language learning.',
        'calculator-title': 'Calculator',
        'calc-clear': 'C',
        'calc-error': 'Error',
        'calculator-description': 'This is our simple calculator for leisure time. You can use it for basic mathematical operations and it will help you with everyday calculations.'
    },
    'de': {
        'nav-about': 'Über uns',
        'nav-teachers': 'Lehrer und KI',
        'nav-students': 'Schüler und KI',
        'nav-calculator': 'Rechner',
        'dark-mode': 'Dunkelmodus',
        'home-title': 'KI in Schulen',
        'cookie-text': 'Du hast aktuell <span id="cookieCount">0</span> Kekse',
        'cookie-button': 'Klicken',
        'about-title': 'Über uns',
        'about-text': 'Bei KI für Schulen setzen wir uns für den Einsatz künstlicher Intelligenz zur Transformation der Bildung ein. Unsere Plattform ist darauf ausgerichtet, sowohl Schüler als auch Lehrer durch KI-Tools zu unterstützen, die das Lernen verbessern, administrative Aufgaben vereinfachen und ein tieferes Engagement in Bildungsinhalte fördern.',
        'teachers-title': 'Lehrer und KI',
        'teachers-text': 'Lehrer nutzen künstliche Intelligenz zur Automatisierung der Bewertung und Überwachung des Schülerfortschritts. KI ermöglicht es ihnen auch, den Lehrplan anzupassen, um individuellen Bedürfnissen besser gerecht zu werden.',
        'students-title': 'Schüler und KI',
        'students-text': 'Viele Schüler bearbeiten KI-generierte Inhalte: 41% überarbeiten die Ergebnisse immer, während nur 3% dies nicht tun. Die Hauptanwendungen von KI unter Schülern umfassen Schreiben, Hausaufgabenlösung, akademische Recherche, Mathematikhilfe und Sprachenlernen.',
        'calculator-title': 'Rechner',
        'calc-clear': 'C',
        'calc-error': 'Fehler',
        'calculator-description': 'Dies ist unser einfacher Taschenrechner für die Freizeit. Sie können ihn für grundlegende mathematische Operationen verwenden und er wird Ihnen bei alltäglichen Berechnungen helfen.'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Calculator functionality
    const display = document.getElementById('display');
    const calculatorButtons = document.querySelectorAll('.calc-btn');

    console.log('Display:', display);
    console.log('Calculator buttons:', calculatorButtons.length);

    if (calculatorButtons.length > 0) {
        calculatorButtons.forEach(button => {
            button.addEventListener('click', function() {
                console.log('Button clicked:', this.textContent);
                
                if (!display) return;

                const action = this.getAttribute('data-action');
                const value = this.getAttribute('data-value');

                console.log('Action:', action, 'Value:', value);

                if (action === 'clear') {
                    display.value = '';
                }
                else if (action === 'calculate') {
                    try {
                        const result = eval(display.value);
                        display.value = result;
                    } catch (error) {
                        display.value = 'Error';
                    }
                }
                else if (action === 'operator') {
                    const lastChar = display.value.slice(-1);
                    if (!'+-/*'.includes(lastChar)) {
                        display.value += value;
                    }
                }
                else if (value) {
                    display.value += value;
                    console.log('New display value:', display.value);
                }
            });
        });

        // Keyboard support
        document.addEventListener('keydown', function(e) {
            if (!display) return;

            if (e.key >= '0' && e.key <= '9' || e.key === '.') {
                display.value += e.key;
            }
            else if (['+', '-', '*', '/'].includes(e.key)) {
                const lastChar = display.value.slice(-1);
                if (!'+-/*'.includes(lastChar)) {
                    display.value += e.key;
                }
            }
            else if (e.key === 'Enter') {
                try {
                    const result = eval(display.value);
                    display.value = result;
                } catch (error) {
                    display.value = 'Error';
                }
            }
            else if (e.key === 'Escape') {
                display.value = '';
            }
        });
    }

    // Initialize language
    const currentLang = document.documentElement.lang || 'sl';
    changeLanguage(currentLang);
});

// Language switching functionality
function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT') {
                element.value = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    // Translation data for all pages
    const translations = {
        nl: {
            // Common elements
            'escape-rooms': 'Escape<br>rooms',
            'multiplayer': 'MultiPlayer',

            // Option buttons (multiplayer page)
            'shooter': 'Shooter',
            'koken': 'Koken',
            'zombies': 'Zombies',
            'arcade': 'Arcade',
            'pijl-boog': 'Pijl & Boog',

            // Escape room page elements
            'makkelijk': 'Makkelijk',
            'medium': 'Medium',
            'moeilijk': 'Moeilijk',
            'genereer-spel': 'Genereer<br>Spel',

            // Generator page elements
            'genereer-title': 'Genereer Jouw Perfecte Spel',
            'genereer-subtitle': 'Laat ons een escape room ervaring voor jou selecteren op basis van jouw voorkeuren',
            'stel-ervaring': 'Stel je gewenste spelervaring in',
            'genereer-game-btn': 'Genereer Spel',
            'aanbevolen-spellen': 'Aanbevolen Spellen:',
            'bekijk-alle-spellen': 'Bekijk Alle Spellen',

            // Multiplayer game details
            'arizona-sunshine-details': '2-4 spelers | 45-90 minuten<br>Co-op zombie shooter in VR<br>Overleef de zombie apocalypse samen<br>Realistische wapens en tactiek<br>Teamwork essentieel voor overleving<br>Intense actie en survival elementen',
            'archer-details': '2-4 spelers | 45-90 minuten<br>Co-op boogschutter in VR<br>Overleef de boogschutter apocalypse samen<br>Realistische wapens en tactiek<br>Teamwork essentieel voor overleving<br>Intense actie en survival elementen',
            'arviarena-details': '2-4 spelers | 45-90 minuten<br>Co-op zombie shooter in VR<br>Overleef de zombie apocalypse samen<br>Realistische wapens en tactiek<br>Teamwork essentieel voor overleving<br>Intense actie en survival elementen',
            'chefs-details': '2-4 spelers | 45-90 minuten<br>Co-op kookspel in VR<br>Werk samen om de beste gerechten te maken<br>Realistische kookmechanica en teamwork<br>Teamwork essentieel voor overleving<br>Intense actie en survival elementen',
            'elven-assassin-details': '2-4 spelers | 45-90 minuten<br>Co-op stealth actie in VR<br>Werk samen om de vijanden te verslaan<br>Realistische wapens en tactiek<br>Teamwork essentieel voor overleving<br>Intense actie en survival elementen',
            'headgun-details': '2-4 spelers | 45-90 minuten<br>Co-op zombie shooter in VR<br>Overleef de zombie apocalypse samen<br>Realistische wapens en tactiek<br>Teamwork essentieel voor overleving<br>Intense actie en survival elementen',
            'loco-dojo-details': '2-4 spelers | 45-90 minuten<br>Co-op party game in VR<br>Werk samen om de uitdagingen te overwinnen<br>Realistische mini-games en teamwork<br>Teamwork essentieel voor overleving<br>Intense actie en survival elementen',
            'plush-rush-details': '2-4 spelers | 45-90 minuten<br>Co-op party game in VR<br>Werk samen om de uitdagingen te overwinnen<br>Realistische mini-games en teamwork<br>Teamwork essentieel voor overleving<br>Intense actie en survival elementen',
            'revolvr-details': '2-4 spelers | 45-90 minuten<br>Co-op zombie shooter in VR<br>Overleef de zombie apocalypse samen<br>Realistische wapens en tactiek<br>Teamwork essentieel voor overleving<br>Intense actie en survival elementen',
            'rhythmatic-details': '2-4 spelers | 45-90 minuten<br>Co-op party game in VR<br>Werk samen om de uitdagingen te overwinnen<br>Realistische mini-games en teamwork<br>Teamwork essentieel voor overleving<br>Intense actie en survival elementen',
            'rotten-apple-details': '2-4 spelers | 45-90 minuten<br>Co-op party game in VR<br>Werk samen om de uitdagingen te overwinnen<br>Realistische mini-games en teamwork<br>Teamwork essentieel voor overleving<br>Intense actie en survival elementen',
            'smash-point-details': '2-4 spelers | 45-90 minuten<br>Co-op party game in VR<br>Werk samen om de uitdagingen te overwinnen<br>Realistische mini-games en teamwork<br>Teamwork essentieel voor overleving<br>Intense actie en survival elementen',

            // Button text
            'trailer-btn': 'Bekijk de trailer',
            'info-btn': 'Info',

            // Modal titles
            'arizona-sunshine-modal': 'Arizona Sunshine - Trailer',
            'archer-modal': 'Archer - Trailer',
            'arviarena-modal': 'ArviArena - Trailer',
            'chefs-modal': 'Chefs - Trailer',
            'elven-assassin-modal': 'Elven Assassin - Trailer',
            'headgun-modal': 'HeadGun - Trailer',
            'loco-dojo-modal': 'Loco Dojo - Trailer',
            'plush-rush-modal': 'Plush Rush - Trailer',
            'revolvr-modal': 'RevolVR - Trailer',
            'rhythmatic-modal': 'Rhythmatic - Trailer',
            'rotten-apple-modal': 'Rotten Apple - Trailer',
            'smash-point-modal': 'Smash Point - Trailer',

            // Video error message
            'video-error': 'Uw browser ondersteunt de video tag niet.'
        },
        en: {
            // Common elements
            'escape-rooms': 'Escape<br>rooms',
            'multiplayer': 'MultiPlayer',

            // Option buttons (multiplayer page)
            'shooter': 'Shooter',
            'koken': 'Cooking',
            'zombies': 'Zombies',
            'arcade': 'Arcade',
            'pijl-boog': 'Bow & Arrow',

            // Escape room page elements
            'makkelijk': 'Easy',
            'medium': 'Medium',
            'moeilijk': 'Hard',
            'genereer-spel': 'Generate<br>Game',

            // Generator page elements
            'genereer-title': 'Generate Your Perfect Game',
            'genereer-subtitle': 'Let us select an escape room experience for you based on your preferences',
            'stel-ervaring': 'Set your desired gaming experience',
            'genereer-game-btn': 'Generate Game',
            'aanbevolen-spellen': 'Recommended Games:',
            'bekijk-alle-spellen': 'View All Games',

            // Multiplayer game details
            'arizona-sunshine-details': '2-4 players | 45-90 minutes<br>Co-op zombie shooter in VR<br>Survive the zombie apocalypse together<br>Realistic weapons and tactics<br>Teamwork essential for survival<br>Intense action and survival elements',
            'archer-details': '2-4 players | 45-90 minutes<br>Co-op archery game in VR<br>Survive the archery apocalypse together<br>Realistic weapons and tactics<br>Teamwork essential for survival<br>Intense action and survival elements',
            'arviarena-details': '2-4 players | 45-90 minutes<br>Co-op zombie shooter in VR<br>Survive the zombie apocalypse together<br>Realistic weapons and tactics<br>Teamwork essential for survival<br>Intense action and survival elements',
            'chefs-details': '2-4 players | 45-90 minutes<br>Co-op cooking game in VR<br>Work together to create the best dishes<br>Realistic cooking mechanics and teamwork<br>Teamwork essential for success<br>Intense cooking and time management',
            'elven-assassin-details': '2-4 players | 45-90 minutes<br>Co-op stealth action in VR<br>Work together to defeat enemies<br>Realistic weapons and tactics<br>Teamwork essential for survival<br>Intense action and survival elements',
            'headgun-details': '2-4 players | 45-90 minutes<br>Co-op zombie shooter in VR<br>Survive the zombie apocalypse together<br>Realistic weapons and tactics<br>Teamwork essential for survival<br>Intense action and survival elements',
            'loco-dojo-details': '2-4 players | 45-90 minutes<br>Co-op party game in VR<br>Work together to overcome challenges<br>Realistic mini-games and teamwork<br>Teamwork essential for victory<br>Intense action and fun elements',
            'plush-rush-details': '2-4 players | 45-90 minutes<br>Co-op party game in VR<br>Work together to overcome challenges<br>Realistic mini-games and teamwork<br>Teamwork essential for victory<br>Intense action and fun elements',
            'revolvr-details': '2-4 players | 45-90 minutes<br>Co-op zombie shooter in VR<br>Survive the zombie apocalypse together<br>Realistic weapons and tactics<br>Teamwork essential for survival<br>Intense action and survival elements',
            'rhythmatic-details': '2-4 players | 45-90 minutes<br>Co-op party game in VR<br>Work together to overcome challenges<br>Realistic mini-games and teamwork<br>Teamwork essential for victory<br>Intense action and fun elements',
            'rotten-apple-details': '2-4 players | 45-90 minutes<br>Co-op party game in VR<br>Work together to overcome challenges<br>Realistic mini-games and teamwork<br>Teamwork essential for victory<br>Intense action and fun elements',
            'smash-point-details': '2-4 players | 45-90 minutes<br>Co-op party game in VR<br>Work together to overcome challenges<br>Realistic mini-games and teamwork<br>Teamwork essential for victory<br>Intense action and fun elements',

            // Button text
            'trailer-btn': 'Watch trailer',
            'info-btn': 'Info',

            // Modal titles
            'arizona-sunshine-modal': 'Arizona Sunshine - Trailer',
            'archer-modal': 'Archer - Trailer',
            'arviarena-modal': 'ArviArena - Trailer',
            'chefs-modal': 'Chefs - Trailer',
            'elven-assassin-modal': 'Elven Assassin - Trailer',
            'headgun-modal': 'HeadGun - Trailer',
            'loco-dojo-modal': 'Loco Dojo - Trailer',
            'plush-rush-modal': 'Plush Rush - Trailer',
            'revolvr-modal': 'RevolVR - Trailer',
            'rhythmatic-modal': 'Rhythmatic - Trailer',
            'rotten-apple-modal': 'Rotten Apple - Trailer',
            'smash-point-modal': 'Smash Point - Trailer',

            // Video error message
            'video-error': 'Your browser does not support the video tag.'
        }
    };

    // Current language
    let currentLang = 'nl';

    // Function to update page language
    function updateLanguage(lang) {
        currentLang = lang;

        // Update index page buttons
        const containerButtons = document.querySelectorAll('.container button p');
        containerButtons.forEach(btn => {
            if (btn.innerHTML.includes('Escape') || btn.innerHTML.includes('rooms')) {
                btn.innerHTML = translations[lang]['escape-rooms'];
            } else if (btn.textContent.includes('MultiPlayer')) {
                btn.textContent = translations[lang]['multiplayer'];
            }
        });

        // Update escape room page difficulty buttons
        document.querySelectorAll('.difficulty-btn p').forEach(btn => {
            const text = btn.textContent.toLowerCase();
            if (text.includes('makkelijk') || text.includes('easy')) {
                btn.textContent = translations[lang]['makkelijk'];
            } else if (text.includes('medium')) {
                btn.textContent = translations[lang]['medium'];
            } else if (text.includes('moeilijk') || text.includes('hard')) {
                btn.textContent = translations[lang]['moeilijk'];
            }
        });

        // Update generate button
        document.querySelectorAll('.generate-btn p').forEach(btn => {
            btn.innerHTML = translations[lang]['genereer-spel'];
        });

        // Update generator page elements
        const genereerTitle = document.querySelector('.header h1');
        if (genereerTitle && genereerTitle.textContent.includes('Genereer')) {
            genereerTitle.textContent = translations[lang]['genereer-title'];
        }

        const genereerSubtitle = document.querySelector('.header p');
        if (genereerSubtitle && genereerSubtitle.textContent.includes('escape room')) {
            genereerSubtitle.textContent = translations[lang]['genereer-subtitle'];
        }

        const stelErvaring = document.querySelector('.preference-section h2');
        if (stelErvaring) {
            stelErvaring.textContent = translations[lang]['stel-ervaring'];
        }

        // Update option buttons (multiplayer page)
        document.querySelectorAll('.option-btn').forEach(btn => {
            const key = btn.classList[1]; // Get the second class name
            if (translations[lang][key]) {
                btn.textContent = translations[lang][key];
            }
        });

        // Update game details (multiplayer page)
        document.querySelectorAll('.game-details').forEach((details, index) => {
            const gameKeys = [
                'arizona-sunshine-details', 'archer-details', 'arviarena-details', 'chefs-details',
                'elven-assassin-details', 'headgun-details', 'loco-dojo-details', 'plush-rush-details',
                'revolvr-details', 'rhythmatic-details', 'rotten-apple-details', 'smash-point-details'
            ];

            if (gameKeys[index] && translations[lang][gameKeys[index]]) {
                details.innerHTML = translations[lang][gameKeys[index]];
            }
        });

        // Update trailer buttons
        document.querySelectorAll('.btn').forEach(btn => {
            if (btn.textContent.includes('trailer') || btn.textContent.includes('Bekijk')) {
                btn.textContent = translations[lang]['trailer-btn'];
            }
        });

        // Update modal titles
        document.querySelectorAll('.modal-title').forEach(title => {
            const modalId = title.closest('.trailer-modal')?.id;
            if (modalId) {
                const gameKey = modalId.replace('-trailer', '-modal');
                if (translations[lang][gameKey]) {
                    title.textContent = translations[lang][gameKey];
                }
            }
        });

        // Update video error messages
        document.querySelectorAll('video').forEach(video => {
            const errorText = video.textContent || video.innerText;
            if (errorText && (errorText.includes('browser') || errorText.includes('ondersteunt'))) {
                video.textContent = translations[lang]['video-error'];
            }
        });
    }

    // Language functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    const languageSelector = document.querySelector('.language-selector');

    if (langButtons.length > 0 && languageSelector) {
        langButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Remove active class from all buttons
                langButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                // Handle toggle animation
                if (this.dataset.lang === 'nl') {
                    languageSelector.classList.add('nl-active');
                } else {
                    languageSelector.classList.remove('nl-active');
                }

                // Update language
                updateLanguage(this.dataset.lang);
            });
        });
    }
});
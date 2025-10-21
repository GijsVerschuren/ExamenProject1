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

            // Slider labels
            'avontuur': 'Avontuur:',
            'actie': 'Actie:',
            'puzzelen': 'Puzzelen:',
            'horror': 'Horror:',

            // Escape room game details
            'prince-details': 'GAME INFO:<br>2-4 spelers | 60 minuten<br>Avontuurlijke puzzel escape room<br>Ontsnap uit het magische paleis',
            'huxley-details': 'GAME INFO:<br>2-6 spelers | 44 minuten<br>Sci-fi mysterie escape room<br>Los het geheim van Huxley op',
            'sigma-details': 'GAME INFO:<br>2-4 spelers | 45 minuten<br>Militaire missie escape room<br>Voltooi de geheime operatie',
            'christmas-details': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Kerst thema escape room<br>Red het kerstfeest op tijd',
            'jungle-details': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Jungle avontuur escape room<br>Verken de gevaarlijke jungle',
            'cyberpunk-details': 'GAME INFO:<br>2-4 spelers | 50 minuten<br>Futuristische cyber escape room<br>Hack het systeem en ontsnap',
            'medusa-details': 'GAME INFO:<br>2-4 spelers | 60 minuten<br>Mythologische avontuur escape room<br>Versla Medusa en ontsnap',
            'prison-details': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Gevangenis ontsnapping escape room<br>Plan je ontsnapping zorgvuldig',
            'houseoffear-details': 'GAME INFO:<br>2-4 spelers | 45 minuten<br>Horror escape room ervaring<br>Overleef het huis van angst',
            'sanctum-details': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Mystieke tempel escape room<br>Ontdek de geheimen van het heiligdom',
            'survival-details': 'GAME INFO:<br>2-4 spelers | 50 minuten<br>Survival horror escape room<br>Overleef in de wildernis',
            'alice-details': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Sprookjesachtige escape room<br>Volg Alice naar Wonderland',
            'chernobyl-details': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Post-apocalyptische escape room<br>Ontsnap uit de verwoeste zone',
            'cursedsouls-details': 'GAME INFO:<br>2-4 spelers | 50 minuten<br>Supernatural horror escape room<br>Bevrijdt de vervloekte zielen',
            'callofblood-details': 'GAME INFO:<br>2-4 spelers | 45 minuten<br>Dark horror escape room<br>Overleef de bloeddorstige roep',
            'pyramid-details': 'GAME INFO:<br>2-4 spelers | 60 minuten<br>Egyptische piramide escape room<br>Vind de uitgang uit de piramide',
            'notredame-details': 'GAME INFO:<br>2-4 spelers | 45 minuten<br>Historische escape room<br>Red de Notre Dame kathedraal',

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

            // Slider labels
            'avontuur': 'Adventure:',
            'actie': 'Action:',
            'puzzelen': 'Puzzles:',
            'horror': 'Horror:',

            // Escape room game details
            'prince-details': 'GAME INFO:<br>2-4 players | 60 minutes<br>Adventure puzzle escape room<br>Escape from the magical palace',
            'huxley-details': 'GAME INFO:<br>2-6 players | 44 minutes<br>Sci-fi mystery escape room<br>Solve the secret of Huxley',
            'sigma-details': 'GAME INFO:<br>2-4 players | 45 minutes<br>Military mission escape room<br>Complete the secret operation',
            'christmas-details': 'GAME INFO:<br>2-6 players | 60 minutes<br>Christmas themed escape room<br>Save Christmas on time',
            'jungle-details': 'GAME INFO:<br>2-6 players | 60 minutes<br>Jungle adventure escape room<br>Explore the dangerous jungle',
            'cyberpunk-details': 'GAME INFO:<br>2-4 players | 50 minutes<br>Futuristic cyber escape room<br>Hack the system and escape',
            'medusa-details': 'GAME INFO:<br>2-4 players | 60 minutes<br>Mythological adventure escape room<br>Defeat Medusa and escape',
            'prison-details': 'GAME INFO:<br>2-6 players | 60 minutes<br>Prison escape room<br>Plan your escape carefully',
            'houseoffear-details': 'GAME INFO:<br>2-4 players | 45 minutes<br>Horror escape room experience<br>Survive the house of fear',
            'sanctum-details': 'GAME INFO:<br>2-6 players | 60 minutes<br>Mystical temple escape room<br>Discover the sanctuary secrets',
            'survival-details': 'GAME INFO:<br>2-4 players | 50 minutes<br>Survival horror escape room<br>Survive in the wilderness',
            'alice-details': 'GAME INFO:<br>2-6 players | 60 minutes<br>Fairy tale escape room<br>Follow Alice to Wonderland',
            'chernobyl-details': 'GAME INFO:<br>2-6 players | 60 minutes<br>Post-apocalyptic escape room<br>Escape from the devastated zone',
            'cursedsouls-details': 'GAME INFO:<br>2-4 players | 50 minutes<br>Supernatural horror escape room<br>Free the cursed souls',
            'callofblood-details': 'GAME INFO:<br>2-4 players | 45 minutes<br>Dark horror escape room<br>Survive the bloodthirsty call',
            'pyramid-details': 'GAME INFO:<br>2-4 players | 60 minutes<br>Egyptian pyramid escape room<br>Find the exit from the pyramid',
            'notredame-details': 'GAME INFO:<br>2-4 players | 45 minutes<br>Historical escape room<br>Save the Notre Dame cathedral',

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

        // Update slider labels (generator and escape page)
        document.querySelectorAll('.slider-group label').forEach(label => {
            const text = label.textContent.toLowerCase().trim();
            if (text.includes('avontuur') || text.includes('adventure')) {
                label.textContent = translations[lang]['avontuur'];
            } else if (text.includes('actie') || text.includes('action')) {
                label.textContent = translations[lang]['actie'];
            } else if (text.includes('puzzelen') || text.includes('puzzel') || text.includes('puzzle')) {
                label.textContent = translations[lang]['puzzelen'];
            } else if (text.includes('horror')) {
                label.textContent = translations[lang]['horror'];
            }
        });

        // Update slider labels with class (escape page)
        document.querySelectorAll('.slider-label').forEach(label => {
            const text = label.textContent.toLowerCase().trim();
            if (text.includes('avontuur') || text.includes('adventure')) {
                label.textContent = translations[lang]['avontuur'].replace(':', '');
            } else if (text.includes('actie') || text.includes('action')) {
                label.textContent = translations[lang]['actie'].replace(':', '');
            } else if (text.includes('puzzelen') || text.includes('puzzel') || text.includes('puzzle')) {
                label.textContent = translations[lang]['puzzelen'].replace(':', '');
            }
        });

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

        // Update escape room game details (escape page)
        document.querySelectorAll('.game-card .game-details').forEach(details => {
            const gameCard = details.closest('.game-card');
            if (!gameCard) return;

            const gameTitle = gameCard.querySelector('.game-title')?.textContent.toLowerCase();
            if (!gameTitle) return;

            // Map game titles to detail keys
            if (gameTitle.includes('prince') || gameTitle.includes('persia')) {
                details.innerHTML = translations[lang]['prince-details'];
            } else if (gameTitle.includes('huxley')) {
                details.innerHTML = translations[lang]['huxley-details'];
            } else if (gameTitle.includes('sigma')) {
                details.innerHTML = translations[lang]['sigma-details'];
            } else if (gameTitle.includes('christmas')) {
                details.innerHTML = translations[lang]['christmas-details'];
            } else if (gameTitle.includes('jungle')) {
                details.innerHTML = translations[lang]['jungle-details'];
            } else if (gameTitle.includes('cyberpunk')) {
                details.innerHTML = translations[lang]['cyberpunk-details'];
            } else if (gameTitle.includes('medusa')) {
                details.innerHTML = translations[lang]['medusa-details'];
            } else if (gameTitle.includes('prison')) {
                details.innerHTML = translations[lang]['prison-details'];
            } else if (gameTitle.includes('house of fear') && !gameTitle.includes('cursed') && !gameTitle.includes('call')) {
                details.innerHTML = translations[lang]['houseoffear-details'];
            } else if (gameTitle.includes('sanctum')) {
                details.innerHTML = translations[lang]['sanctum-details'];
            } else if (gameTitle.includes('survival')) {
                details.innerHTML = translations[lang]['survival-details'];
            } else if (gameTitle.includes('alice')) {
                details.innerHTML = translations[lang]['alice-details'];
            } else if (gameTitle.includes('chernobyl')) {
                details.innerHTML = translations[lang]['chernobyl-details'];
            } else if (gameTitle.includes('cursed souls')) {
                details.innerHTML = translations[lang]['cursedsouls-details'];
            } else if (gameTitle.includes('call of blood')) {
                details.innerHTML = translations[lang]['callofblood-details'];
            } else if (gameTitle.includes('pyramid')) {
                details.innerHTML = translations[lang]['pyramid-details'];
            } else if (gameTitle.includes('notre dame')) {
                details.innerHTML = translations[lang]['notredame-details'];
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

    // Initialize with Dutch as default language
    updateLanguage('nl');
});
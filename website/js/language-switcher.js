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
            'aantal-personen': 'Aantal personen:',
            'vind-passende-spellen': 'Vind passende spellen',

            // Slider labels
            'avontuur': 'Avontuur:',
            'actie': 'Actie:',
            'puzzelen': 'Puzzelen:',
            'horror': 'Horror:',

            // Escape room game details - using exact text from escape.html
            'prince-details': 'GAME INFO:<br>2 of 4 spelers | 60 minuten<br>Avontuurlijke puzzel escape room<br>Stop de kwaadaardige magiër',
            'huxley-details': 'GAME INFO:<br>2-4 spelers | 60 minuten<br>Sci-fi mysterie escape room<br>Red Huxley in het jaar 3007',
            'sigma-details': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>millitaire missie escape room<br>Ontmantel de bom en ontsnap',
            'christmas-details': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>kerst thema escape room<br>Help de kerstman alle cadeau\'s op tijd te bezorgen',
            'jungle-details': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Ontsnap uit de jungle escape room.<br>Ontdek de geheimen van de jungle en vind de uitgang.',
            'cyberpunk-details': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Overval escape room.<br>Plan een overval om belangrijke data te stelen in de toekomst.',
            'medusa-details': 'GAME INFO:<br>2 of 4 spelers | 60 minuten<br>griekse mythologie escape room<br>Ontsnap uit de grot waar het legendarische schip van de argonauts ligt.',
            'prison-details': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Ontsnap uit de gevangenis escape room.<br>Ontsnap de gevangenis en pak de echte dader.',
            'houseoffear-details': 'GAME INFO:<br>2-4 spelers | 60 minuten<br>Behekst huis escape room.<br>Kan jij erachter komen wat er echt in dit verlaten huis gebeurt?',
            'sanctum-details': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Red je vriend in het verlaten huis escape room.<br>Vindt het mysterie uit en red je vriend in de wereld van H.P. Lovecraft.',
            'survival-details': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Overleef op eiland escape room.<br>Overleef op het onbewoonde eiland.',
            'alice-details': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Stop de harten koningin de wonderlijke wereld van Alice in Wonderland.<br>Los puzzels op en stop de harten koningin.',
            'chernobyl-details': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Stop het ongeluk van Chernobyl.<br>Los puzzels op en stop het ongeluk.',
            'cursedsouls-details': 'GAME INFO:<br>2-4 spelers | 60 minuten<br>Ontdek het geheim van het huis.<br>Los puzzels op en ontdek wat er echt is gebeurd.',
            'callofblood-details': 'GAME INFO:<br>2-4 spelers | 60 minuten<br>Red de kinderen van de psychiatrische afdeling.<br>Los puzzels op en ontdek wat er echt is gebeurd.',
            'pyramid-details': 'GAME INFO:<br>2 of 4 spelers | 60 minuten<br>Vind de weg uit de pyramide van Nebka.<br>Veel hebben het geprobeerd, maar weinigen zijn geslaagd.',
            'notredame-details': 'GAME INFO:<br>2 of 4 spelers | 60 minuten<br>Redt de juwelen van de Notre Dame<br>Ontsnap de vlammen en redt de juwelen',

            // Generator page specific details (simplified descriptions)
            'prince-generator': 'GAME INFO:<br>2 of 4 spelers | 60 minuten<br>Stop de kwaadaardige magiër',
            'huxley-generator': 'GAME INFO:<br>2-4 spelers | 60 minuten<br>Red Huxley in het jaar 3007',
            'sigma-generator': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Ontmantel de bom en ontsnap',
            'christmas-generator': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Help de kerstman alle cadeau\'s op tijd te bezorgen',
            'jungle-generator': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Ontdek de geheimen van de jungle en vind de uitgang',
            'cyberpunk-generator': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Plan een overval om belangrijke data te stelen in de toekomst',
            'medusa-generator': 'GAME INFO:<br>2 of 4 spelers | 60 minuten<br>Ontsnap uit de grot waar het legendarische schip van de argonauts ligt',
            'prison-generator': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Ontsnap de gevangenis en pak de echte dader',
            'houseoffear-generator': 'GAME INFO:<br>2-4 spelers | 60 minuten<br>Kan jij erachter komen wat er echt in dit verlaten huis gebeurt?',
            'sanctum-generator': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Vindt het mysterie uit en red je vriend in de wereld van H.P. Lovecraft',
            'survival-generator': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Overleef op het onbewoonde eiland',
            'alice-generator': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Los puzzels op en stop de harten koningin',
            'chernobyl-generator': 'GAME INFO:<br>2-6 spelers | 60 minuten<br>Los puzzels op en stop het ongeluk',
            'cursedsouls-generator': 'GAME INFO:<br>2-4 spelers | 60 minuten<br>Los puzzels op en ontdek wat er echt is gebeurd',
            'callofblood-generator': 'GAME INFO:<br>2-4 spelers | 60 minuten<br>Los puzzels op en ontdek wat er echt is gebeurd',
            'pyramid-generator': 'GAME INFO:<br>2 of 4 spelers | 60 minuten<br>Vind de weg uit de pyramide van Nebka',
            'notredame-generator': 'GAME INFO:<br>2 of 4 spelers | 60 minuten<br>Ontsnap de vlammen en redt de juwelen',

            // Multiplayer game details - updated with actual game descriptions
            'arizona-sunshine-details': 'Co-op zombie shooter in VR<br>Overleef de zombie apocalypse samen<br>Realistische wapens en tactiek<br>Teamwork essentieel voor overleving<br>Intense actie en survival elementen',
            'archer-details': 'Co-op boogschutter in VR<br>Overleef golven van monsters samen<br>Realistische boogmechanica en tactiek',
            'arviarena-details': 'Co-op shooter in VR<br>Strijd tegen andere teams in een arena<br>Speel tegen andere spelers of AI',
            'chefs-details': 'Co-op kookspel in VR<br>Werk samen of alleen om de beste gerechten te maken<br>Maak samen burgers, buritos en meer<br>Net 5 unieke restaurants',
            'elven-assassin-details': 'Co-op boogschutter in VR<br>Overleef golven van monsters samen<br>Realistische boogmechanica en tactiek<br>Meeredere omgevingen om uit te kiezen',
            'headgun-details': 'PVP en co-op shooter in VR<br>Strijd tegen andere spelers of werk samen tegen AI<br>vier unieke speelomgevingen<br>drie spelmodi: Deathmatch, Team Deathmatch en Capture the Flag',
            'loco-dojo-details': 'Co-op party game in VR<br>Speel tegen anderen spelers in mini games<br>Unieke en grappige uitdagingen<br>Meer als 15 mini-games',
            'plush-rush-details': 'Co-op party game in VR<br>Werk samen tegen het speelgoed<br>Vershillende wapens<br>bescherm de snoepjes van het speelgoed',
            'revolvr-details': 'PVP shooter in VR<br>Strijd tegen je vrienden in het wilde westen<br>Kom erachter wie de beste schutter is<br>schiet en duik weg',
            'rhythmatic-details': 'Co-op muziekspel in VR<br>Speel samen of alleen<br>breek blokken op de beat van de muziek<br>kies uit verschillende liedjes en moeilijkheidsgraden',
            'rotten-apple-details': 'Co-op zombie shooter in VR<br>Overleef de golven van zombies samen<br>dood alle zombies en krijg veel geld<br>koop nieuwe wapens en upgrades',
            'smash-point-details': 'Co-op shooter game in VR<br>Speel tegen andere speleres<br>kies uit 14 verschillende karakters<br>speel meerdere rondes om te winnen',

            // Info modal section headers
            'verhaal': 'Verhaal',
            'speeltijd': 'Speeltijd',
            'spelers': 'Spelers',
            'leeftijd': 'Leeftijd',

            // Escape room modal content
            'prince-story': 'Jullie worden opgeroepen door Keileena om de kwade magiër te stoppen met de Dagger of Time. Reis door betoverde paleizen, los uitdagende puzzels op en voorkom dat de tijd zelf uit de hand loopt.',
            'prince-time': '60 minuten',
            'prince-players': '2 of 4 spelers',
            'prince-age': '12+ jaar',

            'huxley-story': 'Het jaar is 3007. mensheid is dood, jullie zijn de enige overlevende. Jullie taak is om Huxley te helpen en de apocalypse terug te draaien.',
            'huxley-time': '50-60 minuten',
            'huxley-players': '2-4 spelers',
            'huxley-age': '12+ jaar',

            'sigma-story': 'Jullie zijn elite soldaten die op een geheime missie zijn gestuurd om een bom te ontmantelen. Werk samen om aanwijzingen te vinden, puzzels op te lossen en de bom te ontmantelen voordat het te laat is.',
            'sigma-time': '60 minuten',
            'sigma-players': '2-6 spelers',
            'sigma-age': '13+ jaar',

            'christmas-story': 'Kerstmis is in gevaar! De kerstman is in een sneeuwstorm terechtgekomen. Het is aan jullie om de kerstman te redden.',
            'christmas-time': '60 minuten',
            'christmas-players': '2-6 spelers',
            'christmas-age': '8+ jaar',

            'medusa-story': 'Vind jullie weg uit de Aegean grot waar het legendarische schip van de Argonauts ligt.',
            'medusa-time': '60 minuten',
            'medusa-players': '2 of 4 spelers',
            'medusa-age': '12+ jaar',

            'prison-story': 'Jullie zijn onterecht in de gevangenis gezet. Gelukkig zijn je vrienden nog vrij. Werk samen om te ontsnappen en de echte dader te vinden.',
            'prison-time': '60 minuten',
            'prison-players': '2-6 spelers',
            'prison-age': '13+ jaar',

            'cyberpunk-story': 'Het is het begin van de 22ste eeuw. Sameneleving valt uit elkaar door alle technologie. Jullie zijn een groep cyborgs die een overval moeten plegen om belangrijke data te stelen.',
            'cyberpunk-time': '60 minuten',
            'cyberpunk-players': '2-6 spelers',
            'cyberpunk-age': '10+ jaar',

            'houseoffear-story': 'Een verlaten huis in het bos. Je loopt naar binnen en voordat je het weet zit je vast. Kunnen jullie erachter komen wat er echt in dit huis gebeurt en ontsnappen?',
            'houseoffear-time': '45-60 minuten',
            'houseoffear-players': '2-4 spelers',
            'houseoffear-age': '16+ jaar',

            'sanctum-story': 'Je vriend is verdwenen in een verlaten huis. Treedt toe in de wereld van H.P. Lovecraft en vind het mysterie om je vriend te redden.',
            'sanctum-time': '60 minuten',
            'sanctum-players': '2-6 spelers',
            'sanctum-age': '16+ jaar',

            'jungle-story': 'Een raar portaal heeft jullie naar een mysterieus jungle eiland gebracht. los de puzzels van de jungle op en vind de uitgang.',
            'jungle-time': '45-60 minuten',
            'jungle-players': '2-6 spelers',
            'jungle-age': '10+ jaar',

            'survival-story': 'Na een vliegtuigongeluk zijn jullie gestrand op een onbewoond eiland. Werk samen om te overleven en een manier te vinden om te ontsnappen.',
            'survival-time': '45-70 minuten',
            'survival-players': '2-6 spelers',
            'survival-age': '10+ jaar',

            'alice-story': 'Kijk door de ogen van Alice en stop de harten koningin in de wonderlijke wereld van Alice in Wonderland. Los puzzels op en stop de harten koningin.',
            'alice-time': '50-60 minuten',
            'alice-players': '2-6 spelers',
            'alice-age': '13+ jaar',

            'chernobyl-story': 'Reis terug in de tijd naar de ramp van chernobyl. Los puzzels op en stop het ongeluk voordat het te laat is.',
            'chernobyl-time': '60 minuten',
            'chernobyl-players': '2-6 spelers',
            'chernobyl-age': '13+ jaar',

            'cursedsouls-story': 'Een verlaten huis. Op een dag heeft een gek iedereen in het huis vermoord. Jullie horen de stemmen van de kinderen nog in het huis. treedt binnen en los het mysterie op.',
            'cursedsouls-time': '60 minuten',
            'cursedsouls-players': '2-4 spelers',
            'cursedsouls-age': '16+ jaar',

            'callofblood-story': 'Jullie zijn op zoek naar de verdwenen kinderen van de psychiatrische afdeling. Treedt binnen in het huis en los het mysterie op voordat het te laat is.',
            'callofblood-time': '60 minuten',
            'callofblood-players': '2-4 spelers',
            'callofblood-age': '16+ jaar',

            'pyramid-story': 'Stap in de wereld van Assassin\'s Creed en vind de weg uit de pyramide van Nebka. Veel hebben het geprobeerd, maar weinigen zijn geslaagd.',
            'pyramid-time': '50-60 minuten',
            'pyramid-players': '2 of 4 spelers',
            'pyramid-age': '10+ jaar',

            'notredame-story': 'Wordt een brandweerman in parijs en redt de juwelen van de Notre Dame. Ontsnap de vlammen en redt de juwelen.',
            'notredame-time': '45-60 minuten',
            'notredame-players': '2 of 4 spelers',
            'notredame-age': '12+ jaar',

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
            'video-error': 'Uw browser ondersteunt de video tag niet.',

            // Generator popup translations
            'generator-slider-avontuur': 'Avontuur',
            'generator-slider-actie': 'Actie',
            'generator-slider-puzzelen': 'Puzzelen',
            'generator-players': 'spelers',
            'generator-match': 'Match',
            'generator-no-games': 'Geen spellen gevonden voor het gewenste aantal spelers.',
            'generator-try-different': 'Probeer een ander aantal spelers te selecteren.'
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
            'aantal-personen': 'Number of people:',
            'vind-passende-spellen': 'Find matching games',

            // Slider labels
            'avontuur': 'Adventure:',
            'actie': 'Action:',
            'puzzelen': 'Puzzles:',
            'horror': 'Horror:',

            // Escape room game details
            'prince-details': 'GAME INFO:<br>2 or 4 players | 60 minutes<br>Adventure puzzle escape room<br>Stop the evil wizard',
            'huxley-details': 'GAME INFO:<br>2-4 players | 60 minutes<br>Sci-fi mystery escape room<br>Save Huxley in the year 3007',
            'sigma-details': 'GAME INFO:<br>2-6 players | 60 minutes<br>Military mission escape room<br>Defuse the bomb and escape',
            'christmas-details': 'GAME INFO:<br>2-6 players | 60 minutes<br>Christmas themed escape room<br>Help Santa deliver all gifts on time',
            'jungle-details': 'GAME INFO:<br>2-6 players | 60 minutes<br>Escape from the jungle escape room.<br>Discover the secrets of the jungle and find the exit.',
            'cyberpunk-details': 'GAME INFO:<br>2-6 players | 60 minutes<br>Heist escape room.<br>Plan a heist to steal important data in the future. <br> <br><br>',
            'medusa-details': 'GAME INFO:<br>2 or 4 players | 60 minutes<br>Greek mythology escape room<br>Escape from the cave where the legendary ship of the argonauts lies.',
            'prison-details': 'GAME INFO:<br>2-6 players | 60 minutes<br>Escape from prison escape room.<br>Escape the prison and catch the real culprit.',
            'houseoffear-details': 'GAME INFO:<br>2-4 players | 60 minutes<br>Haunted house escape room.<br>Can you figure out what really happens in this abandoned house? <br> <br>',
            'sanctum-details': 'GAME INFO:<br>2-6 players | 60 minutes<br>Save your friend in the abandoned house escape room.<br>Solve the mystery and save your friend in the world of H.P. Lovecraft.',
            'survival-details': 'GAME INFO:<br>2-6 players | 60 minutes<br>Survive on island escape room.<br>Survive on the uninhabited island.',
            'alice-details': 'GAME INFO:<br>2-6 players | 60 minutes<br>Stop the queen of hearts in the wonderful world of Alice in Wonderland.<br>Solve puzzles and stop the queen of hearts.',
            'chernobyl-details': 'GAME INFO:<br>2-6 players | 60 minutes<br>Stop the Chernobyl accident.<br>Solve puzzles and stop the accident.',
            'cursedsouls-details': 'GAME INFO:<br>2-4 players | 60 minutes<br>Discover the secret of the house.<br>Solve puzzles and discover what really happened.',
            'callofblood-details': 'GAME INFO:<br>2-4 players | 60 minutes<br>Save the children from the psychiatric ward.<br>Solve puzzles and discover what really happened.',
            'pyramid-details': 'GAME INFO:<br>2 or 4 players | 60 minutes<br>Find your way out of the pyramid of Nebka.<br>Many have tried, but few have succeeded. <br> <br>',
            'notredame-details': 'GAME INFO:<br>2 or 4 players | 60 minutes<br>Save the jewels of Notre Dame<br>Escape the flames and save the jewels.',

            // Generator page specific details (simplified English descriptions)
            'prince-generator': 'GAME INFO:<br>2 or 4 players | 60 minutes<br>Stop the evil wizard',
            'huxley-generator': 'GAME INFO:<br>2-4 players | 60 minutes<br>Save Huxley in the year 3007',
            'sigma-generator': 'GAME INFO:<br>2-6 players | 60 minutes<br>Defuse the bomb and escape',
            'christmas-generator': 'GAME INFO:<br>2-6 players | 60 minutes<br>Help Santa deliver all gifts on time',
            'jungle-generator': 'GAME INFO:<br>2-6 players | 60 minutes<br>Discover the secrets of the jungle and find the exit',
            'cyberpunk-generator': 'GAME INFO:<br>2-6 players | 60 minutes<br>Plan a heist to steal important data in the future',
            'medusa-generator': 'GAME INFO:<br>2 or 4 players | 60 minutes<br>Escape from the cave where the legendary ship of the argonauts lies',
            'prison-generator': 'GAME INFO:<br>2-6 players | 60 minutes<br>Escape the prison and catch the real culprit',
            'houseoffear-generator': 'GAME INFO:<br>2-4 players | 60 minutes<br>Can you figure out what really happens in this abandoned house?',
            'sanctum-generator': 'GAME INFO:<br>2-6 players | 60 minutes<br>Solve the mystery and save your friend in the world of H.P. Lovecraft',
            'survival-generator': 'GAME INFO:<br>2-6 players | 60 minutes<br>Survive on the uninhabited island',
            'alice-generator': 'GAME INFO:<br>2-6 players | 60 minutes<br>Solve puzzles and stop the queen of hearts',
            'chernobyl-generator': 'GAME INFO:<br>2-6 players | 60 minutes<br>Solve puzzles and stop the accident',
            'cursedsouls-generator': 'GAME INFO:<br>2-4 players | 60 minutes<br>Solve puzzles and discover what really happened',
            'callofblood-generator': 'GAME INFO:<br>2-4 players | 60 minutes<br>Solve puzzles and discover what really happened',
            'pyramid-generator': 'GAME INFO:<br>2 or 4 players | 60 minutes<br>Find your way out of the pyramid of Nebka',
            'notredame-generator': 'GAME INFO:<br>2 or 4 players | 60 minutes<br>Escape the flames and save the jewels',

            // Multiplayer game details - updated with actual game descriptions
            'arizona-sunshine-details': 'Co-op zombie shooter in VR<br>Survive the zombie apocalypse together<br>Realistic weapons and tactics<br>Teamwork essential for survival<br>Intense action and survival elements',
            'archer-details': 'Co-op archery game in VR<br>Survive waves of monsters together<br>Realistic bow mechanics and tactics',
            'arviarena-details': 'Co-op shooter in VR<br>Fight against other teams in an arena<br>Play against other players or AI',
            'chefs-details': 'Co-op cooking game in VR<br>Work together or alone to make the best dishes<br>Make burgers, burritos and more together<br>Just 5 unique restaurants',
            'elven-assassin-details': 'Co-op archery game in VR<br>Survive waves of monsters together<br>Realistic bow mechanics and tactics<br>Multiple environments to choose from',
            'headgun-details': 'PVP and co-op shooter in VR<br>Fight against other players or work together against AI<br>four unique game environments<br>three game modes: Deathmatch, Team Deathmatch and Capture the Flag',
            'loco-dojo-details': 'Co-op party game in VR<br>Play against other players in mini games<br>Unique and funny challenges<br>More than 15 mini-games',
            'plush-rush-details': 'Co-op party game in VR<br>Work together against the toys<br>Different weapons<br>protect the candy from the toys',
            'revolvr-details': 'PVP shooter in VR<br>Fight against your friends in the wild west<br>Find out who is the best shooter<br>shoot and duck for cover',
            'rhythmatic-details': 'Co-op music game in VR<br>Play together or alone<br>break blocks to the beat of the music<br>choose from different songs and difficulty levels',
            'rotten-apple-details': 'Co-op zombie shooter in VR<br>Survive the waves of zombies together<br>kill all zombies and get lots of money<br>buy new weapons and upgrades',
            'smash-point-details': 'Co-op shooter game in VR<br>Play against other players<br>choose from 14 different characters<br>play multiple rounds to win',

            // Info modal section headers
            'verhaal': 'Story',
            'speeltijd': 'Playing time',
            'spelers': 'Players',
            'leeftijd': 'Age',

            // Escape room modal content
            'prince-story': 'You are called upon by Keileena to stop the evil sorcerer with the Dagger of Time. Travel through enchanted palaces, solve challenging puzzles and prevent time itself from getting out of hand.',
            'prince-time': '60 minutes',
            'prince-players': '2 or 4 players',
            'prince-age': '12+ years',

            'huxley-story': 'The year is 3007. humanity is dead, you are the only survivors. Your task is to help Huxley and reverse the apocalypse.',
            'huxley-time': '50-60 minutes',
            'huxley-players': '2-4 players',
            'huxley-age': '12+ years',

            'sigma-story': 'You are elite soldiers sent on a secret mission to disarm a bomb. Work together to find clues, solve puzzles and disarm the bomb before it\'s too late.',
            'sigma-time': '60 minutes',
            'sigma-players': '2-6 players',
            'sigma-age': '13+ years',

            'christmas-story': 'Christmas is in danger! Santa has gotten caught in a snowstorm. It\'s up to you to save Santa.',
            'christmas-time': '60 minutes',
            'christmas-players': '2-6 players',
            'christmas-age': '8+ years',

            'medusa-story': 'Find your way out of the Aegean cave where the legendary ship of the Argonauts lies.',
            'medusa-time': '60 minutes',
            'medusa-players': '2 or 4 players',
            'medusa-age': '12+ years',

            'prison-story': 'You have been wrongfully imprisoned. Fortunately your friends are still free. Work together to escape and find the real culprit.',
            'prison-time': '60 minutes',
            'prison-players': '2-6 players',
            'prison-age': '13+ years',

            'cyberpunk-story': 'It\'s the beginning of the 22nd century. Society is falling apart due to all the technology. You are a group of cyborgs who must commit a heist to steal important data.',
            'cyberpunk-time': '60 minutes',
            'cyberpunk-players': '2-6 players',
            'cyberpunk-age': '10+ years',

            'houseoffear-story': 'An abandoned house in the woods. You walk inside and before you know it you\'re trapped. Can you figure out what really happens in this house and escape?',
            'houseoffear-time': '45-60 minutes',
            'houseoffear-players': '2-4 players',
            'houseoffear-age': '16+ years',

            'sanctum-story': 'Your friend has disappeared in an abandoned house. Enter the world of H.P. Lovecraft and find the mystery to save your friend.',
            'sanctum-time': '60 minutes',
            'sanctum-players': '2-6 players',
            'sanctum-age': '16+ years',

            'jungle-story': 'A strange portal has brought you to a mysterious jungle island. solve the puzzles of the jungle and find the exit.',
            'jungle-time': '45-60 minutes',
            'jungle-players': '2-6 players',
            'jungle-age': '10+ years',

            'survival-story': 'After a plane crash you are stranded on a deserted island. Work together to survive and find a way to escape.',
            'survival-time': '45-70 minutes',
            'survival-players': '2-6 players',
            'survival-age': '10+ years',

            'alice-story': 'Look through Alice\'s eyes and stop the queen of hearts in the wonderful world of Alice in Wonderland. Solve puzzles and stop the queen of hearts.',
            'alice-time': '50-60 minutes',
            'alice-players': '2-6 players',
            'alice-age': '13+ years',

            'chernobyl-story': 'Travel back in time to the Chernobyl disaster. Solve puzzles and stop the accident before it\'s too late.',
            'chernobyl-time': '60 minutes',
            'chernobyl-players': '2-6 players',
            'chernobyl-age': '13+ years',

            'cursedsouls-story': 'An abandoned house. One day a madman murdered everyone in the house. You still hear the voices of the children in the house. enter and solve the mystery.',
            'cursedsouls-time': '60 minutes',
            'cursedsouls-players': '2-4 players',
            'cursedsouls-age': '16+ years',

            'callofblood-story': 'You are looking for the missing children from the psychiatric ward. Enter the house and solve the mystery before it\'s too late.',
            'callofblood-time': '60 minutes',
            'callofblood-players': '2-4 players',
            'callofblood-age': '16+ years',

            'pyramid-story': 'Step into the world of Assassin\'s Creed and find your way out of Nebka\'s pyramid. Many have tried, but few have succeeded.',
            'pyramid-time': '50-60 minutes',
            'pyramid-players': '2 or 4 players',
            'pyramid-age': '10+ years',

            'notredame-story': 'Become a firefighter in Paris and save the jewels of Notre Dame. Escape the flames and save the jewels.',
            'notredame-time': '45-60 minutes',
            'notredame-players': '2 or 4 players',
            'notredame-age': '12+ years',

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
            'video-error': 'Your browser does not support the video tag.',

            // Generator popup translations
            'generator-slider-avontuur': 'Adventure',
            'generator-slider-actie': 'Action',
            'generator-slider-puzzelen': 'Puzzles',
            'generator-players': 'players',
            'generator-match': 'Match',
            'generator-no-games': 'No games found for the desired number of players.',
            'generator-try-different': 'Try selecting a different number of players.'
        }
    };

    // Current language
    let currentLang = localStorage.getItem('selectedLanguage') || 'nl';

    // Function to update page language
    function updateLanguage(lang) {
        currentLang = lang;

        // Update elements with data-i18n attributes
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.innerHTML.includes('<br>')) {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

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
        if (genereerTitle && (genereerTitle.textContent.includes('Genereer') || genereerTitle.textContent.includes('Generate'))) {
            genereerTitle.textContent = translations[lang]['genereer-title'];
        }

        const genereerSubtitle = document.querySelector('.header p');
        if (genereerSubtitle && (genereerSubtitle.textContent.includes('escape room') || genereerSubtitle.textContent.includes('preferences'))) {
            genereerSubtitle.textContent = translations[lang]['genereer-subtitle'];
        }

        const stelErvaring = document.querySelector('.preference-section h2');
        if (stelErvaring) {
            stelErvaring.textContent = translations[lang]['stel-ervaring'];
        }

        // Update aantal personen label
        document.querySelectorAll('label').forEach(label => {
            const text = label.textContent.toLowerCase().trim();
            if (text.includes('aantal personen') || text.includes('number of people')) {
                label.textContent = translations[lang]['aantal-personen'];
            }
        });

        // Update "vind passende spellen" button
        document.querySelectorAll('button').forEach(button => {
            const text = button.textContent.toLowerCase().trim();
            if (text.includes('vind passende spellen') || text.includes('find matching games')) {
                button.textContent = translations[lang]['vind-passende-spellen'];
            }
        });

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

        // Update escape room game details (escape page and generator page)
        document.querySelectorAll('.game-card .game-details').forEach(details => {
            const gameCard = details.closest('.game-card');
            if (!gameCard) return;

            const gameTitle = gameCard.querySelector('.game-title')?.textContent.toLowerCase();
            if (!gameTitle) return;

            // Check if we're on the generator page
            const isGeneratorPage = window.location.pathname.includes('genereer') || document.body.classList.contains('generator-page');
            const suffix = isGeneratorPage ? '-generator' : '-details';

            // Map game titles to detail keys
            if (gameTitle.includes('prince') || gameTitle.includes('persia')) {
                details.innerHTML = translations[lang]['prince' + suffix];
            } else if (gameTitle.includes('huxley')) {
                details.innerHTML = translations[lang]['huxley' + suffix];
            } else if (gameTitle.includes('sigma')) {
                details.innerHTML = translations[lang]['sigma' + suffix];
            } else if (gameTitle.includes('christmas')) {
                details.innerHTML = translations[lang]['christmas' + suffix];
            } else if (gameTitle.includes('jungle')) {
                details.innerHTML = translations[lang]['jungle' + suffix];
            } else if (gameTitle.includes('cyberpunk')) {
                details.innerHTML = translations[lang]['cyberpunk' + suffix];
            } else if (gameTitle.includes('medusa')) {
                details.innerHTML = translations[lang]['medusa' + suffix];
            } else if (gameTitle.includes('prison')) {
                details.innerHTML = translations[lang]['prison' + suffix];
            } else if (gameTitle.includes('house of fear') && !gameTitle.includes('cursed') && !gameTitle.includes('call')) {
                details.innerHTML = translations[lang]['houseoffear' + suffix];
            } else if (gameTitle.includes('sanctum')) {
                details.innerHTML = translations[lang]['sanctum' + suffix];
            } else if (gameTitle.includes('survival')) {
                details.innerHTML = translations[lang]['survival' + suffix];
            } else if (gameTitle.includes('alice')) {
                details.innerHTML = translations[lang]['alice' + suffix];
            } else if (gameTitle.includes('chernobyl')) {
                details.innerHTML = translations[lang]['chernobyl' + suffix];
            } else if (gameTitle.includes('cursed souls')) {
                details.innerHTML = translations[lang]['cursedsouls' + suffix];
            } else if (gameTitle.includes('call of blood')) {
                details.innerHTML = translations[lang]['callofblood' + suffix];
            } else if (gameTitle.includes('pyramid')) {
                details.innerHTML = translations[lang]['pyramid' + suffix];
            } else if (gameTitle.includes('notre dame')) {
                details.innerHTML = translations[lang]['notredame' + suffix];
            }
        });

        // Update info modal section headers (escape page)
        document.querySelectorAll('.modal-section h3').forEach(header => {
            const text = header.textContent.toLowerCase().trim();
            if (text.includes('verhaal') || text.includes('story')) {
                header.textContent = translations[lang]['verhaal'];
            } else if (text.includes('speeltijd') || text.includes('playing time')) {
                header.textContent = translations[lang]['speeltijd'];
            } else if (text.includes('spelers') || text.includes('players')) {
                header.textContent = translations[lang]['spelers'];
            } else if (text.includes('leeftijd') || text.includes('age')) {
                header.textContent = translations[lang]['leeftijd'];
            }
        });

        // Update escape room modal content (escape page only)
        document.querySelectorAll('.info-modal').forEach(modal => {
            const modalId = modal.id;
            let gameKey = modalId.replace('-modal', '');

            // Handle special modal IDs from escape page
            if (gameKey === 'houseOfFear') gameKey = 'houseoffear';
            if (gameKey === 'HOFcursedSouls') gameKey = 'cursedsouls';
            if (gameKey === 'HOFcallOfBlood') gameKey = 'callofblood';
            if (gameKey === 'escape') gameKey = 'pyramid';
            if (gameKey === 'saveNotreDame') gameKey = 'notredame';

            // Handle generator page modal IDs
            if (gameKey === 'mission') gameKey = 'sigma';
            if (gameKey === 'housefear') gameKey = 'houseoffear';

            // Find all modal sections and update their content
            const sections = modal.querySelectorAll('.modal-section');
            sections.forEach(section => {
                const header = section.querySelector('h3');
                const paragraph = section.querySelector('p');

                if (header && paragraph) {
                    const headerText = header.textContent.toLowerCase().trim();

                    if (headerText.includes('verhaal') || headerText.includes('story')) {
                        if (translations[lang][gameKey + '-story']) {
                            paragraph.innerHTML = translations[lang][gameKey + '-story'];
                        }
                    } else if (headerText.includes('speeltijd') || headerText.includes('playing time')) {
                        if (translations[lang][gameKey + '-time']) {
                            paragraph.textContent = translations[lang][gameKey + '-time'];
                        }
                    } else if (headerText.includes('spelers') || headerText.includes('players')) {
                        if (translations[lang][gameKey + '-players']) {
                            paragraph.textContent = translations[lang][gameKey + '-players'];
                        }
                    } else if (headerText.includes('leeftijd') || headerText.includes('age')) {
                        if (translations[lang][gameKey + '-age']) {
                            paragraph.textContent = translations[lang][gameKey + '-age'];
                        }
                    }
                }
            });
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

                // Update language and save to localStorage
                updateLanguage(this.dataset.lang);
                localStorage.setItem('selectedLanguage', this.dataset.lang);
            });
        });
    }

    // Initialize with saved language or Dutch as default
    const savedLang = localStorage.getItem('selectedLanguage') || 'nl';

    // Set the correct button as active and update UI
    if (langButtons.length > 0 && languageSelector) {
        langButtons.forEach(btn => {
            if (btn.dataset.lang === savedLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Handle toggle animation based on saved language
        if (savedLang === 'nl') {
            languageSelector.classList.add('nl-active');
        } else {
            languageSelector.classList.remove('nl-active');
        }
    }

    updateLanguage(savedLang);
});
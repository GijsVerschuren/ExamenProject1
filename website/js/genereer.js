document.addEventListener('DOMContentLoaded', function () {
    // Language functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    const languageSelector = document.querySelector('.language-selector');

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

            console.log('Language changed to:', this.dataset.lang);
        });
    });

    // Game characteristic sliders
    const avontuurSlider = document.getElementById('avontuurSlider');
    const actieSlider = document.getElementById('actieSlider');
    const puzzelenSlider = document.getElementById('puzzelenSlider');

    const avontuurDisplay = document.getElementById('avontuurDisplay');
    const actieDisplay = document.getElementById('actieDisplay');
    const puzzelenDisplay = document.getElementById('puzzelenDisplay');

    // Update slider displays
    if (avontuurSlider && avontuurDisplay) {
        avontuurSlider.addEventListener('input', function () {
            avontuurDisplay.textContent = this.value;
        });
    }

    if (actieSlider && actieDisplay) {
        actieSlider.addEventListener('input', function () {
            actieDisplay.textContent = this.value;
        });
    }

    if (puzzelenSlider && puzzelenDisplay) {
        puzzelenSlider.addEventListener('input', function () {
            puzzelenDisplay.textContent = this.value;
        });
    }
});

// Game data with characteristics (0-100 scale)
const games = [
    {
        name: "Prince of Persia: The Dagger of Time",
        difficulty: "hard",
        platform: "ubisoft",
        duration: "medium",
        minPlayers: 2,
        maxPlayers: 6,
        description: "Stap in de wereld van Prince of Persia en ontdek de krachten van de Dolk van de Tijd.",
        image: "../fotos/new fotos/princeOfPersia.jpg",
        modalId: "prince-modal",
        trailerId: "prince-trailer",
        characteristics: {
            avontuur: 95,  // High adventure with time manipulation
            actie: 85,     // Action-packed sequences
            puzzelen: 70   // Moderate puzzle elements
        }
    },
    {
        name: "Huxley",
        difficulty: "medium",
        platform: "ubisoft",
        duration: "medium",
        minPlayers: 2,
        maxPlayers: 6,
        description: "Een dystopische toekomst waar technologie de overhand heeft genomen.",
        image: "../fotos/new fotos/huxley.jpeg",
        modalId: "huxley-modal",
        trailerId: "huxley-trailer",
        characteristics: {
            avontuur: 80,  // Sci-fi adventure
            actie: 60,     // Some action elements
            puzzelen: 90   // Heavy focus on tech puzzles
        }
    },
    {
        name: "Mission Sigma",
        difficulty: "easy",
        platform: "arvi",
        duration: "medium",
        minPlayers: 4,
        maxPlayers: 6,
        description: "Een geheime missie in het hart van de vijandelijke basis.",
        image: "../fotos/new fotos/MissionSigma.jpg",
        modalId: "mission-modal",
        trailerId: "mission-trailer",
        characteristics: {
            avontuur: 75,  // Stealth mission adventure
            actie: 85,     // Action-heavy infiltration
            puzzelen: 55   // Basic tactical puzzles
        }
    },
    {
        name: "Christmas Escape",
        difficulty: "easy",
        platform: "arvi",
        duration: "short",
        minPlayers: 2,
        maxPlayers: 8,
        description: "Help de Kerstman zijn verdwenen cadeaus terug te vinden.",
        image: "../fotos/new fotos/Christmas.jpg",
        modalId: "christmas-modal",
        trailerId: "christmas-trailer",
        characteristics: {
            avontuur: 70,  // Festive adventure
            actie: 40,     // Low action, family-friendly
            puzzelen: 80   // Gift-finding puzzles
        }
    },
    {
        name: "Beyond Medusa's Gate",
        difficulty: "medium",
        platform: "ubisoft",
        duration: "medium",
        minPlayers: 2,
        maxPlayers: 4,
        description: "Betreed de mystieke wereld van het oude Griekenland.",
        image: "../fotos/new fotos/beyondMedusaGate.jpg",
        modalId: "medusa-modal",
        trailerId: "medusa-trailer",
        characteristics: {
            avontuur: 90,  // Mythological adventure
            actie: 70,     // Combat against creatures
            puzzelen: 85   // Ancient riddles and mechanisms
        }
    },
    {
        name: "The Prison",
        difficulty: "hard",
        platform: "arvi",
        duration: "medium",
        minPlayers: 3,
        maxPlayers: 6,
        description: "Plan jullie ontsnapping uit een maximum security gevangenis.",
        image: "../fotos/new fotos/thePrison.jpg",
        modalId: "prison-modal",
        trailerId: "prison-trailer",
        characteristics: {
            avontuur: 85,  // Escape adventure
            actie: 75,     // Stealth and timing
            puzzelen: 90   // Complex escape planning
        }
    },
    {
        name: "Cyberpunk",
        difficulty: "hard",
        platform: "arvi",
        duration: "long",
        minPlayers: 4,
        maxPlayers: 6,
        description: "Infiltreer de futuristische megacorporatie.",
        image: "../fotos/new fotos/cyberpunk.webp",
        modalId: "cyberpunk-modal",
        trailerId: "cyberpunk-trailer",
        characteristics: {
            avontuur: 80,  // Corporate infiltration
            actie: 90,     // High-tech action
            puzzelen: 85   // Hacking and tech puzzles
        }
    },
    {
        name: "House Of Fear",
        difficulty: "easy",
        platform: "arvi",
        duration: "short",
        minPlayers: 2,
        maxPlayers: 6,
        description: "Een spookachtig huis vol geheimen en griezelige verassingen.",
        image: "../fotos/new fotos/houseOfFear.jpeg",
        modalId: "housefear-modal",
        trailerId: "housefear-trailer",
        characteristics: {
            avontuur: 85,  // Horror house exploration
            actie: 50,     // Jump scares, not action
            puzzelen: 70   // Hidden object finding
        }
    },
    {
        name: "Sanctum",
        difficulty: "hard",
        platform: "arvi",
        duration: "medium",
        minPlayers: 2,
        maxPlayers: 6,
        description: "Betreed het heilige sanctuarium waar oude krachten heersen.",
        image: "../fotos/new fotos/sanctum.jpg",
        modalId: "sanctum-modal",
        trailerId: "sanctum-trailer",
        characteristics: {
            avontuur: 90,  // Mystical adventure
            actie: 65,     // Supernatural encounters
            puzzelen: 95   // Ancient ritual puzzles
        }
    },
    {
        name: "Jungle Quest",
        difficulty: "easy",
        platform: "arvi",
        duration: "medium",
        minPlayers: 3,
        maxPlayers: 7,
        description: "Ontdek de geheimen van de oude Maya-tempel.",
        image: "../fotos/new fotos/JungleQuest.jpg",
        modalId: "jungle-modal",
        trailerId: "jungle-trailer",
        characteristics: {
            avontuur: 95,  // Classic adventure exploration
            actie: 60,     // Jungle dangers
            puzzelen: 85   // Temple mechanisms
        }
    },
    {
        name: "Survival",
        difficulty: "medium",
        platform: "arvi",
        duration: "short",
        minPlayers: 3,
        maxPlayers: 8,
        description: "Overleef in de wildernis met minimale middelen.",
        image: "../fotos/new fotos/survival.png",
        modalId: "survival-modal",
        trailerId: "survival-trailer",
        characteristics: {
            avontuur: 85,  // Wilderness survival
            actie: 70,     // Resource gathering urgency
            puzzelen: 75   // Survival problem solving
        }
    },
    {
        name: "Alice",
        difficulty: "medium",
        platform: "arvi",
        duration: "medium",
        minPlayers: 2,
        maxPlayers: 6,
        description: "Val door het konijnenhol in Alice's wonderland.",
        image: "../fotos/new fotos/alice.jpg",
        modalId: "alice-modal",
        trailerId: "alice-trailer",
        characteristics: {
            avontuur: 90,  // Wonderland exploration
            actie: 55,     // Whimsical encounters
            puzzelen: 85   // Logic-defying puzzles
        }
    },
    {
        name: "Chernobyl",
        difficulty: "medium",
        platform: "arvi",
        duration: "long",
        minPlayers: 3,
        maxPlayers: 6,
        description: "Betreed de verlaten kerncentrale van Chernobyl.",
        image: "../fotos/new fotos/chernobyl.jpg",
        modalId: "chernobyl-modal",
        trailerId: "chernobyl-trailer",
        characteristics: {
            avontuur: 80,  // Post-apocalyptic exploration
            actie: 65,     // Radiation dangers
            puzzelen: 85   // Technical reactor puzzles
        }
    },
    {
        name: "House Of Fear: Cursed Souls",
        difficulty: "medium",
        platform: "arvi",
        duration: "medium",
        minPlayers: 2,
        maxPlayers: 6,
        description: "Verlos de vervloekte zielen uit dit nachtmerriehuis.",
        image: "../fotos/new fotos/HOFcursedSouls.jpg",
        modalId: "cursedsouls-modal",
        trailerId: "cursedsouls-trailer",
        characteristics: {
            avontuur: 85,  // Supernatural adventure
            actie: 55,     // Horror atmosphere
            puzzelen: 80   // Exorcism rituals
        }
    },
    {
        name: "House Of Fear: Call Of Blood",
        difficulty: "medium",
        platform: "arvi",
        duration: "long",
        minPlayers: 2,
        maxPlayers: 4,
        description: "De ultieme horror ervaring in het House of Fear.",
        image: "../fotos/new fotos/HOFcallOfBlood.jpg",
        modalId: "callofblood-modal",
        trailerId: "callofblood-trailer",
        characteristics: {
            avontuur: 85,  // Extended horror adventure
            actie: 60,     // Intense scares
            puzzelen: 75   // Horror-themed puzzles
        }
    },
    {
        name: "Escape The Lost Pyramid",
        difficulty: "easy",
        platform: "ubisoft",
        duration: "medium",
        minPlayers: 2,
        maxPlayers: 6,
        description: "Ontdek de geheimen van een oude Egyptische piramide.",
        image: "../fotos/new fotos/escapeTheLostPyramid.png",
        modalId: "pyramid-modal",
        trailerId: "pyramid-trailer",
        characteristics: {
            avontuur: 90,  // Egyptian exploration
            actie: 50,     // Trap avoidance
            puzzelen: 90   // Hieroglyph puzzles
        }
    },
    {
        name: "Save Notre Dame On Fire",
        difficulty: "medium",
        platform: "ubisoft",
        duration: "short",
        minPlayers: 2,
        maxPlayers: 4,
        description: "Red de Notre Dame van de verwoestende brand.",
        image: "../fotos/new fotos/notreDame.jpg",
        modalId: "notredame-modal",
        trailerId: "notredame-trailer",
        characteristics: {
            avontuur: 75,  // Rescue mission
            actie: 85,     // Time pressure, firefighting
            puzzelen: 70   // Emergency procedures
        }
    }
];

function generateGames() {
    // Get slider values (0-10 range, convert to 0-100)
    const avontuurValue = parseInt(document.getElementById('avontuurSlider').value) * 10;
    const actieValue = parseInt(document.getElementById('actieSlider').value) * 10;
    const puzzelenValue = parseInt(document.getElementById('puzzelenSlider').value) * 10;

    // Use default player count since slider is missing
    const playerCount = 4; // Default to 4 players

    // Calculate match scores for all games
    const gamesWithScores = games.map(game => {
        // Check if player count is within range
        const playerMatch = playerCount >= game.minPlayers && playerCount <= game.maxPlayers;

        if (!playerMatch) {
            return { ...game, matchScore: 0 }; // No match if player count doesn't fit
        }        // Calculate similarity score (0-100)
        const avontuurDiff = Math.abs(avontuurValue - game.characteristics.avontuur);
        const actieDiff = Math.abs(actieValue - game.characteristics.actie);
        const puzzelenDiff = Math.abs(puzzelenValue - game.characteristics.puzzelen);

        // Average difference (lower is better)
        const averageDiff = (avontuurDiff + actieDiff + puzzelenDiff) / 3;

        // Convert to percentage match (100 = perfect match, 0 = worst match)
        const matchScore = Math.max(0, 100 - averageDiff);

        return { ...game, matchScore };
    });

    // Filter out games with 0 score and sort by match score
    const validGames = gamesWithScores
        .filter(game => game.matchScore > 0)
        .sort((a, b) => b.matchScore - a.matchScore);

    // Take top 6 games (or all if less than 6)
    const topGames = validGames.slice(0, 6);

    // Display results
    displayResults(topGames);
}

function displayResults(games) {
    const resultSection = document.getElementById('resultSection');
    const recommendedGames = document.getElementById('recommendedGames');

    if (games.length === 0) {
        recommendedGames.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: #ccc;">
                <p>Geen spellen gevonden voor het gewenste aantal spelers.</p>
                <p>Probeer een ander aantal spelers te selecteren.</p>
            </div>
        `;
    } else {
        // Create game cards using the same structure as escape.html
        recommendedGames.innerHTML = games.map(game => `
            <div class="game-card" data-difficulty="${game.difficulty}" data-platform="${game.platform}">
                <img src="${game.image}" alt="${game.name}">
                <div class="info-icon" onclick="openModal('${game.modalId}')">
                    <img src="../fotos/Info.svg" alt="Info">
                </div>
                <div class="game-info">
                    <div class="game-title">${game.name}</div>
                    <div class="sliders">
                        <div class="slider-item">
                            <span class="slider-label">Avontuur</span>
                            <input type="range" min="0" max="10" value="${Math.round(game.characteristics.avontuur / 10)}" disabled>
                        </div>
                        <div class="slider-item">
                            <span class="slider-label">Actie</span>
                            <input type="range" min="0" max="10" value="${Math.round(game.characteristics.actie / 10)}" disabled>
                        </div>
                        <div class="slider-item">
                            <span class="slider-label">Puzzelen</span>
                            <input type="range" min="0" max="10" value="${Math.round(game.characteristics.puzzelen / 10)}" disabled>
                        </div>
                    </div>
                    <div class="game-details">
                        ${getDifficultyText(game.difficulty)} | ${game.minPlayers}-${game.maxPlayers} spelers<br>
                        ${Math.round(game.matchScore)}% Match<br>
                        ${game.description}
                    </div>
                    <a href="#" class="btn" onclick="openTrailerModal('${game.trailerId}')">Bekijk de trailer</a>
                </div>
            </div>
        `).join('');
    }

    // Show result section
    resultSection.style.display = 'block';

    // Scroll to result
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

function getDifficultyText(difficulty) {
    switch (difficulty) {
        case 'easy': return 'Makkelijk';
        case 'medium': return 'Medium';
        case 'hard': return 'Moeilijk';
        default: return difficulty;
    }
}

function goToEscapeRooms() {
    window.location.href = 'escape.html';
}
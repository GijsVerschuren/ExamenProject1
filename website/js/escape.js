document.addEventListener('DOMContentLoaded', function () {
    // Language functionality (from index.js)
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

            // Here you can add logic to change the language of the website
            console.log('Language changed to:', this.dataset.lang);
        });
    });

    // Button selection functionality
    const platformButtons = document.querySelectorAll('.platform-btn');
    const gameCards = document.querySelectorAll('.game-card');

    // Handle platform button clicks
    platformButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Toggle selected class
            this.classList.toggle('selected');

            // Apply platform filtering
            applyAllFilters();
        });
    });

    // Function to apply both difficulty and platform filters
    function applyAllFilters() {
        const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked')?.value;
        const selectedPlatforms = Array.from(document.querySelectorAll('.platform-btn.selected'))
            .map(btn => btn.textContent.trim().toLowerCase());

        gameCards.forEach(card => {
            const cardDifficulty = card.getAttribute('data-difficulty');
            const cardPlatform = card.getAttribute('data-platform');

            let shouldShow = true;

            // Check difficulty filter
            if (selectedDifficulty && cardDifficulty !== selectedDifficulty) {
                shouldShow = false;
            }

            // Check platform filter (show only if platform is selected, or if no platforms are selected show all)
            if (selectedPlatforms.length > 0 && !selectedPlatforms.includes(cardPlatform)) {
                shouldShow = false;
            }

            if (shouldShow) {
                // Show the card with animation
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.style.display = 'block';
                }, 10);
            } else {
                // Hide the card with animation
                card.classList.add('hidden');
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Range slider styling
    const rangeInputs = document.querySelectorAll('input[type="range"]');

    function updateRangeProgress(input) {
        const value = input.value;
        const min = input.min || 0;
        const max = input.max || 100;
        const progress = ((value - min) / (max - min)) * 100;
        input.style.setProperty('--range-progress', progress + '%');
    }

    // Initialize all range sliders
    rangeInputs.forEach(input => {
        updateRangeProgress(input);

        // Update on input change (though these are disabled, this is for future use)
        input.addEventListener('input', function () {
            updateRangeProgress(this);
        });
    });

    // Difficulty filtering functionality
    const difficultyButtons = document.querySelectorAll('input[name="difficulty"]');

    // Handle difficulty filter changes
    difficultyButtons.forEach(button => {
        button.addEventListener('change', function () {
            applyAllFilters();
        });
    });

    // Show all games by default when no difficulty is selected
    function showAllGames() {
        applyAllFilters();
    }

    // Add functionality to show all games when clicking the same difficulty button again
    difficultyButtons.forEach(button => {
        button.addEventListener('click', function () {
            // If clicking the same button that's already checked, uncheck it and show all
            if (this.dataset.wasChecked === 'true') {
                this.checked = false;
                this.dataset.wasChecked = 'false';
                applyAllFilters();
            } else {
                // Update all buttons' data attributes
                difficultyButtons.forEach(btn => {
                    btn.dataset.wasChecked = btn === this ? 'true' : 'false';
                });
            }
        });
    });

    // Check if any difficulty is selected on page load, if not show all
    const checkedDifficulty = document.querySelector('input[name="difficulty"]:checked');
    if (!checkedDifficulty) {
        showAllGames();
    }
});

// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
        console.warn(`Modal with ID '${modalId}' not found`);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    } else {
        console.warn(`Modal with ID '${modalId}' not found`);
    }
}

// Close modal when clicking outside of it
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('info-modal')) {
        const modal = event.target;
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const activeModal = document.querySelector('.info-modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Also close trailer modals
        const activeTrailerModal = document.querySelector('.trailer-modal.active');
        if (activeTrailerModal) {
            closeTrailerModal(activeTrailerModal.id);
        }
    }
});

// Trailer modal functionality
function openTrailerModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        // Start playing the video
        const video = modal.querySelector('video');
        if (video) {
            video.play().catch(function (error) {
                console.log('Video autoplay failed:', error);
            });
        }
    } else {
        console.warn(`Trailer modal with ID '${modalId}' not found`);
    }
}

function closeTrailerModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling

        // Stop the video
        const video = modal.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0; // Reset to beginning
        }
    } else {
        console.warn(`Trailer modal with ID '${modalId}' not found`);
    }
}

// Close trailer modal when clicking outside of it
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('trailer-modal')) {
        const modal = event.target;
        closeTrailerModal(modal.id);
    }
});
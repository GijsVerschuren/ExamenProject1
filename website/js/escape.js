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

    // Handle platform button clicks
    platformButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Toggle deselected class
            this.classList.toggle('deselected');
        });
    });

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
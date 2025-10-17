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
    const optionButtons = document.querySelectorAll('.option-btn');

    optionButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Toggle selected class
            this.classList.toggle('selected');

        });
    });
});

// Trailer modal functionality
function openTrailerModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Start video if it exists
        const video = modal.querySelector('video');
        if (video) {
            video.currentTime = 0;
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
        document.body.style.overflow = 'auto';

        // Stop video if it exists
        const video = modal.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    } else {
        console.warn(`Trailer modal with ID '${modalId}' not found`);
    }
}

// Close modal when clicking outside of it
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('trailer-modal') && event.target.classList.contains('active')) {
        const modalId = event.target.id;
        closeTrailerModal(modalId);
    }
});

// Close modal with escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const activeTrailerModal = document.querySelector('.trailer-modal.active');
        if (activeTrailerModal) {
            closeTrailerModal(activeTrailerModal.id);
        }
    }
});
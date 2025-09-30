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
});

// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
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
    }
});
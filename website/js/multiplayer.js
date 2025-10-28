document.addEventListener('DOMContentLoaded', function () {
    // Option button functionality with filtering
    const optionButtons = document.querySelectorAll('.option-btn');
    const gameCards = document.querySelectorAll('.multiplayer-game-card');

    optionButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Toggle selected class
            this.classList.toggle('selected');

            // Get the category from the button's class
            const category = this.classList[1]; // Get the second class name (shooter, koken, etc.)

            // Filter games based on selected categories
            filterGames();
        });
    });

    function filterGames() {
        // Get all selected categories
        const selectedCategories = Array.from(document.querySelectorAll('.option-btn.selected'))
            .map(btn => btn.classList[1]);

        gameCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            // If no categories are selected, show all games
            // If categories are selected, only show games that DON'T match selected categories
            if (selectedCategories.length === 0 || !selectedCategories.includes(cardCategory)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});

// Trailer modal functionality
function openTrailerModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflowY = 'hidden';
        document.body.style.overflowX = 'hidden';

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
        document.body.style.overflowY = 'auto';
        document.body.style.overflowX = 'hidden';

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
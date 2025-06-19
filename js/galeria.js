document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.gallery-filters .btn-filter');
    const galleryItems = document.querySelectorAll('.gallery-grid .gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.dataset.filter;

                galleryItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.classList.remove('hide');
                    } else {
                        item.classList.add('hide');
                    }
                });
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const imageModal = document.querySelector('.image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeImageModal = document.querySelector('.close-image-modal');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentImageIndex = 0;
    let filteredImages = [...galleryItems];

    // Filtreleme işlevi
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Aktif buton stilini güncelle
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Görüntüleri filtrele
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || filter === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // Filtrelenmiş görüntüleri güncelle
            filteredImages = [...galleryItems].filter(item => {
                const category = item.getAttribute('data-category');
                return filter === 'all' || filter === category;
            });
        });
    });

    // Galeri görüntülerini modalde gösterme
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            modalImage.src = imgSrc;
            imageModal.classList.add('active');
            document.querySelector('.modal-overlay').classList.add('active');
            currentImageIndex = index;
            updateNavigationButtons();
        });
    });

    // Modal kapatma
    closeImageModal.addEventListener('click', closeModal);
    document.querySelector('.modal-overlay').addEventListener('click', closeModal);

    // Klavye navigasyonu
    document.addEventListener('keydown', (e) => {
        if (imageModal.classList.contains('active')) {
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'Escape') closeModal();
        }
    });

    // Önceki görüntü
    prevBtn.addEventListener('click', showPrevImage);

    // Sonraki görüntü
    nextBtn.addEventListener('click', showNextImage);

    function showPrevImage() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateModalImage();
        }
    }

    function showNextImage() {
        if (currentImageIndex < filteredImages.length - 1) {
            currentImageIndex++;
            updateModalImage();
        }
    }

    function updateModalImage() {
        const imgSrc = filteredImages[currentImageIndex].querySelector('img').src;
        modalImage.src = imgSrc;
        updateNavigationButtons();
    }

    function updateNavigationButtons() {
        prevBtn.style.display = currentImageIndex > 0 ? 'block' : 'none';
        nextBtn.style.display = currentImageIndex < filteredImages.length - 1 ? 'block' : 'none';
    }

    function closeModal() {
        imageModal.classList.remove('active');
        document.querySelector('.modal-overlay').classList.remove('active');
    }
});
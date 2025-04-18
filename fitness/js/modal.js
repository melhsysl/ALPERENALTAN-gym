document.addEventListener('DOMContentLoaded', function() {
    const contactButtons = document.querySelectorAll('.contact-trigger');
    const contactModal = document.querySelector('.contact-content');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModal = document.querySelector('.close-modal');

    function openModal() {
        contactModal.classList.add('active');
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModalFunc() {
        contactModal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    });

    closeModal.addEventListener('click', closeModalFunc);
    modalOverlay.addEventListener('click', closeModalFunc);

    // ESC tuşu ile kapatma
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && contactModal.classList.contains('active')) {
            closeModalFunc();
        }
    });
});
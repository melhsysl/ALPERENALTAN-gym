document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.nav-links a');

    function openMenu() {
        mobileMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    mobileMenuBtn.addEventListener('click', openMenu);
    mobileMenuClose.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.classList.contains('contact-trigger')) {
                e.preventDefault();
                closeMenu();
                if (typeof openModal === 'function') {
                    openModal();
                }
            } else {
                closeMenu();
            }
        });
    });
});
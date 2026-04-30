
    // ========== HAMBURGER MENU ==========
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            hamburger.querySelector('i').className = isOpen ? 'ri-close-line' : 'ri-menu-3-fill';
        });
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                if (hamburger) hamburger.querySelector('i').className = 'ri-menu-3-fill';
            });
        });
    }

    // smooth anchor scroll for internal sections within this page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#" || targetId === "") return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Reveal on scroll (fade-up)
    const fadeElements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    fadeElements.forEach(el => observer.observe(el));

    // Navbar background already fixed, but ensure no splash conflict
    // small modification: no splash on legal pages. 
    // also prevent any extra transition class issues
    document.body.classList.remove('splash-active');

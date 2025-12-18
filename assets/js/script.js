document.addEventListener('DOMContentLoaded', () => {

    // Initialize Lucide Icons
    lucide.createIcons();

    // Sticky Header
    const header = document.getElementById('header');
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 50) {
            header.classList.remove(scrollUp, scrollDown);
            header.classList.remove('shadow-lg');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains(scrollDown)) {
            // down
            header.classList.remove(scrollUp);
            header.classList.add(scrollDown);
            header.classList.add('shadow-lg');
        } else if (currentScroll < lastScroll && header.classList.contains(scrollDown)) {
            // up
            header.classList.remove(scrollDown);
            header.classList.add(scrollUp);
        }
        lastScroll = currentScroll;
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Typing Effect in Hero Section
    new Typed('#typing-effect', {
        strings: ['a Frontend Developer.', 'a UI/UX Enthusiast.', 'a Problem Solver.'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 2000,
    });

    // ScrollReveal Animations
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: true // Animations repeat
    });

    sr.reveal('#home .text-5xl, #home .text-2xl, #home p, #home .flex', { interval: 200, origin: 'left' });
    sr.reveal('#home img', { origin: 'right' });
    sr.reveal('#about img, #contact form', { origin: 'left' });
    sr.reveal('#about div > *, #contact p', { origin: 'right' });
    sr.reveal('.section-title', { origin: 'top' });
    sr.reveal('.skill-category', { interval: 200, origin: 'bottom' });
    sr.reveal('.project-card', { interval: 200, origin: 'bottom' });

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.remove('opacity-0');
            scrollToTopBtn.classList.add('opacity-100');
        } else {
            scrollToTopBtn.classList.add('opacity-0');
            scrollToTopBtn.classList.remove('opacity-100');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Active Nav Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const navLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
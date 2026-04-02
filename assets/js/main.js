document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Before/After Gallery Toggle
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const beforeImg = item.querySelector('.before-img');
        const afterImg = item.querySelector('.after-img');

        item.addEventListener('click', () => {
            if (afterImg.style.opacity === '1') {
                afterImg.style.opacity = '0';
            } else {
                afterImg.style.opacity = '1';
            }
        });
    });
    
    // Intersection Observer for scroll animations
    const sections = document.querySelectorAll('section');

    const revealSection = function(entries, observer) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s, transform 0.6s';
        sectionObserver.observe(section);
    });
});

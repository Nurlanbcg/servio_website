// ========================================
// Servio Landing Page — Script
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // Animated Gradient Canvas Background
    // ============================================
    const canvas = document.getElementById('gradientCanvas');
    const ctx = canvas.getContext('2d');

    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Color orbs — using brand palette
    const orbs = [
        { x: 0.2, y: 0.3, r: 0.45, vx: 0.0003, vy: 0.0002, color: [238, 122, 18] },   // brand-500
        { x: 0.8, y: 0.2, r: 0.40, vx: -0.0002, vy: 0.0003, color: [185, 72, 10] },    // brand-700
        { x: 0.5, y: 0.7, r: 0.50, vx: 0.0002, vy: -0.0002, color: [241, 148, 51] },   // brand-400
        { x: 0.3, y: 0.8, r: 0.35, vx: -0.0003, vy: -0.0001, color: [223, 96, 8] },    // brand-600
        { x: 0.7, y: 0.5, r: 0.38, vx: 0.0001, vy: 0.0003, color: [246, 186, 109] },   // brand-300
        { x: 0.1, y: 0.5, r: 0.30, vx: 0.0004, vy: -0.0002, color: [147, 58, 16] },    // brand-800
    ];

    let time = 0;

    function drawOrbs() {
        // Fill with the dark background
        ctx.fillStyle = '#020617';
        ctx.fillRect(0, 0, width, height);

        time += 0.003;

        orbs.forEach((orb, i) => {
            // Move orbs smoothly with sine/cosine for organic motion
            const ox = orb.x + Math.sin(time * (1 + i * 0.4) + i * 1.5) * 0.15;
            const oy = orb.y + Math.cos(time * (0.8 + i * 0.3) + i * 2.0) * 0.12;

            const cx = ox * width;
            const cy = oy * height;
            const r = orb.r * Math.min(width, height);

            // Radial gradient for soft glow
            const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
            gradient.addColorStop(0, `rgba(${orb.color[0]}, ${orb.color[1]}, ${orb.color[2]}, 0.18)`);
            gradient.addColorStop(0.4, `rgba(${orb.color[0]}, ${orb.color[1]}, ${orb.color[2]}, 0.08)`);
            gradient.addColorStop(1, `rgba(${orb.color[0]}, ${orb.color[1]}, ${orb.color[2]}, 0)`);

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        });

        requestAnimationFrame(drawOrbs);
    }

    drawOrbs();


    // ---- Scroll-based nav styling + scroll-to-top ----
    const nav = document.getElementById('nav');
    const scrollTopBtn = document.getElementById('scrollTop');

    const handleScroll = () => {
        if (window.scrollY > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        // Show/hide scroll-to-top button
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ---- Mobile nav toggle ----
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('active');
    });

    // Close mobile nav when clicking a link
    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('active');
        });
    });

    // ---- Scroll reveal animations ----
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation for grid items
                const siblings = entry.target.parentElement.querySelectorAll('.animate-on-scroll');
                const siblingIndex = Array.from(siblings).indexOf(entry.target);
                const delay = siblingIndex * 80;

                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));

    // ---- Smooth scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            const target = document.querySelector(href);
            if (target) {
                // Find the section header content inside so we skip the section padding
                const header = target.querySelector('.section-header') || target.querySelector('.section-tag');
                const scrollTarget = header || target;
                // Use offsetTop (not getBoundingClientRect) to ignore CSS transforms from animations
                let top = 0;
                let el = scrollTarget;
                while (el) {
                    top += el.offsetTop;
                    el = el.offsetParent;
                }
                const wasScrolled = nav.classList.contains('scrolled');
                nav.classList.add('scrolled');
                const navHeight = nav.offsetHeight;
                if (!wasScrolled) nav.classList.remove('scrolled');
                window.scrollTo({
                    top: top - navHeight - 24,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ---- Contact form ----
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.contact-submit');
            const originalText = btn.textContent;
            btn.textContent = 'Sent!';
            btn.style.background = '#16a34a';
            btn.style.boxShadow = '0 4px 20px rgba(22,163,74,0.3)';
            contactForm.reset();
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.style.boxShadow = '';
            }, 2500);
        });
    }
});

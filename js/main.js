// main.js - Studio91 Interactions

document.addEventListener('DOMContentLoaded', () => {

    // Dynamic Favicon Initialization
    const addFavicon = () => {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        const isSubfolder = window.location.pathname.includes('/stories/');
        link.href = isSubfolder ? '../images/favicon.jpg' : 'images/favicon.jpg';
        link.type = 'image/jpeg';
    };
    addFavicon();

    // Dynamic Brand Logo Replacement
    const replaceNavLogo = () => {
        const logoElements = document.querySelectorAll('.logo');
        logoElements.forEach(el => {
            if (el.textContent.trim() === 'STUDIO91' || el.textContent.trim() === 'STUDIO 91') {
                el.textContent = 'STUDIO 91';
            }
        });
    };
    replaceNavLogo();


    // Dynamic Components Initialization
    if (typeof createHero === 'function') {
        if (document.getElementById('home-hero-slider') && typeof Images !== 'undefined') {
            createHero('home-hero-slider', Images.homeHero);
        }
        if (document.getElementById('welcome-hero-slides') && typeof Images !== 'undefined') {
            createHero('welcome-hero-slides', Images.welcomeHero, false, true);
        }
        if (document.getElementById('stories-hero-slider') && typeof Images !== 'undefined') {
            createHero('stories-hero-slider', Images.storiesHero, true);
        }
    }

    if (typeof createGallery === 'function') {
        if (document.getElementById('photo-gallery') && typeof Images !== 'undefined') {
            createGallery('photo-gallery', Images.photographyGallery);
        }
        if (document.getElementById('justus-gallery') && typeof Images !== 'undefined') {
            createGallery('justus-gallery', Images.justUsGallery);
        }
    }

    if (typeof createVideoGallery === 'function' && document.getElementById('video-gallery') && typeof Videos !== 'undefined') {
        createVideoGallery('video-gallery', Videos.filmsList);
    }

    if (typeof createTestimonials === 'function' && document.getElementById('stories-slider-container') && typeof Images !== 'undefined') {
        createTestimonials('stories-slider-container', Images.testimonials);
    }

    if (typeof createCapturedStories === 'function' && document.getElementById('stories-grid-container') && typeof Images !== 'undefined') {
        createCapturedStories('stories-grid-container', Images.storiesList);
    }

    if (typeof createStorySlideshow === 'function' && document.getElementById('story-slideshow-inner') && typeof Images !== 'undefined') {
        const pageFilename = window.location.pathname.split('/').pop().replace('.html', '');
        const storyPhotos = (Images.storyPhotos && Images.storyPhotos[pageFilename]) ? Images.storyPhotos[pageFilename] : [];
        createStorySlideshow('story-slideshow-inner', storyPhotos, pageFilename.replace('-', ' ').toUpperCase());
    }

    if (typeof populateSiteContent === 'function') {
        populateSiteContent();
    }

    // Page Transition
    document.body.classList.add('loaded');

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');

            // Toggle body scroll
            document.body.style.overflow = isActive ? 'hidden' : '';

            // Toggle hamburger color based on menu state
            const spans = hamburger.querySelectorAll('span');
            if (isActive) {
                spans.forEach(span => span.style.backgroundColor = 'var(--color-text-main)');
            } else if (!navbar.classList.contains('scrolled')) {
                spans.forEach(span => span.style.backgroundColor = 'var(--color-white)');
            }
        });

        // Close mobile menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                    document.body.style.overflow = '';

                    // Reset hamburger span colors
                    const spans = hamburger.querySelectorAll('span');
                    if (!navbar.classList.contains('scrolled')) {
                        spans.forEach(span => span.style.backgroundColor = 'var(--color-white)');
                    } else {
                        spans.forEach(span => span.style.backgroundColor = 'var(--color-text-main)');
                    }
                }
            });
        });
    }

    // Hero Auto Slider (Home Page)
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;

        const nextSlide = () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        };

        const prevSlide = () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        };

        // Auto slide every 5 seconds
        const startSlider = () => {
            slideInterval = setInterval(nextSlide, 5000);
        };

        startSlider();

        // Manual Controls
        const nextBtn = document.querySelector('.slider-next');
        const prevBtn = document.querySelector('.slider-prev');

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                clearInterval(slideInterval);
                nextSlide();
                startSlider();
            });

            prevBtn.addEventListener('click', () => {
                clearInterval(slideInterval);
                prevSlide();
                startSlider();
            });
        }
    }

    // Scroll Animations (Intersection Observer)
    const animateElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    animateElements.forEach(el => observer.observe(el));

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 3D Tilt Animations
    if (typeof VanillaTilt !== 'undefined') {
        // Apply 3D tilt to Portfolio Segments
        VanillaTilt.init(document.querySelectorAll(".segment-item"), {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.3,
            scale: 1.02
        });

        // Apply 3D tilt to Pricing Plans
        VanillaTilt.init(document.querySelectorAll(".plan-card"), {
            max: 8,
            speed: 400,
            glare: true,
            "max-glare": 0.15
        });

        // Apply subtle 3D tilt to Philosophy Image
        VanillaTilt.init(document.querySelectorAll(".philosophy-img-wrapper"), {
            max: 5,
            speed: 500,
            glare: true,
            "max-glare": 0.1
        });
    }

    // Espresso Border Glow on Plans & Pricing package cards
    const packageCards = document.querySelectorAll('.package-card');
    if (packageCards.length > 0) {
        const ESPRESSO = '46, 33, 27';
        const GLOW_SIZE = 75;

        const glowAt = (x, y, alpha) =>
            `radial-gradient(ellipse ${GLOW_SIZE}% ${GLOW_SIZE}% at ${x}% ${y}%, rgba(${ESPRESSO}, ${alpha}), transparent 85%)`;

        packageCards.forEach((card) => {
            if (card.dataset.glowReady) return;
            card.dataset.glowReady = '1';

            const glow = document.createElement('div');
            glow.className = 'package-card-glow';

            const inner = document.createElement('div');
            inner.className = 'package-card-inner';
            while (card.firstChild) {
                inner.appendChild(card.firstChild);
            }
            card.appendChild(glow);
            card.appendChild(inner);

            card.addEventListener('pointermove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                glow.style.background = glowAt(x, y, 1);
            });
            card.addEventListener('pointerenter', () => {
                glow.style.background = glowAt(50, 50, 1);
            });
            card.addEventListener('pointerleave', () => {
                glow.style.background = glowAt(50, 50, 0);
            });
        });
    }

    // ChromaCard effect (Founder / Studio images on the About page)
    document.querySelectorAll('.chroma-card-root').forEach((root) => {
        if (root.dataset.chromaReady) return;
        root.dataset.chromaReady = '1';

        const fade = root.querySelector('.chroma-fade');
        const rect0 = root.getBoundingClientRect();
        let tx = rect0.width / 2;
        let ty = rect0.height / 2;
        let cx = tx;
        let cy = ty;
        let rafId = null;
        const LERP = 0.18; // smooth trailing, mirrors the component's damping

        const apply = () => {
            root.style.setProperty('--x', cx + 'px');
            root.style.setProperty('--y', cy + 'px');
        };
        apply();

        const loop = () => {
            cx += (tx - cx) * LERP;
            cy += (ty - cy) * LERP;
            apply();
            rafId = requestAnimationFrame(loop);
        };

        root.addEventListener('pointerenter', () => {
            if (fade) fade.style.opacity = '0';
            if (!rafId) loop();
        });
        root.addEventListener('pointermove', (e) => {
            const r = root.getBoundingClientRect();
            tx = e.clientX - r.left;
            ty = e.clientY - r.top;
        });
        root.addEventListener('pointerleave', () => {
            if (fade) fade.style.opacity = '1';
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            const r = root.getBoundingClientRect();
            tx = r.width / 2;
            ty = r.height / 2;
        });
    });

    // --- GSAP ScrollReveal Implementation ---
    const loadScript = (src, callback) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = callback;
        document.head.appendChild(script);
    };

    const initScrollReveal = () => {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);

        const baseOpacity = 0;
        const blurStrength = 10;
        const baseRotation = 5;

        // 1. Animate Text (Headings, Paragraphs, Intro Text, and Footer Text)
        const textElements = document.querySelectorAll('section h1, section h2, section h3, section h4, section h5, section h6, section p, footer h3, footer h4, footer p, .intro-text, .intro-main-title, .story-quote, .story-couple-name');

        textElements.forEach(el => {
            if (el.querySelector('.word')) return; // Already split

            // Split text by words recursively to preserve HTML elements like <br>
            const splitTextNodes = (node) => {
                if (node.nodeType === 3) { // Text node
                    const text = node.nodeValue;
                    if (text.trim() === '') return;

                    const words = text.split(/(\s+)/);
                    const fragment = document.createDocumentFragment();
                    words.forEach(word => {
                        if (word.trim() === '') {
                            fragment.appendChild(document.createTextNode(word));
                        } else {
                            const span = document.createElement('span');
                            span.className = 'word';
                            span.textContent = word;
                            fragment.appendChild(span);
                        }
                    });
                    node.parentNode.replaceChild(fragment, node);
                } else if (node.nodeType === 1 && !node.classList.contains('word')) { // Element node
                    Array.from(node.childNodes).forEach(splitTextNodes);
                }
            };

            splitTextNodes(el);

            // Container rotation
            gsap.fromTo(el,
                { transformOrigin: '0% 50%', rotate: baseRotation },
                {
                    ease: 'none',
                    rotate: 0,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top bottom',
                        end: 'bottom bottom',
                        scrub: 0.6
                    }
                }
            );

            // Words opacity and blur
            const wordElements = el.querySelectorAll('.word');
            if (wordElements.length > 0) {
                gsap.fromTo(wordElements,
                    { opacity: baseOpacity, filter: `blur(${blurStrength}px)` },
                    {
                        ease: 'none',
                        opacity: 1,
                        filter: 'blur(0px)',
                        stagger: 0.05,
                        scrollTrigger: {
                            trigger: el,
                            start: 'top bottom-=20%',
                            end: 'bottom bottom',
                            scrub: 0.6
                        }
                    }
                );
            }
        });

        // 2. Animate Images
        const imageElements = document.querySelectorAll('.gallery-item img, .segment-img');

        imageElements.forEach(img => {
            gsap.fromTo(img,
                { opacity: 0, y: 40, filter: `blur(${blurStrength}px)` },
                {
                    ease: 'none',
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    scrollTrigger: {
                        trigger: img,
                        start: 'top bottom',
                        end: 'bottom bottom-=10%',
                        scrub: 0.6
                    }
                }
            );
        });
    };

    // Load GSAP sequentially then init
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', () => {
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js', () => {
            initScrollReveal();
        });
    });

});



// js/components.js - Reusable Rendering Components & Helper Utilities

/**
 * Universal Image Renderer with lazy loading, decoding, fetchpriority, and error fallback
 */
function renderImage(src, alt = '', options = {}) {
    const {
        className = '',
        style = '',
        fetchpriority = '',
        fallbackSrc = Settings.placeholderImage,
        isHero = false,
        dataset = {}
    } = options;

    const lazyAttr = (Settings.lazyLoading && !isHero) ? 'loading="lazy"' : '';
    const priorityAttr = (fetchpriority || isHero) ? 'fetchpriority="high"' : '';
    const decodeAttr = 'decoding="async"';

    let dataAttrs = '';
    Object.keys(dataset).forEach(key => {
        dataAttrs += ` data-${key}="${dataset[key]}"`;
    });

    const fallbackHandler = `onerror="if(this.dataset.tried) return; this.dataset.tried='1'; this.src='${fallbackSrc}';"`;

    return `<img src="${src}" alt="${alt}" class="${className}" style="${style}" ${lazyAttr} ${priorityAttr} ${decodeAttr} ${dataAttrs} ${fallbackHandler}>`;
}

/**
 * Hero Slider Renderer (home.html & captured-stories.html)
 */
function createHero(containerId, slidesData, isStories = false, isWelcome = false) {
    const container = document.getElementById(containerId);
    if (!container || !slidesData || !slidesData.length) return;

    let html = '';
    slidesData.forEach((slide, index) => {
        const activeClass = index === 0 ? 'active' : '';
        const bgUrl = slide.img || slide.src;
        const fallbackUrl = slide.fallbackImg || Settings.placeholderHero;

        if (isStories) {
            html += `
                <div class="slide ${activeClass}" style="background-image: url('${bgUrl}');" data-fallback="${fallbackUrl}">
                    <div class="hero-content">
                        <p class="intro-eyebrow" style="color: #fff; margin-bottom: 1rem;">${slide.location}</p>
                        <h1 class="tagline" style="margin-bottom: 2rem;">${slide.names}</h1>
                        <a href="${slide.link}" class="btn" style="border-color: #fff; color: #fff;">View Story</a>
                    </div>
                </div>
            `;
        } else {
            html += `<div class="slide ${activeClass}" style="background-image: url('${bgUrl}');" data-fallback="${fallbackUrl}"></div>`;
        }
    });

    // Add controls and content if home hero
    if (!isStories && !isWelcome) {
        html += `
            <div class="hero-content">
                <h1 class="tagline">${Content.brand.tagline}</h1>
            </div>
            <div class="slider-controls">
                <button class="slider-arrow slider-prev" aria-label="Previous Slide"><i class="fas fa-chevron-left"></i></button>
                <button class="slider-arrow slider-next" aria-label="Next Slide"><i class="fas fa-chevron-right"></i></button>
            </div>
        `;
    } else if (isStories) {
        html += `
            <div class="slider-controls">
                <button class="slider-arrow slider-prev" aria-label="Previous Slide"><i class="fas fa-chevron-left"></i></button>
                <button class="slider-arrow slider-next" aria-label="Next Slide"><i class="fas fa-chevron-right"></i></button>
            </div>
        `;
    }

    container.innerHTML = html;

    // Attach background image loader with fallback fallback
    container.querySelectorAll('.slide').forEach(slide => {
        const urlMatch = slide.style.backgroundImage.match(/url\(['"]?(.*?)['"]?\)/);
        if (urlMatch && urlMatch[1]) {
            const img = new Image();
            img.src = urlMatch[1];
            img.onerror = () => {
                const fb = slide.dataset.fallback;
                if (fb) slide.style.backgroundImage = `url('${fb}')`;
            };
        }
    });
}

/**
 * Dynamic Gallery Grid Renderer (portfolio-photography.html & portfolio-justus.html)
 */
function createGallery(containerId, itemsData) {
    const container = document.getElementById(containerId);
    if (!container || !itemsData) return;

    let html = '';
    itemsData.forEach((item, i) => {
        const className = item.isLandscape ? 'landscape' : 'portrait';
        const imgTag = renderImage(item.src, item.alt || `Photo ${i + 1}`, {
            fallbackSrc: item.fallbackSrc || Settings.placeholderImage
        });

        html += `
            <div class="gallery-item animate-on-scroll ${className}">
                ${imgTag}
            </div>
        `;
    });

    container.innerHTML = html;
}

/**
 * Film Gallery Renderer (portfolio-films.html)
 */
function createVideoGallery(containerId, filmsData) {
    const container = document.getElementById(containerId);
    if (!container || !filmsData) return;

    let html = '';
    filmsData.forEach((film, i) => {
        const num = i + 1;
        const imgTag = renderImage(film.poster, film.title, {
            style: 'width: 100%; height: 100%; object-fit: cover;',
            fallbackSrc: Settings.placeholderLandscape
        });

        html += `
            <div class="film-row animate-on-scroll" style="margin-bottom: 5rem;">
                <div class="gallery-item" style="aspect-ratio: 16/9; position: relative; background: var(--color-light-gray); overflow: hidden; width: 100%;">
                    ${imgTag}
                    <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;">
                        <a href="${film.videoUrl}" target="_blank" class="play-btn" style="width: 80px; height: 80px; border-radius: 50%; background: rgba(255,255,255,0.9); display: flex; align-items: center; justify-content: center; color: var(--color-text-main); font-size: 1.5rem; transition: var(--transition-smooth);" aria-label="Play Film ${film.title}">
                            <i class="fas fa-play" style="margin-left: 4px;"></i>
                        </a>
                    </div>
                </div>
                <div class="film-info" style="margin-top: 1.5rem; text-align: center;">
                    <p style="font-family: var(--font-alt); font-size: 0.75rem; letter-spacing: 3px; text-transform: uppercase; color: var(--color-text-light); margin-bottom: 0.5rem;">${film.location}</p>
                    <h3 style="font-family: var(--font-main); font-size: 2.2rem; letter-spacing: 2px; color: var(--color-text-main); text-transform: uppercase; margin: 0;">${film.title}</h3>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

/**
 * Stories of Love Slider Renderer (about.html)
 */
function createTestimonials(containerId, testimonialsData) {
    const container = document.getElementById(containerId);
    if (!container || !testimonialsData) return;

    let html = '';
    testimonialsData.forEach((item, index) => {
        const activeClass = index === 0 ? 'active' : '';
        const imgTag = renderImage(item.img, item.couple, {
            fallbackSrc: Settings.placeholderImage
        });

        html += `
            <div class="story-slide ${activeClass}">
                <div class="story-text-side">
                    <span class="story-note-title">Stories of Love</span>
                    <h3 class="story-couple-name">${item.couple}</h3>
                    <p class="story-quote">${item.quote}</p>
                </div>
                <div class="story-img-side">
                    ${imgTag}
                </div>
            </div>
        `;
    });

    // Add controls
    html += `
        <div class="story-controls">
            <button id="story-prev" aria-label="Previous Story"><i class="fas fa-long-arrow-alt-left"></i></button>
            <span id="story-counter">01 / 0${testimonialsData.length}</span>
            <button id="story-next" aria-label="Next Story"><i class="fas fa-long-arrow-alt-right"></i></button>
        </div>
    `;

    container.innerHTML = html;
}

/**
 * Captured Stories Grid Renderer (captured-stories.html)
 */
function createCapturedStories(containerId, storiesData) {
    const container = document.getElementById(containerId);
    if (!container || !storiesData) return;

    let html = '';
    storiesData.forEach((story, i) => {
        const delay = (i % 3) * 0.1;
        const imgTag = renderImage(story.img, story.names, {
            className: 'segment-img',
            fallbackSrc: story.fallbackImg || Settings.placeholderImage
        });

        html += `
            <a href="${story.link}" class="segment-item animate-on-scroll" style="transition-delay: ${delay}s;" data-tilt data-tilt-max="5" data-tilt-speed="400">
                ${imgTag}
                <div class="story-info">
                    <p class="story-location">${story.location}</p>
                    <h3 class="story-names">${story.names}</h3>
                </div>
            </a>
        `;
    });

    container.innerHTML = html;
}

/**
 * Story Slideshow 30-Photo Renderer (stories/*.html)
 */
function createStorySlideshow(containerId, photosData, storyName = 'Story') {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    const items = Array.isArray(photosData) ? photosData : [];

    items.forEach((item, i) => {
        const activeClass = i === 0 ? 'active' : '';
        const imgTag = renderImage(item.src, item.alt || `${storyName} Photo ${i + 1}`, {
            fallbackSrc: item.fallbackSrc || Settings.placeholderLandscape,
            isHero: i === 0
        });

        html += `<div class="story-slide ${activeClass}">${imgTag}</div>`;
    });

    container.innerHTML = html;
}

/**
 * Renders Plans & Pricing packages dynamically from Content database
 */
function renderPlansPackages() {
    const section = document.getElementById('plans-packages-section');
    if (!section || typeof Content === 'undefined' || !Content.plansPage) return;

    const data = Content.plansPage;

    // Hydrate Header Note
    const headerText = document.querySelector('header .container p');
    if (headerText && data.headerNote) {
        headerText.textContent = data.headerNote;
    }

    let html = '';
    data.sections.forEach((sec, secIdx) => {
        const extraClass = sec.isMaternity ? ' maternity-container' : '';

        html += `
            <!-- ${sec.title} Section -->
            <div class="container text-center animate-on-scroll" style="margin-top: 4rem;" id="${sec.id}">
                <h2 style="color: var(--color-text-main); margin-bottom: 4rem;">${sec.title}</h2>
            </div>

            <div class="packages-container${extraClass}">
        `;

        sec.packages.forEach((pkg, pkgIdx) => {
            const delay = pkgIdx > 0 ? ` style="transition-delay: ${pkgIdx * 0.1}s;"` : '';

            // Look up image from Images database using section id and index
            const imgData = (typeof Images !== 'undefined' && Images.packages && Images.packages[sec.id])
                ? Images.packages[sec.id][pkgIdx]
                : { img: '', alt: '' };
            const imgSrc = imgData.img || '';
            const imgAlt = imgData.alt || '';

            let inclusionsHtml = '';
            pkg.inclusions.forEach(inc => {
                inclusionsHtml += `<li>${inc}</li>`;
            });

            let deliverablesHtml = '';
            pkg.deliverables.forEach(del => {
                deliverablesHtml += `<li>${del}</li>`;
            });

            let videosHtml = '';
            if (pkg.videos && pkg.videos.length) {
                pkg.videos.forEach(vid => {
                    videosHtml += `<li>${vid}</li>`;
                });
            }

            html += `
                <div class="package-card animate-on-scroll"${delay}>
                    <div class="package-img-wrapper">
                        ${renderImage(imgSrc, imgAlt, { className: 'package-img' })}
                    </div>
                    <div class="package-header">
                        <h2 class="package-title">${pkg.title}</h2>
                        <div class="package-price">
                            <span class="price-amount">${pkg.price}</span>
                            <span class="price-sub">${pkg.sub}</span>
                        </div>
                    </div>
                    <ul class="package-list">
                        ${inclusionsHtml}
                    </ul>
                    <span class="section-label">: Deliverables :</span>
                    <ul class="deliverables-list">
                        ${deliverablesHtml}
                    </ul>
                    ${videosHtml ? `<ul class="video-list">${videosHtml}</ul>` : ''}
                </div>
            `;
        });

        html += `</div>`;

        // Add divider if not the last section
        if (secIdx < data.sections.length - 1) {
            html += `<div style="height: 1px; width: 100%; background: var(--color-bg-light); margin: 4rem 0;"></div>`;
        }
    });

    section.innerHTML = html;
}

/**
 * Hydrates Portfolio Page segments (portfolio.html) from Images and Videos databases
 */
function renderPortfolioSegments() {
    const workSegments = document.querySelector('.work-segments');
    if (!workSegments) return;

    // 1. Photography Segment
    const photoLink = workSegments.querySelector('a[href="portfolio-photography.html"]');
    if (photoLink && typeof Images !== 'undefined' && Images.portfolioCovers && Images.portfolioCovers.photography) {
        const img = photoLink.querySelector('.segment-img');
        if (img) {
            img.onerror = function () {
                if (this.dataset.tried) return;
                this.dataset.tried = '1';
                this.src = Settings.placeholderImage;
            };
            img.src = Images.portfolioCovers.photography;
        }
    }

    // 2. Films Segment
    const filmsLink = workSegments.querySelector('a[href="portfolio-films.html"]');
    if (filmsLink && typeof Videos !== 'undefined' && Videos.portfolioCovers && Videos.portfolioCovers.films) {
        const video = filmsLink.querySelector('video');
        if (video) {
            if (Videos.portfolioCovers.films.poster) {
                video.setAttribute('poster', Videos.portfolioCovers.films.poster);
            }
            const source = video.querySelector('source');
            if (source && Videos.portfolioCovers.films.src) {
                source.src = Videos.portfolioCovers.films.src;
                video.load(); // Reload the video element to apply the new src
            }
        }
    }

    // 3. Just Us Segment
    const justUsLink = workSegments.querySelector('a[href="portfolio-justus.html"]');
    if (justUsLink && typeof Images !== 'undefined' && Images.portfolioCovers && Images.portfolioCovers.justUs) {
        const img = justUsLink.querySelector('.segment-img');
        if (img) {
            img.onerror = function () {
                if (this.dataset.tried) return;
                this.dataset.tried = '1';
                this.src = Settings.placeholderImage;
            };
            img.src = Images.portfolioCovers.justUs;
        }
    }
}

/**
 * Hydrates static text elements, SEO meta tags, and footers from Content database
 */
function populateSiteContent() {
    if (typeof Content === 'undefined') return;

    // Update Footer Text & Descriptions across all pages
    document.querySelectorAll('.footer-description').forEach(el => {
        if (Content.footer && Content.footer.description) {
            el.textContent = Content.footer.description;
        }
    });

    document.querySelectorAll('.footer-socials a[href*="instagram"]').forEach(el => {
        if (Content.brand && Content.brand.instagram) {
            el.href = Content.brand.instagram;
        }
    });

    // Page-specific SEO Hydration
    const pathname = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
    const pageKeyMap = {
        '': 'home',
        'index': 'home',
        'home': 'home',
        'about': 'about',
        'portfolio': 'portfolio',
        'portfolio-photography': 'portfolioPhotography',
        'portfolio-films': 'portfolioFilms',
        'portfolio-justus': 'portfolioJustUs',
        'captured-stories': 'capturedStories',
        'plans': 'plans',
        'contact': 'contact'
    };

    const key = pageKeyMap[pathname];
    if (key && Content.seo && Content.seo[key]) {
        if (Content.seo[key].title) document.title = Content.seo[key].title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && Content.seo[key].description) {
            metaDesc.setAttribute('content', Content.seo[key].description);
        }
    }

    // Update Page Hero Background Image dynamically
    const pageHero = document.querySelector('.page-hero');
    if (pageHero && key && typeof Images !== 'undefined' && Images.pageHeroes) {
        let heroImg = Images.pageHeroes[key];
        if (!heroImg && key.startsWith('portfolio')) {
            heroImg = Images.pageHeroes['portfolio'];
        }
        if (heroImg) {
            const img = new Image();
            img.onload = () => {
                pageHero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${heroImg}')`;
            };
            img.onerror = () => {
                pageHero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('${Settings.placeholderHero}')`;
            };
            img.src = heroImg;
        }
    }

    // Update Philosophy Image dynamically
    const philosophyImg = document.querySelector('.philosophy-img');
    if (philosophyImg && typeof Images !== 'undefined' && Images.philosophy) {
        philosophyImg.src = Images.philosophy;
    }

    // Update Founder Image dynamically on About page
    if (key === 'about') {
        const founderImgs = document.querySelectorAll('.chroma-card img[alt="Founder"]');
        if (founderImgs.length > 0 && typeof Images !== 'undefined' && Images.founder) {
            founderImgs.forEach(img => {
                img.onerror = function() {
                    if (this.dataset.tried) return;
                    this.dataset.tried = '1';
                    this.src = Settings.placeholderImage;
                };
                img.src = Images.founder;
            });
        }
    }

    // Update Homepage Services Images dynamically
    if (key === 'home') {
        const serviceCards = document.querySelectorAll('.work-segments .service-card-wrapper');
        if (serviceCards.length > 0 && typeof Images !== 'undefined' && Images.services) {
            serviceCards.forEach((card, idx) => {
                const serviceData = Images.services[idx];
                if (serviceData) {
                    const img = card.querySelector('.segment-img');
                    if (img) {
                        img.onerror = function() {
                            if (this.dataset.tried) return;
                            this.dataset.tried = '1';
                            this.src = Settings.placeholderImage;
                        };
                        img.src = serviceData.img;
                    }
                }
            });
        }
    }

    if (key === 'plans') {
        renderPlansPackages();
    }

    if (key === 'portfolio') {
        renderPortfolioSegments();
    }
}

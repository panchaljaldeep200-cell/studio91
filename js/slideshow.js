// slideshow.js - Logic for the 30-photo slideshow

document.addEventListener('DOMContentLoaded', () => {
    const slideshows = document.querySelectorAll('.slideshow-container');

    slideshows.forEach(slideshow => {
        const inner = slideshow.querySelector('.slideshow-inner');
        const slides = slideshow.querySelectorAll('.story-slide');
        const prevBtn = slideshow.querySelector('.prev-btn');
        const nextBtn = slideshow.querySelector('.next-btn');
        const dotsContainer = slideshow.querySelector('.slideshow-dots');
        const counter = slideshow.querySelector('.current-count');
        
        let currentIndex = 0;
        const totalSlides = slides.length;

        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetAutoPlay();
            });
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.dot');

        function updateCounter() {
            if (counter) counter.textContent = currentIndex + 1;
        }

        function goToSlide(index) {
            slides[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');
            
            currentIndex = index;
            
            slides[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
            
            updateCounter();
            
            // Scroll dots into view if needed
            dots[currentIndex].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }

        function nextSlide() {
            let next = (currentIndex + 1) % totalSlides;
            goToSlide(next);
        }

        function prevSlide() {
            let prev = (currentIndex - 1 + totalSlides) % totalSlides;
            goToSlide(prev);
        }

        // Auto play functionality
        let autoPlayInterval = 2500; // 2.5 seconds
        let autoPlayTimer;

        function startAutoPlay() {
            stopAutoPlay(); // Clear any existing timer
            autoPlayTimer = setInterval(nextSlide, autoPlayInterval);
        }

        function stopAutoPlay() {
            if (autoPlayTimer) {
                clearInterval(autoPlayTimer);
            }
        }

        // Reset timer on manual interaction
        function resetAutoPlay() {
            startAutoPlay();
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoPlay();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoPlay();
            });
        }

        // Keyboard navigation reset
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                nextSlide();
                resetAutoPlay();
            }
            if (e.key === 'ArrowLeft') {
                prevSlide();
                resetAutoPlay();
            }
        });

        // Pause on hover
        slideshow.addEventListener('mouseenter', stopAutoPlay);
        slideshow.addEventListener('mouseleave', startAutoPlay);

        // Initial start
        startAutoPlay();
    });
});

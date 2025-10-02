export class Carousel {
    constructor(carouselId, intervalTime = 5000) {
        this.carousel = document.getElementById(carouselId);
        this.items = this.carousel ? Array.from(this.carousel.children) : [];
        this.currentIndex = 0;
        this.intervalTime = intervalTime;
        this.slideInterval = null;

        if (!this.carousel || this.items.length === 0) {
            console.warn('Carousel initialization failed: missing elements');
            return;
        }

        this.start();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }

    updateCarousel() {
        this.carousel.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }

    start() {
        this.slideInterval = setInterval(() => {
            const nextIndex = (this.currentIndex + 1) % this.items.length;
            this.goToSlide(nextIndex);
        }, this.intervalTime);
    }

    stop() {
        clearInterval(this.slideInterval);
    }
}
let currentIndex = 0;
const swiperWrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');
const totalSlides = slides.length;

document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Wrap to last slide
    }
    updateSlidePosition();
});

document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Wrap to first slide
    }
    updateSlidePosition();
});

function updateSlidePosition() {
    swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

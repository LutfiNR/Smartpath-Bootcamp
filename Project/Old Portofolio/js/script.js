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
const burgerMenu = document.getElementById("burger-menu");
let burgerNav = document.getElementById("burger-nav");
let click = 0;
burgerMenu.addEventListener("click", () => {
    if (click == 0) {
        burgerNav.style.display = "block";
        click += 1;
    } else {
        burgerNav.style.display= "none";
        click -= 1;
    }
})
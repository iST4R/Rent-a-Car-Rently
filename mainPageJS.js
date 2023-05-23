const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function showSlide() {
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

setInterval(nextSlide, 5000); // Repeat every 5 seconds

showSlide();
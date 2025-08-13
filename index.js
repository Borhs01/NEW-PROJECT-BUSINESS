let currentSlide = 0;
const slides = document.querySelectorAll(".header__bottom .slide");
let slideInterval = setInterval(showNextSlide, 10000);

function showSlide(index) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function showNextSlide(reset = false) {
  showSlide(currentSlide + 1);
  if (reset) resetTimer();
}

function showPrevSlide() {
  showSlide(currentSlide - 1);
  resetTimer();
}

function resetTimer() {
  clearInterval(slideInterval);
  slideInterval = setInterval(showNextSlide, 10000000000);
}


const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});

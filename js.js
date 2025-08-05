

// Navbar Scroll Background
window.addEventListener("scroll", function () {
  const element = document.querySelector(".change-color");
  if (!element) return;

  if (window.scrollY > 50) {
    element.classList.add("scrolled");
  } else {
    element.classList.remove("scrolled");
  }
});

// ScrollReveal Animations
ScrollReveal({ 
  distance: '80px',
  duration: 1400,
});

ScrollReveal().reveal('.left', { delay: 250, origin: 'left', interval: 200 });
ScrollReveal().reveal('.right', { delay: 250, origin: 'right', interval: 200 });
ScrollReveal().reveal('.top', { delay: 250, origin: 'top', interval: 100 });

// Slider Function
function scrollGallery(container, direction, distance = 420) {
  if (!container) return;
  container.style.scrollBehavior = "smooth";
  container.scrollLeft += direction === "next" ? distance : -distance;
  setTimeout(() => {
    container.style.scrollBehavior = "auto";
  }, 500);
}

// Slide One
const scrollContainerOne = document.querySelector(".gallery");
const backBtnOne = document.getElementById("backBtn");
const nextBtnOne = document.getElementById("nextBtn");

if (scrollContainerOne && backBtnOne && nextBtnOne) {
  nextBtnOne.addEventListener("click", () => scrollGallery(scrollContainerOne, "next"));
  backBtnOne.addEventListener("click", () => scrollGallery(scrollContainerOne, "back"));
}

// Slide Two
const scrollContainerTwo = document.querySelector(".galleryTwo");
const backBtnTwo = document.getElementById("backBtnTwo");
const nextBtnTwo = document.getElementById("nextBtnTwo");

if (scrollContainerTwo && backBtnTwo && nextBtnTwo) {
  nextBtnTwo.addEventListener("click", () => scrollGallery(scrollContainerTwo, "next"));
  backBtnTwo.addEventListener("click", () => scrollGallery(scrollContainerTwo, "back"));
}

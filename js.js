// scroll nav
window.addEventListener("scroll", function () {
  const element = document.querySelector(".change-color");
  if (window.scrollY > 50) {
    element.classList.add("scrolled");
  } else {
    element.classList.remove("scrolled");
  }
});

// anima scroll
ScrollReveal({ 
  distance: '80px',
  duration: 1400,
});

ScrollReveal().reveal('.left', { delay: 250, origin: 'left', interval: 200});
ScrollReveal().reveal('.right', { delay: 250, origin: 'right' , interval: 200});
ScrollReveal().reveal('.top', { delay: 250, origin: 'top', interval: 100});


// Slide One
let scrollContainerOne = document.querySelector(".gallery");
let backBtnOne = document.getElementById("backBtn");
let nextBtnOne = document.getElementById("nextBtn");

nextBtnOne.addEventListener("click", () => {
  scrollContainerOne.style.scrollBehavior = "smooth";
  scrollContainerOne.scrollLeft += 420;
  setTimeout(() => {
    scrollContainerOne.style.scrollBehavior = "auto";
  }, 500);
});

backBtnOne.addEventListener("click", () => {
  scrollContainerOne.style.scrollBehavior = "smooth";
  scrollContainerOne.scrollLeft -= 420;
  setTimeout(() => {
    scrollContainerOne.style.scrollBehavior = "auto";
  }, 500);
});


// Slide Two
let scrollContainerTwo = document.querySelector(".galleryTwo");
let backBtnTwo = document.getElementById("backBtnTwo");
let nextBtnTwo = document.getElementById("nextBtnTwo");

nextBtnTwo.addEventListener("click", () => {
  scrollContainerTwo.style.scrollBehavior = "smooth";
  scrollContainerTwo.scrollLeft += 420;
  setTimeout(() => {
    scrollContainerTwo.style.scrollBehavior = "auto";
  }, 500);
});

backBtnTwo.addEventListener("click", () => {
  scrollContainerTwo.style.scrollBehavior = "smooth";
  scrollContainerTwo.scrollLeft -= 420;
  setTimeout(() => {
    scrollContainerTwo.style.scrollBehavior = "auto";
  }, 500);
});

window.addEventListener("scroll", function () {
  const element = document.querySelector(".change-color");
  if (window.scrollY > 50) {
    element.classList.add("scrolled");
  } else {
    element.classList.remove("scrolled");
  }
});

// scroll trans
ScrollReveal({
  distance: "80px",
  duration: 1400,
});

ScrollReveal().reveal(".name", { delay: 250, origin: "left", interval: 200 });
ScrollReveal().reveal(".right", { delay: 250, origin: "right" });
ScrollReveal().reveal(".top", { delay: 250, origin: "top", interval: 100 });


let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel",(evt) => {

  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltay
  scrollContainer.style.scrollBehavior = "auto";

});

nextBtn.addEventListener("click", ()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", ()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});
window.addEventListener("scroll", function () {
  const element = document.querySelector(".change-color");
  if (window.scrollY > 50) {
    element.classList.add("scrolled");
  } else {
    element.classList.remove("scrolled");
  }
});


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
  scrollContainer.scrollLeft += 200;
});

backBtn.addEventListener("click", ()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 200;
});




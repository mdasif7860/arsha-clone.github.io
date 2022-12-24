let bi_list = document.querySelector(".bi-list");
let bi_x = document.querySelector(".bi-x");
let header = document.getElementById("header");
let footer = document.getElementById("footer-section")

bi_list.addEventListener("click", () => {
  if (bi_list.classList.contains("bi-list")) {
    bi_x.classList.add("active-icon");
    bi_list.classList.remove("active-icon");
    header.style.left = "0px";
    footer.style.left = "0px";
  }
});
bi_x.addEventListener("click", () => {
  if (bi_x.classList.contains("bi-x")) {
    bi_list.classList.add("active-icon");
    bi_x.classList.remove("active-icon");
    header.style.left = "-300px";
    footer.style.left = "-300px";
  }
});
let typed = new Typed(".auto-type", {
  strings: ["Designer", "Developer", "Freelancer", "graphic Designer"],
  typeSpeed: 150,
  backSpeed: 60,
  loop: true,
});
jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

let btn = document.getElementsByClassName("indicator-btn");
let slide = document.getElementById("slide");
btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (let i = 0; i < 5; i++) {
    btn[i].classList.remove("active-indicator");
  }
  this.classList.add("active-indicator");
};
btn[1].onclick = function () {
  slide.style.transform = "translateX(-345px)";
  for (let i = 0; i < 5; i++) {
    btn[i].classList.remove("active-indicator");
  }
  this.classList.add("active-indicator");
};
btn[2].onclick = function () {
  slide.style.transform = "translateX(-690px)";
  for (let i = 0; i < 5; i++) {
    btn[i].classList.remove("active-indicator");
  }
  this.classList.add("active-indicator");
};

btn[3].onclick = function () {
  slide.style.transform = "translateX(-1040px)";
  for (let i = 0; i < 5; i++) {
    btn[i].classList.remove("active-indicator");
  }
  this.classList.add("active-indicator");
};
btn[4].onclick = function () {
  slide.style.transform = "translateX(-1390px)";
  for (let i = 0; i < 5; i++) {
    btn[i].classList.remove("active-indicator");
  }
  this.classList.add("active-indicator");
};

window.addEventListener('scroll', function(){
  let scrollIcon = document.getElementById("scroll-icon");
  if(window.pageYOffset >= 110){
    scrollIcon.style.display = "block";
  }
  else{
    scrollIcon.style.display= "none";
  }
})
// window.addEventListener('scroll', function(){
//   let navbar = document.getElementById("navigation")
//   if(window.pageYOffset >=50){
//     navigation.classList.add("nav-scroll")
//   }else{
//     navigation.classList.remove("nav-scroll")
//   }
// });
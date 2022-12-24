let list = document.querySelector(".list");
let cross = document.querySelector(".cross");
let navItem = document.querySelector(".all-nav-items");
list.addEventListener("click", () => {
  if (list.classList.contains("list")) {
    cross.classList.add("active-res");
    list.classList.remove("active-res");
    navItem.style.display = "block";
  }
});
cross.addEventListener("click", () => {
  if (cross.classList.contains("cross")) {
    list.classList.add("active-res");
    cross.classList.remove("active-res");
    navItem.style.display = "none";
  }
});

window.addEventListener('scroll', function(){
  let navbar = document.getElementById("navigation")
  if(window.pageYOffset >=50){
    navigation.classList.add("nav-scroll")
  }else{
    navigation.classList.remove("nav-scroll")
  }
});


let all = document.querySelector(".all");
let app = document.querySelector(".app");
let card = document.querySelector(".cardl");
let web = document.querySelector(".web");

app.addEventListener('click', ()=>{
  if(all.classList.contains("filter-active")){
    app.classList.add("filter-active")
    all.classList.remove("filter-active")
  }
});
card.addEventListener('click', ()=>{
  if(app.classList.contains("filter-active")){
    card.classList.add("filter-active")
    app.classList.remove("filter-active")
  }
});
web.addEventListener('click', ()=>{
  if(card.classList.contains("filter-active")){
    web.classList.add("filter-active")
    card.classList.remove("filter-active");
  }
});
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});



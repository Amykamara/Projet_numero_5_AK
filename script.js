
// Variables 
const btnLeft = document.querySelector(".arrow_left");
const btnright =document.querySelector(".arrow_right");
let slide = ["./assets/images/slideshow/slide1.jpg","./assets/images/slideshow/slide2.jpg", "./assets/images/slideshow/slide3.jpg","./assets/images/slideshow/slide4.png"];
const banner = document.querySelector(".banner-img");
let index = 0;
let dots = document.querySelectorAll(".dot");
console.log(dots);

// Je déclare/
banner.src= slide[index];
dots[index].classList.add("dot_selected");


// au clique Gauche

btnLeft.addEventListener("click" , function() {
    dots[index].classList.remove("dot_selected");
    
index --;
    if (index < 0 ) {
    index = slide.length -1  ;
    
}
banner.src= slide[index];
dots[index].classList.add("dot_selected");
});


// click droit 

btnright.addEventListener("click" , function() {
    dots[index].classList.remove("dot_selected");
index++;
    if (index > slide.length -1) {
    index = 0;
    
}
banner.src= slide[index];
dots[index].classList.add("dot_selected");
});



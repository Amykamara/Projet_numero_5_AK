// J’ai plusieurs slides

// J’ai un bouton left right

// Au clic → je passe à la suivante slide

// Arrivé à la dernière → je reviens à la première


// Variable Btn

const btnLeft = document.querySelector(".arrow_left");
const btnright =document.querySelector(".arrow_right");
let slide = ["./assets/images/slideshow/slide1.jpg","./assets/images/slideshow/slide2.jpg", "./assets/images/slideshow/slide3.jpg","./assets/images/slideshow/slide4.jpg"];
const banner = document.querySelector(".banner-img");
let index = 0;

// Je déclare/
banner.src= slide[0];


// au clique Gauche
 
btnLeft.addEventListener("click" , function(params) {
    
index --;
    if (index < 0 ) {
    index = 3  ;
    
}
banner.src= slide[index];
});

// click droit 

btnright.addEventListener("click" , function(params) {
    
index++;
    if (index > 3) {
    index = 0;
    
}
banner.src= slide[index];
});
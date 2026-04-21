
// Variables 
const btnLeft = document.querySelector(".arrow_left");
const btnright =document.querySelector(".arrow_right");
const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
const banner = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tagline");
let index = 0;
let dots = document.querySelectorAll(".dot");
console.log(dots);

// Je déclare/
banner.src = `./assets/images/slideshow/${slides[index].image}`;
tagLine.innerHTML = slides[index].tagLine;
dots[index].classList.add("dot_selected");


// au clique Gauche

btnLeft.addEventListener("click", function() {
    dots[index].classList.remove("dot_selected");

    index--;

    if (index < 0) {
        index = slides.length - 1;
    }

    banner.src = `./assets/images/slideshow/${slides[index].image}`;
    tagLine.innerHTML = slides[index].tagLine;

    dots[index].classList.add("dot_selected");
});


// click droit 

btnright.addEventListener("click", function() {
    dots[index].classList.remove("dot_selected");

    index++;

    if (index > slides.length - 1) {
        index = 0;
    }

    banner.src = `./assets/images/slideshow/${slides[index].image}`;
    tagLine.innerHTML = slides[index].tagLine;

    dots[index].classList.add("dot_selected");
});



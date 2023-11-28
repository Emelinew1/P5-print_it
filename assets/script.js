"use strict";

//------------------------- CONSTANTES
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const imageBanner 	  = document.querySelector(".banner-img");
const arrowLeft 	  = document.querySelector('.arrow_left');
const arrowRight 	  = document.querySelector('.arrow_right');
const dots 			  = document.querySelector('.dots');
const text 			  = document.querySelector("#banner p");
const NUMBER_OF_DOTS  = slides.length;

// ------------------------- VARIABLES
let counter = 0;

// ------------------------- FUNCTIONS
/** Updates the image and text *
 * @param {number} index - The index of the slide to be displayed */
function changeSlide(index) {
	const allDots = dots.children;
	imageBanner.src = `assets/images/slideshow/${slides[index].image}`;
	text.innerHTML = slides[index].tagLine;
	for (let i = 0; i < allDots.length; i++) {
		allDots[i].classList.toggle("dot_selected", i === index);
	}
	counter = index;
}

/** Moves the slides to the left. */
function moveLeft() {
	counter = (counter - 1 + slides.length) % slides.length;
	changeSlide(counter);
}

/* Moves the slide to the right */
function moveRight() {
	counter = (counter + 1) % slides.length;
	changeSlide(counter);
}

/* Adds event listeners for the arrowLeft and arrowRight elements */
function addListeners() {
	arrowLeft.addEventListener('click', moveLeft);
	arrowRight.addEventListener('click', moveRight);

}

/* Creates dots for each slide in the slideshow */
function addDots() {
	for (let i = 0; i < slides.length; i++) {
		const point = document.createElement('div');
		point.classList.add('dot');
		point.addEventListener('click', () => { changeSlide(i) });
		if (i === counter) point.classList.add("dot_selected");
		dots.appendChild(point);
	}
}

// *************** CODE PRINCIPAL ***************
addDots();
addListeners();











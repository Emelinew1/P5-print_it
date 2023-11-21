//------------------------- Slides
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

//------------------------- source & ajout des slides

//variable qui sélectionne la classe banner-img

const imageBanner = document.querySelector(".banner-img");

// le chemin relatif +le nom de fichier du tableau, débutant à l'index 0 pour la première image.
imageBanner.src = "assets/images/slideshow/" + slides[0].image;
imageBanner.alt = slides[0].tagLine;


//------------------------- Arrows
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');


arrow_left.addEventListener('click', () => {
	console.log('Flèche gauche cliquée!');
});

arrow_right.addEventListener('click', () => {
	console.log('Flèche droite cliquée!');
});

//--------------------------- Dots

// variable initiale avant la boucle
let compteur = 0;

//variable qui sélectionne la div avec la class dots
const dots = document.querySelector('.dots');

// Ajout de 4 divs ".dot" à la div parente ".dots"
for (let i = 0; i < 4; i++) {
	const dotElement = document.createElement('div');
	dotElement.classList.add('dot');
	dots.appendChild(dotElement);

	if (i == compteur) dotElement.classList.add("dot_selected");
}










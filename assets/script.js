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

// ------------------------- Variables

const imageBanner = document.querySelector(".banner-img");
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
const text = document.getElementById("banner").querySelector("p");
const numberOfDots = slides.length;
let compteur = 0;

//------------------------- Arrows

arrow_left.addEventListener('click', () => {
	console.log('Flèche gauche cliquée!');
});

arrow_right.addEventListener('click', () => {
	console.log('Flèche droite cliquée!');
});


// le chemin relatif +le nom de fichier du tableau, débutant à l'index 0 pour la première image.

imageBanner.src = "assets/images/slideshow/" + slides[0].image;
imageBanner.alt = slides[0].tagLine;

// ------------------------- Dots

//Ajout de 4 divs ".dot" à la div parente ".dots"
//For indique le nombre de dots,tant que i est inférieur à la taille du tableau, on ajoute +1 à i

for (let i = 0; i < numberOfDots; i++) {
	const dotElement = document.createElement('div');
	dotElement.classList.add('dot');
	dots.appendChild(dotElement);
  
	if (i === compteur) dotElement.classList.add("dot_selected");

// -------------- les dots changes quand on clique sur les fleche ou sur les dots
	dotElement.addEventListener('click', () => {
	  changeSlide(i);
	});
  }
  
 //-------------- changement d'images et texte au clic
  arrow_left.addEventListener('click', () => {
	compteur = (compteur - 1 + slides.length) % slides.length;
	changeSlide(compteur);
  });
  
  arrow_right.addEventListener('click', () => {
	compteur = (compteur + 1) % slides.length;
	changeSlide(compteur);
  });
  

  function changeSlide(index) {
	imageBanner.src = `assets/images/slideshow/${slides[index].image}`;
	text.innerHTML = slides[index].tagLine;
  
	const allDots = dots.children;
	for (let i = 0; i < allDots.length; i++) {
	  allDots[i].classList.toggle("dot_selected", i === index);
	}
  
	compteur = index;
	console.log("Changement de diapositive réussi!");
  }







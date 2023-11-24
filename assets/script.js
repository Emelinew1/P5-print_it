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

// ------------------------- Dots

//For indique le nombre de dots,tant que l'index du point est inférieur à la taille du tableau, on ajoute +1 à l'index du point
//Ajout de 4 divs ".dot" à la div parente ".dots"
for (let i = 0; i < slides.length; i++) {
	const point = document.createElement('div');
	point.classList.add('dot'); // on modifie la classe
	dots.appendChild(point);
  
	if (i === compteur) point.classList.add("dot_selected");

// -------------- les dots changes quand on clique sur les fleche ou sur les dots
	point.addEventListener('click', () => {
	  changeSlide(i);
	});
  }

 //-------------- changement d'images et texte au clic de maniere indéfini
 function changeSlide(index) {
	// Met à jour l'image et le texte
	imageBanner.src = `assets/images/slideshow/${slides[index].image}`;
	text.innerHTML = slides[index].tagLine;
  
	// Met à jour les points indicateurs
	const allDots = dots.children;
	for (let i = 0; i < allDots.length; i++) {
	  allDots[i].classList.toggle("dot_selected", i === index);
	}

	 // Met à jour le compteur 
	compteur = index;
	console.log("Changement de diapositive réussi!");
  }

  
 arrow_left.addEventListener('click', () => {
	compteur = (compteur - 1 + slides.length) % slides.length;
	changeSlide(compteur);
  });
  
  arrow_right.addEventListener('click', () => {
	compteur = (compteur + 1) % slides.length;
	changeSlide(compteur);
  });
  

  
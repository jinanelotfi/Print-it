const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// mise en place des eventListeners sur les 2 flèches

let arrowLeft = document.querySelector(".arrow_left")
	arrowLeft.addEventListener("click", ()=> {
		console.log("test de la flèche gauche");

	})

let arrowRight = document.querySelector(".arrow_right")
	arrowRight.addEventListener("click", ()=> {
		console.log("test de la flèche droite");
	})

// mise en place des points

let dotList = document.querySelector('.dots');

for (let i = 0; i < slides.length; i++) {
  let point = document.createElement('li');
  point.classList.add('dot');
  dotList.appendChild(point);
}

// On distingue le point en cours

let firstPoint = dotList.querySelector('.dot');
firstPoint.classList.add('dot_selected');


	
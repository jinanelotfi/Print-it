const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// mise en place des points

let dotList = document.querySelector('.dots');
let currentPoint = dotList.querySelector('.dot_selected');

for (let i = 0; i < slides.length; i++) {
  let point = document.createElement('li');
  point.classList.add('dot');
  dotList.appendChild(point);
}

// On distingue le point en cours

let firstPoint = dotList.querySelector('.dot');
firstPoint.classList.add('dot_selected');

// mise en place des eventListeners sur les 2 flèches

let arrowLeft = document.querySelector(".arrow_left")
	arrowLeft.addEventListener("click", ()=> {

		let currentPoint = dotList.querySelector('.dot_selected');
		let prevPoint = currentPoint.previousElementSibling;
		  
		if (!prevPoint) {
			prevPoint = dotList.lastElementChild;
		}
		
		let currentIndex = Array.from(dotList.children).indexOf(currentPoint);
		let prevIndex = Array.from(dotList.children).indexOf(prevPoint);	

		currentPoint.classList.remove('dot_selected');
		prevPoint.classList.add('dot_selected');

		let currentSlide = slides[currentIndex];
		let prevSlide = slides[prevIndex];
// changement des images
		let image = document.querySelector('.banner-img');
		let text = document.querySelector('#banner p');

		image.src = prevSlide.image;
		text.innerHTML = prevSlide.tagLine;		
			  
	});

let arrowRight = document.querySelector(".arrow_right")
	arrowRight.addEventListener("click", ()=> {
	
		let currentPoint = dotList.querySelector('.dot_selected');
		let nextPoint = currentPoint.nextElementSibling;
		  
		if (!nextPoint) {
			nextPoint = dotList.firstElementChild;
		}

		let currentIndex = Array.from(dotList.children).indexOf(currentPoint);
		let nextIndex = Array.from(dotList.children).indexOf(nextPoint);		
		  
		currentPoint.classList.remove('dot_selected');
		nextPoint.classList.add('dot_selected');

		let currentSlide = slides[currentIndex];
		let nextSlide = slides[nextIndex];
// changement des images
		let image = document.querySelector('.banner-img');
		let text = document.querySelector('#banner p');

		image.src = nextSlide.image;
		text.innerHTML = nextSlide.tagLine;
	});


	
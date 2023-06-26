// Récupérer les éléments du DOM
const slides = document.querySelectorAll('.slide');
const menuItems = document.querySelectorAll('.slider-menu li');
const navigation = document.querySelector('.navigation');
const playButton = document.querySelector('.play');
const stopButton = document.querySelector('.stop');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

let slideIndex = 0;
let autoPlayInterval;

// Fonction pour afficher la diapositive active et masquer les autres diapositives
function showSlide() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
      menuItems[index].classList.add('active');
    } else {
      slide.style.display = 'none';
      menuItems[index].classList.remove('active');
    }
  });
}

// Fonction pour passer à la diapositive suivante
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

// Fonction pour passer à la diapositive précédente
function previousSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

// Fonction pour démarrer le mode de lecture automatique
function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 3000);
  playButton.style.display = 'none';
  stopButton.style.display = 'block';
}

// Fonction pour arrêter le mode de lecture automatique
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
  playButton.style.display = 'block';
  stopButton.style.display = 'none';
}

// Écouteurs d'événements pour les boutons de navigation
previousButton.addEventListener('click', previousSlide);
nextButton.addEventListener('click', nextSlide);
playButton.addEventListener('click', startAutoPlay);
stopButton.addEventListener('click', stopAutoPlay);

// Écouteurs d'événements pour les éléments du menu des slides
menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener('click', () => {
    slideIndex = index;
    showSlide();
    stopAutoPlay();
  });
});

// Afficher la première diapositive et le premier élément du menu au chargement de la page
showSlide();
menuItems[0].classList.add('active');

// Démarrer le mode de lecture automatique au chargement de la page
startAutoPlay();
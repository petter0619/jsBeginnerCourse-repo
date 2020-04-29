// Slider works by changing the classes of the slides, which alters the translateX() property (which keeps the slides off-screen)
// Slide current = translateX(0); inside slide box, prev = translateX(-100%); just to the left of slide box (so animation makes it slide in), next = translateX(+100%); just to the right of slide box. All are
// The biggest challenge is simply keeping track of which slide is the current/prev/next one at any given moment

function Slider (slider) {                  // <-------------------- sliderEl name convention (to show it is an element)
  if ( !(slider instanceof Element) ) {     // <-------------------- Check is something is in fact an ELEMENT (otherwise any value passed in will pass the checker)
    throw new Error('No slider passed in!');
  }
  // Slide variables for working with the slider
  let prevSlide;
  let currentSlide;
  let nextSlide;
  // Select needed elements
  const slides = slider.querySelector('.slides'); // .slides = the wrapper Div containing all the slides (will use firstChildElement & previousSiblingElement, etc to select the actual slides)
  const nextButton = slider.querySelector('.goToNext');
  const prevButton = slider.querySelector('.goToPrev');

  // Functions

  // startSlider() function which populates the slide variables on page load
  function startSlider() {
    currentSlide = slider.querySelector('.current') || slides.firstElementChild; // <--------------- NOTE: conditional abuse
    prevSlide = currentSlide.previousElementSibling || slides.lastElementChild;
    nextSlide = currentSlide.nextElementSibling || slides.firstElementChild;

    console.log(prevSlide, currentSlide, nextSlide);
  }
  startSlider();

  // move() function which
  function move(direction) {
    console.log(direction);
  }

  // applyClasses() function
  
  // Event listeners
  nextButton.addEventListener('click', move);
  prevButton.addEventListener('click', () => move('back')); // The () => needed in order to pass argument 'back' = param 'direction'
}

const slider1 = Slider(document.querySelector('.slider'));
const slider2 = Slider(document.querySelector('.dog-slider'));
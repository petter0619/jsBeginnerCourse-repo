// Slider works by changing the classes of the slides, which alters the translateX() property (which keeps the slides off-screen)
// Slide current = translateX(0); inside slide box, prev = translateX(-100%); just to the left of slide box (so animation makes it slide in), next = translateX(+100%); just to the right of slide box. All are
// The biggest challenge is simply keeping track of which slide is the current/prev/next one at any given moment

function Slider (slider) {                  // <-------------------- sliderEl name convention (to show it is an element)
  if ( !(slider instanceof Element) ) {     // <-------------------- Check is something is in fact an ELEMENT (otherwise any value passed in will pass the checker)
    throw new Error('No slider passed in!');
  }

  // ---------------------- Variables ---------------------- 

  // Slide variables for working with the slider
  let prevSlide;
  let currentSlide;
  let nextSlide;
  // Select needed elements
  const slides = slider.querySelector('.slides'); // .slides = the wrapper Div containing all the slides (will use firstChildElement & previousSiblingElement, etc to select the actual slides)
  const nextButton = slider.querySelector('.goToNext');
  const prevButton = slider.querySelector('.goToPrev');

  // ---------------------- Functions ---------------------- 

  // startSlider() function which populates the slide variables on page load
  function startSlider() {
    currentSlide = slider.querySelector('.current') || slides.firstElementChild; // <--------------- NOTE: conditional abuse
    prevSlide = currentSlide.previousElementSibling || slides.lastElementChild;
    nextSlide = currentSlide.nextElementSibling || slides.firstElementChild;
  }

  // When this slider is created, run the startSlider() function
  startSlider();
  applyClasses()

  // applyClasses() function
  function applyClasses() {
    currentSlide.classList.add('current');
    prevSlide.classList.add('prev');
    nextSlide.classList.add('next');
  }

  // move() function; removes classes and adds them to new slides
  function move(direction) {
    // Method 1 - Strip classes off of elements
    const classesToRemove = ['prev', 'current', 'next'];
    prevSlide.classList.remove(...classesToRemove);
    currentSlide.classList.remove(...classesToRemove);
    nextSlide.classList.remove(...classesToRemove);
    // Method 2: [prev, current, next].forEach(el => el.classList.remove(...classesToRemove));

    if (direction === 'back') {
      // Destructuring method for reassigning variables to each other
        // Make a new array of new values & destructure them over and into the old variables
        // The first thing in new array will = 1st thing in old array, 2nd in new = 2nd in old, etc
      [prevSlide, currentSlide, nextSlide] = [
        prevSlide.previousElementSibling || slides.lastElementChild, 
        prevSlide, 
        currentSlide,
      ];
      // -----> Would this work if you ONLY reset current? Maybe... if you re-ran startSlider()
    } else {
      [prevSlide, currentSlide, nextSlide] = [ // <------------------- 29:04 (arrow image)
        currentSlide, 
        nextSlide, 
        nextSlide.nextElementSibling || slides.firstElementChild,
      ]; 
    }
    applyClasses();
  }
  
  // ---------------------- Event Listeners ---------------------- 
  nextButton.addEventListener('click', move);
  prevButton.addEventListener('click', () => move('back')); // The () => needed in order pass custom argument 'back' = param 'direction' (within the event listener); OR you can use co pall or apply
}

const slider1 = Slider(document.querySelector('.slider'));
const slider2 = Slider(document.querySelector('.dog-slider'));

// Challenge to further develop slider: Add functionality for Arrow Keys on button (if needed) + when someone is focused/tabbed in to the slider DIV itself
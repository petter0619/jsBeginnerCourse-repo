function Slider (slider) { // <----- Coul also be called "sliderEl" (to show it is an element)
  if ( !(slider instanceof Element) ) {   
    throw new Error('No slider passed in!');
  }

  // ---------------------- Variables ---------------------- 

  // Slide variables for working with the slider
  let prevSlide;
  let currentSlide;
  let nextSlide;
  // Select needed elements
  const slides = slider.querySelector('.slides');
  const nextButton = slider.querySelector('.goToNext');
  const prevButton = slider.querySelector('.goToPrev');

  // ---------------------- Functions ---------------------- 

  // startSlider() function which populates the slide variables on page load
  function startSlider() {
    currentSlide = slider.querySelector('.current') || slides.firstElementChild; // <-- NOTE: conditional abuse
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
    } else {
      [prevSlide, currentSlide, nextSlide] = [
        currentSlide, 
        nextSlide, 
        nextSlide.nextElementSibling || slides.firstElementChild,
      ]; 
    }
    applyClasses();
  }
  
  // ---------------------- Event Listeners ---------------------- 
  nextButton.addEventListener('click', move);
  prevButton.addEventListener('click', () => move('back')); 
}

const slider1 = Slider(document.querySelector('.slider'));
const slider2 = Slider(document.querySelector('.dog-slider'));

// Challenge to further develop slider: Add functionality for 
// Arrow Keys on button (if needed) + when someone is focused/tabbed 
// in to the slider DIV itself
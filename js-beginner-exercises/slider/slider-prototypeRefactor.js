console.log('Prototype refactor');

function Slider (slider) { // <----- Coul also be called "sliderEl" (to show it is an element)
  if ( !(slider instanceof Element) ) {   
    throw new Error('No slider passed in!');
  }

  // Create reference to the instance of Gallery
  this.slider = slider;

  // ---------------------- Bind Functions/Methods ---------------------- 

  this.move = this.move.bind(this);

  // ---------------------- Variables ---------------------- 
    /*
  // Slide variables for working with the slider
  let this.prevSlide;
  let this.currentSlide;
  let this.nextSlide;
    */
  // Select needed elements
  this.slides = slider.querySelector('.slides');
  this.nextButton = slider.querySelector('.goToNext');
  this.prevButton = slider.querySelector('.goToPrev');
  
  // When this slider is created, run the startSlider() function
  this.startSlider();
  this.applyClasses()

  // ---------------------- Event Listeners ---------------------- 
  this.nextButton.addEventListener('click', this.move);
  this.prevButton.addEventListener('click', () => this.move('back')); 
}

// ---------------------- Prototype Methods ---------------------- 
// startSlider() function which populates the slide variables on page load
Slider.prototype.startSlider = function() {
    this.currentSlide = this.slider.querySelector('.current') || this.slides.firstElementChild; // <-- NOTE: conditional abuse
    this.prevSlide = this.currentSlide.previousElementSibling || this.slides.lastElementChild;
    this.nextSlide = this.currentSlide.nextElementSibling || this.slides.firstElementChild;
}

// applyClasses() function
Slider.prototype.applyClasses = function() {
    this.currentSlide.classList.add('current');
    this.prevSlide.classList.add('prev');
    this.nextSlide.classList.add('next');
}

// move() function; removes classes and adds them to new slides
Slider.prototype.move = function(direction) {
    // Method 1 - Strip classes off of elements
    const classesToRemove = ['prev', 'current', 'next'];
    this.prevSlide.classList.remove(...classesToRemove);
    this.currentSlide.classList.remove(...classesToRemove);
    this.nextSlide.classList.remove(...classesToRemove);
    // Method 2: [prev, current, next].forEach(el => el.classList.remove(...classesToRemove));

    if (direction === 'back') {
      // Destructuring method for reassigning variables to each other
        // Make a new array of new values & destructure them over and into the old variables
        // The first thing in new array will = 1st thing in old array, 2nd in new = 2nd in old, etc
      [this.prevSlide, this.currentSlide, this.nextSlide] = [
        this.prevSlide.previousElementSibling || this.slides.lastElementChild, 
        this.prevSlide, 
        this.currentSlide,
      ]; 
    } else {
      [this.prevSlide, this.currentSlide, this.nextSlide] = [
        this.currentSlide, 
        this.nextSlide, 
        this.nextSlide.nextElementSibling || this.slides.firstElementChild,
      ]; 
    }
    this.applyClasses();
}

// Create instances of sliders
const slider1 = new Slider(document.querySelector('.slider'));
const slider2 = new Slider(document.querySelector('.dog-slider'));

// Challenge to further develop slider: Add functionality for 
// Arrow Keys on button (if needed) + when someone is focused/tabbed 
// in to the slider DIV itself
// Slider works by changing the classes of the slides, which alters the transform(X) property (which keeps the slides off-screen)

function Slider (slider) {
  if ( !(slider instanceof Element) ) {     //<-------------------------------
    throw new Error('No Slider Found!');
  }
  // create some variables for working iwth the slider
  let prev;
  let current;
  let next;
  // Select needed elements
  const slides = slider.querySelector('.slides');
  const nextButton = slider.querySelector('.goToNext');
  const prevButton = slider.querySelector('.goToPrev');

  // Functions

  // move() function which
  function move(direction) {
    console.log(direction.currenTarget);
  }

  // addClasses() function
  
  // Event listeners
  nextButton.addEventListener('click', move);
  prevButton.addEventListener('click', () => move('back')); // The () => needed in order to pass argument 'back' = param 'direction'
}

const slider1 = Slider(document.querySelector('.slider'));
const slider2 = Slider(document.querySelector('.dog-slider'));
function Gallery(gallery) {
  // IF no gallery passed in, don't do anything
  if(!gallery) {
    throw new Error('No Gallery Found!'); // <-------------------- Shows error in Console
  }

  // Select elements needed
  const images = Array.from(gallery.querySelectorAll('img')); // gallery.querySelectorAll('img'); = NodeList
  // <------------ reason for gallery.queryS over documen.queryS is that you want the images for each gallery, not all on page
  const modal = document.querySelector('.modal');
  const nextButton = modal.querySelector('.next'); // <------------------ NOTE how you can stick an element inside a variable, then use querySelector on that variable to access stuff in that variable
  const prevButton = modal.querySelector('.prev');
  let currentImage;

  // Functions for all gallery functionality

  // Open modal
  function openModal() {
    console.info('Opening modal....');
    // Check if the modal is already open; IF yes stop function from running (to prevent CSS animation from repeating)
    if(modal.matches('.open')) { // element.matches() checks if the element matches a CSS selector
      console.info('Modal already open');
      return; 
    }
    // Open modal by setting the class "open" on the modal element
    modal.classList.add('open');

    // Add event listeners to listen for closeModal() click and keyboard triggers
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  }

  // Close Modal
  function closeModal() {
    modal.classList.remove('open');

    // Remove event listeners for closeModal() click and keyboard triggers
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPrevImage);
  }

  // Handling clikc outside modal
  function handleClickOutside(event) {
    if(event.target === event.currentTarget) { // .target = thing they actually clicked, .currentTarget = thing you're listening for click on
      closeModal();
    }
  }

  // Handling keyboard events
  function handleKeyUp(event) {
    if(event.key === 'Escape') return closeModal(); // <--------------------------- Note how you don't need block {} if all on one line
    if(event.key === 'ArrowRight') return showNextImage();
    if(event.key === 'ArrowLeft') return showPrevImage(); // <------ Tyiping return in front doesn't return values BUT by adding it the following IF statements won't run unnecesarily
  }

  // Show next and previous images
  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild); // <---------- REMINDER: Selecting elements 
  }

  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild); // <---------- REMINDER: Selecting elements 
  }

  // Populate modal with image specific info + run openModal()
  function showImage(el) { // Takes in the img element tag that was clicked
    if(!el) {
      console.log('No image to show');
      return;
    }
    // ----------- Update modal with clicked img inf ---------------
    modal.querySelector('img').src = el.src;          // Update the img src of the modal (aka what image modal shows)
    modal.querySelector('h2').textContent = el.title; // Update modal h2 with img title
    modal.querySelector('p').textContent = el.dataset.description; // Update modal p with img data-description (reminder: dataset.customTag)

    // Set currentImage (for use with next & prev buttons)
    currentImage = el;

    // Open Modal
    openModal();
  }

  // Event Listeners   <------------- (vid 24:25) NOTE how some are moved INTO funcions, and are only listened for AFTER something has happened (then removed)
  
  images.forEach(image => image.addEventListener('click', event => {
    // Pass the image tag into the showImage() function
    showImage(event.currentTarget);
  })); // Reminder: To set an event on every item in an array, you need to loop over them to add the event to every single one

// Some elements naturally register a click when they are tabbed > enter, but not Images, so we need to add it
images.forEach(image => {
  image.addEventListener('keyup', e => { // <------------ cool that you can listen to keyups on elements
    if(e.key === 'Enter') {
      showImage(e.currentTarget);
    }
  })
})

  modal.addEventListener('click', handleClickOutside);
  
}

const gallery1 = Gallery(document.querySelector('.gallery1')); // <------ Creates 2 copies of above function (+ all inner funcs)
const gallery2 = Gallery(document.querySelector('.gallery2'));

// <------------ tabindex = 0 (see HTML) allows "keyboard users" tab through images
// <------------ (see HTML) NOTE how the next & prev panels are <button>'s in the HTML (so they can be tab selected...)
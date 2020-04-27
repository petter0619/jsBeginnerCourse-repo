function Gallery(gallery) {
  // IF no gallery, don't do anything
  if(!gallery) {
    throw new Error('No Gallery Found!'); // <---------------------------------------
  }
  // Select elements needed
  const images = Array.from(gallery.querySelectorAll('img')); // gallery.querySelectorAll('img'); = NodeList
  const modal = document.querySelector('.modal');
  const nextButton = modal.querySelector('.next'); // <------------------ NOTE how you can stick an element inside a variable, then use querySelector on that variable to access stuff in that variable
  const prevButton = modal.querySelector('.prev');
  let currentImage;

  // Functions
  function handleImageClick(event) {
    console.log(event.target);
  } 

  // Event Listeners   <------------- NOTE how some are moved INTO funcions, and are only listened for AFTER something has happened (then removed)
  images.forEach(image => image.addEventListener('click', handleImageClick)); // Reminder: To set an event on every item in an array, you need to loop over them to add the event to every single one
}

const gallery1 = Gallery(document.querySelector('.gallery1')); // <------ Creates 2 copies of above function (+ all inner funcs)
const gallery2 = Gallery(document.querySelector('.gallery2'));
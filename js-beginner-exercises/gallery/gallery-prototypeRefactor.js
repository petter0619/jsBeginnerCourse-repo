console.log('image galler - prototype refactor version');

function Gallery(gallery) {
  // IF no gallery passed in, don't do anything
  if(!gallery) {
    throw new Error('No Gallery Found!');
  }

  this.gallery = gallery;

  // Select elements needed
  this.images = Array.from(gallery.querySelectorAll('img'));
  this.modal = document.querySelector('.modal');
  this.nextButton = this.modal.querySelector('.next'); 
  this.prevButton = this.modal.querySelector('.prev');

  // Event Listeners
  
  this.images.forEach(image => image.addEventListener('click', event => {
    // Pass the image tag into the showImage() function
    this.showImage(event.currentTarget);
  }));

  // Some elements naturally register a click when they are tabbed > enter, but not Images, so we need to add it
  this.images.forEach(image => {
    image.addEventListener('keyup', e => {
      if(e.key === 'Enter') {
        this.showImage(e.currentTarget);
      }
    })
  });

  this.modal.addEventListener('click', this.handleClickOutside);
// End of function Gallery
}

// Functions for all gallery functionality

// Open modal
Gallery.prototype.openModal = function() {
  console.info('Opening modal....');
  // Check if the modal is already open; IF yes stop function from running (to prevent CSS animation from repeating)
  if(this.modal.matches('.open')) { 
    console.info('Modal already open');
    return; 
  }
  // Open modal by setting the class "open" on the modal element
  this.modal.classList.add('open');

  // Add event listeners to listen for closeModal() click and keyboard triggers
  window.addEventListener('keyup', this.handleKeyUp);
  this.nextButton.addEventListener('click', this.showNextImage);
  this.prevButton.addEventListener('click', this.showPrevImage);
}

// Close Modal
Gallery.prototype.closeModal = function() {
  this.modal.classList.remove('open');

  // Remove event listeners for closeModal() click and keyboard triggers
  window.removeEventListener('keyup', this.handleKeyUp);
  this.nextButton.removeEventListener('click', this.showNextImage);
  this.prevButton.removeEventListener('click', this.showPrevImage);
}

// Handling click outside modal
Gallery.prototype.handleClickOutside = function(event) {
  if(event.target === event.currentTarget) { 
    this.closeModal();
  }
}

// Handling keyboard events
Gallery.prototype.handleKeyUp = function(event) {
  if(event.key === 'Escape') return this.closeModal(); 
  if(event.key === 'ArrowRight') return this.showNextImage();
  if(event.key === 'ArrowLeft') return this.showPrevImage();
}

// Show next and previous images
Gallery.prototype.showNextImage = function() {
  this.showImage(this.currentImage.nextElementSibling || gallery.firstElementChild); 
}

Gallery.prototype.showPrevImage = function() {
  this.showImage(this.currentImage.previousElementSibling || gallery.lastElementChild); 
}

// Populate modal with image specific info + run openModal()
Gallery.prototype.showImage = function(el) { 
  if(!el) {
    console.log('No image to show');
    return;
  }
  // ----------- Update modal with clicked img inf ---------------
  this.modal.querySelector('img').src = el.src;          // Update the img src of the modal (aka what image modal shows)
  this.modal.querySelector('h2').textContent = el.title; // Update modal h2 with img title
  this.modal.querySelector('p').textContent = el.dataset.description; // Update modal p with img data-description (reminder: dataset.customTag)

  // Set currentImage (for use with next & prev buttons)
  this.currentImage = el;

  // Open Modal
  this.openModal();
}

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

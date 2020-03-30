console.log('It works!')

// Select the elements on the page (canves, shake button)
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // "The Context" = the place where we do our drawing; aka apply our methods to ("ctx"; common naming convention)

const shakeButton = document.querySelector('.shake');

// Setup our canvas for drawing

const { width, height} = canvas;

ctx.lineJoin = 'round'; //how the lines will look
ctx.lineCap = 'round'; 
ctx.lineWidth = 10;

ctx.beginPath(); // The starting point of the drawing
ctx.moveTo(200, 200); // The starting point location: X pixels in (l>r), Y pixels down.
ctx.LineTo(200, 200);
ctx.stroke(); // Above 2 functions make an invisible line, and this "commanc" then strokes it

// Write a draw function


// Write a handler for the keys


// Write a clear/shake function


// Listen for arrow keys
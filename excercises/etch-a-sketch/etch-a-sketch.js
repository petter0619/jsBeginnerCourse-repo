// Select the elements on the page (canves, shake button)
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // "The Context" = the place where we do our drawing; aka apply our methods to ("ctx"; common naming convention)

const shakeButton = document.querySelector('.shake');


// Setup our canvas for drawing

const { width, height} = canvas;
let x = Math.floor(Math.random() *  width); // NOTE: The "Math" object must be written with a capital letter
let y = Math.floor(Math.random() *  height);

ctx.lineJoin = 'round'; //how the lines will look
ctx.lineCap = 'round'; 
ctx.lineWidth = 10;

ctx.beginPath(); // The starting point of the drawing
ctx.moveTo(x, y); // The starting point location: X pixels in (l>r), Y pixels down.
ctx.lineTo(x, y);
ctx.stroke(); // Above 2 functions make an invisible line, and this "commanc" then strokes it


// Write a draw function
function draw(options) {
    console.log(options.key);
}

// Write a handler for the keys
function handleKey(e) {
    if(e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
    }
}

// Write a clear/shake function


// Listen for arrow keys
window.addEventListener('keydown', handleKey);
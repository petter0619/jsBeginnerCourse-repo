// Select the elements on the page (canves, shake button)
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d'); // "The Context" = the place where we do our drawing; aka apply our methods to ("ctx"; common naming convention)

const shakeButton = document.querySelector('.shake');

const MOVE_AMOUNT = 10; // Some developers use this naming convection: Caps & underscores, to mark that this is a TRUE constant.


// Setup our canvas for drawing

const { width, height} = canvas;
let x = Math.floor(Math.random() *  width); // NOTE: The "Math" object must be written with a capital letter
let y = Math.floor(Math.random() *  height);

ctx.lineJoin = 'round'; //how the lines will look
ctx.lineCap = 'round'; 
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath(); // The starting point of the drawing
ctx.moveTo(x, y); // The starting point location: X pixels in (l>r), Y pixels down.
ctx.lineTo(x, y);
ctx.stroke(); // Above 2 functions make an invisible line, and this "commanc" then strokes it


// Write a draw function
function draw({ key }) { // Destructring: Just accepting the "key" key: value pair of the object passed in. You could just have written "options" or "e" to represent the entire object and it would still have worked.
    ctx.beginPath();
    ctx.moveTo(x, y);

    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;    
        default: 
            break
    }

    ctx.lineTo(x, y);
    ctx.stroke();

/*
    //Start the path
    ctx.beginPath(); 
    ctx.moveTo(x, y); //Move the context to where it used to be

    // Move our X and Y values depening on what the user did
    x = x - 10; //change X value to where we want the point to go
    y = y - 10; 
    ctx.lineTo(x, y); //Created a line to the X and Y values (a line between the old and new point)
    ctx.stroke(); //Drew the line
*/
}

/* Options object alternative: 

function draw(options) {
    console.log(options.key);
}

*/

// Write a handler for the keys
function handleKey(e) {
    if(e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key }); //Destructuring: sending just the "key" key: value pair of the e (aka WINDOW) object as the argument. Just passing "e" will work as well.
    }
}

/* Passing entire object as argument to draw() alternative: 

function handleKey(e) {
    if(e.key.includes('Arrow')) {
        e.preventDefault();
        draw(e);
    }
}

*/


// Write a clear/shake function


// Listen for arrow keys
window.addEventListener('keydown', handleKey);
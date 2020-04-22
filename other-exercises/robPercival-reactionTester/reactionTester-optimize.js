const shape = document.querySelector('#shape');
let start = new Date().getTime();

// Random color selector from StackOverflow
function getRandomColor() {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear() {
    // Make shape appearance random
    const top = Math.random() * 400;
    const left = Math.random() * 400;
    const width = (Math.random() * 200) + 100;
    shape.setAttribute('style', `
        background-color: ${getRandomColor()};
        width: ${width}px;
        height: ${width}px;
        top: ${top}px;
        left: ${left}px;
        display: block;
        border-radius: ${ Math.random() > 0.5 ? '50%' : '0' };
    `);
    // Reset start time to 0
    start = new Date().getTime();
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000)
}
appearAfterDelay();

// When shape is clicked, replace current shape with a new one
shape.addEventListener('click', function(event) {
    event.currentTarget.setAttribute('style', 'display: none;');
    const end = new Date().getTime();
    const timeTaken = (end - start) / 1000;
    document.querySelector('#timeTaken').innerHTML = `${timeTaken} seconds`;
    appearAfterDelay();
});

// ------------------ List of changes made to optimize code ------------------ 

// 1) Change scope of variables from "var" (global) to "let"/"const" (local/block)
// 2) Made a "shape" variable to replace all instances of document.getElementById('shape')
// 3) Changed all instances of double quotes; "", to single quotes; ''. (style pref)
// 4) Changed .onclick = function() {} to addEventListener
// 5) Changed from using .style as a setter, to instead use .setAttribute() + interpelation with backticks
// 6) Used event.currentTarget instead of "shape" variable in addEventListener callback
// 7) Changed getElementById to querySelector
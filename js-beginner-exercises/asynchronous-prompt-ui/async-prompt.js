function wait(ms = 0) { //<------------- Utility function
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
    popup.classList.remove('open');
    await wait(1000);
    // Remove the popup entirely
    popup.remove();
    // Old way: popup.parentElement.removeChild('popup');
    popup = null; // Will remove popup even from memory; which popup.remove() doesn't
}

function ask(options = {}) {
    return new Promise(async function(resolve) {
        // Createa a popup with all the fields in it
        const popup = document.createElement('form');
        popup.classList.add('popup');
        popup.insertAdjacentHTML('afterbegin', `
            <fieldset>
                <label>${options.title}</label>
                <input typeO="text" name="input">
                <button type="submit">Submit</button>
            </fieldset>
        `);
        // Check if they want a cancel button
        if(options.cancel) {
            const skipButton = document.createElement('button');
            skipButton.type = 'button';
            skipButton.textContent = 'Cancel';
            popup.firstElementChild.appendChild(skipButton);
            // Listen for a click on that cancel button
            skipButton.addEventListener('click', function() {
                resolve(null);
                destroyPopup(popup);
            }, {once: true});
        }
        // Listen for the 'submit' event on the inputs
        popup.addEventListener('submit', function(e) {
            e.preventDefault();
            resolve(e.target.input.value);
            // Remove the popup
            destroyPopup(popup);
        }, { once: true });

        // When submitted we want to resolve the input data

        // Insert the popup into the DOM
        document.body.appendChild(popup);
        // Add a small timer in order to enable the transition effect (aka stick this at the end of the event loop)
       await wait(50);
       popup.classList.add('open'); 
    });
}

// Select all buttons that have a question
async function askQuestion(e) {
    const button = e.currentTarget;
    const cancel = 'cancel' in button.dataset;
    const answer = await ask({
        title: button.dataset.question,
        cancel,
    });
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));

// Ask a series of questions in sequence
const questions = [
    {title:'What is your name?'},
    {title:'What is your age?', cancel: true},
    {title:'What is your dogs name?'},
];

// Method 1 - Promise.all()
/*
Promise.all([
    ask(questions[0]),
    ask(questions[1]),
    ask(questions[2]),
]).then(answers => {
    console.log(answers);
});
*/  // This works BUT there was no transition between them bcs all the popup boxes loaded at once and just stacked on top of one another. It also asked them in reverse order... (bcs Promise.all fired them all off concurrently)

//Method 2  - Promise.all() better version
/*
Promise.all(questions.map(ask)).then(data => {
    console.log(data);
});
*/ // This will loop over each of the questions, type them into the ask() function which returns a Promise. Promise.all will then return to us an array.


//Method 3 - Mapping over the questions sequentially (one after another)
async function askMany() {
    for(const question of questions) {
        const answer = await ask(question);
        console.log(answer);
    }
}
//askMany();
// The above works bcs unlike forEach a FOR OF loop allows you to pause the loop with await during each ask()

//<-------------- Utility function version of above Method 3
async function asyncMap(array, callbackFunction) {
    // Make an array to store our results
    const results = [];
    // Loop over our array
    for(const item of array) {
        const result = await callbackFunction(item);
        results.push(result);
    }
    // When the loop is done return it
    return results;
}
// Running the asyncMap onPageload (bcs you can't 'await' in the open)
async function go() {
    const answers = await asyncMap(questions, ask);
    console.log(answers);
}
go();
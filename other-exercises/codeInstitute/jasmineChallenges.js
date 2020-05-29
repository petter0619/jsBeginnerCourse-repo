console.log("jasmineChallenges.js found!");

// --------------- Drink About ---------------

// Variables
const drinkAboutForm = document.querySelector('.drinkAbout');
const drinkAboutResult = document.querySelector('#drinkAboutResult');

// drinkAbout Function
function drinkAbout(event) {
    event.preventDefault();
    // IF age contains anything that is not a number, do nothing
    if(event.currentTarget.age.value.match(/\D/g)) {
        console.log('age = NaN');
        drinkAboutResult.textContent = 'Sorry. I can’t tell what drink because that age is incorrect!';
        return
    }
    // Grab input age + convert into a number
    const age = parseInt(event.currentTarget.age.value);
    // drinkAbout Method 2: Nested Ternaries
    drinkAboutResult.textContent = age < 14 ? 'Drink Toddy' 
        : age < 18 ? 'Drink Coke' 
        : age < 21 ? 'Drink Beer'
        : age < 130 ? 'Drink Whisky'
        : 'Sorry. I can’t tell what drink because that age is incorrect!';
}

// Event Listener - On 'submit' run function drinkAbout
drinkAboutForm.addEventListener('submit', drinkAbout);


// --------------- /.drinkAbout ---------------

// --------------- FizzBuzz ---------------

// Variables
const fizzBuzzForm = document.querySelector('.fizzBuzz');
const fizzBuzzResult = document.querySelector('#fizzBuzzResult');

// Fizz Buzz Function
function fizzBuzz(event) {
    event.preventDefault();
    // IF number contains anything that is not a number, do nothing
    if(event.currentTarget.number.value.match(/\D/g)) {
        console.log('Not a valid number!');
        fizzBuzzResult.textContent = 'Not a valid number!';
        return
    }
    // Grab input age + convert into a number
    const number = parseInt(event.currentTarget.number.value);
    // FizzBuzz
    fizzBuzzResult.textContent = !(number % 3) && !(number % 5) ? 'FizzBuzz' 
        : !(number % 3) ? 'Fizz'
        : !(number % 5) ? 'Buzz'
        : number;
}
// Event Listener - On 'submit' run function fizzBuzz
fizzBuzzForm.addEventListener('submit', fizzBuzz);
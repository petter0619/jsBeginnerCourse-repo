
const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const endpoint = 'https://icanhazdadjoke.com';

const buttonText = [
    'Ugh.',
    '🤦🏻‍♂️',
    'omg dad.',
    'you are the worst',
    'seriously',
    'stop it.',
    'please stop',
    'that was the worst one',
];

async function fetchJoke() {
    const response = await fetch(endpoint, {
        headers: {
            Accept: 'application/json',
        }
    });
    const data = await response.json();
    return data;
}

function randomItemFromArray(arr, not) {    //<------- Utility function
    const item = arr[Math.floor(Math.random() * arr.length)];
    if(item === not) {
        console.log('----- Used that one last time. Look again. -----');
        return randomItemFromArray(arr, not);   // Recursion
    }
    return item;
}

async function handleClick() {
    const {joke} = await fetchJoke();   // Destructuring: creates a variable for data.joke called 'joke'
    jokeHolder.textContent = joke;
    jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent);
}

jokeButton.addEventListener('click', handleClick);
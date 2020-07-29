
// Get a random number between X and Y
function getRandomBetween(min, max, randomNumber = Math.random()) {
    return Math.floor(randomNumber * (max - min) + min);
}

// Return a random item from an array
function randomItemFromArray(arr, not) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    if(item === not) {
        console.log('----- Used that one last time. Look again. -----');
        return randomItemFromArray(arr, not);   // Recursion
    }
    return item;
}

// Map over an array sequentially (one after another) and run a callback function
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

// Wait (place inside an 'async' function with the 'await' keyword in front to wait X ms before running code that follows)
function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Format currency (from cents to dollars & cents)
function formatCurrency(amount, currency = 'USD') {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(amount);
}
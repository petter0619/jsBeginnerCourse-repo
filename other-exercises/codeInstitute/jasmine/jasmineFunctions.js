// --------------- Jasmine test function --------------- 

function add() {
    return 42;
}

// --------------- Drink About - Jasmine Version ---------------

function drinkAbout(age) {
    if(typeof(age) === "number") {
        // drinkAbout Method 2: Nested Ternaries
        return age < 0 ? 'Sorry. I can’t tell what drink because that age is incorrect!'
        : age < 14 ? 'Drink Toddy' 
        : age < 18 ? 'Drink Coke' 
        : age < 21 ? 'Drink Beer'
        : age < 130 ? 'Drink Whisky'
        : 'Sorry. I can’t tell what drink because that age is incorrect!';
    }
    // IF age contains anything that is not a number, do nothing
    console.log('age = NaN');
    return 'Sorry. I can’t tell what drink because that age is incorrect!';
}

// --------------- /.drinkAbout ---------------

// --------------- FizzBuzz - Jasmine Version ---------------

function fizzBuzz(number) {
    // FizzBuzz
    if(typeof(number) === "number") {
        return !(number % 3) && !(number % 5) ? 'FizzBuzz' 
        : !(number % 3) ? 'Fizz'
        : !(number % 5) ? 'Buzz'
        : number;
    }
    // IF number contains anything that is not a number, do nothing
    console.log('Not a valid number!');
    return 'Not a valid number!';
}

// --------------- /.fizzBUzz ---------------
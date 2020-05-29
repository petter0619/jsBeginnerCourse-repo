
// ------------- Drink About Tests -------------
describe("Drink About", function() {
    describe("drinkAbout function", function() {
        // Negative numbers = "Sorry!"
        it("should return 'Sorry' #1", function() {
            expect(drinkAbout(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        // 0-13 = Drink Toddy
        it("should return 'Drink Toddy' #1", function() {
            expect(drinkAbout(13)).toBe("Drink Toddy");
        });
        // 14-17 = Drink Coke
        it("should return 'Drink Coke' #1", function() {
            expect(drinkAbout(14)).toBe("Drink Coke");
        });
        it("should return 'Drink Coke' #2", function() {
            expect(drinkAbout(17)).toBe("Drink Coke");
        });
        // 18-20 = Drink Beer
        it("should return 'Drink Beer' #1", function() {
            expect(drinkAbout(18)).toBe("Drink Beer");
        });
        it("should return 'Drink Beer' #2", function() {
            expect(drinkAbout(20)).toBe("Drink Beer");
        });
        // 21-129 = Drink Whisky
        it("should return 'Drink Whisky' #1", function() {
            expect(drinkAbout(21)).toBe("Drink Whisky");
        });
        it("should return 'Drink Whisky' #2", function() {
            expect(drinkAbout(45)).toBe("Drink Whisky");
        });
        it("should return 'Drink Whisky' #3", function() {
            expect(drinkAbout(129)).toBe("Drink Whisky");
        });
        // 130+ = "Sorry!"
        it("should return 'Sorry' #2", function() {
            expect(drinkAbout(130)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        // String entered = "Sorry!"
        it("should return 'Sorry' #3", function() {
            expect(drinkAbout('21')).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});
// ------------- //.drinkAbout -------------

// ------------- Fizz Buzz Tests -------------
describe("FizzBuzz", function() {
    describe("fizzBuzz function", function() {
        // Return passed number
        it("should return -1", function() {
            expect(fizzBuzz(-1)).toBe(-1);
        });
        it("should return 31", function() {
            expect(fizzBuzz(31)).toBe(31);
        });
        // FizzBuzz
        it("should return FizzBuzz #1", function() {
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it("should return FizzBuzz #2", function() {
            expect(fizzBuzz(90)).toBe("FizzBuzz");
        });
        // Fizz
        it("should return Fizz #1", function() {
            expect(fizzBuzz(9)).toBe("Fizz");
        });
        it("should return Fizz #2", function() {
            expect(fizzBuzz(33)).toBe("Fizz");
        });
        // Buzz
        it("should return Buzz #1", function() {
            expect(fizzBuzz(20)).toBe("Buzz");
        });
        it("should return Buzz #2", function() {
            expect(fizzBuzz(55)).toBe("Buzz");
        });
        // String entered = "Sorry!"
        it("should return 'Not a valid number'", function() {
            expect(fizzBuzz("21")).toBe("Not a valid number!");
        });
    });
});
// ------------- //.fizzBuzz -------------
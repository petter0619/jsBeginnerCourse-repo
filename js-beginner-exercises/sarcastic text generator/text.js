const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

// Funky letters lookup
const funkyLetters = {
    '-': '₋', '!': 'ᵎ', '?': 'ˀ', '(': '⁽', ')': '₎', '+': '⁺', '=': '₌', '0': '⁰', '1': '₁', '2': '²', '4': '₄', '5': '₅', '6': '₆', '7': '⁷', '8': '⁸', '9': '⁹', a: 'ᵃ', A: 'ᴬ', B: 'ᴮ', b: 'ᵦ', C: '𝒸', d: 'ᵈ', D: 'ᴰ', e: 'ₑ', E: 'ᴱ', f: '𝒻', F: 'ᶠ', g: 'ᵍ', G: 'ᴳ', h: 'ʰ', H: 'ₕ', I: 'ᵢ', i: 'ᵢ', j: 'ʲ', J: 'ᴶ', K: 'ₖ', k: 'ₖ', l: 'ˡ', L: 'ᴸ', m: 'ᵐ', M: 'ₘ', n: 'ₙ', N: 'ᴺ', o: 'ᵒ', O: 'ᴼ', p: 'ᵖ', P: 'ᴾ', Q: 'ᵠ', q: 'ᑫ', r: 'ʳ', R: 'ᵣ', S: 'ˢ', s: 'ˢ', t: 'ᵗ', T: 'ₜ', u: 'ᵘ', U: 'ᵤ', v: 'ᵛ', V: 'ᵥ', w: '𝓌', W: 'ʷ', x: 'ˣ', X: 'ˣ', y: 'y', Y: 'Y', z: '𝓏', Z: 'ᶻ'
};

const filters = {
    // Sarcastic = Uppercase every other character
    sarcastic(letter, index) {
        // If index = odd number letter will be uppercased
        if(index % 2) {
            return letter.toUpperCase();
        }
        // If index = even number letter will be lowercased
        return letter.toLowerCase();
    },
    // Funky = Replace letters with the characters found in the funkyLetters object
    funky(letter) {
        // Check if there is a funkyLetters match for this case
        let funkyLetter = funkyLetters[letter];
        if(funkyLetter) return funkyLetter;
        // If no match check if there is a lowercase match
        funkyLetter = funkyLetters[letter.toLowerCase()];
        if(funkyLetter) return funkyLetter;
        // If nothing return the regular letter
        return letter;
    },
    // Add ... after every 1-3rd space (space bar); random selection if after 1, 2 or 3
    unable(letter) {
        const random = Math.floor(Math.random() * 3);
        if(letter === ' ' && random === 2) {
            return '... ';
        }
        return letter;
    },
};

function transformText(text) {
    /*
    Grab the value of the radio button/filter that is checked. ":checked" looks for the filter that is selected, and ".value" gives you the value of the input item (as specified in the value="" attribute)
    
    const filter = document.querySelector('[name="filter"]:checked').value;
     */
    
     // Option 2 for selecting the checked input:
    const filter = filterInputs.find(input => input.checked).value;
   
    // Take the text and loop over each letter
    const mod = Array.from(text).map(filters[filter]);
    result.textContent = mod.join('');
}

textarea.addEventListener('input', e => transformText(e.target.value));

// Change result style whenever you change the selected input/radio button
filterInputs.forEach(input => 
    input.addEventListener('input', () => {
        transformText(textarea.value)
    })
);

// 1) Select element with CSS overflow: scroll; (aka the scrollable element/viewport)
const terms = document.querySelector('.terms-and-conditions');

// 2) Select the button that will appear & be un-disabled when scroll event met
const button = document.querySelector('.accept');

// 5) The callback function called when observed element is viewable (what happens when it's observed)
function obCallback(payload) { // payload = an array containing all the IntersectionObserverEntry's
    console.log(payload);
    if (payload[0].intersectionRatio === 1) { // payload[0] selects the first object IntersectionObserverEntry in the arary
        button.disabled = false;
        // Stop observing the button
        obCallback.unobserve(terms.lastElementChild);
    }
}

// 3) Create an "intersection observer"
const ob = new IntersectionObserver(obCallback, {
    root: terms, // The scrollable viewport containing the observed element
    threshold: 1, // How much of the element must be visible/scrolled past before callback function is called (1 = 100%)
});

// 4) Targeting the element to be observed
ob.observe(terms.lastElementChild);
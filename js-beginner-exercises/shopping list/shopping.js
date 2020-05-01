/* Topics:
        - Custom Events
        - Event Delegation (listening for things that happen in future)
        - Local Storage (w. JSON)
        - DOM Events
        - Object Reference
*/

// Variables that are needed
const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// Create empty array to hold our 'state'
let items = [];

// Functions
function handleSubmit(e) {
    // Prevent formSubmit from changing URL
    e.preventDefault();
    // Grab the value of the input
    const name = e.currenttarget.item.value; // 10:30 Because the input has a name it is available via the form variable
    // Store the input value + related info (itemId + isComplete?) in the 'items' array
    const item = {
        name: name,
        id: Date.now(), // Good trick for unique ID's unless you have multiple things logged per millisecond (e.g. with databases; can log hundred of items in a few milliseconds)
        complete: false,
    }
    // Push the items into our statde
    items.push(item);
    // Clear the form
    e.target.reset(); // Other method: e.currentTarget.item.value = ''. NOTE: .target works here bcs when you have a form event it will only ever fire on the form itself; it doesn't bubble

}

function displayItems() {
    const html = items.map(item => { // .map() is useful here bcs you can loop over each item, return an HTML <li> item, and then .join() them for a full HTML block
        return `<li>${item.name}</li>`;
    }) 
}

// Event Listeners
shoppingForm.addEventListener('submit', handleSubmit)

// ------------------------------------------------------------------------

// Listen for when someone types into the input box & hits the submit button
// Keep track of all Shopping List items + whether or not they are marked as complete
// Render out a list of all those items

// ------------------------------------------------------------------------
/* Video notations:

    - Installing Parcel (+ localhost) 2:00-4:40
    - 'State' explanation 6:40
    - Why use custom events: 16:35

    - Stop autocomplete="off"/autocapitalise="off" on input form fields 5:30
    - event.preventDefault(); on forms submitEvent (reminder) 8:30 (stops info from being logged in URL parameters)
    - Why use 'submit' event Listener 8:40 (bcs otherwise you would have to listen for all possible ways to submit the form; buttonClick, tab>enter, etc + there are ways to submit a form via JS)
    - NOTE: Every time you have a list of items it is best to give every item a unique id so you can find it later (e.g. to mark as complete or remove it)
*/
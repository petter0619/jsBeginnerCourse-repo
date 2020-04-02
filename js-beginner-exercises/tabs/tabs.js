// Grab the tabs wrapper
const tabsWrapper = document.querySelector('.tabs');

// Use tabs wrapper const to grab tabbuttons (role?)
const tabsButtons = tabsWrapper.querySelectorAll('[role="tab"]');

// Use tabs to grab tabsindex (role)
const tabsPanels = Array.from(tabsWrapper.querySelectorAll('[role="tabpanel"]'));
/* Method 1: 
const tabsPanels = tabsWrapper.querySelectorAll('[role="tabpanel"]');
*/

// Write handeTabButtonClick function:
function handleTabButtonClick(event) {
    // Make all tabindex divs "hidden"
    tabsPanels.forEach(tabPanel => {
        tabPanel.hidden = true;
    });

    // Make all tabButtons ariaSelected: false
    tabsButtons.forEach(tabButton => {
        tabButton.setAttribute('aria-selected', false);
    });

    // Add ariaSelected: true to clicked button
    event.currentTarget.setAttribute('aria-selected', true);

    // Remove "hidden" from matching tabIndex
    const tabButtonId = event.currentTarget.getAttribute('id');

    // Method 2
    const tabPanel = tabsPanels.find(
        panel => panel.getAttribute('aria-labelledby') === tabButtonId
    );
    tabPanel.hidden = false;

    /* ----> Method 1 
    const tabPanel = tabsWrapper.querySelector(`[aria-labelledby="${tabButtonId}"]`);
    tabPanel.hidden = false;
    */
}

// Use forEach() to add eventListener to all buttons, cbFunction: handleTabButtonClick
tabsButtons.forEach(button => button.addEventListener('click', handleTabButtonClick));

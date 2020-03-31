const cardButtons = document.querySelectorAll('.card button');

function handleCardButtonClick() {
    console.log('Card button clicked!');
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));
let counter = 0;
const increaseButton = document.getElementById('increment');
const decreaseButton = document.getElementById('decrement');
const counterDisplay = document.getElementById('count');

function increaseCounter() {
    counter += 1;
    counterDisplay.textContent = counter;
}

function decreaseCounter() {
    counter -= 1;
    counterDisplay.textContent = counter;
}

increaseButton.addEventListener('click', increaseCounter);
decreaseButton.addEventListener('click', decreaseCounter);

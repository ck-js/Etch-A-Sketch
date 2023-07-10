const Container = document.querySelector('.grid-container')

let numberOfSquares = 256;
for (let i = 1; i <= numberOfSquares; i++) {
    const square = document.createElement('div');

    square.textContent = `SQUARE ${i}`;
    square.style.cssText = 'background-color: purple; border: 2px solid black;'
square.setAttribute('id', `${i}`)    
square.setAttribute('class', 'square')

    Container.appendChild(square)
}

Container.style.border = '10px solid yellow'

const squares = document.querySelectorAll('.square')
squares.forEach((square) => {
square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'white';
})    
})

const btnContainer = document.querySelector('#btn-container')
const generateNewGridBtn = document.createElement('button')
btnContainer.appendChild(generateNewGridBtn)

generateNewGridBtn.classList.add('btn')
generateNewGridBtn.textContent = 'GENERATE NEW GRID';

function promptUser() {
    prompt('Enter number of squares per line')
}

generateNewGridBtn.addEventListener('click', promptUser)
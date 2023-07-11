const container = document.querySelector('.grid-container')

let numberOfSquares = 256;

for (let i = 1; i <= numberOfSquares; i++) {
    const square = document.createElement('div');

    square.textContent = `SQUARE ${i}`;
    square.style.cssText = 'background-color: purple; border: 2px solid black;'
square.setAttribute('id', `${i}`)    
square.setAttribute('class', 'square')

    container.appendChild(square)
}

container.style.border = '10px solid yellow'

const squares = document.querySelectorAll('.square')
squares.forEach((square) => {
square.addEventListener('mouseover', () => {
    square.style.backgroundColor = getRandomColor();
})    
})

const btnContainer = document.querySelector('#btn-container')
const generateNewGridBtn = document.createElement('button')
btnContainer.appendChild(generateNewGridBtn)

generateNewGridBtn.classList.add('btn')
generateNewGridBtn.textContent = 'GENERATE NEW GRID';




function promptUser() {
    let result = +prompt('Enter number of squares per line', '');
         return result;
   }

   function updateGrid(number) {
    
    numberOfSquares = number;;
  
    for (let i = 1; i <= numberOfSquares; i++) {
        const square = document.createElement('div');
    
        square.textContent = `SQUARE ${i}`;
        square.style.cssText = 'background-color: purple; border: 2px solid black;'
    square.setAttribute('id', `${i}`)    
    square.setAttribute('class', 'square')
    
        container.appendChild(square)
        
}
const squares = document.querySelectorAll('.square')
squares.forEach((square) => {
square.addEventListener('mouseover', () => {
    square.style.backgroundColor = getRandomColor();
})    
})

   }

   function removeChild() {
    const squares = document.querySelectorAll('.square')

squares.forEach(square => {
    container.removeChild(square)
})
}
   
function addPenEffect() {
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'white';
        })    
        })
        
}
   
generateNewGridBtn.addEventListener('click', () => {
    removeChild()
  updateGrid(promptUser())

})

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0; i <6; i++) {
        hexColor += letters[Math.floor(Math.random() * 16)];
    }
    return hexColor;
}

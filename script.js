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
    square.style.backgroundColor = 'white';
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
   }

   function removeChild() {
    
squares.forEach(square => {
    container.removeChild(square)
})

   }
   

   

generateNewGridBtn.addEventListener('click', () => {
    removeChild();
  updateGrid(promptUser())

})
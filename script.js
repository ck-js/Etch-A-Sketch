const gridContainer = document.querySelector('.grid-container')

let numberOfSquares = 32;
for (let i = 1; i <= numberOfSquares; i++) {
    const square = document.createElement('div');

    square.textContent = `SQUARE ${i}`;
    square.style.cssText = 'background-color: pink; height: 200px; width: 200px; border: 5px solid black;'
square.setAttribute('id', `${i}`)    

    gridContainer.appendChild(square)
}


gridContainer.style.cssText = 'display: flex;;  flex-wrap: wrap;'
gridContainer.style.border = '10px solid yellow'





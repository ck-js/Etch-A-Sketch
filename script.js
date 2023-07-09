const gridContainer = document.querySelector('.grid-container')
gridContainer.style.cssText = 'display: flex;; flex-direction: column;'
gridContainer.style.cssText = 'height: 100vh; border: 20px solid yellow;'


let numberOfSquares = 16;
for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement('div');

    square.textContent = `SQUARE ${i}`;
    square.style.cssText = 'background-color: pink; height: 200px; width: 200px; border: 5px solid black;'
square.setAttribute('id', `${i}`)    

    gridContainer.appendChild(square)
}








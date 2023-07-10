const Container = document.querySelector('.grid-container')

let numberOfSquares = 256;
for (let i = 1; i <= numberOfSquares; i++) {
    const square = document.createElement('div');

    square.textContent = `SQUARE ${i}`;
    square.style.cssText = 'background-color: purple; border: 2px solid black;'
square.setAttribute('id', `${i}`)    

    Container.appendChild(square)
}


// Container.style.cssText = 'display: flex;;  flex-wrap: wrap;'
Container.style.border = '10px solid yellow'





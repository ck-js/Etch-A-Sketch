const gridContainer = document.querySelector('.grid-container')
const gridSquare = document.createElement('div');

gridContainer.style.cssText = 'height: 100vh; border: 20px solid yellow;'

gridSquare.style.cssText = 'background-color: pink; height: 200px; width: 200px;'
gridSquare.textContent = '1';

gridContainer.appendChild(gridSquare)


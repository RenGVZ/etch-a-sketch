let numberOfDivs;
let grid = document.querySelector('#grid');
let gridItem = [];
const go = document.querySelector('#go');
const reSize = document.querySelector('#re-size');
let gridValue = document.querySelector('#input-size').value;

document.addEventListener('DOMContentLoaded', createSketchPad);

function createSketchPad() {
  let numberOfColumns = gridValue;
  grid.style.cssText = `grid-template-columns: repeat(${numberOfColumns}, 1fr)`;
  numberOfDivs = numberOfColumns * numberOfColumns;

  createGrid(numberOfDivs);
  return numberOfDivs
}
  function createGrid(x) {
    // x = gridValue;
    for(i = 0; i <= x; i++){
    gridItem[i] = document.createElement('div');
    gridItem[i].classList = 'grid-item';
    gridItem[i].setAttribute('id', `item${[i]}`);
    grid.appendChild(gridItem[i]);
    }
  }
  

reSize.addEventListener('click', reSizeGrid);

function reSizeGrid() {
  console.log(gridValue)
  for(i = 0; i < grid.children; i++){
    grid.removeChild(gridItem[i]);
  }
  createGrid(gridValue);
  // gridItem.length = 0;
  // let gridValue = document.querySelector('input').value;
  // let numberOfColumns = gridValue;


}
function generateRandomColor() {
  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}

grid.addEventListener('mousemove', (event) => {
  console.log(event)
  let target = event.target;
  target.style.background = generateRandomColor();
  grid.addEventListener('mouseleave', (event) => {
    console.log(event);
  event.preventDefault();
});
grid.addEventListener('mouseenter', (event) => {
  event.preventDefault();
})
});



// function colorSquares {
//   console.log(target.value)
// }
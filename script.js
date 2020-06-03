let numberOfDivs;
let grid = document.querySelector('#grid');
let gridItem = [];
const go = document.querySelector('#go');
const reSize = document.querySelector('#re-size');
console.log(reSize.value)

document.addEventListener('DOMContentLoaded', createSketchPad);

function createSketchPad() {
  let gridValue = document.querySelector('input').value;
  let numberOfColumns = gridValue;
  // console.log(numberOfColumns);
  grid.style.cssText = `grid-template-columns: repeat(${numberOfColumns}, 1fr)`;
  numberOfDivs = numberOfColumns * numberOfColumns;

  function createGrid(x) {
    x = gridValue;
    for(i = 0; i <= x; i++){
    gridItem[i] = document.createElement('div');
    gridItem[i].classList = 'grid-item';
    gridItem[i].setAttribute('id', `item${[i]}`);
    grid.appendChild(gridItem[i]);
    }
  }
  createGrid(numberOfDivs);
  return numberOfDivs
}

reSize.addEventListener('click', reSizeGrid);


grid.addEventListener('mousemove', (event) => {
  let target = event.target;
  target.style.background = 'red';
});
grid.addEventListener('mouseleave', (event) => {
  event.preventDefault();
})

// function colorSquares {
//   console.log(target.value)
// }
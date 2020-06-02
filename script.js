let numberOfDivs;
let grid = document.querySelector('#grid');
let gridItem = [];
const go = document.querySelector('#go');

go.addEventListener('click', createSketchPad)

function createSketchPad() {
  let numberOfColumns = 16;
  grid.style.cssText = `grid-template-columns: repeat(${numberOfColumns}, 1fr)`;
  numberOfDivs = numberOfColumns * numberOfColumns;

  function createGrid(x) {
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

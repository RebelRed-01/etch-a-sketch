const grid = document.querySelector('.grid');
const sizeSlct = document.querySelector('.size');
const eraseBtn = document.querySelector('.erase');

let setGrid = (size = 16) => {
    for (let i  = 0; i < `${size}`; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row');
        grid.append(rowContainer);
        for (let i  = 0; i < `${size}`; i++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            rowContainer.append(tile);
    
            const draw = () => {
                tile.addEventListener('mouseover', () => {
                    tile.style.backgroundColor = 'black';
                })
            } 
            draw();
        }
    }
}
setGrid();

sizeSlct.addEventListener('click', () => {
    let newSize = parseInt(prompt('select grid size'));
    if (newSize > 100 || newSize < 2 || !Number.isInteger(newSize)) {
        alert('Grid size mus be a number between 2 and 100')
    } else {
        while (grid.hasChildNodes()) {
            grid.removeChild(grid.firstChild);
        }
        setGrid(newSize);
    }
})



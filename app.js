const body = document.querySelector('body');

for (let i  = 0; i <16; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row');
    body.append(rowContainer);
    for (let i  = 0; i <16; i++) {
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


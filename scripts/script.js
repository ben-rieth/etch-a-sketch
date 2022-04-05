function createGrid(size=16) {
    const container = document.getElementById('container');
    let totalSquares = Math.pow(size, 2);

    let div;
    let breakDiv;
    for(let i = 1; i <= totalSquares; i++) {
        div = document.createElement('div');
        div.classList.add('block');
        container.appendChild(div);

        if (i % size == 0) {
            breakDiv = document.createElement('div');
            breakDiv.classList.add('break');
            container.appendChild(breakDiv);
        }
    }
}

createGrid(16);

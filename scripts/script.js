function colorDiv(evt) {
    evt.currentTarget.classList.add('colored');
}

function createDiv() {
    let div = document.createElement('div');
    div.classList.add('block');
    div.addEventListener('mouseover', colorDiv);
    return div;
}

function createBreak() {
    let breakDiv = document.createElement('div');
    breakDiv.classList.add('break');
    return breakDiv;
}

function createGrid(size=16) {
    const container = document.getElementById('container');
    let totalSquares = Math.pow(size, 2);

    for(let i = 1; i <= totalSquares; i++) {
        container.appendChild(
            createDiv()
        );

        if (i % size == 0) {
            container.appendChild(
                createBreak()
            );
        }
    }
}

createGrid(16);
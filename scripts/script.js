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

function resetGrid() {
    let size = parseInt(prompt("How many squares long do you want the sides to be?"+
    "\n(30 squares recommend max for laptop, 70 for desktop)", "16"));

    const container = document.getElementById('container');
    
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    createGrid(size);
}

createGrid(16);

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', resetGrid)
let colorSelection;

function randomRgb() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${blue}, ${green})`;
}

function updateRgb(evt) {
    let currentRgb = evt.currentTarget.style['background-color'];

    let color = parseInt(currentRgb.substring(4, currentRgb.indexOf(',')));
    console.log(color);
    if (color > 0) {
        color -= 25;
        return `rgb(${color}, ${color}, ${color})`;
    }
    return currentRgb;
}

function colorDiv(evt) {
    let target = evt.currentTarget;
    
    if (colorSelection === "black") {
        target.style['background-color'] = 'black';

        target.classList.toggle('colored-black', true);
        target.classList.toggle('colored-random', false);
        target.classList.toggle('colored-black-10', false);

    } else if (colorSelection === "random") {
        target.style['background-color'] = randomRgb();
        target.classList.toggle('colored-random', true);
        target.classList.toggle('colored-black', false);
        target.classList.toggle('colored-black-10', false);

    } else if (colorSelection === "black-10") {

        if (target.style['background-color'] === '' ||
                target.classList.contains('colored-random')) {

            target.style['background-color'] = 'rgb(230, 230, 230)';
            target.classList.toggle('colored-random', false);
            target.classList.toggle('colored-black-10', true);

        } else {
            evt.currentTarget.style['background-color'] = updateRgb(evt);
        }
    }
    
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

function changeColor(evt) {
    if (evt.currentTarget.value === "black") {
        colorSelection = "black";
    } else if (evt.currentTarget.value === "random") {
        colorSelection = "random";
    } else if (evt.currentTarget.value === "black-10") {
        colorSelection = "black-10";
    }
}

colorSelection = "black";
createGrid(16);

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', resetGrid)

const colorSelect = document.querySelectorAll('input[type=radio]')
colorSelect.forEach((radio) => {
    radio.addEventListener('click', changeColor);
});
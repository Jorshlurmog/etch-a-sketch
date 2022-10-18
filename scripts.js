const canvas = document.querySelector('.canvas');
const modal = document.querySelector('.sizeModal');
const modalButton = document.querySelector('.modalButton');
const create = document.querySelector('.create');
const closeButton = document.querySelector('.closeButton');
const clear = document.querySelector('.clear')
const eraser = document.querySelector('.eraser');
const color = document.querySelector('#color');

let colorChoice = 'black';

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const changeColor = () => {
    document.querySelectorAll('.square').forEach(el => {
        el.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = colorChoice;
        });
    })
}


// creates the area which can be drawn on
const createCanvas = () => {
    const rowSize = document.querySelector('#rowSize').value;
    const columnSize = document.querySelector('#columnSize').value;

    removeAllChildNodes(canvas);
    for (let i = 0; i < (rowSize * columnSize); i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        canvas.appendChild(div);
    }
    canvas.style.gridTemplateColumns = `repeat(${columnSize}, 1fr)`;
    canvas.style.gridTemplateColumns = `repeat(${rowSize}, 1fr)`;
    canvas.style.backgroundColor = '#888';
    changeColor(colorChoice);
}

modalButton.addEventListener('click', () => {
    modal.style.display = 'block';
})

create.addEventListener('click', () => {
    createCanvas();
    modal.style.display = 'none';
})

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
})

clear.addEventListener('click', () => {
    removeAllChildNodes(canvas);
    canvas.style.backgroundColor = '#fefefe';
})

eraser.addEventListener('click', () => {
    colorChoice = '#fefefe';
})

color.addEventListener('change', () => {
    colorChoice = color.value;
    console.log(colorChoice)
})

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
})

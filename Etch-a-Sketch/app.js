const container = document.querySelector('.container');
const resetButton = document.querySelector(".reset");
const btnGrey = document.createElement('button');
const btnRGB = document.createElement('button');
const buttonsContainer = document.querySelector('.buttons');
const section = document.querySelector('.section');

function createDivs(col, rows) {
    for (let i = 0; i < (col * rows); i++) {
        const div = document.createElement('div');
        div.style.border = '1px solid black';
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box');
    };
};

createDivs(16, 16);

function blackColor() {
    const boxs = container.querySelectorAll('.box');
    btnGrey.textContent = 'Gray';
    btnGrey.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let Rnum = Math.floor(Math.random() * 255);
            box.style.background = `rgb(${Rnum},${Rnum},${Rnum})`;
        }));
    });

    buttonsContainer.appendChild(btnGrey);

};

blackColor();

function rgbColors() {

    const boxs = container.querySelectorAll('.box');
    btnRGB.textContent = "RGB";
    btnRGB.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            const RGB = `rgb(${R},${G},${B})`;
            box.style.background = RGB;
        }));
    });

    buttonsContainer.appendChild(btnRGB);
};
rgbColors();

resetButton.addEventListener('click', () => {
    const boxs = container.querySelectorAll('.box');
    boxs.forEach(box => box.remove());
    userInput = prompt('How many squares per side?');
    createDivs(userInput, userInput);
    blackColor();
    rgbColors();
});


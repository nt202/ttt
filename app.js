// HTML Elements

const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

const xSymbol = 'X';
const oSymbol = 'O';

const intoSymbol = (letter) => letter == 'x' ? xSymbol : oSymbol;


// functions
const checkGameStatus = () => {
    const c1 = cellDivs[0].classList[1];
    const c2 = cellDivs[1].classList[1];
    const c3 = cellDivs[2].classList[1];
    const c4 = cellDivs[3].classList[1];
    const c5 = cellDivs[4].classList[1];
    const c6 = cellDivs[5].classList[1];
    const c7 = cellDivs[6].classList[1];
    const c8 = cellDivs[7].classList[1];
    const c9 = cellDivs[8].classList[1];

    if (c1 && c1 === c2 && c1 === c3) {
        gameIsLive = false;
        statusDiv.innerHTML = `${intoSymbol(c1)} has won!`;
    } else if (c4 && c4 === c5 && c4 === c6) {
        gameIsLive = false;
        statusDiv.innerHTML = `${intoSymbol(c4)} has won!`;
    } else if (c7 && c7 === c8 && c7 === c9) {
        gameIsLive = false;
        statusDiv.innerHTML = `${intoSymbol(c7)} has won!`;
    }
    //
    else if (c1 && c1 === c4 && c1 === c7) {
        gameIsLive = false;
        statusDiv.innerHTML = `${intoSymbol(c1)} has won!`;
    } else if (c2 && c2 === c5 && c2 === c8) {
        gameIsLive = false;
        statusDiv.innerHTML = `${intoSymbol(c2)} has won!`;
    } else if (c3 && c3 === c6 && c3 === c9) {
        gameIsLive = false;
        statusDiv.innerHTML = `${intoSymbol(c3)} has won!`;
    }
    //
    else if (c1 && c1 === c5 && c1 === c9) {
        gameIsLive = false;
        statusDiv.innerHTML = `${intoSymbol(c1)} has won!`;
    } else if (c3 && c3 === c5 && c3 === c7) {
        gameIsLive = false;
        statusDiv.innerHTML = `${intoSymbol(c3)} has won!`;
    }
    //
    else if (c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8 && c9) {
        statusDiv.innerHTML = 'Draw!';
    }
    //
    else {

    }
}


// game variables

let gameIsLive = true;
let xIsNext = true;


// event handlers

const handleReset = (e) => {
    xIsNext = true;
    statusDiv.innerHTML = 'X is next';
    for (const cellDiv of cellDivs) {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
    }
    gameIsLive = true;
}

const handleCellClick = (e) => {

    if (!gameIsLive) {
        return;
    }

    const classList = e.target.classList;

    if (classList.contains('x') || classList.contains('o')) {
        return;
    }

    if (xIsNext) {
        classList.add('x');
    } else {
        classList.add('o');
    }
    xIsNext = !xIsNext;
    if (xIsNext) {
        statusDiv.innerHTML = 'X is next';
    } else {
        statusDiv.innerHTML = 'O is next';
    }

    checkGameStatus();
}


// event listeners

resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCellClick);
}
















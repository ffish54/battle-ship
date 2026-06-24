// Board size
const BOARD_SIZE = 10;

// Create 10x10 board filled with 0s
const board = Array(BOARD_SIZE)
    .fill()
    .map(() => Array(BOARD_SIZE).fill(0));

const enemyBoard = Array(10)
    .fill()
    .map(() => Array(10).fill(0));

// Ships
const ships = [
    { name: "Carrier", size: 5 },
    { name: "Battleship", size: 4 },
    { name: "Cruiser", size: 3 },
    { name: "Submarine", size: 3 },
    { name: "Destroyer", size: 2 }
];

let currentShip = 0;
let direction = "horizontal";



const cells = document.querySelectorAll("#player-board td");
const shipDisplay = document.getElementById("current-ship");
const directionDisplay = document.getElementById("direction");
const shipCountDisplay = document.getElementById("ship-count");
const rotateBtn = document.getElementById("rotate-btn");
const startBtn = document.getElementById("start-btn");


updateInfo();

// Rotate button
rotateBtn.addEventListener("click", () => {

    direction =
        direction === "horizontal"
            ? "vertical"
            : "horizontal";

    directionDisplay.textContent =
        direction.charAt(0).toUpperCase() +
        direction.slice(1);
});


cells.forEach(cell => {

    cell.addEventListener("click", () => {

        
        if (currentShip >= ships.length) {
            return;
        }

        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);

        placeShip(row, col);
    });
});

// Place ship function
function placeShip(row, col) {

    const ship = ships[currentShip];

    if (!canPlaceShip(row, col, ship.size)) {
        alert("Invalid placement!");
        return;
    }

    
     if (direction === "horizontal") {

        for (let i = 0; i < ship.size; i++) {
            board[row][col + i] = 1;
        }

    } else {

        for (let i = 0; i < ship.size; i++) {
            board[row + i][col] = 1;
            
        }
    }

    drawBoard();

    currentShip++;

    updateInfo();

    if (currentShip === ships.length) {
        startBtn.disabled = false;
        shipDisplay.textContent = "All Ships Placed";
    }
}

function placeShipEnemy(row, col, size, direction) {

    if (direction === "horizontal") {

        for (let i = 0; i < size; i++) {
            enemyBoard[row][col + i] = 1;
        }

    } else {

        for (let i = 0; i < size; i++) {
            enemyBoard[row + i][col] = 1;
        }
    }
}

// Check placement 
function canPlaceShip(boardToCheck, row, col, size, direction) {

    if (direction === "horizontal") {

        if (col + size > BOARD_SIZE) {
            return false;
        }

        for (let i = 0; i < size; i++) {

            if (boardToCheck[row][col + i] !== 0) {
                return false;
            }
        }

    } else {

        if (row + size > BOARD_SIZE) {
            return false;
        }

        for (let i = 0; i < size; i++) {

            if (boardToCheck[row + i][col] !== 0) {
                return false;
            }
        }
    }

    return true;
}

// Draw ships on board
function drawBoard() {
     console.log("Drawing board...");

    cells.forEach(cell => {

        const row = cell.parentElement.rowIndex;
        const col = cell.cellIndex;

        if (board[row][col] === 1) {
            cell.classList.add("ship");
        }
    });
}


function updateInfo() {

    if (currentShip < ships.length) {

        shipDisplay.textContent =
            `${ships[currentShip].name} (${ships[currentShip].size})`;
    }

    shipCountDisplay.textContent =
        `${currentShip} / ${ships.length}`;
}

// Start button
startBtn.addEventListener("click", () => {

    console.log("Board Data:");
    console.table(board);

});

function generateEnemyFleet() {

    ships.forEach(ship => {

        let placed = false;

        while (!placed) {

            const row = Math.floor(Math.random() * BOARD_SIZE);
            const col = Math.floor(Math.random() * BOARD_SIZE);

            const randomDirection =
                Math.random() < 0.5
                    ? "horizontal"
                    : "vertical";

            if (
                canPlaceShip(
                    enemyBoard,
                    row,
                    col,
                    ship.size,
                    randomDirection
                )
            ) {

                placeShipEnemy(
                    row,
                    col,
                    ship.size,
                    randomDirection
                );

                placed = true;
            }
        }
    });
}
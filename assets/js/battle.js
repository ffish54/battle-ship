const playerBoard = JSON.parse(
    localStorage.getItem("playerBoard")
);

const enemyBoard = JSON.parse(
    localStorage.getItem("enemyBoard")
);

const playerCells =
    document.querySelectorAll("#player-board td");

const enemyCells =
    document.querySelectorAll("#enemy-board td");

const statusMessage = document.getElementById(
    "status-message"
);

let playerTurn = true;

function drawPlayerBoard() {

    playerCells.forEach(cell => {

        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);

        if (playerBoard[row][col] === 1) {

            cell.classList.add("ship");


        }



    });

}

enemyCells.forEach(cell => {

    cell.addEventListener("click", () => {

        const row = parseInt(cell.dataset.row);

        const col = parseInt(cell.dataset.col);

        attackEnemy(row, col);

    });

});

function attackEnemy(row, col) {

     if (!playerTurn) {
        console.log("It's not your turn!");
        return;
    }

   

    if (
        enemyBoard[row][col] === 2 ||
        enemyBoard[row][col] === 3
    ) {
        return;
    }

    if (enemyBoard[row][col] === 1) {

        enemyBoard[row][col] = 2;

        statusMessage.textContent =
            "Direct Hit!";

    } else {

        enemyBoard[row][col] = 3;

        statusMessage.textContent =
            "Miss!";

    }
     playerTurn = false;

    drawEnemyBoard();
    setTimeout(() => { computerAttack(); }, 500);

}

function drawEnemyBoard() {

    enemyCells.forEach(cell => {

        const row =
            parseInt(cell.dataset.row);

        const col =
            parseInt(cell.dataset.col);

        cell.classList.remove("hit");
        cell.classList.remove("miss");

        if (enemyBoard[row][col] === 2) {

            cell.classList.add("hit");

        }

        if (enemyBoard[row][col] === 3) {

            cell.classList.add("miss");

        }

    });

}

function computerAttack() {

    let row;
    let col;

    do {

        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * 10);

    } while (
        playerBoard[row][col] === 2 ||
        playerBoard[row][col] === 3
    );

    if (playerBoard[row][col] === 1) {

        playerBoard[row][col] = 2;

        statusMessage.textContent =
            `Enemy hit your ship at (${row}, ${col})`;

    } else {

        playerBoard[row][col] = 3;

        statusMessage.textContent =
            `Enemy missed at (${row}, ${col})`;
    }

    drawPlayerBoard();

    playerTurn = true;
    statusMessage.textContent =
        "Your turn!";
}
function drawPlayerBoard() {

    playerCells.forEach(cell => {

        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);

        cell.classList.remove("ship");
        cell.classList.remove("hit");
        cell.classList.remove("miss");

        if (playerBoard[row][col] === 1) {
            cell.classList.add("ship");
        }

        if (playerBoard[row][col] === 2) {
            cell.classList.add("hit");
        }

        if (playerBoard[row][col] === 3) {
            cell.classList.add("miss");
        }

    });
}

drawPlayerBoard();
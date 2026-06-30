const gameMode = localStorage.getItem("gameMode");
const currentPlayer = localStorage.getItem("currentPlayer");

let playerBoard;
let enemyBoard;

console.log("Game Mode:", gameMode);
console.log("Current Player:", currentPlayer);

console.log("Player Board:");
console.table(playerBoard);

console.log("Enemy Board:");
console.table(enemyBoard);

if (gameMode === "1p") {

    playerBoard = JSON.parse(
        localStorage.getItem("playerBoard")
    );

    enemyBoard = JSON.parse(
        localStorage.getItem("enemyBoard")
    );

}

if (gameMode === "2p") {

    if (currentPlayer === "1") {

        playerBoard = JSON.parse(
            localStorage.getItem("player1Board")
        );

        enemyBoard = JSON.parse(
            localStorage.getItem("player2Board")
        );

    } else {

        playerBoard = JSON.parse(
            localStorage.getItem("player2Board")
        );

        enemyBoard = JSON.parse(
            localStorage.getItem("player1Board")
        );

    }

}

const playerCells = document.querySelectorAll("#player-board td");

const enemyCells = document.querySelectorAll("#enemy-board td");

const statusMessage = document.getElementById("status-message");

let playerTurn = true;

function drawPlayerBoard() {
  playerCells.forEach((cell) => {
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);

    if (playerBoard[row][col] === 1) {
      cell.classList.add("ship");
    }
  });
}

enemyCells.forEach((cell) => {
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

  if (enemyBoard[row][col] === 2 || enemyBoard[row][col] === 3) {
    return;
  }

  if (enemyBoard[row][col] === 1) {
    enemyBoard[row][col] = 2;

    statusMessage.textContent = "Direct Hit!";
  } else {
    enemyBoard[row][col] = 3;

    statusMessage.textContent = "Miss!";
  }

  drawEnemyBoard();
  checkWinner();
  if (playerTurn !== false) {
    playerTurn = false;
    if (gameMode === "1p") {

    playerTurn = false;

    setTimeout(() => {

        computerAttack();

    }, 500);
  }
    else {

    switchPlayer();
}


  }
}

function drawEnemyBoard() {
  enemyCells.forEach((cell) => {
    const row = parseInt(cell.dataset.row);

    const col = parseInt(cell.dataset.col);

    cell.classList.remove("hit");
    cell.classList.remove("miss");
    cell.classList.remove("ship");

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
  } while (playerBoard[row][col] === 2 || playerBoard[row][col] === 3);

  if (playerBoard[row][col] === 1) {
    playerBoard[row][col] = 2;

    statusMessage.textContent = `Enemy hit your ship at (${row}, ${col})`;
  } else {
    playerBoard[row][col] = 3;

    statusMessage.textContent = `Enemy missed at (${row}, ${col})`;
  }

  drawPlayerBoard();
  checkWinner();

  playerTurn = true;
  statusMessage.textContent = "Your turn!";
}
function drawPlayerBoard() {
  playerCells.forEach((cell) => {
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

function checkWinner() {
  let playerShipsLeft = 0;
  let enemyShipsLeft = 0;

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      if (playerBoard[row][col] === 1) {
        playerShipsLeft++;
      }
    }
  }

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      if (enemyBoard[row][col] === 1) {
        enemyShipsLeft++;
      }
    }
  }

  if (enemyShipsLeft === 0) {
    endGame("Player");
  }

  if (playerShipsLeft === 0) {
    if (gameMode === "1p") {

    endGame("Computer");

}
else {

    endGame("Player " + currentPlayer);

}
  }
}

function endGame(winner) {
  playerTurn = false;

  if (winner === "Player") {
    statusMessage.textContent = "Victory! You destroyed all enemy ships.";
  } else if (winner === "Computer") {
    statusMessage.textContent = "Defeat! The enemy destroyed all your ships.";
  }
    else {

        statusMessage.textContent =
            winner + " Wins!";

    }


}

function switchPlayer() {

    // Save both boards

    if (currentPlayer === "1") {

        localStorage.setItem(
            "player1Board",
            JSON.stringify(playerBoard)
        );

        localStorage.setItem(
            "player2Board",
            JSON.stringify(enemyBoard)
        );

        localStorage.setItem(
            "currentPlayer",
            "2"
        );

    } else {

        localStorage.setItem(
            "player2Board",
            JSON.stringify(playerBoard)
        );

        localStorage.setItem(
            "player1Board",
            JSON.stringify(enemyBoard)
        );

        localStorage.setItem(
            "currentPlayer",
            "1"
        );

    }

    localStorage.setItem(
        "phase",
        "battle"
    );

    window.location.href =
        "swap.html";

}

drawPlayerBoard();
drawEnemyBoard();

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"; // Changed to uppercase
let running = false;

initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.removeEventListener("click", cellClicked));
    cells.forEach(cell => cell.addEventListener("click", cellClicked)); // Add event listeners
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`; // Fixed typo
    running = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex"); // Fixed typo
    if (options[cellIndex] !== "" || !running) {
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index) { // Added parameters
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X"; // Consistent casing
    statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < winCondition.length; i++) {
        const condition = winCondition[i];
        const CellA = options[condition[0]];
        const CellB = options[condition[1]];
        const CellC = options[condition[2]];
        if (CellA === "" || CellB === "" || CellC === "") {
            continue;
        }
        if (CellA === CellB && CellB === CellC) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        statusText.textContent = `${currentPlayer} wins!`;
        running = false; 
    } else if (!options.includes("")) {
        statusText.textContent = `Draw!`;
    } else {
        changePlayer();
    }
}

function restartGame() { // Fixed typo
    currentPlayer = "X"; // Changed to uppercase
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}

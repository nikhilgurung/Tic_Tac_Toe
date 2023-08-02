let currentPlayer = "X";
let gameBoard = Array(9).fill("");
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return gameBoard[a];
        }
    }
    return null;
}

function placeMark(cell) {
    const cellIndex = Array.from(cell.parentElement.children).indexOf(cell);
    if (gameBoard[cellIndex] === "" && !checkWinner()) {
        gameBoard[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";

        const winner = checkWinner();
        if (winner) {
            document.getElementById("status").textContent = `${winner} wins!`;
        } else if (!gameBoard.includes("")) {
            document.getElementById("status").textContent = "It's a draw!";
        }
    }
}

function resetBoard() {
    gameBoard = Array(9).fill("");
    currentPlayer = "X";
    document.getElementById("status").textContent = "";
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
}

resetBoard();

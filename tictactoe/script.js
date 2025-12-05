const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart-btn");
const scoreX = document.getElementById("score-x");
const scoreO = document.getElementById("score-o");
const scoreDraw = document.getElementById("score-draw");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
let scores = { X: 0, O: 0, draw: 0 };

// Winning combinations (indices)
const winPatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6], // Diagonal top-right to bottom-left
];

// Handle cell click
function handleCellClick(e) {
    const cell = e.target;
    const index = cell.dataset.index;

    // Ignore if cell is taken or game is over
    if (board[index] !== "" || !gameActive) return;

    // Update board and UI
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add("taken", currentPlayer.toLowerCase());

    // Check for winner or draw
    if (checkWinner()) {
        gameActive = false;
        statusText.textContent = `Player ${currentPlayer} wins! 🎉`;
        statusText.classList.add("winner");
        scores[currentPlayer]++;
        updateScoreboard();
    } else if (board.every((cell) => cell !== "")) {
        gameActive = false;
        statusText.textContent = "It's a draw! 🤝";
        statusText.classList.add("draw");
        scores.draw++;
        updateScoreboard();
    } else {
        // Switch player
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = `Player ${currentPlayer}'s turn`;
    }
}

// Check for winner
function checkWinner() {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            // Highlight winning cells
            cells[a].classList.add("winner-cell");
            cells[b].classList.add("winner-cell");
            cells[c].classList.add("winner-cell");
            return true;
        }
    }
    return false;
}

// Update scoreboard
function updateScoreboard() {
    scoreX.textContent = scores.X;
    scoreO.textContent = scores.O;
    scoreDraw.textContent = scores.draw;
}

// Restart game
function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    statusText.textContent = "Player X's turn";
    statusText.classList.remove("winner", "draw");

    cells.forEach((cell) => {
        cell.textContent = "";
        cell.classList.remove("taken", "x", "o", "winner-cell");
    });
}

// Event listeners
cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
restartBtn.addEventListener("click", restartGame);

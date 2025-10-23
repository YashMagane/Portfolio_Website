// Initialize game state variables
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';  // X always starts first
let gameActive = true;

// Winning combinations (rows, columns, diagonals)
const winningConditions = [
    [0, 1, 2], // First row
    [3, 4, 5], // Second row
    [6, 7, 8], // Third row
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column
    [0, 4, 8], // First diagonal
    [2, 4, 6]  // Second diagonal
];

// Function to handle when a cell is clicked
function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedIndex = clickedCell.getAttribute('data-index');

    // If the cell is already filled or the game is over, do nothing
    if (board[clickedIndex] !== '' || !gameActive) {
        return;
    }

    // Update the board and display the player's mark
    board[clickedIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    // Check if the move leads to a win or draw
    checkResult();
}

// Check if someone has won or the game is a draw
function checkResult() {
    let roundWon = false;

    // Loop through each winning condition
    for (let i = 0; i < winningConditions.length; i++) {
        const condition = winningConditions[i];
        const a = board[condition[0]];
        const b = board[condition[1]];
        const c = board[condition[2]];

        // If all cells in the condition have the same player's mark
        if (a !== '' && a === b && a === c) {
            roundWon = true;
            break;
        }
    }

    // Display result if someone wins
    if (roundWon) {
        document.getElementById('status').textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
    }

    // Check if there are no more empty cells (draw)
    const roundDraw = !board.includes('');
    if (roundDraw) {
        document.getElementById('status').textContent = 'Game is a Draw!';
        gameActive = false;
        return;
    }

    // Switch players
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Reset the game state for a new game
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('status').textContent = '';

    // Clear the board UI
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}

// Add event listeners to all cells
document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

// Add event listener to reset button
document.getElementById('reset-btn').addEventListener('click', resetGame);

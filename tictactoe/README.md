# Tic-Tac-Toe (JavaScript)

An in-browser Tic-Tac-Toe game implemented with vanilla HTML, CSS, and JavaScript. The UI is responsive and accessible, and the game runs entirely on the client side. The implementation supports two local players (X and O) with automatic winner/draw detection. The scoreboard persists while the page is open but is not persisted across reloads.

Features

- Responsive grid-based board styled with CSS, mouse click interactions for tile placement, and highlighting for winning tiles.
- Scoreboard with counts for X wins, O wins, and draws.
- Restart button to reset the game board while preserving scoreboard counts for the session.

How to run

1. Open `index.html` in a browser with JavaScript enabled.

Developer notes

- Extending the game is straightforward: add single-player AI (minimax algorithm or heuristics), localStorage persistence for scores, or multiplayer over a WebSocket connection. To improve accessibility add keyboard navigation and visible focus states for each cell.

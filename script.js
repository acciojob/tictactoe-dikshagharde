//your JS code here. If required.
//your JS code here. If required.
 //your JS code here. If required.
// Wait for the DOM to be loaded
//your JS code here. If required.
        const container = document.querySelector('.container');
		const player1Input = document.querySelector('#player-1');
		const player2Input = document.querySelector('#player-2');
		const submitBtn = document.querySelector('#submit');
		const messageDiv = document.createElement('div');
		messageDiv.classList.add('message');
		container.appendChild(messageDiv);
		let player1 = '';
		let player2 = '';
		let currentPlayer = '';
		let gameBoard = ['', '', '', '', '', '', '', '', ''];
		let gameInProgress = false;

		function initializeGame() {
			player1 = player1Input.value;
			player2 = player2Input.value;
			messageDiv.textContent = `${player1}, you're up!`;
			currentPlayer = player1;
			gameInProgress = true;
			gameBoard = ['', '', '', '', '', '', '', '', ''];
			const cells = document.querySelectorAll('.cell');
			cells.forEach(cell => {
				cell.textContent = '';
				cell.removeEventListener('click', handleCellClick);
				cell.addEventListener('click', handleCellClick, { once: true });
			});
		}

		function handleCellClick(e) {
			const cell = e.target;
			const cellIndex = parseInt(cell.id) - 1;
			gameBoard[cellIndex] = currentPlayer === player1 ? 'X' : 'O';
			cell.textContent = gameBoard[cellIndex];
			checkGameStatus();
			switchPlayer();
		}

		function checkGameStatus() {
			const winningCombinations = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6]
			];
			const gameEnded = gameBoard.every(cell => cell !== '');
			let winner = null;
			winningCombinations.forEach(combination => {
				const [a, b, c] = combination;
				if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] ===gameBoard[c] && gameBoard[c]{
					
				} 
//				
let player1Selections = 'x';
let player2Selections = '0';
const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
const player1Name = document.getElementById("#player-1");
const player2Name = document.getElementById("#player-2");
const submitButton = document.getElementById("#submit");
const board = document.getElementById("#board");
const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

startGame(){
submitBtn.addEventListener('click', startGame 
    const player1Name = document.getElementById('player-1').value;
    const player2Name = document.getElementById('player-2').value;
);
}
    // Create h1 tag with "Tic Tac Toe" content
    const h1 = document.createElement('h1');
    h1.textContent = 'Tic Tac Toe';
    container.appendChild(h1);

//let currentPlayer = "player1";


nameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const player1 = player1Name.value;
  const player2 = player2Name.value;
  if (player1 !== "" && player2 !== "") {
    message.textContent = `${player1}, you're up!`;
    currentPlayer = "player1";
  }
});


					
      
let boxes= document.querySelectorAll(".box")
let turn = "x";
let isGameOver = false;

boxes.forEach(e =>{
	e.innerHTML=""
	e.addEventListener("click",()=>{
		if(!isGameOver && e.innerHTML === "")
		e.innerHTML = turn;
		cheakWin();
		cheakDraw();
		changeTurn();
	})
})
function changeTurn(){
	if(turn === "x"){
		turn = "o";
		document.querySelector(".bg").style.top ="85px";
	}
	else{
		turn = "x";
		document.querySelector(".bg").style.top ="0";
	}
}
function cheakWin(){
	let winConditions = [
	    [0, 1, 2],
	    [3, 4, 5],
	    [6, 7, 8],
	    [0, 3, 6],
	    [1, 4, 7],
	    [2, 5, 8],
	    [0, 4, 8],
	    [2, 4, 6]
	]
	for (let i = 0; i <winConditions.length; i++) {
		let v0 = boxes[winConditions[i][0]].innerHTML;
		let v1 = boxes[winConditions[i][1]].innerHTML;
		let v2 = boxes[winConditions[i][2]].innerHTML;

		if (v0 !="" && v0 === v1 && v0 === v2) {
			isGameOver(true)
		}
	}

}
function cheakDraw(){

}























// console.log('wellcome')
// const PLAYER_X_CLASS = 'x'
// const PLAYER_O_CLASS = 'circle'
// const WINNING_COMBINATIONS = [
// 	[0, 1, 2],
// 	[3, 4, 5],
// 	[6, 7, 8],
// 	[0, 3, 6],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[0, 4, 8],
// 	[2, 4, 6]
// ]
// const cellElements = document.querySelectorAll('box')
// const boardElement = document.getElementById('container')
// const winningMessageElement = document.getElementById('winningMessage')
// const restartButton = document.getElementById('restartButton')
// const winningMessageTextElement = document.getElementById('winningMessageText')
// let isPlayer_O_Turn = false

// startGame()

// restartButton.addEventListener('click', startGame)

// function startGame() {
// 	isPlayer_O_Turn = false
// 	cellElements.forEach(cell => {
// 		cell.classList.remove(PLAYER_X_CLASS)
// 		cell.classList.remove(PLAYER_O_CLASS)
// 		cell.removeEventListener('click', handleCellClick)
// 		cell.addEventListener('click', handleCellClick, { once: true })
// 	})
// 	setBoardHoverClass()




    
// 	winningMessageElement.classList.remove('show')
// }
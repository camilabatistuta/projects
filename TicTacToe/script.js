//With all this code I'm getting all the elements I need from HTML to interact with the game
const board = document.getElementById('boardTable');
const squares = document.getElementsByClassName('square');

//This creates the players of the game
const players = ['X', 'O'];

//Here I asign the variable current player to the X so it's the one to start the game
let currentPlayer = players[0];

//Here I create a new h2 element that will print on the screen a message if someone won the game or if it's a tie
const endMessage = document.createElement('h2')
endMessage.textContent = `X's turn!`;
endMessage.style.marginTop = '30px';
endMessage.style.textAlign = 'center';

board.after(endMessage);

//Here I create a constant with all the winning combinations in the game
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

//The following code will associate all the functions so we can play tic tac toe 
for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', ()=>{
        if(squares[i].textContent !== ''){
            return
        }
        squares[i].textContent = currentPlayer;
        if(winStatus(currentPlayer)){
            endMessage.textContent = `It's over ${currentPlayer} win`
            return
        }
        if(tieStatus()){
            endMessage.textContent = `It's a tie, start again!`
            return
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0]
        if(currentPlayer === players[0]){
            endMessage.textContent = `It's X turn`
        } else{
            endMessage.textContent = `It's O turn`
        }
    })
}

//This function will check the win status of the game

function winStatus(currentPlayer){
    for(let i = 0; i < winningCombinations.length; i++){
        const [a, b, c] = winningCombinations[i]
        if(squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer){
            return true
        }
    }
    return false
}

//This function will check the tie status of the game

function tieStatus(){
    for(let i = 0; i < squares.length; i++){
        if(squares[i].textContent === ''){
            return false
        }
    }
    return true
}

//This function will reset the game when the button is clicked

function resetButton(){
    for(let i = 0; i < squares.length; i++){
        squares[i].textContent = '';
    }
    endMessage.textContent = `X's turn!`;
    currentPlayer = players[0]
}

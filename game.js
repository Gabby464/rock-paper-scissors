//declare all the important universal variables
let computerSelection;
let playerSelection;
let result;
let winner; //true if Player, false if Computer;
let playerScore = 0;
let computerScore = 0;
const buttonElements = document.getElementsByClassName('button');
let rounds = 0;


//get random computer choice
function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    let index = Math.floor(Math.random() * 3);
    return options[index]
}


//gameround against the computer

function gameRound() {
    //compare both selections and chose a winner
    if (playerSelection == computerSelection) {
        result = 'Tie!'
    } else if (playerSelection == 'Rock') {
        if (computerSelection == 'Paper') {
            result = 'You win!'
        } else if (computerSelection == 'Scissors') {
            result = 'The Computer wins!';
        }
    } else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            result = 'You win!'
        } else if (computerSelection == "Scissors") {
            result = 'The Computer wins!';
        }
    } else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper') {
            result = 'You win!'
        } else if (computerSelection == "Rock") {
            result = 'The Computer wins!';
        }
    }
    return result;
}
gameRound()

function buttonSelection(){
        //display both selections
        let playerField = document.getElementById('player');
        let computerField = document.getElementById('computer');
        let resultField = document.getElementById('result');
    
    const buttonElements = document.getElementsByClassName('button');
    Array.from(buttonElements).forEach(function (element) {
        element.addEventListener('click', (e) => {
            computerSelection = getComputerChoice()
            playerSelection = e.target.innerHTML;
            playerField.textContent = `Player's selection: ${playerSelection}`;
            computerField.textContent = `Computer's selection: ${computerSelection}`;
            resultField.textContent = `Round Result: ${result}`;
            scorecard(winner)
            scoreField.textContent = `Rounds played: ${rounds} -> Computer points: ${computerScore} vs  Player's points:  ${playerScore}`;
            checkScore(computerScore, playerScore)
        })
    })
}
buttonSelection()


function scorecard(winner) {
    rounds++
    if (winner == false) {
        computerScore ++
    }else{
        playerScore++
    }
}

//show warning heading and disable buttons
function disableButtons(){
    let wariningMessage = document.getElementById('warining');
    wariningMessage.style.display = "block";

    Array.from(buttonElements).forEach((button) => {
        button.disabled = true;
    })
}

//check if one of the players has reached 5 points;
function checkScore(computerScore, playerScore){
    if(computerScore == 5){
        disableButtons()        
        setTimeout(() => {
            alert("The Computer won! Good luck next time. Refresh to play again")
          }, "1000")
        
        
    }else if(playerScore == 5){
        disableButtons()
        setTimeout(() => {
            alert("You won! Good job. Refresh to play again")
          }, "1000")
    }
}
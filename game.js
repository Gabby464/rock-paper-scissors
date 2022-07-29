//declare all the important properties
    let computerSelection;
    let playerSelection;
    let result;


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
            resultField.textContent = `Result: ${gameRound()}`;
        })
    })
}
buttonSelection()


//get random computer choice
function getComputerChoice (){
const options = ['rock', 'paper', 'scissors'];
let index = Math.floor(Math.random() * 3);
return options[index]
}
getComputerChoice()
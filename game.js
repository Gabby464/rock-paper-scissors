//get random computer choice
function getComputerChoice (){
const options = ['rock', 'paper', 'scissors'];
let index = Math.floor(Math.random() * 4);
console.log(options[index]);
console.log(index)
}
getComputerChoice()
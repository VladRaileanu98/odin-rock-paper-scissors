function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    let value = "default";
    switch (choice) {
        case 1:
            value = "rock"
            break;

        case 2:
            value = "paper"
            break;
        case 3:
            value = "scissors"
            break;
    }
    return value;
}


function playGame(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    console.log(playerSelection + " vs " + computerSelection);
    let result;
    switch (true) {
        case (playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors"):
            result = playerSelection + " vs " + computerSelection + " => tie";
            break;
        case (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper"):
            result = playerSelection + " vs " + computerSelection + " => player wins";
            break;
        case (playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors"):
            result = playerSelection + " vs " + computerSelection + " => computer wins";
            break;
    }

    playGame.computerSelection = computerSelection;

    return result;
}

let playerSelection;
let computerSelection;
let result;

//======================


const rock = document.getElementById('rockBtn')
const paper = document.getElementById('paperBtn')
const scissors = document.getElementById('scissorsBtn')

const chosen1 = document.getElementById('choice1');

rock.addEventListener('click', () => (
    //document.getElementById('choice1').innerHTML="rock",
    result = playGame("rock",computerSelection),
    document.getElementById('res').innerHTML=result,
    document.getElementById('choice1').innerHTML="rock",
    document.getElementById('choice2').innerHTML=playGame.computerSelection
    ))
paper.addEventListener('click', () => (
    result = playGame("paper",computerSelection),
    document.getElementById('res').innerHTML=result,
    document.getElementById('choice1').innerHTML="paper",
    document.getElementById('choice2').innerHTML=playGame.computerSelection
    ))
scissors.addEventListener('click', () => (
    //document.getElementById('choice').innerHTML="scissors",
    result = playGame("scissors",computerSelection),
    document.getElementById('res').innerHTML=result,
    document.getElementById('choice1').innerHTML="scissors",
    document.getElementById('choice2').innerHTML=playGame.computerSelection
    ))





function computerPlay(){
let Cpchoices = ["rock", "scissors","paper"]
let Cdecide = Math.floor(Math.random()*3)
let Cchoice = Cpchoices[Cdecide]
console.log(Cchoice)
    return Cchoice
}

function playRound(playerSelection, computerSelection) {
playerSelection.toLowerCase();
let winnerC;
let loserC;
let lost = false;
let won = false;
let draw = false;
if((computerSelection === "rock") && (playerSelection === "scissors")) {
    winnerC = computerSelection;
    loserC = playerSelection
    lost = true;
}
if((computerSelection === "rock") && (playerSelection === "paper")) {
    winnerC = playerSelection;
    loserC = computerSelection
    won = true;
}
if((computerSelection === "rock") && (playerSelection === "rock")) {
    draw = true;
}

if((computerSelection === "scissors") && (playerSelection === "scissors")) {
    draw = true;
}
if((computerSelection === "scissors") && (playerSelection === "paper")) {
    winnerC = computerSelection;
    loserC = playerSelection;
    lost = true;
}
if((computerSelection === "scissors") && (playerSelection === "rock")) {
    winnerC = playerSelection;
    loserC = computerSelection;
    won = true;
}

if((computerSelection === "paper") && (playerSelection === "scissors")) {
    winnerC = playerSelection;
    loserC = computerSelection;
    won = true;
}
if((computerSelection === "paper") && (playerSelection === "paper")) {
    draw = true;
}
if((computerSelection === "paper") && (playerSelection === "rock")) {
    winnerC = computerSelection;
    loserC = playerSelection;
    lost = true;
}
let messageWin = "you won!" + winnerC + "beats" + loserC;
let messageLost = "you lost!" + winnerC + "beats" + loserC;
let messageDraw = "Its a draw!";
if(won === true){
 return messageWin
} else if (lost === true){
    return messageLost
} else if (draw === true){
    return messageDraw
}
}

const btnPaper = document.querySelector('.paper');
btnPaper.addEventListener('click', () => {
    const playerSelection = "paper";
});
const btnScissors = document.querySelector('.scissors');
btnScissors.addEventListener('click', () => {
    const playerSelection = "scissors";
});
const btnRock = document.querySelector('.rock');
btnRock.addEventListener('click', () => {
    const playerSelection = "rock";
});

const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); 
/*
function game(){
    let playerSelection = ""; 
        for(i = 0; i < 5; i++){
            let windowC = prompt("Choose either paper, scissors or rock");
            if (windowC.toLowerCase() == "paper") {
                playerSelection = "paper";
            }else if (windowC.toLowerCase() == "rock") {
                playerSelection = "rock";
            }else if (windowC.toLowerCase() == "scissors") {
                playerSelection = "scissors";
            }
            let computerSelection = computerPlay();
            let result = playRound(playerSelection, computerSelection);
            console.log(result)
        }
    }
game();
*/

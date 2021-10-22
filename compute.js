function computerPlay(){
let Cpchoices = ["rock", "scissors","paper"]
let Cdecide = Math.floor(Math.random()*3)
let Cchoice = Cpchoices[Cdecide]
console.log(Cchoice)
    return Cchoice
}
let countW = 0;
let countL = 0;
let countD = 0;

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


    if(won === true){
        countW = countW + 1;
    }
    if(lost === true){
        countL = countL + 1;
    }
    if(draw === true){
        countD = countD + 1;
    }
    const resultView = document.querySelector('.resultView');
    resultView.textContent = 'Results! won: ' +countW +', lost: ' +countL +', draw: ' +countD;

    let messageWin = "you won! " + winnerC + " beats" + loserC;
    let messageLost = "you lost! " + winnerC + " beats" + loserC;
    let messageDraw = "Its a draw!";
    if(won === true){
    return messageWin
    } else if (lost === true){
        return messageLost
    } else if (draw === true){
        return messageDraw
    }

}
const resultRect = document.createElement('div');
const btnPaper = document.querySelector('.paper');
const body = document.querySelector('body');
btnPaper.addEventListener('click', () => {
    const playerSelection = "paper";
    const computerSelection = computerPlay();
    const aRoundResult = playRound(playerSelection, computerSelection); 
    resultRect.textContent = aRoundResult;
    body.appendChild(resultRect);
});
const btnScissors = document.querySelector('.scissors');
btnScissors.addEventListener('click', () => {
    const playerSelection = "scissors";
    const computerSelection = computerPlay();
    const aRoundResult = playRound(playerSelection, computerSelection); 
    resultRect.textContent = aRoundResult;
    body.appendChild(resultRect);
});
const btnRock = document.querySelector('.rock');
btnRock.addEventListener('click', () => {
    const playerSelection = "rock";
    const computerSelection = computerPlay();
    const aRoundResult = playRound(playerSelection, computerSelection); 
    resultRect.textContent = aRoundResult;
    body.appendChild(resultRect);
});


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

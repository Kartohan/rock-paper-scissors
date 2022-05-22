let choices = ['rock', 'paper', 'scissors'];

let computerSel;
let playerSel;
let retry = document.querySelector('#retry');
let computerScore = 0;
let playerScore = 0;
let playerText = document.querySelector('.player');
let computerText = document.querySelector('.computer');
let resultText = document.querySelector('.result')
let game;
let buttons = document.querySelector('.buttons');
let resultRound = document.querySelector('.resultRound')
let playerfield = document.querySelector('#playerPlay')
let computerfield = document.querySelector('#computerPlay')

function computerPlay() {
    return choices[~~(Math.random() * choices.length)]
}

function playRound (playerSelection, computerSelection) {
    computerSel = computerSelection;
    let playerCapital = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let computerCapital = computerSel.charAt(0).toUpperCase() + computerSel.slice(1);
    let result;
    if (playerSelection == computerSelection) {
        result = "Tie";
        resultRound.innerText = `Tie Round! ${playerCapital} cannot beats ${computerCapital}`
       return result;
    } else if (playerSelection != computerSelection) {
        if (playerSelection === "rock" && computerSelection === "paper") {
            result = "Lose"
            resultRound.innerText = `Oh no! ${playerCapital} cannot beats ${computerCapital}`
            return result;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            resultRound.innerText = `Yeah! ${playerCapital} beats ${computerCapital}`
            result = "Win"
            return result;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            result = "Win"
            resultRound.innerText = `Yeah! You just put ${playerCapital} on ${computerCapital}`
            return result;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            result = "Lose"
            resultRound.innerText = `Oh! ${computerCapital} cuts ${playerCapital}`
           return result;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            result = "Win"
            resultRound.innerText = `Yes! ${playerCapital} beats ${computerCapital}`
           return result;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            result = "Lose"
            resultRound.innerText = `Damn. ${playerCapital} breaks on ${computerCapital}`
            return result;
        }
    }
}
function playerPlay() {
    buttons.addEventListener('click', (e) => {
        playerSel = e.target.id;
    })
    return playerSel;
}
playerPlay();
function playGame() {
    if (playerScore === 5 || computerScore === 5) {
        return;
    }
    game = playRound(playerPlay(),computerPlay())
    resultText.innerText = game;
    playerfield.className = playerSel;
    computerfield.className = computerSel;
    playerfield.innerText = '';
    computerfield.innerText = '';
    if (game === 'Win'){
    playerScore++;
    playerText.innerText = playerScore;
    resultText.innerText = `Player ${game} round!`;
    } else if (game === 'Lose') {
    computerScore++;
    computerText.innerText = computerScore;
    resultText.innerText = `Player ${game} round!`;
    } else if (game === 'Tie') {
    resultText.innerText = `${game} round!`;
    }
    if (playerScore === 5){
    resultText.innerText = 'Player Wins the Game!';
    retry.classList.remove("visible");
    } else if (computerScore === 5){
    resultText.innerText = 'Computer Wins the Game!';
    retry.classList.remove("visible");
    }
}
function play(){
        buttons.addEventListener('click', (e) => {
            if (e.target.class === "buttons") {
                return
            } else if (e.target.id === 'rock' || e.target.id === 'paper' || e.target.id === 'scissors') {
                playGame();
            }
        })
    retry.addEventListener('click', () => {
        playerText.innerText = 0;
        computerText.innerText = 0;
        computerScore = 0;
        playerScore = 0;
        resultText.innerText = '';
        retry.classList.add("visible");
        playerfield.innerText = '?';
        computerfield.innerText = '?';
        playerfield.className = '';
        computerfield.className = '';
        resultRound.innerText = '';
    })
}

play();

/*function playerPlay(){
    let choice;
    do {choice = prompt('Write Rock, Paper or Scissors', '');
    if (choice === null) continue;
    choice = choice.toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        break;
    }
    if (choice !== 'rock' || choice !== 'paper' || choice !== 'scissors') {
        alert('Pick Rock, Paper or Scissors')
    }}
    while (choice !== 'rock' || choice !== 'paper' || choice !== 'scissors');
    return choice;
    
}



/*function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = playerPlay();
        let result = round(playerSelection, computerSelection);
        if (result === "Win") {
            playerScore++;
            console.log(("You " + result + "! Your score is: " + playerScore));
            alert("You " + result + "! Your score is: " + playerScore)
        } else if (result === "Lose") {
            computerScore++;
            console.log(("You " + result + "! Computer score is: " + computerScore));
            alert("You " + result + "! Computer score is: " + computerScore)
        } else if (result === "Tie") {
            console.log((result + " round!"));
            alert(result + " round!")
        }
    }
    if (playerScore > computerScore) {
        console.log("You Win this game!");
        alert("You Win this game!");
    } else if (playerScore < computerScore) {
        console.log("You Lose! Try again!");
        alert("You Lose! Try again!");
    } else if (playerScore = computerScore) {
    console.log("Tie game");
        alert("Tie game");
    }
}
*/
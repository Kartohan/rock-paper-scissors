let choices = ['rock', 'paper', 'scissors']

function computerPlay() {
    return choices[~~(Math.random() * choices.length)]
}

function playRound (playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        result = "Tie";
       return result;
    } else if (playerSelection != computerSelection) {
        if (playerSelection === "rock" && computerSelection === "paper") {
            result = "Lose"
            return result;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            result = "Win"
            return result;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            result = "Win"
            return result;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            result = "Lose"
           return result;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            result = "Win"
           return result;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            result = "Lose"
            return result;
        }
    }
}
function playerSelection(){
    let game;
    let retry = document.querySelector('#retry');
    let computerScore = 0;
    let playerScore = 0;
    let playerText = document.querySelector('.player');
    let computerText = document.querySelector('.computer');
    let resultText = document.querySelector('.result')
    let buttons = document.querySelectorAll('.button')
        buttons.forEach( button => {
            button.addEventListener('click', function playGame(){
                if (playerScore === 5 || computerScore === 5) {
                    return;
                }
                game = playRound(button.id,computerPlay())
                resultText.innerText = game;
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
            })
        })
    retry.addEventListener('click', () => {
        playerText.innerText = 0;
        computerText.innerText = 0;
        computerScore = 0;
        playerScore = 0;
        resultText.innerText = '';
        retry.classList.add("visible");
    })
}


playerSelection();
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
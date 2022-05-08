let choices = ['rock', 'paper', 'scissors']

function computerPlay() {
    return choices[~~(Math.random() * choices.length)]
}

function round (playerSelection, computerSelection) {
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

function game() {
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

function playerPlay(){
    do {choice = prompt('Choose rock, paper, or scissors', '').toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        break;
    }
    }
    while (choice !== 'rock' || choice !== 'paper' || choice !== 'scissors');
    return choice;
}


game();

function computerPlay() {
    let random = Math.ceil(Math.random() * 3)
    if (random === 1) {
        return("Rock")
    } else if (random === 2) {
        return("Paper")
    } else if (random === 3) {
        return("Scissors")
    }
}

function round (playerSelection, computerSelection) {
    let result;
    playerSelection.toLowerCase();
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        result = "Tie";
       /* return(result + " Game!")*/
       return result;
    } else if (playerSelection != computerSelection) {
        if (playerSelection === "rock" && computerSelection === "Paper") {
            result = "Lose"
            /*return ("You " + result + "! " + playerSelection + " beats " + computerSelection);*/
            return result;
        } else if (playerSelection === "rock" && computerSelection === "Scissors") {
            result = "Win"
            /*return ("You " + result + "! " + playerSelection + " beats " + computerSelection);*/
            return result;
        } else if (playerSelection === "paper" && computerSelection === "Rock") {
            result = "Win"
            /*return ("You " + result + "! " + playerSelection + " beats " + computerSelection);*/
            return result;
        } else if (playerSelection === "paper" && computerSelection === "Scissors") {
            result = "Lose"
           /* return ("You " + result + "! " + playerSelection + " beats " + computerSelection);*/
           return result;
        } else if (playerSelection === "scissors" && computerSelection === "Paper") {
            result = "Win"
           /* return ("You " + result + "! " + playerSelection + " beats " + computerSelection);*/
           return result;
        } else if (playerSelection === "scissors" && computerSelection === "Rock") {
            result = "Lose"
            /*return ("You " + result + "! " + playerSelection + " beats " + computerSelection);*/
            return result;
        }
    }
}

/*playerSelection = "Paper";
computerSelection = computerPlay();
console.log("Computer selection is: " + computerSelection);
console.log("Your selection is: " + playerSelection);
console.log(round(playerSelection, computerSelection));
*/


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = prompt("What's your choise?");
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

game();

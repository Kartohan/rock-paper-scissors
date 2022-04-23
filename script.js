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
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return("Tie game!")
    } else if (playerSelection != computerSelection) {
        if (playerSelection === "rock" && computerSelection === "Paper") {
            return("You Lose! Paper beats Rock!")
        } else if (playerSelection === "rock" && computerSelection === "Scissors") {
            return("You Win! Rock beats Scissors!")
        } else if (playerSelection === "paper" && computerSelection === "Rock") {
            return("You Win! Paper beats Rock!")
        } else if (playerSelection === "paper" && computerSelection === "Scissors") {
            return("You Lose! Scissors beats Paper!")
        } else if (playerSelection === "scissors" && computerSelection === "Paper") {
            return("You Win! Scissors beats Paper!")
        } else if (playerSelection === "scissors" && computerSelection === "Rock") {
            return("You Lose! Rock beats Scissors")
        }
    }
}

playerSelection = "Paper";
computerSelection = computerPlay();
console.log("Computer selection is: " + computerSelection);
console.log("Your selection is: " + playerSelection);
console.log(round(playerSelection, computerSelection));
function computerPlay() {
    let random = Math.round(Math.random() * 10)
    if (random <= 3) {
        return("Rock")
    } else if (random <= 6) {
        return("Paper")
    } else {
        return("Scissors")
    }
}

function round (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return("Tie game!")
    } else if (playerSelection != computerSelection) {
        if (playerSelection === "Rock" && computerSelection === "Paper") {
            return("You Lose! Paper beats Rock!")
        } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            return("You Win! Rock beats Scissors!")
        } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            return("You Win! Paper beats Rock!")
        } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            return("You Lose! Scissors beats Paper!")
        } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            return("You Win! Scissors beats Paper!")
        } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            return("You Lose! Rock beats Scissors")
        }
    }
}

playerSelection = "Paper";
computerSelection = computerPlay();
console.log("Computer selection is: " + computerSelection);
console.log("Your selection is: " + playerSelection);
console.log(round(playerSelection, computerSelection));

function computerPlay() {
    let random = Math.round(Math.random() * 10)
    if (random <= 3) {
        console.log("Rock");
    } else if (random <= 6) {
        console.log("Paper")
    } else {
        console.log("Scissors")
    }
}
console.log(computerPlay());
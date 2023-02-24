function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1
    if (num == 1) {
        return "Rock"
    } else if (num == 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getPlayerChoice() {
    let playerInput = prompt("What will you play?")
    let formattedPlayerInput = playerInput.toLowerCase()
    if ( formattedPlayerInput == "rock") {
        return "Rock"
    } else if (formattedPlayerInput == "paper") {
        return "Paper"
    } else if (formattedPlayerInput == "scissors") {
        return "Scissors"
    } else {
        return "Invalid Input"
    }
}

console.log(getPlayerChoice())
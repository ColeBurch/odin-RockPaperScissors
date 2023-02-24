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

function game() {
    let playerChoice = getPlayerChoice()
    let computerChoice = getComputerChoice()
    console.log("The computer chose " + computerChoice)
    if (playerChoice == "Rock" && computerChoice == "Scissors") {
        return "You win!"
    } else if (playerChoice == "Rock" && computerChoice == "Paper") {
        return "Sorry, you lost."
    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        return "Sorry, you lost."
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        return "You win!"
    } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        return "Sorry, you lost."
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        return "You win!"
    } else {
        return "It's a tie!"
    }
}

console.log(game())
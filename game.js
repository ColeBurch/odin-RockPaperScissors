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
    let playerChoice = prompt("What will you play?")
    let formattedPlayerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase()
    if (formattedPlayerChoice == "Rock") {
        return "Rock"
    } else if (formattedPlayerChoice == "Paper") {
        return "Paper"
    } else if (formattedPlayerChoice == "Scissors") {
        return "Scissors"
    } else {
        return "Invalid Input"
    }
}

console.log(getPlayerChoice())
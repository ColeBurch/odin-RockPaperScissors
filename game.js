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

function round(playerClick) {
    let playerChoice = playerClick
    let computerChoice = getComputerChoice()
    let computerText = "The computer chose " + computerChoice + ","
    if (playerChoice == "Rock" && computerChoice == "Scissors") {
        return computerText + " You win!"
    } else if (playerChoice == "Rock" && computerChoice == "Paper") {
        return computerText + " you lost."
    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        return computerText + " you lost."
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        return computerText + " You win!"
    } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        return computerText + " you lost."
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        return computerText + " You win!"
    } else {
        return computerText + " It's a tie!"
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let results = round()
        console.log(results)
        if (results == "You win!") {
            playerScore++
        } else if (results == "Sorry, you lost.") {
            computerScore++
        } 
    }
    if (playerScore == computerScore) {
        return "The game ended in a tie."
    } else if (playerScore > computerScore) {
        return "You won the game!"
    } else if (playerScore < computerScore) {
        return "Sorry, you lost the game."
    }
}

const buttons = document.querySelectorAll('button')
const content = document.querySelector(".results")

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let results = round(button.id);
        content.textContent = results
    })
})
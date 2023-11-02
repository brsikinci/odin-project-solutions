game();

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerChoice;
    let computerChoice;
    let result;
    let scoreToWin = 5;

    while (!gameOver(playerScore, computerScore)) {
        playerChoice = formatInput(prompt("Rock, Paper or Scissors? Make your choice: "));
        computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice);
        if (result.search("Win") !== -1)
            playerScore++;
        else if (result.search("Lose") !== -1)
            computerScore++;
        console.log(result + "\nYour score: " + playerScore + "\nComputer's score: " + computerScore);
    }

    if (playerScore === scoreToWin)
        console.log("You beat the computer!");
    else
        console.log("The Computer beats you!");
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice)
        return "It's a Tie!";

    else if (playerChoice === "Rock" && computerChoice === "Scissors"
        || playerChoice === "Paper" && computerChoice === "Rock"
        || playerChoice === "Scissors" && computerChoice === "Paper")
        return `You Win! ${playerChoice} beats ${computerChoice}`;

    else if (computerChoice === "Rock" && playerChoice === "Scissors"
        || computerChoice === "Paper" && playerChoice === "Rock"
        || computerChoice === "Scissors" && playerChoice === "Paper")
        return `You Lose! ${computerChoice} beats ${playerChoice}`;

    else
        return "Invalid choice!";
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function gameOver(playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5)
        return true;
    else
        return false;
}

function formatInput(input) {
    let lowercase = input.toLowerCase();
    let capitalized = lowercase.replace(lowercase.slice(0, 1), lowercase.slice(0, 1).toUpperCase());
    return capitalized;
}
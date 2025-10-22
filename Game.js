let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    let number = Math.random();
    if (number < 1/3){
        return "rock"
    } else if (number >= 1/3 && number <2/3){
        return "paper"
    } else {
        return "scissors"
    }
    }

function playRound(humanChoice){
    let computerChoice = getComputerChoice();
    let userAnswer = humanChoice.toLowerCase();
    let resultMessage = "";
        
    if (
        userAnswer === "rock" && computerChoice === "scissors"  ||
        userAnswer === "paper" && computerChoice === "rock" ||
        userAnswer === "scissors" && computerChoice === "paper"
    ){
            humanScore += 1; 
            resultMessage = `You win! ${userAnswer} beats ${computerChoice}`
    }else if(
        userAnswer === "scissors" && computerChoice === "rock" ||
        userAnswer === "rock" && computerChoice === "paper" ||
        userAnswer === "paper" && computerChoice === "scissors" 
    ){
            computerScore += 1;
            resultMessage = `You lose! ${computerChoice} beats ${userAnswer}`;
    }else{
        resultMessage = `That's a draw: ${userAnswer} equals ${computerChoice}`;
    }
    updateDisplay(resultMessage);
    checkWinner();
}
function checkWinner(){
    if(humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
        document.getElementById('results').innerHTML += `<p><strong>${winner}</strong></p>`;

        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
    }
}
function updateDisplay(message) {
const resultsDiv = document.getElementById('results');
resultsDiv.innerHTML = `
    <p>${message}</p>
    <p>Score: You ${humanScore} - ${computerScore} Computer</p>`;
}
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));


function playGame(){
    //PHASE 0 : SETTING UP
    let humanScore = 0;
    let computerScore = 0;
    alert("Let's play some matches")

    //PHASE 1 :HUMAN PICK
    function getHumanChoice(){
        let userChoice = prompt("Please enter your choice: rock, paper, scissors")
        return userChoice
    }

    //PHASE 2 : COMPUTER PICK
    function getComputerChoice (){
        let numero = Math.random();
        if (numero < 1/3){
            return "rock"
        } else if (numero >= 1/3 && numero <2/3){
            return "paper"
        } else {
            return "scissors"
        }
    }

    //PHASE 3 : ROUND
    function playRound(humanChoice,computerChoice){
        let userAnswer = humanChoice.toLowerCase();
        if (userAnswer === "rock" && computerChoice === "scissors"  
            || userAnswer === "paper" && computerChoice === "rock"
            || userAnswer === "scissors" && computerChoice === "paper"){
                humanScore += 1; 
                return "You win " + userAnswer + " beats " + computerChoice;
        }else if(userAnswer === "scissors" && computerChoice === "rock"  
            || userAnswer === "rock" && computerChoice === "paper"
            || userAnswer === "paper" && computerChoice === "scissors" ){
                computerScore += 1;
                return "You Lose! " + computerChoice + " beats " + userAnswer;
        }else{
            return "That's a draw " + userAnswer + " is the same as " + computerChoice;
        }
    }
    //GAME LOOP
    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        console.log(result)
    }
    //GAME SCORE
    console.log ("Final score:");
    console.log ("You: " + humanScore);
    console.log ("Computer: " + computerScore);
    //THE WINNER
    if (humanScore > computerScore){
        console.log( "You win the game!")
    } else if(humanScore === computerScore){
        console.log ("That's a tie!")
    } else {
        console.log("You lose the game!")
    }
}
playGame();

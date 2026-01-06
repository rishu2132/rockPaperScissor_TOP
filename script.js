let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let i = Math.random();

    if (i < 1/3)
        return "rock"
    else if (i < 2/3)
        return "paper"
    else
        return "scissors"

}

function getHumanChoice(){
    let answer = prompt("What is your choice?");
    return answer;
}

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    humanChoice = humanChoice.toLowerCase();
    computerChoice = getComputerChoice();

    if (humanChoice === "paper"){
        if (computerChoice === "paper")
            return "Draw"
        else if(computerChoice === "rock"){
            humanScore +=1;
            return "You won! paper beats rock"
        }
        else if (computerChoice === "scissors"){
            computerScore +=1;
            return "You lose! scissors beats paper"
        }
    }
    if (humanChoice === "scissors"){
        if (computerChoice === "scissors")
            return "Draw"
        else if(computerChoice === "paper"){
            humanScore +=1;
            return "You won! scissors beats paper"
        }
        else if (computerChoice === "rock"){
            computerScore +=1;
            return "You lose! rocks beats scissors"
        }
    }
    if (humanChoice === "rock"){
        if (computerChoice === "rock")
            return "Draw"
        else if(computerChoice === "scissors"){
            humanScore +=1;
            return "You won! rock beats scissors"
        }
        else if (computerChoice === "paper"){
            computerScore +=1;
            return "You lose! paper beats rock"
        }
    }
}

function playGame(){
    for (i=0;i<5;i++){
        console.log(playRound());
        console.log(`HumanScore = ${humanScore}  ComputerScore = ${computerScore} `);
    }

    if (humanScore > computerScore)
        console.log("----YOU WON-----")
    else if (humanScore < computerScore)
        console.log("----YOU LOSE----")
    else 
        console.log("---DRAW----");
}

playGame();
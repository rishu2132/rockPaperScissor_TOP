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

    let result = document.querySelector('#result');
    let score = document.querySelector("#score");
   const rockbtn = document.querySelector('#rock')
   const paperbtn = document.querySelector('#paper')
   const scissorbtn = document.querySelector('#scissor')

   rockbtn.addEventListener("click", function(){
    console.log("rock");
    playGame("rock");
   })

   paperbtn.addEventListener("click", function(){
    console.log("paper");
    playGame('paper')
   })

   scissorbtn.addEventListener("click", function(){
    console.log("scissors");
    playGame('scissors');
   })


function playRound(humanChoice){
    
    // humanChoice = humanChoice.toLowerCase();
    let computerChoice = getComputerChoice();

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

function playGame(choice){

        result.textContent = `${playRound(choice)}`;
        score.textContent = `HumanScore = ${humanScore}  ComputerScore = ${computerScore} `;

    if (humanScore === 5 || computerScore === 5){
        if (humanScore === 5){
            alert("----You won-----");
            humanScore=0;
            computerScore=0;
        }
        else{
            alert("----You lose-----");
            humanScore=0;
            computerScore=0;
        }
    }

 
}


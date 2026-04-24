function getComputerChoice(){
  const random = Math.random()*100;

  let computerChoice;
  if ((random<33)&&(random>=0)){
      computerChoice = "rock";
  }else if ((random<66)&&(random>=33)){
    computerChoice = "paper";
  }else {
    computerChoice = "scissors";
  }

  return computerChoice;
}


function getHumanChoice(){
  const choice = prompt("Enter your choice: ");
  return choice;
}


function playGame(){
  let humanScore  =0;
  let computerScore = 0;
  let playRound = (humanChoice,computerChoice)=>{
    humanChoice = humanChoice.toLowerCase();
    if ((humanChoice==="rock")&&(computerChoice==="paper")){
      computerScore+=1;
      console.log("You lose! Paper beats Rock ");
    }else if  ((humanChoice==="paper")&&(computerChoice==="scissors")){
      computerScore+=1;
      console.log("You lose! Scissors beats Paper ");
    }else if ((humanChoice==="rock")&&(computerChoice==="scissors")){
      humanScore+=1;
      console.log("You win! Rock beats Scissors ");
    }else if  ((humanChoice==="scissors")&&(computerChoice==="rock")){
      computerScore+=1;
      console.log("You lose! Rock beats Scissors ");
    }else if ((humanChoice==="scissors")&&(computerChoice==="paper")){
      humanScore+=1;
      console.log("You win! Scissors beats Paper ");
    }else if ((humanChoice==="paper")&&(computerChoice==="rock")){
      humanScore+=1;
      console.log("You win! Paper beats Rock ");
    }else if (humanChoice===computerChoice){
      console.log("Tie! ");
    }
  }
  for (let i = 0 ; i<5;i++){
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
  }

  if (computerScore>humanScore){
    console.log("You lose! ");
  }else if (computerScore<humanScore){
    console.log("You win! ");
  }else{
    console.log("Tie!");
  }
}

playGame();
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





function playGame(){
  let humanScore  =0;
  let computerScore = 0;
  function showGmeOver(){
    
      const gameOver = document.createElement("div");
      gameOver.textContent = "Game has concluded! Please try again.";
      document.body.appendChild(gameOver);
    
  }
  
  function updateRoundResult(txt){
    const roundResult = document.createElement("div");
    roundResult.textContent = txt;
    const score = document.createElement("span");
    score.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
    document.body.appendChild(roundResult);
    document.body.appendChild(score);
  }
  let playRound = (humanChoice,computerChoice)=>{
    humanChoice = humanChoice.toLowerCase();
   
    if ((humanChoice==="rock")&&(computerChoice==="paper")){
      computerScore+=1;
      updateRoundResult(`Your Choice: ${humanChoice} Computer Choice: ${computerChoice}. You lose! Paper beats Rock `);
    }else if  ((humanChoice==="paper")&&(computerChoice==="scissors")){
      computerScore+=1;
      updateRoundResult(`Your Choice: ${humanChoice} Computer Choice: ${computerChoice}. You lose! Scissors beats Paper `);
    }else if ((humanChoice==="rock")&&(computerChoice==="scissors")){
      humanScore+=1;
      updateRoundResult(`Your Choice: ${humanChoice} Computer Choice: ${computerChoice}. You win! Rock beats Scissors `);
    }else if  ((humanChoice==="scissors")&&(computerChoice==="rock")){
      computerScore+=1;
      updateRoundResult(`Your Choice: ${humanChoice} Computer Choice: ${computerChoice}. You lose! Rock beats Scissors `);
    }else if ((humanChoice==="scissors")&&(computerChoice==="paper")){
      humanScore+=1;
      updateRoundResult(`Your Choice: ${humanChoice} Computer Choice: ${computerChoice}. You win! Scissors beats Paper `);
    }else if ((humanChoice==="paper")&&(computerChoice==="rock")){
      humanScore+=1;
      updateRoundResult(`Your Choice: ${humanChoice} Computer Choice: ${computerChoice}. You win! Paper beats Rock `);
    }else if (humanChoice===computerChoice){
      updateRoundResult(`Your Choice: ${humanChoice} Computer Choice: ${computerChoice}. Tie! `);
    }

    showMatchWinner();
  }
  /*for (let i = 0 ; i<5;i++){
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
  }*/

  const rock = document.querySelector(".rock");
  const paper = document.querySelector(".paper");
  const scissors = document.querySelector(".scissors");

  let computerSelection =  getComputerChoice();
  console.log(rock);
  

  rock.addEventListener("click",(e)=>{
    
    if ((humanScore===5)||(computerScore===5)){
      showGmeOver();
      return;
    }
    let humanSelection  = "rock";
    playRound(humanSelection,computerSelection);
    
   
  });

  paper.addEventListener("click",(e)=>{
    
    if ((humanScore===5)||(computerScore===5)){
      showGmeOver();
      return;
    }
    let humanSelection  = "paper";
    playRound(humanSelection,computerSelection);
    
    
  });

  scissors.addEventListener("click",(e)=>{
    
    if ((humanScore===5)||(computerScore===5)){
      showGmeOver();
      return;
    }
    let humanSelection  = "scissors";
    playRound(humanSelection,computerSelection);
    
    
  });

  function showMatchWinner(){
    const finalResult = document.createElement("div");
    if ((humanScore===5)||(computerScore===5)){
      if (humanScore===5){
        finalResult.textContent = "You won the match!";
      }else if(computerScore===5){
        finalResult.textContent = "You lost the match!"
      }
      document.body.appendChild(finalResult);
    }
  }

  /*if (computerScore>humanScore){
    updateRoundResult("You lose! ");
  }else if (computerScore<humanScore){
    updateRoundResult("You win! ");
  }else{
    updateRoundResult("Tie!");
  }*/
}

playGame();
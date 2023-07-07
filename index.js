console.log("Hello World");
console.log("The game is ROCK, PAPER, SCISSOR");

const options= ["rock","paper","scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;

}

function checkWinner(playerSelection,computerSelection){
    if(playerSelection==computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection=="rock" && computerSelection=="scissors") ||
        (playerSelection=="scissors" && computerSelection=="paper") ||
        (playerSelection=="paper" && computerSelection=="rock")
        )
    {
        return "Player";
    }

    else{
        return "computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);

    if (result == "Tie"){
        return "It's a Tie! No One Winner"
    }
    else if (result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }

}

function getPlayerChoice(){
    let validatedInput =false;

    while (validatedInput==false){
        const choice = prompt("Rock Paper Scissors");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLocaleLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i=0; i< 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("--------------------")

        if (checkWinner(playerSelection, computerSelection) =="Player"){
            scorePlayer++;
        }
        else if (checkWinner(playerSelection, computerSelection) =="computer"){
            scoreComputer++;

        }


    }

    console.log("Game Over")

    if(scorePlayer > scoreComputer){
        console.log("Player is the Winner!");
    }
    else if(scorePlayer< scoreComputer){
      console.log("computer is the winner!");
  }

  else{
      console.log("it is a tie! no one win")
  }

   
}

game()





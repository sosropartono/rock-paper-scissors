//Mimics computer choice, Math.random used to pick a random indice from the array of choices.
function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    let randInt = Math.floor(Math.random()*3);
    let compChoice = choices[randInt];
    return compChoice.toLowerCase();
}

//Prompts player to select a choice
function playerPlay(){
    let playerChoice = prompt("Please Choose Either Rock, Paper or Scissors");
    return playerChoice.toLowerCase();
}

//Compares input from playerSelection and computerPlay to pick a winner, if tied, round is replayed
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        alert(`You tied! Both of you picked ${playerSelection}.`)
        return "Tie"
    } else if(playerSelection == "rock" && computerSelection == "paper" ){
        alert("You lose! Paper wins over Rock.")
        return "Computer"
    } else if(playerSelection == "rock" && computerSelection == "scissors" ){
        alert("You win! Rock wins over Scissors.")
        return "Player"
    }else if(playerSelection == "paper" && computerSelection == "scissors" ){
        alert("You lose! Scissors wins over Paper.")
        return "Computer"
    }

}

//Starts game loop for 5 rounds
function game(){
    let computerScore = 0;
    let playerScore = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        if(playRound(playerSelection, computerSelection) == "Computer"){
            computerScore++;
        } else if(playRound(playerSelection, computerSelection) == "Player"){
            playerScore++;
        } 
        console.log(`Computer Score: ${computerScore}\nPlayer Score: ${playerScore}`)
    }
    console.log()
    alert(`Computer Score: ${computerScore}\nPlayer Score: ${playerScore}`)
}
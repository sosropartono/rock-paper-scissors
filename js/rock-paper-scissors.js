//Creation of container, and button elements
const container = document.createElement('div');
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
rock.id = 'rock';
rock.innerHTML = '<img src="img/rock.png" alt="rock">';
paper.id = 'paper';
paper.innerHTML ='<img src="img/paper.jpeg" alt="paper">'
scissors.id = 'scissors';
scissors.innerHTML = '<img src="img/scissors.png" alt="scissors">'

//Adding children to elements
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
document.body.appendChild(container);


//Plays game whenever the user clicks on an choice of either rock, paper, or scissors
rock.addEventListener('click',() => { 
    playRound("rock", computerPlay());
});

paper.addEventListener('click', () => { 
    playRound("paper",computerPlay());
});

scissors.addEventListener('click', () => { 
    playRound("scissors",computerPlay());
});


//Mimics computer choice, Math.random used to pick a random indice from the array of choices.
function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    let randInt = Math.floor(Math.random()*3);
    let compChoice = choices[randInt];
    return compChoice.toLowerCase();
}

//Compares input from playerSelection and computerPlay to pick a winner, if tied, round is replayed
function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        alert(`You tied! Both of you picked ${playerSelection}.`)
        return console.log("Tie");
    } else if(playerSelection == "rock" && computerSelection == "paper" ){
        alert("You lose! Paper wins over Rock.")
        return console.log("Computer");
    } else if(playerSelection == "rock" && computerSelection == "scissors" ){
        alert("You win! Rock wins over Scissors.")
        return console.log("Player");
    }else if(playerSelection == "paper" && computerSelection == "scissors" ){
        alert("You lose! Scissors wins over Paper.")
        return console.log("Computer");
    } else if(playerSelection == "paper" && computerSelection == "rock" ){
        alert("You win! Paper wins over rock.")
        return console.log("Player");
    }else if(playerSelection == "scissors" && computerSelection == "rock" ){
        alert("You lose! Rock wins over Scissors.")
        return console.log("Computer");
    } else if(playerSelection == "scissors" && computerSelection == "paper" ){
        alert("You win! Scissors wins over Paper.")
        return console.log("Player");
    }

}

//Starts game loop for 5 rounds
// function game(){
//     let computerScore = 0;
//     let playerScore = 0;
//     for(let i = 0; i < 5; i++){
//         let playerSelection = playerPlay();
//         let computerSelection = computerPlay();
//         if(playRound(playerSelection, computerSelection) == "Computer"){
//             computerScore++;
//         } else if(playRound(playerSelection, computerSelection) == "Player"){
//             playerScore++;
//         } 
//         console.log(`Computer Score: ${computerScore}\nPlayer Score: ${playerScore}`)
//     }
//     console.log()
//     alert(`Computer Score: ${computerScore}\nPlayer Score: ${playerScore}`)
// }

// //Prompts player to select a choice
// function playerPlay(rock, paper, scissors){
//     if()
    
//     return playerChoice.toLowerCase();
// }
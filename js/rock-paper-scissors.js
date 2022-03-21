function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    let randInt = Math.floor(Math.random*3);
    let compChoice = choices(randInt);
    //tests
    console.log(randInt);
    console.log(compChoice);
    return compChoice;
}

function playRound(playerSelection, computerPlay){

}
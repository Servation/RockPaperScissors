const ROUNDS = 5;
let currentRound = 0;
let wins = 0;
let losts = 0;
let ties = 0;

function resetGame(){
    document.getElementById("RockPlayed").disabled = false;
    document.getElementById("PaperPlayed").disabled = false;
    document.getElementById("ScissorPlayed").disabled = false;
    document.getElementById("GameOverMessage").innerHTML = ""
    document.getElementById("info").innerHTML = "";
    currentRound = 0;
    wins = 0;
    losts = 0;
    ties = 0;
    document.getElementById("score").innerHTML = " wins: " + wins + " losts: " + losts + " ties: " + ties;
}
function computerPlay(){
    let ComputerNumber= Math.floor(Math.random() * 3);
    return (ComputerNumber == 0 ? "Rock" : (ComputerNumber == 1 ? "Paper" : "Scissors"))
}

function playGame(playerSelection){
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        document.getElementById("info").innerHTML = "It's a tie. You both chose " + computerSelection;
        ties++;
    } else if (computerSelection == "Rock"){
        if (playerSelection == "Paper"){
            document.getElementById("info").innerHTML = "Paper beats Rock. You win!"
            wins++;
        } else {
            document.getElementById("info").innerHTML = "Rock beats Scissors. Computer wins!"
            losts++;
        }
    } else if (computerSelection == "Paper") {
        if (playerSelection == "Scissors"){
            document.getElementById("info").innerHTML = "Scissors beats Paper. You win!"
            wins++;
        } else {
            document.getElementById("info").innerHTML = "Paper beats Rock. Computer wins!"
            losts++;
        }
    } else {
        if (playerSelection == "Rock"){
            document.getElementById("info").innerHTML = "Rock beats Scissors. You win!"
            wins++;
        } else {
            document.getElementById("info").innerHTML = "Scissors beats Paper. Computer wins!"
            losts++;
        }
    }
    currentRound++;
    document.getElementById("score").innerHTML = " wins: " + wins + " losts: " + losts + " ties: " + ties;
    if (currentRound >= ROUNDS){
        document.getElementById("RockPlayed").disabled = true;
        document.getElementById("PaperPlayed").disabled = true;
        document.getElementById("ScissorPlayed").disabled = true;
        if (wins> losts){
            document.getElementById("GameOverMessage").innerHTML = "You WON!"
        } else if (losts > wins){
            document.getElementById("GameOverMessage").innerHTML = "Sorry, you lose!"
        } else {
            document.getElementById("GameOverMessage").innerHTML = "It was tied up!"
        }
    }
}


function createEventListener() {
    const RockButton = document.getElementById("RockPlayed");
    const PaperButton = document.getElementById("PaperPlayed");
    const ScissorButton = document.getElementById("ScissorPlayed");
    const ResetButton = document.getElementById("ResetButton");

    if (RockButton.addEventListener){
        RockButton.addEventListener("click", () => playGame("Rock"));
    }

    if (PaperButton.addEventListener){
        PaperButton.addEventListener("click", () => playGame("Paper"));
    }

    if (ScissorButton.addEventListener){
        ScissorButton.addEventListener("click", () => playGame("Scissors"));
    }

    if (ResetButton.addEventListener){
        ResetButton.addEventListener("click", resetGame, false);
    }

}

function setUpPage() {
    createEventListener()
}

if (window.addEventListener){
    window.addEventListener("load", setUpPage, false)
}
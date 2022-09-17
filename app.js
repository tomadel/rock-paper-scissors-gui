const header = document.getElementById('header');
const scoreCounter = document.getElementById('score-count');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const showMoves = document.querySelector('#showmoves > p');
const userTag = document.getElementById('user-tag');
const computerTag = document.getElementById('computer-tag');

let userPoint = 0;
let computerPoint = 0;

function computerChoice (){
    const choices = ["r","p","s"];
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}



function convertLetter (letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter ==="s") return "Scissors";
}

function win(userMove, computerMove){
    userPoint++;
    userScoreSpan.innerHTML = userPoint;
    computerScoreSpan.innerHTML = computerPoint;
    showMoves.innerHTML = convertLetter(userMove) + userTag.innerHTML + " beats " + convertLetter(computerMove) + computerTag.innerHTML + ". You win!" ;
    

}



function lose(userMove, computerMove){
    computerPoint++;
    computerScoreSpan.innerHTML = computerPoint;
    userScoreSpan.innerHTML = userPoint;
    showMoves.innerHTML = convertLetter(userMove)+ userTag.innerHTML + " loses " + convertLetter(computerMove)+ computerTag.innerHTML+ ". You lost!";
    


}



function tie(userMove, computerMove){
    computerScoreSpan.innerHTML = computerPoint;
    userScoreSpan.innerHTML = userPoint;
    showMoves.innerHTML = convertLetter(userMove)+ userTag.innerHTML + " equals " + convertLetter(computerMove)+  computerTag.innerHTML + ". It's a tie!";
    

}



function game(userMove){
const computerMove = computerChoice();
switch (userMove +computerMove ){
    case "rs":
    case "sp":
    case "pr":
        win(userMove, computerMove);
        break;
    case "sr":
    case "ps":
    case "rp":
        lose(userMove, computerMove);
        break;
    case "rr":
    case "pp":
    case "ss":
        tie(userMove, computerMove);
        break;

 }
}



function userChoice(){
    rock.addEventListener('click', function(){
       game("r");
    });

    paper.addEventListener('click', function(){
        game("p")
    });

    scissors.addEventListener('click', function(){
        game("s")
    });
}

userChoice();



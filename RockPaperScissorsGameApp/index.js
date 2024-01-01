const buttons = document.querySelectorAll('button');
// const paperEl = document.getElementById('paper');
// const scissorsEl = document.getElementById('scissors');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
const resultEl = document.getElementById('result');
let userInputValue;
function input(){
    const userInput = document.getElementById('totalGames');
    userInputValue = userInput.value;
    userInput.disabled = true;
    const submit = document.getElementById('submit');
    submit.disabled = true;
    //console.log(userInputValue);
}
let useraaa = 12;
// if(useraaa>0){
//     console.log(useraaa);
//     buttons.forEach((button)=>{    
//         buttons.addEventListener("click",()=>{
//             useraaa--;
//             console.log(useraaa);
//             result(button.id,computer());
//             }
//         )
//         }
//     );
// }
for(let i=0;i<useraaa;i++){
    buttons[]
}
else if(useraaa==0){
    function whoWon(){
        if(j>k){
            resultEl.textContent = "Computer Won!!!";
        }
        else if(j==k){
            resultEl.textContent = "Draw!!!";
        }
        else{
            resultEl.textContent = "You Won!!";
        }
        return resultEl.textContent;
    }
    
}
else{
    
}

function computer(){
    const choices = ["rock","paper","scissors"];
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}
let j=0;
let k=0;

function result(userChoice,computerChoice){
    if(userChoice=='rock' && computerChoice=='paper' ||
    userChoice=='paper' && computerChoice=='scissors' ||
    userChoice=='scissors' && computerChoice=='rock'){
        return computerScore.textContent = j++;
    }
    else if(userChoice==computerChoice){
        return (
            computerScore.textContent = j,
            userScore.textContent = k);
    }
    else{
        return userScore.textContent = k++;
    }


}
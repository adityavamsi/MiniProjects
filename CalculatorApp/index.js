const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

let over=false;
for(let i=0;i<buttonsEl.length;i++){
    buttonsEl[i].addEventListener("click",()=>{
        const buttonValue = buttonsEl[i].textContent;
        if(buttonValue==="C"){
            clearResult();
        }
        else if(buttonValue==="="){
            calculateResult();
            over=true;
        }
        else{
            appendValue(buttonValue);
        }
        // console.log();
    });
}

function clearResult(){
    inputFieldEl.value="";
};
function calculateResult(){
    try{
        if(isNaN(eval(inputFieldEl.value)));
        else inputFieldEl.value=eval(inputFieldEl.value);
    }
    catch{
        inputFieldEl.value="Err";
    }
    
};
function appendValue(buttonValue){
    if(over===false) inputFieldEl.value+=buttonValue;
    else{
        if(buttonValue==="/" || buttonValue==="*" || buttonValue==="-" || buttonValue==="+") {
            inputFieldEl.value+=buttonValue;
            over=false;
        }
        else{
            inputFieldEl.value="";
            inputFieldEl.value+=buttonValue;
            over=false;

        }
    }
};
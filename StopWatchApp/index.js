const timerEl = document.getElementById('timer');
const startButtonEl = document.getElementById('start');
const resetButtonEl = document.getElementById('reset');
const stopButtonEl = document.getElementById('stop');

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

function startTimer(){
    startTime = Date.now()-elapsedTime;
    timeInterval = setInterval(()=>{
        elapsedTime = Date.now()-startTime;
        timerEl.textContent = formatTime(elapsedTime);
    },10);
startButtonEl.disabled=true;
stopButtonEl.disabled=false;
}
function formatTime(elapsedTime){
    const milli = Math.floor((elapsedTime%1000)/10);
    const sec = Math.floor((elapsedTime%(1000*60))/1000);
    const min = Math.floor((elapsedTime%(1000*60*60))/(1000*60));
    const hour = Math.floor((elapsedTime/(1000*60*60)));
    return (
        (hour ? (hour>9 ? hour :"0"+hour) : "00")+
        ":"+
        (min ? (min>9 ? min :"0"+min) : "00")+
        ":"+
        (sec ? (sec>9 ? sec :"0"+sec) : "00")+
        "."+
        (milli>9 ? milli:"0"+milli)
    );
}
function resetTimer(){
    clearInterval(timeInterval);
    elapsedTime=0;
    timerEl.textContent="00:00:00";
    startButtonEl.disabled=false;
    stopButtonEl.disabled=true;
}
function stopTimer(){
    clearInterval(timeInterval);
    startButtonEl.disabled=false;
    stopButtonEl.disabled=true;  
}


startButtonEl.addEventListener("click",()=>{
    startTimer();
})
resetButtonEl.addEventListener("click",()=>{
    resetTimer();
})
stopButtonEl.addEventListener("click",()=>{
    stopTimer();
})
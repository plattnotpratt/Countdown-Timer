const timer = document.getElementById('timer');
const stopButton = document.getElementById('stop-timer');
const submitButton = document.getElementById('submit');
const hoursField = document.getElementById('hours');
const minutesField = document.getElementById('minutes');
const secondsField = document.getElementById('seconds');
let intervals = [];
let stop = false;
let totalSeconds = 0;

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  let hours = parseInt(hoursField.value);
  let minutes = parseInt(minutesField.value);
  let seconds = parseInt(secondsField.value);
  totalSeconds = hoursToSeconds(hours) + minsToSeconds(minutes) + checkSeconds(seconds);
  fieldClearDisableSubmit();
  runTimer(totalSeconds);
});

stopButton.addEventListener('click', (e) => {
  stop = !stop;
  if(stop){
    stopButton.innerText = "Resume Timer";
    
  }else{
    stopButton.innerText = "Stop Timer"
    runTimer(totalSeconds)
  }
})

function runTimer(){
  totalSeconds -= 1;
  const timerObj = secondsToTimerObject(totalSeconds)
  timer.innerHTML = `<h1>${timerObj.hours}:${timerObj.minutes}.${timerObj.seconds}</h1>`;
  
  if(!stop){
    setTimeout(runTimer, 1000);
  }
}

function hoursToSeconds(h){
  if(isNaN(h)){
    return 0;
  }else{
    return h * 60 * 60;
  }
}
function minsToSeconds(m){
  if(isNaN(m)){
    return 0;
  }else{
    return m * 60;
  }
}
function checkSeconds(s){
  if(isNaN(s)){
    return 0;
  }else{
    return s;
  }
}
function fieldClearDisableSubmit(){
  submitButton.setAttribute("disabled", "");
  hoursField.value = "";
  minutesField.value = "";
  secondsField.value = "";
}
function secondsToTimerObject(totalSeconds){
  const hours = parseInt(totalSeconds / 3600);
  const minutes = parseInt((totalSeconds % 3600) / 60);
  const seconds = parseInt(((totalSeconds % 3600) % 60));

  return { hours, minutes, seconds }
}


const timerWrapper = document.getElementById('timer-wrapper');
const submitButton = document.getElementById('submit');
const hoursField = document.getElementById('hours');
const minutesField = document.getElementById('minutes');
const secondsField = document.getElementById('seconds');
let timers = [];

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  let hours = parseInt(hoursField.value);
  let minutes = parseInt(minutesField.value);
  let seconds = parseInt(secondsField.value);
  let totalSeconds = hoursToSeconds(hours) + minsToSeconds(minutes) + checkSeconds(seconds);
  if(totalSeconds > 0){
    timers.push( buildTimer(totalSeconds, timers.length) );
    fieldClearOnSubmit();
  }else{
    alert('please add a timer amount');
  }
});

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

function fieldClearOnSubmit(){
  hoursField.value = "";
  minutesField.value = "";
  secondsField.value = "";
}
// function secondsToTimerObject(totalSeconds){
 
//   const state = true;
//   const interval = null;
//   const ended = false;

//   return {totalSeconds, hours, minutes, seconds, state, interval, ended }
// }

function buildTimer(totalSeconds, count){
  const createdTimer = document.createElement('div');
  const timerText = document.createElement('h1');
  const controlButton = document.createElement('button');
  const deleteButton = document.createElement('button');
  controlButton.innerHTML="Stop Timer";
  deleteButton.innerHTML="Delete Timer";
  createdTimer.classList.add('timer', `timer-${count}`, 'grid');
  controlButton.classList.add('timer-control-button', `timer-control-button-${count}`,'secondary', 'outline');
  deleteButton.classList.add('timer-delete-button', `timer-delete-button-${count}`);
  timerText.classList.add('timer-text', `timer-text-${count}`);
  createdTimer.appendChild(timerText);
  createdTimer.appendChild(controlButton);
  createdTimer.appendChild(deleteButton);
  timerWrapper.appendChild(createdTimer);
  const timer = new Timer(totalSeconds, createdTimer,controlButton, deleteButton, timerText);
  console.log(timer);
  return timer;
}

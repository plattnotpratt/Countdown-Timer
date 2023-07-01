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
  let createdTimer = document.createElement('div');
  console.log(createdTimer);
  createdTimer.classList.add('timer', `timer-${timers.length}`);
  timerWrapper.appendChild(createdTimer);
  timers.push(new Timer(totalSeconds, createdTimer));
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

// function fieldClearDisableSubmit(){
//   submitButton.setAttribute("disabled", "");
//   hoursField.value = "";
//   minutesField.value = "";
//   secondsField.value = "";
// }
// function secondsToTimerObject(totalSeconds){
 
//   const state = true;
//   const interval = null;
//   const ended = false;

//   return {totalSeconds, hours, minutes, seconds, state, interval, ended }
// }



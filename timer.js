class Timer{

  constructor(totalseconds, container){
    this.totalSeconds = totalseconds;
    this.hours = parseInt(this.totalSeconds / 3600);
    this.minutes = parseInt((this.totalSeconds % 3600) / 60);
    this.seconds = parseInt(((this.totalSeconds % 3600) % 60));
    this.isPaused = false;
    this.isEnded = false;
    this.container = container;
    this.interval = setInterval(this.updateTimer, 1000, this);
  }

  updateTimer(timer){
    if(!timer.isPaused && !timer.isEnded){
      timer.totalSeconds -= 1;
    }else{
      //do nothing
    }

    if(timer.totalSeconds === 0){
      timer.isEnded = true;
    }else{
      //do nothing
    }

    timer.hours = parseInt(timer.totalSeconds / 3600);
    timer.minutes = parseInt((timer.totalSeconds % 3600) / 60);
    timer.seconds = parseInt(((timer.totalSeconds % 3600) % 60));
    timer.container.innerHTML = `<h1>${timer.hours}:${timer.minutes}.${timer.seconds}</h1>`;
  }
  
  // stopButton.addEventListener('click', (e) => {
  //   stop = !stop;
  //   if(stop){
  //     stopButton.innerText = "Resume Timer";
      
  //   }else{
  //     stopButton.innerText = "Stop Timer"
  //     runTimer(totalSeconds)
  //   }
  // })

}
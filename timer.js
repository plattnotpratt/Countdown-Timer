class Timer{

  constructor(totalseconds, container, controlButton, deleteButton, timerText){
    this.totalSeconds = totalseconds;
    this.hours = parseInt(this.totalSeconds / 3600);
    this.minutes = parseInt((this.totalSeconds % 3600) / 60);
    this.seconds = parseInt(((this.totalSeconds % 3600) % 60));
    this.isPaused = false;
    this.isEnded = false;
    this.container = container;
    this.controlButton = controlButton;
    this.timerText = timerText;
    this.updateTimer(this);
    this.controlButton.addEventListener('click', (e) => {
      this.isPaused = !this.isPaused;
      
      if(this.isPaused){
        this.controlButton.innerText = "Resume Timer";
        this.controlButton.classList.toggle('outline');
      }else{
        this.controlButton.innerText = "Stop Timer"
        this.controlButton.classList.toggle('outline');
      }
    });
    this.deleteButton = deleteButton;
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
    timer.timerText.innerText = `${timer.hours}:${timer.minutes}.${timer.seconds}`;
  }

  

}
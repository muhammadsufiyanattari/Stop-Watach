let stopWatch = document.querySelector(".stopWatch");
let displayTime = document.getElementById("displayTime");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

let msec = 0;
let sec = 0;
let min = 0;
let hr = 0;

let mytimerId = null;

function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
      if (min == 60) {
        min = 0;
        hr++;
      }
    }
  }

  let msecString = msec < 10 ? `0${msec}` : msec;
  let secString = sec < 10 ? `0${sec}` : sec;
  let minString = min < 10 ? `0${min}` : min;
  let hrString = hr < 10 ? `0${hr}` : hr;

  displayTime.innerText = `${hrString}:${minString}:${secString}:${msecString}`;
}

// Start button event listener
startBtn.addEventListener("click", () => {
  console.log("Start button clicked");

  if (mytimerId !== null) {
    clearInterval(mytimerId);
  }
  mytimerId = setInterval(startTimer, 10);
});

// Stop button event listener
stopBtn.addEventListener("click", () => {
  console.log("Stop button clicked");
  clearInterval(mytimerId);
  mytimerId = null;
});

// Reset button event listener
resetBtn.addEventListener("click", () => {
  console.log("Reset button clicked");

  clearInterval(mytimerId);
  mytimerId = null;

  msec = 0;
  sec = 0;
  min = 0;
  hr = 0;

  displayTime.innerText = `00:00:00:00`;
});

const countdownDateShow = new Date("Oct 30, 2025 15:00:00").getTime();

const xShow = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDateShow - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("showdays").innerText = days;
  document.getElementById("showhours").innerText = hours;
  document.getElementById("showminutes").innerText = minutes;
  document.getElementById("showseconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(xShow);
    document.getElementById("showcountdown-timer").innerHTML = ""
    showbutton.hidden = false; 
  }
}, 1000);



function convertToDaysLeft(milliseconds) {
  return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
}

function convertToHoursLeft(milliseconds) {
  return Math.floor(
    (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
}

function convertToMinutesLeft(milliseconds) {
  return Math.floor(
    (milliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );
}

function convertToSecondsLeft(milliseconds) {
  return Math.floor(
    (milliseconds % (1000 * 60)) / 1000
  );
}

function formatCountdownText(days, hours, minutes, seconds) {
  return `${days}: ${hours}: ${minutes}: ${seconds}`;
}

//Initialize deadline variable
let deadline = new Date("November 28, 2025 13:00:00");

//Store the countdown element in a variable and clear its text content
let countdown = document.getElementById("countdown");
countdown.innerHTML = "";

function setCountdown() {
  let now = new Date();
  let timeLeft = deadline.getTime() - now.getTime();
  let daysLeft = convertToDaysLeft(timeLeft);
  let hoursLeft = convertToHoursLeft(timeLeft);
  let minutesLeft = convertToMinutesLeft(timeLeft);
  let secondsLeft = convertToSecondsLeft(timeLeft);

  countdown.innerHTML = 
    formatCountdownText(daysLeft, hoursLeft, minutesLeft, secondsLeft);
}

setInterval(setCountdown, 1000);


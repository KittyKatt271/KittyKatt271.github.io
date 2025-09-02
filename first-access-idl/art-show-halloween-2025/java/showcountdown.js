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


const countdownDateShowF = new Date("Oct 30, 2025 15:00:00").getTime();

const xShowF = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDateShowF - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("f-showdays").innerText = days;
  document.getElementById("f-showhours").innerText = hours;
  document.getElementById("f-showminutes").innerText = minutes;
  document.getElementById("f-showseconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(xShowF);
    document.getElementById("f-showcountdown-timer").innerHTML = ""
    showbutton.hidden = false; 
  }
}, 1000);






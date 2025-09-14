const countdownDateShow = new Date("Oct 30, 2024 15:00:00").getTime();

const xShow = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDateShow - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("showdays").innerText = String(days).padStart(2, '0');
  document.getElementById("showhours").innerText = String(hours).padStart(2, '0');
  document.getElementById("showminutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("showseconds").innerText = String(seconds).padStart(2, '0');

  if (distance < 0) {
    clearInterval(countdownDateShow);
    document.getElementById("showcountdown-timer").innerHTML = "";
    document.getElementById("showbutton").hidden = false;
  }
}, 1000);






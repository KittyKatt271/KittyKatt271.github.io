const countdownDateHero = new Date("Oct 30, 2025 15:00:00").getTime();

const xHero = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDateHero - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("showdaysh").innerText = String(days).padStart(2, '0');
  document.getElementById("showhoursh").innerText = String(hours).padStart(2, '0');
  document.getElementById("showminutesh").innerText = String(minutes).padStart(2, '0');
  document.getElementById("showsecondsh").innerText = String(seconds).padStart(2, '0');

  if (distance < 0) {
    clearInterval(countdownDateHero);
    document.getElementById("herocountdown-timer").innerHTML = "";
    document.getElementById("showbutton-hero").hidden = false;
  }
}, 1000);

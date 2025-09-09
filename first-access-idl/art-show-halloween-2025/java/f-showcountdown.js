const countdownDateShowF = new Date("Oct 30, 2025 15:00:00").getTime();

const xShowF = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDateShowF - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("f-showdays").innerText = String(days).padStart(2, '0');
  document.getElementById("f-showhours").innerText = String(hours).padStart(2, '0');
  document.getElementById("f-showminutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("f-showseconds").innerText = String(seconds).padStart(2, '0');

  if (distance < 0) {
    clearInterval(xShowF);
    document.getElementById("f-showcountdown-timer").innerHTML = ""
    showbutton.hidden = false; 
  }
}, 1000);






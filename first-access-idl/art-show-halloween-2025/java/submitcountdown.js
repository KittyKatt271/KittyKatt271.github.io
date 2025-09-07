const countdownDateSubmit = new Date("Oct 10, 2025 23:59:59").getTime();

const xSubmit = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDateSubmit - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("submitdays").innerText = days;
  document.getElementById("submithours").innerText = hours;
  document.getElementById("submitminutes").innerText = minutes;
  document.getElementById("submitseconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(xSubmit);
    document.getElementById("submitcountdown-timer").innerHTML = "expired"
    submittext.hidden = false;
    submitbutton.hidden = true;    
  }
}, 1000);


const countdownDateSubmitF = new Date("Oct 10, 2025 23:59:59").getTime();

const xSubmitF = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDateSubmitF - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("f-submitdays").innerText = days;
  document.getElementById("f-submithours").innerText = hours;
  document.getElementById("f-submitminutes").innerText = minutes;
  document.getElementById("f-submitseconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(xSubmitF);
    document.getElementById("f-submitcountdown-timer").innerHTML = "expired"
    submittext.hidden = false;
    submitbutton.hidden = true;    
  }
}, 1000);


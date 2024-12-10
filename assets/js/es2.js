const timer = document.getElementById('timer');
const messaggio = document.getElementById('messaggio');
const secondoMessaggio = document.getElementById('secondoMessaggio');
messaggio.style.visibility = 'hidden';
secondoMessaggio.style.visibility = 'hidden';
window.onload = iniziaTimer;

function iniziaTimer() {
  let start = sessionStorage.getItem('start');
  if (!start) {
    start = Date.now();
    sessionStorage.setItem('start', start);
  }

  setInterval(function () {
    let tempoAttuale = Date.now();
    let tempoTrascorso = Math.floor((tempoAttuale - start) / 1000);
    timer.innerHTML = `${tempoTrascorso} <span class="display-6 text-warning">secondi</span>`;
    if (tempoTrascorso > 29 && tempoTrascorso < 59) {
      messaggio.style.visibility = 'visible';
    } else messaggio.style.visibility = 'hidden';
    if (tempoTrascorso > 59) {
      secondoMessaggio.style.visibility = 'visible';
    }
  }, 1000);
}

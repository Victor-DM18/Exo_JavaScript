let totalSecond;
let interval;

const displayCountdown = () => {
  const minutes = Math.floor(totalSecond / 60);
  const seconds = totalSecond % 60;
  const sec = seconds < 10 ? "0" + seconds : seconds;
  count.textContent = `${minutes} : ${sec}`;
  totalSecond > 0
    ? totalSecond--
    : ((count.textContent = "Terminé !!"), clearInterval(interval));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(number.value)) {
    alert("Veuillez entrer un chiffre !");
  } else {
    totalSecond = number.value * 60;
    number.value = "";
    clearInterval(interval);
    interval = setInterval(displayCountdown, 100);
  }
});

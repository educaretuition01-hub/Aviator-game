let multiplier = 1.0;
let crashed = false;
let interval;

function startGame() {
  crashed = false;
  multiplier = 1.0;

  interval = setInterval(() => {
    multiplier += 0.02;
    document.getElementById("multi").innerText = multiplier.toFixed(2) + "x";

    if (Math.random() < 0.02) {
      crashed = true;
      clearInterval(interval);
      alert("Crashed at " + multiplier.toFixed(2));
    }
  }, 100);
}

function cashOut() {
  if (!crashed) {
    clearInterval(interval);
    alert("You cashed out at " + multiplier.toFixed(2));
  }
}

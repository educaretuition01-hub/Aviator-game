let balance = 100;
let multiplier = 1;
let running = false;
let interval;

function updateBalance() {
  document.getElementById("balance").innerText = balance;
}

function bet() {
  let bet = parseInt(document.getElementById("betAmount").value);

  if (bet > balance) {
    alert("Not enough balance");
    return;
  }

  balance -= bet;
  updateBalance();

  multiplier = 1;
  running = true;

  interval = setInterval(() => {
    multiplier += 0.05;
    document.getElementById("multi").innerText = multiplier.toFixed(2) + "x";

    if (Math.random() < 0.03) {
      clearInterval(interval);
      running = false;
      alert("Crashed!");
    }
  }, 100);
}

function cashOut() {
  if (running) {
    clearInterval(interval);
    let win = Math.floor(multiplier * 10);
    balance += win;
    updateBalance();
    alert("You won ₹" + win);
  }
}

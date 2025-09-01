let count = 0;
const favCountEl = document.getElementById("favCount");
const hearts = document.querySelectorAll(".heart");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    count++;
    favCountEl.textContent = count;
  });
});

let coins = 100;

function callService(serviceName, serviceNumber) {
  if (coins < 20) {
    alert("Your coins are less than 20, you cannot make a call!");
    return;
  }

  alert(`Calling ${serviceName} at ${serviceNumber}`);

  coins -= 20;
  document.getElementById("coinCount").textContent = coins;

  const li = document.createElement("li");
  li.textContent = `${serviceName} - ${serviceNumber}`;
  document.getElementById("callHistory").appendChild(li);
}

function callService(serviceName, serviceNumber) {
  if (coins < 20) {
    alert("Your coins are less than 20, you cannot make a call!");
    return;
  }

  alert(`Calling ${serviceName} at ${serviceNumber}`);
  coins -= 20;
  document.getElementById("coinCount").textContent = coins;

  // Add to call history
  const div = document.createElement("div");
  const now = new Date();
  const currentTime = `${now.toLocaleTimeString()}`;
  div.innerHTML = `<div class="flex justify-between items-center">
  <div>
    <div class="font-bold ">${serviceName}</div>
    <div>${serviceNumber}</div>
  </div>
  <div>${currentTime}</div>
</div>`;

  div.style.boxShadow =
    "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)";
  div.style.borderRadius = "10px";
  div.style.padding = "0.75rem";

  div.style.height = "80px";

  // Append to container
  document.getElementById("callHistory").appendChild(div);
}

function clearHistory() {
  document.getElementById("callHistory").innerHTML = "";
}

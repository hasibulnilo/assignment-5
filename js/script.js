
 const heartCount = document.getElementById("heartCount");
    const coinCount = document.getElementById("coinCount");
    const copyCount = document.getElementById("copyCount");
    const historyList = document.getElementById("historyList");
    const clearHistory = document.getElementById("clearHistory");

    let hearts = 0;
    let coins = 100;
    let copies = 0;

    // Heart buttons
    document.querySelectorAll(".heartBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        hearts++;
        heartCount.textContent = hearts;
        btn.textContent = "❤️";
      });
    });

    // Copy buttons
    document.querySelectorAll(".copyBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        copies++;
        copyCount.textContent = copies;
        alert("Number copied!");
      });
    });

    // Call buttons
    document.querySelectorAll(".callBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        const service = btn.dataset.service;
        const number = btn.dataset.number;

        if (coins < 20) {
          alert("Not enough coins to make a call!");
          return;
        }

        coins -= 20;
        coinCount.textContent = coins;

        alert(`Calling ${service} at ${number}`);

        const li = document.createElement("li");
        const time = new Date().toLocaleTimeString();
        li.textContent = `${service} (${number}) - ${time}`;
        historyList.appendChild(li);
      });
    });

    // Clear history
    clearHistory.addEventListener("click", () => {
      historyList.innerHTML = "";
    });
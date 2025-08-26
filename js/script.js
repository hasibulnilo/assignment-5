
  // Navbar counts
  var heartCount = document.getElementById("heartCount");
  var coinCount = document.getElementById("coinCount");
  var copyCount = document.getElementById("copyCount");
  var historyList = document.getElementById("historyList");
  var clearHistory = document.getElementById("clearHistory");

  var hearts = 0;
  var coins = 100;
  var copies = 0;

  // Heart buttons
  var heartButtons = document.getElementsByClassName("heartBtn");
  for (var i = 0; i < heartButtons.length; i++) {
    heartButtons[i].addEventListener("click", function () {
      hearts = hearts + 1;
      heartCount.textContent = hearts;
      this.textContent = "❤️"; // change clicked heart
    });
  }

  // Copy buttons
  var copyButtons = document.getElementsByClassName("copyBtn");
  for (var i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function () {
      copies = copies + 1;
      copyCount.textContent = copies;
      alert("Number copied!");
    });
  }

  // Call buttons
  var callButtons = document.getElementsByClassName("callBtn");
  for (var i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener("click", function () {
      var service = this.getAttribute("data-service") ;
      var number = this.getAttribute("data-number");

      if (coins < 20) {
        alert("Not enough coins to make a call!");
        return;
      }

      coins = coins - 20;
      coinCount.textContent = coins;

      alert("Calling " + service + " at " + number);

      // Add to history
      var li = document.createElement("li");
      var time = new Date().toLocaleTimeString();
      li.textContent = service + " (" + number + ") - " + time;
      historyList.appendChild(li);
    });
  }

  // Clear history
  clearHistory.addEventListener("click", function () {
    historyList.innerHTML = "";
  });


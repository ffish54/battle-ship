
const onePlayerBtn = document.getElementById("one-player-btn");
const twoPlayerBtn = document.getElementById("two-player-btn");
const rulesBtn = document.getElementById("rules-btn");

onePlayerBtn.addEventListener("click", () => {

    localStorage.clear();

    localStorage.setItem("gameMode", "1p");

    window.location.href = "placement.html";

});


twoPlayerBtn.addEventListener("click", () => {

    localStorage.clear();

    localStorage.setItem("gameMode", "2p");

    localStorage.setItem("currentPlayer", "1");

    localStorage.setItem("phase", "placement");

    window.location.href = "placement.html";

});


rulesBtn.addEventListener("click", () => {

    window.location.href = "rules.html";

});
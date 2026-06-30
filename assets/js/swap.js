const currentPlayer =
    localStorage.getItem("currentPlayer");

const phase =
    localStorage.getItem("phase");

const swapTitle =
    document.getElementById("swap-title");

const continueBtn =
    document.getElementById("continue-btn");



if (currentPlayer === "1") {

    swapTitle.textContent =
        "Player 1's Turn";

} else {

    swapTitle.textContent =
        "Player 2's Turn";

}

continueBtn.addEventListener("click", () => {

    if (phase === "placement") {

        window.location.href =
            "placement.html";

    }

    if (phase === "battle") {

        window.location.href =
            "battle.html";

    }

});
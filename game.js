let yourScore = 0;
let compScore = 0;

const buttons = document.querySelector(".buttons");
const yourHand = document.getElementById("your-hand");
const compHand = document.getElementById("comp-hand");
const message = document.querySelector("#message p");
const playAgainBtn = document.querySelector("#play-again-button p");

buttons.addEventListener("click", (e) => {
    showHands(e.target.id);
});

function showHands(id) {
    const allHands = [
        `<img class="hands" src="./assets/paper-hand.png" alt="">`,
        `<img class="hands" src="./assets/rock-hand.png" alt="">`,
        `<img class="hands" src="./assets/scissors-hand.png" alt="">`
    ];

    const randomIndex = Math.floor(Math.random() * 3);

    switch (id) {
        case "rock":
            yourHand.innerHTML = allHands[1];
            break;
        case "paper":
            yourHand.innerHTML = allHands[0];
            break;
        case "scissors":
            yourHand.innerHTML = allHands[2];
            break;
        default:
            break;
    }

    compHand.innerHTML = allHands[randomIndex];

    checkResult();
}

function checkResult() {
    const userChoice = yourHand.innerHTML;
    const compChoice = compHand.innerHTML;

    if (userChoice === compChoice) {
        return;
    } else if (
        (userChoice === allHands[0] && compChoice === allHands[1]) ||
        (userChoice === allHands[1] && compChoice === allHands[2]) ||
        (userChoice === allHands[2] && compChoice === allHands[0])
    ) {
        yourScore++;
    } else {
        compScore++;
    }

    updateScore();
}

function updateScore() {
    const yourScoreElement = document.getElementById("score1");
    const compScoreElement = document.getElementById("score2");

    yourScoreElement.textContent = yourScore;
    compScoreElement.textContent = compScore;

    if (yourScore === 5 || compScore === 5) {
        endGame();
    }
}

function endGame() {
    buttons.removeEventListener("click", clickHandler);
    playAgainBtn.style.visibility = "visible";
    buttons.style.display = "none";

    playAgainBtn.addEventListener("click", () => {
        location.reload();
    });

    if (yourScore === 5) {
        message.textContent = "You won the game";
    } else if (compScore === 5) {
        message.textContent = "Computer won the game";
    }
}

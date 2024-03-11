let yourHand = document.getElementById("your-hand")
let compHand = document.getElementById("comp-hand")
let yourScore = document.getElementById("score1")
let compScore = document.getElementById("score2")
let message = document.querySelector("#message p")
let playAgainBtn = document.querySelector("#play-again-button p")
let buttons = document.querySelector(".buttons")
let score1 = 0;
let score2 = 0;

const clickHandler = (e) => {
    showHands(e.target.id)
};

buttons.addEventListener("click", clickHandler)

let allHands = [
    `<img class="hands" src="./assets/paper-hand.png" alt="">`,
    `<img class="hands" src="./assets/rock-hand.png" alt="">`,
    `<img class="hands" src="./assets/scissors-hand.png" alt="">`
]

function randomNumbers() {
    return Math.floor(Math.random()*3)
}

function showHands(id) {
    if(id == "rock") {
        yourHand.innerHTML = allHands[1]
        compHand.innerHTML = allHands[randomNumbers()]
    }
    else if(id == "paper") {
        yourHand.innerHTML = allHands[0]
        compHand.innerHTML = allHands[randomNumbers()]
    } 
    else if(id == "scissors") {
        yourHand.innerHTML = allHands[2]
        compHand.innerHTML = allHands[randomNumbers()]
    } 
    checkResult()
}

function checkResult() {
    if (yourHand.innerHTML == compHand.innerHTML) {

    }
    else if (yourHand.innerHTML == allHands[0] && compHand.innerHTML == allHands[1] ||
             yourHand.innerHTML == allHands[1] && compHand.innerHTML == allHands[2] || 
             yourHand.innerHTML == allHands[2] && compHand.innerHTML == allHands[0]){
        score1++
        yourScore.innerText = score1
    }
    else if (compHand.innerHTML == allHands[0] && yourHand.innerHTML == allHands[1] || 
             compHand.innerHTML == allHands[1] && yourHand.innerHTML == allHands[2] || 
             compHand.innerHTML == allHands[2] && yourHand.innerHTML == allHands[0]){
        score2++
        compScore.innerText = score2
    }
    gameOver()
}

function gameOver() {
    if (score1 ==5 && score1 > score2) message.innerHTML = "You won the game"
    else if(score2 == 5 && score2 > score1) message.innerHTML = "Computer won the game"
    else if(score1 >= 5 && score1 == score2) message.innerHTML = "Its a draw"
    if (score1 == 5 || score2 == 5) {
        buttons.removeEventListener("click", clickHandler)
        playAgainBtn.style.visibility = "visible";
        buttons.style.display = "none";
        playAgainBtn.addEventListener("click", () => {
            location.href = "game.html"
        })
    } 
}

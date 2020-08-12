// <⚠️ DONT DELETE THIS ⚠️>
// import "styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const randNum = document.getElementById("js-randnum"),
    rangeNum = document.getElementById("range-number"),
    inputNum = document.getElementById("input-num"),
    // form = document.getElementById("js-form"),
    // input = form.querySelector("input"),
    playBtn = document.getElementById("play-btn"),
    chooseNum = document.getElementById("choose-num"),
    resultGame = document.getElementById("result-game");

function handleSubmit(e) {
    e.preventDefault();
    const maxRange = rangeNum.value;
    const userNum = inputNum.value;
    const randomNum = Math.floor(Math.random() * (maxRange - 0 + 1));

    console.log(maxRange, userNum, randNum)

    if (randomNum == userNum) {
        chooseNum.innerHTML = `you chose: ${userNum}, the machine chose ${randomNum}`;
        resultGame.innerHTML = `you win!!`;
    } else {
        chooseNum.innerHTML = `you chose: ${userNum}, the machine chose ${randomNum}`;
        resultGame.innerHTML = `you lose!!`;
    }
}

function chRangeNum() {
    const number = rangeNum.value;
    console.log(number);
    randNum.innerHTML = `Generate a number between 0 and ${number}`;
}


function init() {
    rangeNum.addEventListener("input", chRangeNum);
    playBtn.addEventListener("click", handleSubmit);
}

init();
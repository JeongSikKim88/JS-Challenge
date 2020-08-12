// <⚠️ DONT DELETE THIS ⚠️>
// import "styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const randNum = document.getElementById("js-randnum"),
    rangeNum = document.getElementById("range-number"),
    playBtn = document.querySelector(".play-btn"),
    chooseNum = document.getElementById("choose-num"),
    resultGame = document.getElementById("result-game");


function chRangeNum() {
    const number = rangeNum.value;
    console.log(number);
    randNum.innerHTML = `Generate a number between 0 and ${number}`;
}


function init() {
    rangeNum.addEventListener("input", chRangeNum)
    playBtn.addEventListener("submit")    
}

init();
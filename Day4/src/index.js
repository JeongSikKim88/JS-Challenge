// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const display = document.querySelector("body");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#FCE902", "#e74c3c"];

function handlerResize() {
    let width = window.innerWidth;
    console.log(width);
    if (width <= 1000) {
        display.style.backgroundColor = colors[1];
    } else if (width <= 1200) {
        display.style.backgroundColor = colors[2];
    } else {
        display.style.backgroundColor = colors[3];
    }
}

function init() {
    window.addEventListener("resize", handlerResize);
}
init();
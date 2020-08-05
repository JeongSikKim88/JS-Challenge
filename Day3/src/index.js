// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const BASE_COLOR = colors[1];
const superEventHandler = {
    resizeHandlers: function handleResize() {},
    mouseoverHandlers: function handleMouseOver() {},
    clickHandlers: function handleClicked() {},
};

const title = document.querySelector("#h2");

function handlers() {
    title.style.color = BASE_COLOR;
    title.addEventListener("resize", superEventHandler.resizeHandlers);
    title.addEventListener("mouseover", superEventHandler.mouseoverHandlers);
    // title.addEventListener("mousedown", superEventHandler.handleClicked);
}

function init() {
    handlers();
}

init();
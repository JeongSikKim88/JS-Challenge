// import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000; //NINE_HOURS_MILLISECONDS = 1000 * 60 * 60 * 9
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h3");

function getTime() {
    // Don't delete this.
    const xmasDay = new Date("2020-12-24:00:00:00+0900");
    // console.log(xmasDay)
    const currentDay = new Date();
    // console.log(currentDay);
    const remainDate = xmasDay - currentDay;
    // console.log(remainDate);

    if (remainDate === 0) {
        clockTitle.innerText = "Today is Christmas Eve!"
    } else {
        const day = Math.floor(remainDate / ((NINE_HOURS_MILLISECONDS / 9) * 24));
        const hours = Math.floor(remainDate / (NINE_HOURS_MILLISECONDS / 9) % 24);
        const minutes = Math.floor(remainDate / (NINE_HOURS_MILLISECONDS / 540) % 60);
        const seconds = Math.floor(remainDate / (NINE_HOURS_MILLISECONDS / 32400) % 60);

        clockTitle.innerText = `${day <10? `0${day}`:day}d ${hours < 10 ? `0${hours}` : hours}h ${
            minutes < 10 ? `0${minutes}` : minutes
        }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
    }

}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();
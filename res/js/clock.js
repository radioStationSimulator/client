const time_lmnt = document.getElementById("info-grid_time");

function formatTime(number) {
    if (number.toString().length <= 1) {
        number = "0" + number;
    }
    return number;
}

function renewTime() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const time = formatTime(h) + ":" + formatTime(m) + ":" + formatTime(s);
    time_lmnt.innerText = time;
}

window.setInterval(() => renewTime(), 500);
renewTime();
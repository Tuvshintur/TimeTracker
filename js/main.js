const hoursLabel = document.getElementById("hours");
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
let interval;

function start() {
    interval = setInterval(setTime, 1000);
}

function pause() {
    clearInterval(interval);
}

function stop() {
    clearInterval(interval);
    totalSeconds = 0;
    secondsLabel.innerHTML = "00";
    minutesLabel.innerHTML = "00";
    hoursLabel.innerHTML = "00";
}

function setTime() {
    ++totalSeconds;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds - 3600 * hours) / 60);
    const seconds = totalSeconds % 60;
    secondsLabel.innerHTML = pad(seconds);
    minutesLabel.innerHTML = pad(minutes);
    hoursLabel.innerHTML = pad(hours);
}

function pad(val) {
    return val < 10 ? "0" + val : val;
}

(function () {
    document.getElementById("start").onclick = function () {
        start();
    };

    document.getElementById("pause").onclick = function () {
        pause();
    };

    document.getElementById("stop").onclick = function () {
        stop();
    };
})();

const hoursLabel = document.getElementById("hours");
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const historyTable = document.getElementById("history");
let totalSeconds = 0;
let interval = undefined;

function start() {
    interval = setInterval(setTime, 1000);
}

function pause() {
    clearInterval(interval);
    addRow();
}

function stop() {
    clearInterval(interval);
    interval = undefined;
    totalSeconds = 0;
    secondsLabel.innerHTML = "00";
    minutesLabel.innerHTML = "00";
    hoursLabel.innerHTML = "00";
    clearRows();
}

function addRow() {
    if (!interval) return;
    const rowCount = historyTable.rows.length;
    const row = historyTable.insertRow(rowCount);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = rowCount;
    cell2.innerHTML = hoursLabel.innerHTML + ":" + minutesLabel.innerHTML + ":" + secondsLabel.innerHTML;
    const date = new Date();
    cell3.innerHTML =
        pad(date.getMonth() + 1) +
        "/" +
        pad(date.getDay()) +
        "/" +
        date.getFullYear() +
        " " +
        pad(date.getHours()) +
        ":" +
        pad(date.getMinutes()) +
        ":" +
        pad(date.getSeconds());
    interval = undefined;
}

function clearRows() {
    const rowCount = historyTable.rows.length;
    if (!rowCount) return;
    for (let i = 1; i < rowCount; i++) {
        historyTable.deleteRow(1);
    }
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

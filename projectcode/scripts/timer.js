let minutes;
let seconds;
let interval;
let pomos;

function timeStart() {
    if (document.getElementById("startButton").textContent == "START") {
        minutes = 25;
        seconds = 0;
        interval = setInterval(count, 1000);
        document.getElementById("clock").innerHTML = "25:00";
        document.getElementById("startButton").textContent = "STOP";
    } else {
        stop();
    }
}

function count() {
    seconds--;
    if (seconds == -1) {
        minutes--;
        
        if(minutes == -1){
            clearInterval(interval);
            switchTimes();
        } else {
            seconds = 59;
        }
    }
    if (seconds >= 10) {
        document.getElementById("clock").innerHTML = minutes + ":" + seconds;
    } else {
        document.getElementById("clock").innerHTML = minutes + ":0" + seconds;
    } 
}

function switchTimes() {
    if (document.getElementById("state").textContent == "Work") {
    pomos++;
        document.getElementById("state").textContent = "Short Break";
        minutes = 5;
        seconds = 0;
        interval = setInterval(count, 1000);
        document.getElementById("clock").innerHTML = "5:00";
    } else if (document.getElementById("state").textContent == "Short Break") {
        document.getElementById("state").textContent = "Long Break";
        minutes = 30;
        seconds = 0;
        interval = setInterval(count, 1000);
        document.getElementById("clock").innerHTML = "30:00";
    } else if (document.getElementById("state").textContent == "Long Break") {
        document.getElementById("state").textContent = "Work";
        minutes = 25;
        seconds = 0;
        interval = setInterval(count, 1000);
        document.getElementById("clock").innerHTML = "25:00";
    }
}

function stop() {
    if (confirm("This will stop the timer and reset all Pomodoro breaks. Are you sure you want to continue?")) {
        clearInterval(interval);
        minutes = 25;
        seconds = 0;
        document.getElementById("clock").innerHTML = "25:00";
        document.getElementById("startButton").textContent = "START";
        document.getElementById("state").textContent = "Work";
    } else {
        alert("The timer will continue!");
    }
}
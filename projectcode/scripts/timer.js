
var minutes = 25;
var seconds = 0;
var interval;


function timeStart() {
    if (document.getElementById("startButton").textContent == "Start") {
        interval = setInterval(count, 1000);
        document.getElementById("clock").innerHTML = "25:00";
        document.getElementById("startButton").textContent = "Stop";
    } else {
        stop();
    }
}

function count() {
    seconds--;
    if(seconds == -1){
        
        minutes--;
        
        if(minutes == -1){
            clearInterval(interval);
        }
        else{
            seconds = 59;
        }
    }
    if(seconds >= 10){
        document.getElementById("clock").innerHTML = minutes + ":" + seconds;
    }   
    else{
        document.getElementById("clock").innerHTML = minutes + ":0" + seconds;
    } 
}

function stop() {
    if (confirm("This will stop the timer and reset all pomodoro breaks. Are you sure you want to conitnue?")) {
        clearInterval(interval);
        seconds = 0;
        minutes = 25;
        document.getElementById("clock").innerHTML = "25:00";
        document.getElementById("startButton").textContent = "Start";
    } else {
        alert("The timer will continue!");
    }
}
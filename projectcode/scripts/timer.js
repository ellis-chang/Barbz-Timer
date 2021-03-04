let minutes;
let seconds;
let interval;
let pomos = 0;
let longBreakCounter = 0;
var currPomos = 0;
var currTask = document.getElementById('currentTask');

function timeStart() {
    if (document.getElementById("startButton").textContent == "START") {
        if(document.getElementById('taskList').firstChild == null){
            alert('There are no tasks to do!');
            return;
        }
        moveTask();

        minutes = 0;
        seconds = 3;
        interval = setInterval(count, 1000);
        document.getElementById("clock").innerHTML = "00:03";
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
            //alert("sound");
            
            soundNotification("../sounds/notification.mp3");
            
            clearInterval(interval);
            
            if(document.getElementById("state").textContent == "Work"){
                
                taskTracker();
                
                if(document.getElementById('taskList').firstChild == null && currPomos == 0){
                    stop();
                    return;
                }
            }
            
            switchTimes();
        
        } 
        else {
            seconds = 59;
        }
    }
    if (seconds >= 10) {
        document.getElementById("clock").innerHTML = minutes + ":" + seconds;
    } else {
        document.getElementById("clock").innerHTML = minutes + ":0" + seconds;
    } 
}
function popUp(){

}
function soundNotification(url){
    const audio = new Audio(url);
    audio.play();
}
function addTime(){
    soundNotification("../sounds/notification.mp3");
    currPomos = prompt("The estimated pomos is up. How much time would you like to add?");
    if(currPomos == null || currPomos  == "" || currPomos == 0){
        currPomos = 0;
        alert("You have chosen not to add additional pomos to this task");
    }
}
function moveTask(){
    currPomos = parseInt(document.getElementById('taskList').firstChild.getAttribute('taskPomos'));
    currTask.innerHTML = document.getElementById('taskList').firstChild.getAttribute('taskName');
    document.getElementById('taskList').removeChild(document.getElementById('taskList').firstChild);
}

function taskTracker(){
    currPomos--;
    if(currPomos == 0){
        addTime();
    }
    if(currPomos == 0 && document.getElementById('taskList').firstChild != null){
        moveTask();
    }
}

function switchTimes() {
    if (document.getElementById("state").textContent == "Work") {
        // Increment total pomo counter and update page
        pomos++;
        document.getElementById("workPeriods").innerHTML = pomos;

        // Increment long break counter
        longBreakCounter++;

        // If less than 4 pomos, take a short break
        if(longBreakCounter < 4) {
            document.getElementById("state").textContent = "Short Break";
            minutes = 0;
            seconds = 2;
            
            interval = setInterval(count, 1000);
            document.getElementById("clock").innerHTML = "0:02";
        } else { // Take a long break
            longBreakCounter = 0;
            document.getElementById("state").textContent = "Long Break";
            minutes = 0;
            seconds = 4;
            
            interval = setInterval(count, 1000);
            document.getElementById("clock").innerHTML = "0:04";
        }
    // After break, get back to work
    } else if (document.getElementById("state").textContent == "Short Break" 
            || document.getElementById("state").textContent == "Long Break") {
        document.getElementById("state").textContent = "Work";
        minutes = 0;
        seconds = 3;
        interval = setInterval(count, 1000);
        document.getElementById("clock").innerHTML = "0:03";
    } 
}

function stop() {
    if(document.getElementById('taskList').firstChild == null){
        alert('No tasks left to do!');
        clearInterval(interval);
        minutes = 1;
        seconds = 0;
        document.getElementById("clock").innerHTML = "0:03";
        document.getElementById("startButton").textContent = "START";
        document.getElementById("state").textContent = "Work";
    }
    else if (confirm("This will stop the timer and reset all Pomodoro breaks. Are you sure you want to continue?")) {
        clearInterval(interval);
        minutes = 1;
        seconds = 0;
        document.getElementById("clock").innerHTML = "0:03";
        document.getElementById("startButton").textContent = "START";
        document.getElementById("state").textContent = "Work";
        currPomos = 0;
    } else {
        alert("The timer will continue!");
    }
}

let settingsInput = document.getElementById("settingsInput");
let overlay = document.getElementById("overlay");

function displaySettings() {
    settingsInput.style.display = "block";
    overlay.style.display = "block";
}

function settingsClose() {
    settingsInput.style.display = "none";
    overlay.style.display = "none";
}
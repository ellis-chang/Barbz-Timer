let minutes;
let seconds;
let interval;
let interval2;
let pomos = 0;
let longBreakCounter = 0;
var currPomos = 0;
var currTask = document.getElementById('currentTask');
var notification;
var endOfEstimated = false;
function timeStart() { 
    if (document.getElementById("startButton").textContent == "START") {
        if(document.getElementById('taskList').firstChild == null){
            alert('There are no tasks to do!');
            return;
        }
        moveTask();

        minutes = 0;
        seconds = 15;
        interval = setInterval(count, 1000);
        interval2 = setInterval(notifications, 1000);
        document.getElementById("clock").innerHTML = "0:15";
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
            clearInterval(interval2);

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
function taskTracker(){
    currPomos--;
    if(currPomos == 0){
        /*
        notification = new Notification("Task's Estimated Pomos Over", {
            body: "Good job! The current task's estimated pomos are over. \nPlease return to the website to input whether you want to add more pomos to this task.",
        });
        */
        addTime();
    }
    if(currPomos == 0 && document.getElementById('taskList').firstChild != null){
        moveTask();
    }
}
function addTime(){
    currPomos = prompt("The estimated pomos are up. \nHow many work periods would you like to add? \nPlease input a number:");
    while(isNaN(currPomos)){
        currPomos = prompt("You have not entered a number. \nPlease re-enter a number of work periods you would like to add:");
    }
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
            seconds = 3;
            
            interval = setInterval(count, 1000);
            interval2 = setInterval(notifications, 1000);
            document.getElementById("clock").innerHTML = "0:03";
        } else { // Take a long break
            longBreakCounter = 0;
            document.getElementById("state").textContent = "Long Break";
            minutes = 0;
            seconds = 5;
            
            interval = setInterval(count, 1000);
            interval2 = setInterval(notifications, 1000);
            document.getElementById("clock").innerHTML = "0:05";
        }
    // After break, get back to work
    } else if (document.getElementById("state").textContent == "Short Break" 
            || document.getElementById("state").textContent == "Long Break") {
        document.getElementById("state").textContent = "Work";
        minutes = 0;
        seconds = 15;
        interval = setInterval(count, 1000);
        interval2 = setInterval(notifications, 1000);

        document.getElementById("clock").innerHTML = "0:15";
    } 
}

function stop() {
    if(document.getElementById('taskList').firstChild == null){
        pomos++;
        document.getElementById("workPeriods").innerHTML = pomos;
        notification = new Notification("No more tasks", {
            body: "Congratulations! You have finished all your tasks! \nPlease input more tasks if needed.\nIf not, thank you for using our service!",
        });
        setTimeout(notification.close(), 1 * 1000);
        alert('No tasks left to do!');
        clearInterval(interval);
        minutes = 1;
        seconds = 0;
        document.getElementById("clock").innerHTML = "0:15";
        document.getElementById("startButton").textContent = "START";
        document.getElementById("state").textContent = "Work";
    }
    else if (confirm("This will stop the timer and reset all Pomodoro breaks. Are you sure you want to continue?")) {
        clearInterval(interval);
        minutes = 1;
        seconds = 0;
        document.getElementById("clock").innerHTML = "0:15";
        document.getElementById("startButton").textContent = "START";
        document.getElementById("state").textContent = "Work";
        currPomos = 0;
    } else {
        alert("The timer will continue!");
    }
}

function notificationPermission(){
    if (!window.Notification) {
        alert("Browser does not support notifications");
    }
    else {
        if(Notification.permission === 'granted'){
            //alert("granted"); 
        }
        else if (Notification.permission !== 'denied'){
            //alert("not granted");
            Notification.requestPermission().then(function (p) {
                if(p === 'granted'){
                }
            });
        }
    }
}
function popupNotification() {
    
    if(currPomos == 1 && document.getElementById("state").textContent == "Work"){
        notification = new Notification("Task's Estimated Pomos Over", {
            body: "Good job! The current task's estimated pomos are over. \nPlease return to the website to input whether you want to add more pomos to this task.",
        });
    }
    else if (document.getElementById("state").textContent == "Work" && currPomos > 1){
        if(longBreakCounter < 3){
            notification = new Notification("Work Period Over", {
                body: "Good job on the work so far! \nHere is a short break.",
            });
        }
        else{
            notification = new Notification("Work Period Over", {
                body: "Good job staying on task! \nHere is a well-deserved long break.",
            });
        }
    }
    else if (document.getElementById("state").textContent == "Short Break"){
        notification = new Notification("Short Break Over", {
            body: "Your break time is up \n You should resume working",
        });
    }
    else if (document.getElementById("state").textContent == "Long Break"){
        notification = new Notification("Long Break Over", {
            body: "Your break time is up \n You should resume working",
        });
    }
    setTimeout(notification.close(), 1 * 1000);

}
function soundNotification(){
    var audio = new Audio("../sounds/samsung_whistle.mp3");
    audio.play();
}
function notifications(){
    if(seconds == 0 && minutes == 0){
        popupNotification();
        soundNotification();
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
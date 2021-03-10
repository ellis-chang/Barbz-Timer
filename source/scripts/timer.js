let minutes;
let seconds;
let interval;
let interval2;
let pomos = 0;
let longBreakCounter = 0;
var currPomos = 0;
var currTask = document.getElementById('currentTask');
var check = document.getElementById('check');
var valueWork = 25;
var valueShort = 5;
var valueLong = 30;
myStorage = window.localStorage;

/**
 * On page load, the function sets the settings to what was stored in the
 * local storage.
 */
window.onload = function(){
    if(localStorage.getItem('workSettings') != null){
        valueWork = parseInt(localStorage.getItem('workSettings'));
        document.getElementById("workSettings").value = valueWork;
        document.getElementById("clock").innerHTML = `${valueWork}:00`;
    } else if(localStorage.getItem('shortBreakSettings') != null){
        valueShort = parseInt(localStorage.getItem('shortBreakSettings'));
        document.getElementById("shortBreakSettings").value = valueShort;
    } else if(localStorage.getItem('longBreakSettings') != null){
        valueLong = parseInt(localStorage.getItem('longBreakSettings'));
        document.getElementById("longBreakSettings").value = valueLong;
    }
}

var notification;
var endOfEstimated = false;

/**
 * Starts the timer when start button is clicked
 * and lets user know if they don't have tasks to do.
 */
function timeStart() { 
    if (document.getElementById("startButton").textContent == "START") {
        if(document.getElementById('taskList').firstChild == null){
            alert('There are no tasks to do!');
            return;
        }
        moveTask();

        minutes = valueWork;
        seconds = 0;
        interval = setInterval(count, 1000);
        interval2 = setInterval(notifications, 1000);
        document.getElementById("clock").innerHTML = `${valueWork}:00`;
        document.getElementById("startButton").textContent = "STOP";
    } else {
        stop();
    }
}

/**
 * Timer to countdown every second based off the default
 * timer settings and changes based off the changes.
 */
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
            switchThemes();
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

/**
 * Moves the task up the task list. The task at the top of the task list is moved
 * to the current task bar.
 */
function moveTask(){
    currPomos = parseInt(document.getElementById('taskList').firstChild.getAttribute('taskPomos'));
    currTask.innerHTML = document.getElementById('taskList').firstChild.getAttribute('taskName');
    document.getElementById('taskList').removeChild(document.getElementById('taskList').firstChild);
}

/**
 * Keeps track of the pomos left for the current task and then calls moveTask() when
 * the pomos left for the current task is zero.
 */
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

/**
 * Prompt the user if they want more pomos for the current task if they aren't done with the current task
 * and the estimated number of pomos for the current task has been reached.
 */
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

/**
 * Switches the work periods between work, short break, and long break.
 */
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
            minutes = valueShort;
            seconds = 0;
            interval = setInterval(count, 1000);
            interval2 = setInterval(notifications, 1000);
            document.getElementById("clock").innerHTML = `${valueShort}:00`;
        } else { // Take a long break
            longBreakCounter = 0;
            document.getElementById("state").textContent = "Long Break";
            minutes = valueLong;
            seconds = 0;
            interval = setInterval(count, 1000);
            interval2 = setInterval(notifications, 1000);
            document.getElementById("clock").innerHTML = `${valueLong}:00`;
        }
    // After break, get back to work
    } else if (document.getElementById("state").textContent == "Short Break" 
            || document.getElementById("state").textContent == "Long Break") {
        document.getElementById("state").textContent = "Work";
        minutes = valueWork;
        seconds = 0;
        interval = setInterval(count, 1000);
        interval2 = setInterval(notifications, 1000);
        document.getElementById("clock").innerHTML = `${valueWork}:00`;
    } 
}

theme = document.getElementById("style");

/**
 * Switches themes from work period to work period.
 */
function switchThemes() {
    if (document.getElementById("state").textContent == "Short Break") {
        theme.setAttribute('href', "../styles/shortbreakstyle.css");  
    }
    else if (document.getElementById("state").textContent == "Long Break") {
        theme.setAttribute('href', "../styles/longbreakstyle.css");  
    }  
    else {
        theme.setAttribute('href', "../styles/style.css");  
    } 

}

/**
 * Depending on whether the Stop button is clicked or there are no tasks left, the stop
 * function will be called and stop the timer. It will reset all the values to its
 * original state.
 */
function stop() {
    if(document.getElementById('taskList').firstChild == null){
        alert('No tasks left to do!');
        clearInterval(interval);
        clearInterval(interval2);
        minutes = valueWork;
        seconds = 0;
        document.getElementById("clock").innerHTML = `${valueWork}:00`;
        document.getElementById("startButton").textContent = "START";
        document.getElementById("state").textContent = "Work";
        currPomos = 0;
        longBreakCounter = 0;
        switchThemes();
    }
    else if (confirm("This will stop the timer and reset all Pomodoro breaks. Are you sure you want to continue?")) {
        clearInterval(interval);
        clearInterval(interval2);
        minutes = valueWork;
        seconds = 0;
        document.getElementById("clock").innerHTML = `${valueWork}:00`;
        document.getElementById("startButton").textContent = "START";
        document.getElementById("state").textContent = "Work";
        currPomos = 0;
        longBreakCounter = 0;
        switchThemes();
    } else {
        alert("The timer will continue!");
    }
}

/**
 * Ask the user for notification permissions.
 */
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

/**
 * Makes a pop up display to notify the user at the end of a period.
 */
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

/**
 * Plays an audio notification for the user.
 */
function soundNotification(){
    var audio = new Audio("../sounds/samsung_whistle.mp3");
    audio.play();
}

/**
 * Notifications will be activated at the end of each period.
 */
function notifications(){
    if(seconds == 0 && minutes == 0){
        popupNotification();
        soundNotification();
    }
}


let settingsInput = document.getElementById("settingsInput");
let overlay = document.getElementById("overlay");
let activity = document.getElementById("activity");

/**
 * Opens the activity display.
 */
function displayActivity() {
    activity.style.display = "block";
    overlay.style.display = "block";
}

/**
 * Closes the activity display.
 */
function activityClose() {
    activity.style.display = "none";
    overlay.style.display = "none";
}

/**
 * Makes the settings visible.
 */
function displaySettings() {
    settingsInput.style.display = "block";
    overlay.style.display = "block";
}

/**
 * Closes the settings page.
 */
function settingsClose() {
    settingsInput.style.display = "none";
    overlay.style.display = "none";
    document.getElementById("workSettings").value = valueWork;
    document.getElementById("shortBreakSettings").value = valueShort;
    document.getElementById("longBreakSettings").value = valueLong;
}

/**
 * Clicking the done button will mark the current task as complete
 * and remove it from the current task bar. The next task will be
 * moved up and the current period will automatically be switched.
 */
function taskComplete(){
    if (document.getElementById("state").textContent == "Work") {
        clearInterval(interval);
        clearInterval(interval2);
        switchTimes();
        switchThemes();
    }
    if(document.getElementById('taskList').firstChild == null){
        currTask.innerHTML = "Sample Current Task";
        stop();
    }else{
        moveTask();
    }
}

/**
 * Clicking the save button in the settings page will store the values
 * into local storage and adjust the timer accordingly.
 * @returns nothing if inputs values are invalid
 */
function save(){
    if(document.getElementById("workSettings").value < 1){
        alert("Please use positive number for the inputs!");
        return;
    } else if(document.getElementById("shortBreakSettings").value < 1){
        alert("Please use positive number for the inputs!");
        return;
    } else if(document.getElementById("longBreakSettings").value < 1){
        alert("Please use positive number for the inputs!");
        return;
    }
    
    valueWork = document.getElementById("workSettings").value;
    valueShort = document.getElementById("shortBreakSettings").value;
    valueLong = document.getElementById("longBreakSettings").value;
    document.getElementById("clock").innerHTML = `${valueWork}:00`;

    localStorage.setItem('workSettings', `${valueWork}`);
    localStorage.setItem('shortBreakSettings', `${valueShort}`);
    localStorage.setItem('longBreakSettings', `${valueLong}`);
}
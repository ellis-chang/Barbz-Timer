let minutes;
let seconds;
let interval;
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
        document.getElementById("clock").innerHTML = `${valueWork}:00`;
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
    if(currPomos == 0 && document.getElementById('taskList').firstChild != null){
        moveTask();
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
            document.getElementById("clock").innerHTML = `${valueShort}:00`;
        } else { // Take a long break
            longBreakCounter = 0;
            document.getElementById("state").textContent = "Long Break";
            minutes = valueLong;
            seconds = 0;
            interval = setInterval(count, 1000);
            document.getElementById("clock").innerHTML = `${valueLong}:00`;
        }
    // After break, get back to work
    } else if (document.getElementById("state").textContent == "Short Break" 
            || document.getElementById("state").textContent == "Long Break") {
        document.getElementById("state").textContent = "Work";
        minutes = valueWork;
        seconds = 0;
        interval = setInterval(count, 1000);
        document.getElementById("clock").innerHTML = `${valueWork}:00`;
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
        minutes = valueWork;
        seconds = 0;
        document.getElementById("clock").innerHTML = `${valueWork}:00`;
        document.getElementById("startButton").textContent = "START";
        document.getElementById("state").textContent = "Work";
        currPomos = 0;
    }
    else if (confirm("This will stop the timer and reset all Pomodoro breaks. Are you sure you want to continue?")) {
        clearInterval(interval);
        minutes = valueWork;
        seconds = 0;
        document.getElementById("clock").innerHTML = `${valueWork}:00`;
        document.getElementById("startButton").textContent = "START";
        document.getElementById("state").textContent = "Work";
        currPomos = 0;
    } else {
        alert("The timer will continue!");
    }
}

let settingsInput = document.getElementById("settingsInput");
let overlay = document.getElementById("overlay");

/**
 * Makes the settings visible.
 */
function displaySettings() {
    settingsInput.style.display = "block";
    overlay.style.display = "block";
}

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
        switchTimes();
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
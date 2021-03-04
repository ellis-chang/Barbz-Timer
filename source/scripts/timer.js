let minutes;
let seconds;
let interval;
let pomos = 0;
let longBreakCounter = 0;
var currPomos = 0;
var currTask = document.getElementById('currentTask');
let settingsInput = document.getElementById("settingsInput");
let overlay = document.getElementById("overlay");

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

        minutes = 25;
        seconds = 0;
        interval = setInterval(count, 1000);
        document.getElementById("clock").innerHTML = "25:00";
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
 * Moves the task
 */
function moveTask(){
    currPomos = parseInt(document.getElementById('taskList').firstChild.getAttribute('taskPomos'));
    currTask.innerHTML = document.getElementById('taskList').firstChild.getAttribute('taskName');
    document.getElementById('taskList').removeChild(document.getElementById('taskList').firstChild);
}

/**
 * Keeps track of the current task and the work periods completed.
 */
function taskTracker(){
        currPomos--;
    if(currPomos == 0 && document.getElementById('taskList').firstChild != null){
        moveTask();
    }
}

/**
 * Switches the current task from work to short break and
 * long break depending on the amount of pomodoros they've
 * completed.
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
            minutes = 5;
            seconds = 0;
            interval = setInterval(count, 1000);
            document.getElementById("clock").innerHTML = "05:00";
        } else { // Take a long break
            longBreakCounter = 0;
            document.getElementById("state").textContent = "Long Break";
            minutes = 30;
            seconds = 0;
            interval = setInterval(count, 1000);
            document.getElementById("clock").innerHTML = "30:00";
        }
    // After break, get back to work
    } else if (document.getElementById("state").textContent == "Short Break" 
            || document.getElementById("state").textContent == "Long Break") {
        document.getElementById("state").textContent = "Work";
        minutes = 25;
        seconds = 0;
        interval = setInterval(count, 1000);
        document.getElementById("clock").innerHTML = "25:00";
    } 
}

/**
 * Stops the timer and will hard reset all the tasks.
 */
function stop() {
    if(document.getElementById('taskList').firstChild == null){
        alert('No tasks left to do!');
        clearInterval(interval);
        minutes = 1;
        seconds = 0;
        document.getElementById("clock").innerHTML = "25:00";
        document.getElementById("startButton").textContent = "START";
        document.getElementById("state").textContent = "Work";
    }
    else if (confirm("This will stop the timer and reset all Pomodoro breaks. Are you sure you want to continue?")) {
        clearInterval(interval);
        minutes = 1;
        seconds = 0;
        document.getElementById("clock").innerHTML = "25:00";
        document.getElementById("startButton").textContent = "START";
        document.getElementById("state").textContent = "Work";
        currPomos = 0;
    } else {
        alert("The timer will continue!");
    }
}

/**
 * Displays the settings page.
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
}
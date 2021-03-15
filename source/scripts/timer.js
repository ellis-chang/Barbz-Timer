let minutes;
let seconds;
let interval;
let interval2;
let pomos = 0;
var totalPomos = 0;
let longBreakCounter = 0;
var currPomos = 0;
var currTask = document.getElementById('currentTask');
var check = document.getElementById('check');
var valueWork = 25;
var valueShort = 5;
var valueLong = 30;
var valueSound = 100;
var actualPomos = 0;
var estimatedPomos = 0;
var activityTaskName;
myStorage = window.localStorage;

/**
 * On page load, the function sets the settings to what was stored in the
 * local storage.
 */
window.onload = function () {
    if (localStorage.getItem('workSettings') != null) {
        valueWork = parseInt(localStorage.getItem('workSettings'));
        document.getElementById("workSettings").value = valueWork;
        document.getElementById("clock").innerHTML = `${valueWork}:00`;
    }
    if (localStorage.getItem('shortBreakSettings') != null) {
        valueShort = parseInt(localStorage.getItem('shortBreakSettings'));
        document.getElementById("shortBreakSettings").value = valueShort;
    }
    if (localStorage.getItem('longBreakSettings') != null) {
        valueLong = parseInt(localStorage.getItem('longBreakSettings'));
        document.getElementById("longBreakSettings").value = valueLong;
    }
    if (localStorage.getItem('volume-slider') != null) {
        valueSound = parseInt(localStorage.getItem('volume-slider'));
        document.getElementById("volume-slider").value = valueSound;
    }
    if (localStorage.getItem('totalPomos') != null &&  !isNaN(localStorage.getItem('totalPomos'))) {
        totalPomos = parseInt(localStorage.getItem('totalPomos'));
    }
    document.getElementById("worktimes").innerHTML = totalPomos;
}

var notification;
var endOfEstimated = false;


var startButtonText = {
    en: "START",
    es: "COMIENZO",
    ch: "開始"
}

var stopButtonText = {
    en: "STOP",
    es: "DETENER",
    ch: "停止"

}
/**
 * Starts the timer when start button is clicked
 * and lets user know if they don't have tasks to do.
 */
function timeStart() {
    if (document.getElementById("startButton").textContent == startButtonText[localStorage.getItem("language")]) {
        if (document.getElementById('taskList').firstChild == null) {
            alert(noTasksLeftText[localStorage.getItem("language")]);
            return;
        }
        moveTask("start");

        minutes = valueWork;
        seconds = 0;
        interval = setInterval(count, 1000);
        interval2 = setInterval(notifications, 1000);
        document.getElementById("clock").innerHTML = `${valueWork}:00`;
        document.getElementById("startButton").textContent = stopButtonText[localStorage.getItem("language")];
    } else {
        if(document.getElementById("state").textContent == workText[localStorage.getItem("language")]){
            actualPomos++;
        }
        addTaskActivity();
        stop();
    }
}

var workText = {
    en: "Work",
    es: "Trabaja",
    ch: "工作"
}

var shortStateText = {
    en: "Short Break",
    es: "Pequeño Descanso",
    ch: "短暫休息"
}

var longStateText = {
    en: "Long Break",
    es: "Largo Descanso",
    ch: "長時間休息"
}


/**
 * Timer to countdown every second based off the default
 * timer settings and changes based off the changes.
 */
function count() {
    seconds--;
    if (seconds == -1) {
        minutes--;
        if (minutes == -1) {
            clearInterval(interval);
            clearInterval(interval2);
            if (document.getElementById("state").textContent == workText[localStorage.getItem("language")]) {
                taskTracker();
                if (document.getElementById('taskList').firstChild == null && currPomos == 0) {
                    actualPomos++;
                    addTaskActivity();
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
function moveTask(state) {
    estimatedPomos = parseInt(document.getElementById('taskList').firstChild.getAttribute('taskPomos'));
    if(state != "start"){
        addTaskActivity();
    }
    currPomos = parseInt(document.getElementById('taskList').firstChild.getAttribute('taskPomos'));
    document.getElementById('currentTask').innerHTML = document.getElementById('taskList').firstChild.getAttribute('taskName');
    document.getElementById('currentPomos').innerHTML = currPomos;
    document.getElementById('taskList').removeChild(document.getElementById('taskList').firstChild);
}

/**
 * Keeps track of the pomos left for the current task and then calls moveTask() when
 * the pomos left for the current task is zero.
 */
function taskTracker() {
    currPomos--;
    document.getElementById('currentPomos').innerHTML = currPomos;

    if (currPomos == 0 && document.getElementById('taskList').firstChild != null) {
        moveTask("next");
    }
}

var addWorkPeriodText = {
    en: "The estimated pomos are up. \nHow many work periods would you like to add? \nPlease input a number:",
    es: "Los pomos estimados han subido. \n¿Cuántos períodos de trabajo le gustaría agregar? \nPor favor ingrese un número:",
    ch: "估計的情緒高漲了. \n您要添加多少個工作時間？\n請輸入一個數字:"
}

var notEnteredNumText = {
    en: "You have not entered a number. \nPlease re-enter a number of work periods you would like to add:",
    es: "Los pomos estimados han subido. \nVuelva a ingresar una cantidad de períodos de trabajo que le gustaría agregar:",
    ch: "您尚未輸入數字。\n請重新輸入您要添加的多個工作期間:"
}

var notChosenText = {
    en: "You have chosen not to add additional pomos to this task",
    es: "Has elegido no agregar pomos adicionales a esta tarea",
    ch: "您已選擇不向此任務添加其他pomos"
}

/**
 * Switches the work periods between work, short break, and long break.
 */
function switchTimes() {
    if (document.getElementById("state").textContent == workText[localStorage.getItem("language")]) {
        document.getElementById("check").disabled = true;
        // Increment total pomo counter and update page
        pomos++;
        totalPomos++;
        document.getElementById("workPeriods").innerHTML = pomos;
        actualPomos++;
        // Increment long break counter
        longBreakCounter++;
        // If less than 4 pomos, take a short break
        if (longBreakCounter < 4) {
            document.getElementById("state").textContent = shortStateText[localStorage.getItem("language")];
            minutes = valueShort;
            seconds = 0;
            interval = setInterval(count, 1000);
            interval2 = setInterval(notifications, 1000);
            document.getElementById("clock").innerHTML = `${valueShort}:00`;
        } else { // Take a long break
            longBreakCounter = 0;
            document.getElementById("state").textContent = longStateText[localStorage.getItem("language")];
            minutes = valueLong;
            seconds = 0;
            interval = setInterval(count, 1000);
            interval2 = setInterval(notifications, 1000);
            document.getElementById("clock").innerHTML = `${valueLong}:00`;
        }
        // After break, get back to work
    } else if (document.getElementById("state").textContent == shortStateText[localStorage.getItem("language")]
        || document.getElementById("state").textContent == longStateText[localStorage.getItem("language")]) {
        document.getElementById("state").textContent = workText[localStorage.getItem("language")];
        document.getElementById("check").disabled = false;
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
    if (document.getElementById("state").textContent == shortStateText[localStorage.getItem("language")]) {
        theme.setAttribute('href', "../styles/shortbreakstyle.css");
    } else if (document.getElementById("state").textContent == longStateText[localStorage.getItem("language")]) {
        theme.setAttribute('href', "../styles/longbreakstyle.css");
    } else {
        theme.setAttribute('href', "../styles/style.css");
    }

}

var stopTimerText = {
    en: "This will stop the timer and reset all Pomodoro breaks. Are you sure you want to continue?",
    es: "Esto detendrá el temporizador y reiniciará todos los descansos Pomodoro. Estás seguro de que quieres continuar?",
    ch: "這將停止計時器並重置所有番茄時間。你確定你要繼續嗎"
}

var noTasksLeftText = {
    en: "No tasks left to do!",
    es: "¡No quedan tareas por hacer!",
    ch: "沒有任務可做！"
}

var timeContinueText = {
    en: "The timer will continue!",
    es: "¡El temporizador continuará!",
    ch: "計時器將繼續!"
}

var stopTimerText = {
    en: "This will stop the timer and reset all Pomodoro breaks. Are you sure you want to continue?",
    es: "Esto detendrá el temporizador y reiniciará todos los descansos Pomodoro. Estás seguro de que quieres continuar?",
    ch: "這將停止計時器並重置所有番茄時間。你確定你要繼續嗎"
}

var noTasksLeftText = {
    en: "No tasks left to do!",
    es: "¡No quedan tareas por hacer!",
    ch: "沒有任務可做！"
}

var timeContinueText = {
    en: "The timer will continue!",
    es: "¡El temporizador continuará!",
    ch: "計時器將繼續!"
}

var stopTimerText = {
    en: "This will stop the timer and reset all Pomodoro breaks. Are you sure you want to continue?",
    es: "Esto detendrá el temporizador y reiniciará todos los descansos Pomodoro. Estás seguro de que quieres continuar?",
    ch: "這將停止計時器並重置所有番茄時間。你確定你要繼續嗎"
}

var noTasksLeftText = {
    en: "No tasks left to do!",
    es: "¡No quedan tareas por hacer!",
    ch: "沒有任務可做！"
}

var timeContinueText = {
    en: "The timer will continue!",
    es: "¡El temporizador continuará!",
    ch: "計時器將繼續!"
}

/**
 * Depending on whether the Stop button is clicked or there are no tasks left, the stop
 * function will be called and stop the timer. It will reset all the values to its
 * original state.
 */
function stop() {
    document.getElementById("check").disabled = false;
    if (document.getElementById('taskList').firstChild == null) {
        alert(noTasksLeftText[localStorage.getItem("language")]);
        if(document.getElementById("state").textContent == workText[localStorage.getItem("language")]){
            pomos++;
            totalPomos++;
        }
        document.getElementById("workPeriods").innerHTML = pomos;
        clearInterval(interval);
        clearInterval(interval2);
        minutes = valueWork;
        seconds = 0;
        document.getElementById("clock").innerHTML = `${valueWork}:00`;
        document.getElementById("startButton").textContent = startButtonText[localStorage.getItem("language")];
        document.getElementById("state").textContent = workText[localStorage.getItem("language")];
        currTask.innerHTML = "";
        document.getElementById('currentPomos').innerHTML = "";
        currPomos = 0;
        longBreakCounter = 0;
        switchThemes();
    } else if (confirm(stopTimerText[localStorage.getItem("language")])) {
        if(document.getElementById("state").textContent == workText[localStorage.getItem("language")]){
            pomos++;
            totalPomos++;
        }
        document.getElementById("workPeriods").innerHTML = pomos;
        clearInterval(interval);
        clearInterval(interval2);
        minutes = valueWork;
        seconds = 0;
        document.getElementById("clock").innerHTML = `${valueWork}:00`;
        document.getElementById("startButton").textContent = startButtonText[localStorage.getItem("language")]
        document.getElementById("state").textContent = workText[localStorage.getItem("language")];
        currTask.innerHTML = "";
        document.getElementById('currentPomos').innerHTML = "";
        currPomos = 0;
        longBreakCounter = 0;
        switchThemes();
    } else {
        alert(timeContinueText[localStorage.getItem("language")]);
    }

}

var browserDoesNotSupportText = {
    en: "Browser does not support notifications",
    es: "El navegador no admite notificaciones",
    ch: "瀏覽器不支持通知"
}

/**
 * Ask the user for notification permissions.
 */
function notificationPermission() {
    if (!window.Notification) {
        alert(browserDoesNotSupportText[localStorage.getItem("language")]);
    } else {
        if (Notification.permission === 'granted'){
            //alert("granted"); 
            permission = true;
        } else if (Notification.permission !== 'denied'){
            //alert("not granted");
            Notification.requestPermission().then(function (p) {
                if (p === 'granted'){
                    permission = true;
                } else {
                    permission = false;
                }
            });
        } else {
            permission = false;
        }
    }
}

var estimatedPomosOverText = {
    en: "Task's Estimated Pomos Over",
    es: "Pomos Estimado de la Tarea Sobre",
    ch: "任務估計Pomos結束"
}

var addPomosText = {
    en: "Good job! The current task's estimated pomos are over. \nPlease return to the website to input whether you want to add more pomos to this task.",
    es: "¡Buen trabajo! Los pomos estimados de la tarea actual han terminado. \nRegrese al sitio web para ingresar si desea agregar más pomos a esta tarea.",
    ch: "做得好！當前任務的估計工作量已結束。\n請返回網站以輸入是否要向此任務添加更多的表情。"
}

var workPeriodOver = {
    en: "Work Period Over",
    es: "Período de trabajo terminado",
    ch: "工作期結束"
}

var shortBreakText = {
    en: "Good job on the work so far! \nHere is a short break.",
    es: "¡Buen trabajo hasta ahora! \nAquí hay un breve descanso.",
    ch: "到目前為止工作做得不錯！\n這是一個短暫的休息。"
}

var longBreakText = {
    en: "Good job staying on task! \nHere is a well-deserved long break.",
    es: "¡Buen trabajo permaneciendo concentrado! \nAquí hay un merecido largo descanso.",
    ch: "幹得好，任重道遠！\n這是當之無愧的長假。"
}

var shortBreakOverText = {
    en: "Short Break Over",
    es: "Breve descanso",
    ch: "短暫突破"
}

var longBreakOverText = {
    en: "Long Break Over",
    es: "Largo descanso",
    ch: "漫長的突破"
}

var breakTimeUpText = {
    en: "Your break time is up \n You should resume working",
    es: "Tu tiempo de descanso se acabó \n Deberías reanudar el trabajo",
    ch: "你的休息時間到了 \n 你應該繼續工作"
}

/**
 * Makes a pop up display to notify the user at the end of a period.
 */
function popupNotification() {
    if (currPomos == 1 && document.getElementById("state").textContent == workText[localStorage.getItem("language")]) {
        notification = new Notification(estimatedPomosOverText[localStorage.getItem("language")], {
            body: addPomosText[localStorage.getItem("language")],
        });
    } else if (document.getElementById("state").textContent == workText[localStorage.getItem("language")] && currPomos > 1) {
        if (longBreakCounter < 3) {
            notification = new Notification(workPeriodOver[localStorage.getItem("language")], {
                body: shortBreakText[localStorage.getItem("language")],
            });
        } else {
            notification = new Notification(workPeriodOver[localStorage.getItem("language")], {
                body: longBreakText[localStorage.getItem("language")],
            });
        }
    } else if (document.getElementById("state").textContent == shortStateText[localStorage.getItem("language")]) {
        notification = new Notification(shortBreakOverText[localStorage.getItem("language")], {
            body: breakTimeUpText[localStorage.getItem("language")],
        });
    } else if (document.getElementById("state").textContent == longStateText[localStorage.getItem("language")]) {
        notification = new Notification(longBreakOverText[localStorage.getItem("language")], {
            body: breakTimeUpText[localStorage.getItem("language")],
        });
    }
    setTimeout(notification.close(), 1 * 1000);

}

/**
 * Plays an audio notification for the user.
 */
function soundNotification() {
    var audio = new Audio("../sounds/samsung_whistle.mp3");
    audio.volume = document.getElementById("volume-slider").value/100;
    audio.play();
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
    document.getElementById("volume-slider").value = valueSound;
}


/**
 * Clicking the done button will mark the current task as complete
 * and remove it from the current task bar. The next task will be
 * moved up and the current period will automatically be switched.
 */
function taskComplete() {
    if (document.getElementById("startButton").textContent == startButtonText[localStorage.getItem("language")]){
        alert("There is no current Task!");
    } else if (document.getElementById("state").textContent == workText[localStorage.getItem("language")]) {
        clearInterval(interval);
        clearInterval(interval2);
        switchTimes();
        switchThemes();
    }
    if (document.getElementById("startButton").textContent == startButtonText[localStorage.getItem("language")]){
        return;
    } else if (document.getElementById('taskList').firstChild == null ) {
        addTaskActivity();
        currTask.innerHTML = "";
        stop();
    } else {
        moveTask("complete");
    }
}


var usePositiveNumberText = {
    en: "Please use positive number for the inputs!",
    es: "¡Utilice un número positivo para las entradas!",
    ch: "請使用正數作為輸入！"
}

/**
 * Clicking the save button in the settings page will store the values
 * into local storage and adjust the timer accordingly.
 * @returns nothing if inputs values are invalid
 */
function save() {
    if (document.getElementById("workSettings").value < 1) {
        alert(usePositiveNumberText[localStorage.getItem("language")]);
        return;
    } else if (document.getElementById("shortBreakSettings").value < 1) {
        alert(usePositiveNumberText[localStorage.getItem("language")]);
        return;
    } else if (document.getElementById("longBreakSettings").value < 1) {
        alert(usePositiveNumberText[localStorage.getItem("language")]);
        return;
    }

    valueWork = document.getElementById("workSettings").value;
    valueShort = document.getElementById("shortBreakSettings").value;
    valueLong = document.getElementById("longBreakSettings").value;
    valueSound = document.getElementById("volume-slider").value;
    document.getElementById("clock").innerHTML = `${valueWork}:00`;

    localStorage.setItem('workSettings', `${valueWork}`);
    localStorage.setItem('shortBreakSettings', `${valueShort}`);
    localStorage.setItem('longBreakSettings', `${valueLong}`);
    localStorage.setItem('volume-slider', `${valueSound}`);
}

function addTaskActivity(){
    activityTaskName = currTask.innerHTML;
    var taskActivity = `<activity-item taskName="${activityTaskName}" actualPomos="${actualPomos}" estimatedPomos="${estimatedPomos}">`;
    document.getElementById("completedTasks").insertAdjacentHTML('beforeend', taskActivity);
    actualPomos = 0;
    document.getElementById("totalCompletedTasks").innerHTML = document.getElementById("completedTasks").children.length;
    document.getElementById("worktimes").innerHTML = totalPomos;
    localStorage.setItem('totalPomos', `${totalPomos}`);
}

/**
 * Allows user to increase the estimated pomos on their current
 * task.
 */
function increasePomos() {
    currPomos++;
    document.getElementById('currentPomos').innerHTML = currPomos;
}

var muteButtonText = {
    en: "Mute Notifications",
    es: "Silenciar Notificaciones",
    ch: "靜音通知"
}

var unmuteButtonText = {
    en: "Unmute Notifications",
    es: "Deshacer Notificaciones",
    ch: "取消靜音通知"
}

var mutedText = {
    en: "Notifications are now muted.",
    es: "Las Notificaciones Ahora Están Silenciadas.",
    ch: "通知現已靜音."
}

var unmutedText = {
    en: "Notifications are now unmuted.",
    es: "Las Notificaciones Ahora Están Desactivadas.",
    ch: "通知現已取消靜音."
}

function mute(){
    if (document.getElementById("mute-notifications").textContent == muteButtonText[localStorage.getItem("language")]){
        alert(mutedText[localStorage.getItem("language")]);
        document.getElementById("mute-notifications").textContent = unmuteButtonText[localStorage.getItem("language")];
        permission = false;
    } else if (document.getElementById("mute-notifications").textContent == unmuteButtonText[localStorage.getItem("language")]){
        alert(unmutedText[localStorage.getItem("language")]);
        document.getElementById("mute-notifications").textContent = muteButtonText[localStorage.getItem("language")];
        permission = true;
    }
}

function notifications(){
    if (permission === true){
        if (seconds == 0 && minutes == 0){
            popupNotification();
            soundNotification();
        }
    }
}

module.exports = {timeStart, count};
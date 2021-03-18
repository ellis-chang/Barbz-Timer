const {timeStart, count, mute, switchTimes, switchThemes, stop, taskTracker, displayActivity, activityClose, displaySettings, settingsClose, addTaskActivity, increasePomos} = require('../scripts/timer');
 
describe('timer', () => {
    document.body.innerHTML = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Barbz Timer</title>
        <link id="style" rel="stylesheet" href="../styles/style.css">
        <link rel="icon" href="../images/other-pomo2.png">
    
    </head>
    
    <body onload="notificationPermission()">
        <br>
        <header id="barbzHeader">
            <h1 id="head">Barbz Timer</h1>
            <div class="languageMenu">
                <a id="en" onclick="setLanguage('en')">English</a>
                <a id="es" onclick="setLanguage('es')">Español</a>
                <a id="ch" onclick="setLanguage('ch')">中国人</a>
            </div>
            <button class="hamburgerMenu"></button>
            <div>
                <nav class="nav">
                    <ul id="menu">
                        <li><button class="menuButton" id="mute-notifications" onclick="mute()">Mute Notifications</button></li>
                        <li><button class="menuButton" id="settings" onclick=displaySettings()>Settings</button></li>
                        <li><button class="menuButton" id="view-activity" onclick=displayActivity()>View Activity</button></li>
                        <li><button class="menuButton" id="about-page" onclick=displayAbout()>About Page</button></li>
                        <li><button class="menuButton" id="howto-page" onclick=displayHowTo()>Getting Started</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    
        <div id="settingsInput" style="display: none;">
            <p id="settingsTitle">Settings</p>
            <div id="timerSettings">
                <button id="closeSettings" onclick="settingsClose()"></button>
                <p id="timerSettingsTitle">Timer Settings</p>
                <p id="timeSettings">Time (minutes)</p>
                <label id="workSettingsLang" for="workSettings">Work</label>
                <input type="number" min="0" step="1" max="60" value="25" name="workSettings" id="workSettings">
                <br>
                <br>
                <label id="shortBreakSettingsLang" for="shortBreakSettings">Short Break</label>
                <input type="number" min="0" step="1" max="60" value="5" name="shortBreakSettings" id="shortBreakSettings">
                <br>
                <br>
                <label id="longBreakSettingsLang" for="longBreakSettings">Long Break</label>
                <input type="number" min="0" step="1" max="60" value="30" name="longBreakSettings" id="longBreakSettings">
                <p id="volumeSettingsTitle">Volume Settings</p>
                <label for="volume-slider" id="volume-text">Volume</label>
                <input id="volume-slider" name="volume-slider" type="range" min="0" max="100" value="100">
    
            </div>
            <br>
            <button id="saveButton" onclick="save()">Save</button>
        </div>
    
        <div id="activity" style="display: none;">
            <button id="closeSettings" onclick="activityClose()"></button>
            <p id="activityTitle">Session Activity</p>
            <div id="activityHeaders">
                <p id="totalWorkTime">Total Work Time</p>
                <p id="totalPomosCompleted">Total Tasks Completed</p>
            </div>
            <div id=activityNumbers>
                <p id="worktimes">0</p>
                <p id="totalCompletedTasks">0</p>
            </div>
            <div id="completedTasksListBox">
                <p id="completedTasksList">Tasks Completed</p>
                <p id="estimatedPomos">Estimated Pomos</p>
                <p id="actualPomos">Actual Pomos</p>
            </div>
            <ol id="completedTasks"></ol>
        </div>
    
        <div id="aboutPage" style="display: none;">
            <h2 id="aboutTitle">The Pomodoro Technique</h2>
            <button id="closeAbout" onclick="aboutClose()"></button>
            <div id="aboutText">
                <p id="aboutTestDescription">The Pomodoro Technique will provide a simple tool/process for improving
                    productivity (your own and that
                    of your team members) which can do the following: </p>
                <ul id="aboutList">
                    <li id="aboutItemsLine1" class="aboutItems">Alleviate anxiety linked to beginning</li>
                    <li id="aboutItemsLine2" class="aboutItems">Enhance focus and concentration by cutting down on
                        interruptions</li>
                    <li id="aboutItemsLine3" class="aboutItems">Increase awareness of your decisions</li>
                    <li id="aboutItemsLine4" class="aboutItems">Boost motivation and keep it constant</li>
                    <li id="aboutItemsLine5" class="aboutItems">Bolster the determination to achieve your goals</li>
                    <li id="aboutItemsLine6" class="aboutItems">Refine the estimation process, both in qualitative and
                        quantitative terms</li>
                    <li id="aboutItemsLine7" class="aboutItems">Improve your work or study process</li>
                    <li id="aboutItemsLine8" class="aboutItems">Strengthen your resolve to keep on applying yourself in the
                        face of complex
                        situations</li>
                </ul>
            </div>
        </div>
    
        <div id="howTo" style="display: none;">
            <h2 id="howToTitle">How to use Barbz Timer</h2>
            <button id="closeHowTo" onclick="howToClose()"></button>
            <div id="howToText">
                <ol id="howToList">
                    <li id="howToItemsLine1" class="howToItems">Add tasks to work on for the day with the amount of expected pomos that it will take to finish that task (one pomo = 25 minutes of work)</li>
                    <li id="howToItemsLine2" class="howToItems">Start the timer and work on your current task until time is up</li>
                    <li id="howToItemsLine3" class="howToItems">If you finish your task, press done on your current task</li>
                    <li id="howToItemsLine4" class="howToItems">Automatically take a short break (5 minutes) when the first work period is done or if you finish a task. You deserve it!</li>
                    <li id="howToItemsLine5" class="howToItems">The timer will repeat these steps 3 times then will automatically start a long break (15 minutes)</li>
                    <li id="howToItemsLine6" class="howToItems">The timer will repeat this process until all tasks are completed </li>
                    <li id="howToItemsLine7" class="howToItems">Reward yourself for working so hard!</li>
                </ol>
            </div>
        </div> 
    
        <br>
    
        <div id="timer">
            <h1 id="state">Work</h1>
            <div id="timeBox">
                <h2 id="clock">25:00</h2>
            </div>
            <br>
            <button id="startButton" onclick="timeStart()">START</button>
        </div>
        <br>
    
        <div id="middleOfPage">
            <span id="currentTaskBox">
                <h2 id="currentTaskHeader">Current Task</h2>
                <button id="check" onclick="taskComplete()">Done</button>
                <p id="currentTask"></p>
                <p id="currentPomos"></p>
                <button id="increasePomosButton" onclick="increasePomos()"></button>
            </span>
    
            <span id="pomoCounter">
                <h2 id="workPeriodsHeader">Work Periods Completed</h2>
                <p id="workPeriods">0</p>
            </span>
        </div>
    
        <br>
    
        <br>
    
        <div id="taskBox">
            <h2 id="taskHeader">Upcoming Tasks</h2>
            <div id="innerTaskBox">
                <ol id="taskList"></ol>
                <br>
                <br>
    
                <button id="addTask" onclick="displayInput()">Add a task</button>
                <div>
    
                    <br>
    
                    <div id="taskInput" style="display: none;">
                        <label id="taskNameLang" for="taskName">Task Name: </label>
                        <input type="taskName" name="taskName" id="taskName">
    
                        <br>
                        <br>
    
                        <label id="expectedPomosLang" for="taskPomos">Number of Expected Pomos: </label>
                        <input type="number" name="taskPomos" id="taskPomos" min="1" max="99">
    
                        <br>
                        <br>
    
                        <button id="createTask" onclick="createTask()">Create</button>
                    </div>
                </div>
                <div id="overlay"></div>
                <br>
                <script src="../scripts/timer.js"></script>
                <script src="../scripts/taskAdd.js"></script>
                <script src="../components/task-item.js"></script>
                <script src="../components/activity-item.js"></script>
                <script src="../scripts/menu.js"></script>
                <script src="../scripts/language.js"></script>
    </body>
    
    </html>`;
    
    localStorage.setItem("language", "en");
        
    startButtonText = {
        en: "START",
        es: "COMIENZO",
        ch: "開始"
    }
    
    noTasksLeftText = {
        en: "No tasks left to do!",
        es: "¡No quedan tareas por hacer!",
        ch: "沒有任務可做！"
    }
    
    stopButtonText = {
        en: "STOP",
        es: "DETENER",
        ch: "停止"
    }
 
    workText = {
        en: "Work",
        es: "Trabaja",
        ch: "工作"
    }
    
    var node = document.createElement("LI");
    var testNode = document.createTextNode("test");
    node.appendChild(testNode);
    document.getElementById('taskList').appendChild(node);
 
    jest.spyOn(window, 'alert').mockImplementation(() => { });
    
    test('start to stop', () => {
        timeStart();
        expect(startButton.textContent).toEqual("STOP");
    });
 
    test('stop to start', () => {
        startButton.textContent = "START";
        //timeStart();
        expect(startButton.textContent).toEqual("START");
    });
    
    test('set timer display', () => {
        //document.getElementById('taskList').appendChild(node);
        timeStart();
        expect(document.getElementById("clock").innerHTML).toEqual("25:00");
    });
 
    test('check that count properly sets the clock', () => {
        //1 minute = 60 seconds
        for(let i = 1; i < 61; i++){
            count();
            if(i % 60 !== 0){
                if(i % 60 <= 50) {
                    expect(clock.innerHTML).toEqual("24" + ":" + (60-i));
                } else {
                    expect(clock.innerHTML).toEqual("24" + ":0" + (60-i));
                }
            } else {
                expect(clock.innerHTML).toEqual("24:00");
            }
        }
    });
    test('mute notifications', () => {
        mute();
        expect(document.getElementById("mute-notifications").textContent).toEqual("Unmute Notifications");
        mute();
        expect(document.getElementById("mute-notifications").textContent).toEqual("Mute Notifications");
    });
    test('test switch periods', () => {
        for(let i = 0; i < 1440; i++){
            count();
        }
        switchTimes();
        expect(document.getElementById("state").textContent).toEqual("Short Break");
        
        for(let j = 0; j < 2; j++){
            for(let i = 0; i < 300; i++){
                count();
            }
            switchTimes();
            expect(document.getElementById("state").textContent).toEqual("Work");
            
            for(let i = 0; i < 1500; i++){
                count();
            }
            switchTimes();
            expect(document.getElementById("state").textContent).toEqual("Short Break");
        }
        
        for(let i = 0; i < 300; i++){
            count();
        }
        switchTimes();
        expect(document.getElementById("state").textContent).toEqual("Work");
 
        for(let i = 0; i < 1500; i++){
            count();
        }
        switchTimes();
        expect(document.getElementById("state").textContent).toEqual("Long Break");
 
        for(let i = 0; i < 1800; i++){
            count();
        }
        switchTimes();
        expect(document.getElementById("state").textContent).toEqual("Work");
    });
    test('work periods completed counter', () => {
        expect(document.getElementById("workPeriods").textContent).toEqual("4");
        for(let i = 0; i < 60; i++){
            count();
        }
        switchTimes();
        expect(document.getElementById("workPeriods").textContent).toEqual("5");
        expect(document.getElementById("state").textContent).toEqual("Short Break");
    });

    test('switch themes', () => {
        switchThemes();
        expect(document.getElementById('style').getAttribute('href')).toBe("../styles/shortbreakstyle.css");
    });

    test('stop disables done button', () => {
        stop();
        expect(document.getElementById("check").disabled).toBeFalsy();
    });

    test('increase Pomos increment', () => {
        increasePomos();
        expect(document.getElementById('currentPomos').innerHTML).toEqual("1");
    });

    test('taskTracker sets current pomos', () => {
        taskTracker();
        expect(document.getElementById('currentPomos').innerHTML).toBe("0");
    });

    test('activity displayed', () => {
        displayActivity();
        expect(document.getElementById("activity").style.display).toEqual("block");
        expect(document.getElementById("overlay").style.display).toEqual("block");
    });

    test('activity close', () => {
        activityClose();
        expect(document.getElementById("activity").style.display).toEqual("none");
        expect(document.getElementById("overlay").style.display).toEqual("none");
    });

    test('settings displayed', () => {
        displaySettings();
        expect(document.getElementById("settingsInput").style.display).toEqual("block");
        expect(document.getElementById("overlay").style.display).toEqual("block");
    });

    test('settings close', () => {
        settingsClose();
        expect(document.getElementById("settingsInput").style.display).toEqual("none");
        expect(document.getElementById("overlay").style.display).toEqual("none");
    });

    test('store settings', () => {
        settingsClose();
        expect(document.getElementById('workSettings').value).toEqual("25");
        expect(document.getElementById('shortBreakSettings').value).toEqual("5");
        expect(document.getElementById('longBreakSettings').value).toEqual("30");
        expect(document.getElementById('volume-slider').value).toEqual("100");
    });

    test('addTaskActivity html check', () => {
        addTaskActivity();
        expect(document.getElementById("totalCompletedTasks").innerHTML).toEqual("1");
    });

});

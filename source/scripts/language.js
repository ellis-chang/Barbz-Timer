if (!localStorage.getItem('language')) {

    localStorage.setItem('language', 'en');

}
else {
    setLanguage(localStorage.getItem('language'));
}

/**
 * Sets the language of the page.
 * @param {String} language This takes in a string that indicates the user's selected language
 */
function setLanguage(language) {
    //change languages depending on what user clicks
    if (language === 'en') {
        document.getElementById('head').textContent = "Barbz Timer";
        document.getElementById('mute-notifications').textContent = "Mute Notification";
        document.getElementById('settings').textContent = "Settings";
        document.getElementById('view-activity').textContent = "View Activity";
        document.getElementById('about-page').textContent = "About Page";
        document.getElementById("howto-page").textContent = "Getting Started";

        document.getElementById('settingsTitle').textContent = "Settings";
        document.getElementById('timerSettingsTitle').textContent = "Timer Settings";
        document.getElementById('timeSettings').textContent = "Time (minutes)";
        document.getElementById('workSettingsLang').textContent = "Work";
        document.getElementById('shortBreakSettingsLang').textContent = "Short Break";
        document.getElementById('longBreakSettingsLang').textContent = "Long Break";
        document.getElementById('volumeSettingsTitle').textContent = "Volume Settings";
        document.getElementById('volume-text').textContent = "Volume";
        document.getElementById('saveButton').textContent = "Save";

        document.getElementById('activityTitle').textContent = "Session Activity";
        document.getElementById('totalWorkTime').textContent = "Total Work Time";
        document.getElementById('totalPomosCompleted').textContent = "Total Tasks Completed";

        document.getElementById('completedTasksList').textContent = "Tasks Completed";
        document.getElementById('estimatedPomos').textContent = "Estimated Pomos";
        document.getElementById('actualPomos').textContent = "Actual Pomos";

        document.getElementById('aboutTitle').textContent = "The Pomodoro Technique";
        document.getElementById('aboutTestDescription').textContent = "The Pomodoro Technique will provide a simple tool/process for improving productivity (your own and that of your team members) which can do the following:";
        document.getElementById('aboutItemsLine1').textContent = "Alleviate anxiety linked to beginning";
        document.getElementById('aboutItemsLine2').textContent = "Enhance focus and concentration by cutting down on interruptions";
        document.getElementById('aboutItemsLine3').textContent = "Increase awareness of your decisions";
        document.getElementById('aboutItemsLine4').textContent = "Boost motivation and keep it constant";
        document.getElementById('aboutItemsLine5').textContent = "Bolster the determination to achieve your goals";
        document.getElementById('aboutItemsLine6').textContent = "Refine the estimation process, both in qualitative and quantitative terms";
        document.getElementById('aboutItemsLine7').textContent = "Improve your work or study process";
        document.getElementById('aboutItemsLine8').textContent = "Strengthen your resolve to keep on applying yourself in the face of complex situations";

        document.getElementById('howToTitle').textContent = "How to use Barbz Timer";
        document.getElementById('howToItemsLine1').textContent = "Add tasks to work on for the day in the \"Upcoming Tasks.\"";
        document.getElementById('howToItemsLine2').textContent = "Set the estimated that it will take to finish for each task (one defaulted pomo = 25 minutes of work).";
        document.getElementById('howToItemsLine3').textContent = "You are able to change the priority in task lists using the arrow buttons.";
        document.getElementById('howToItemsLine4').textContent = "Current task will be the top priority task.";
        document.getElementById('howToItemsLine5').textContent = "Start the timer and work on your current task until time is up.";
        document.getElementById('howToItemsLine6').textContent = "Finished pomos will be keep track and record in \"Work Periods Completed.\"";
        document.getElementById('howToItemsLine7').textContent = "If you finish your task, press \"Done\" button on your \"Current Task.\"";
        document.getElementById('howToItemsLine8').textContent = "If you need more time to finish your task, press \"+\" to add more pomos in \"Estimated Pomos.\"";
        document.getElementById('howToItemsLine9').textContent = "Automatically take a short break (5 minutes) when the first work period is done or if you finish a task. You deserve it!";
        document.getElementById('howToItemsLine10').textContent = "The timer will repeat these steps 3 times then will automatically start a long break (15 minutes).";
        document.getElementById('howToItemsLine11').textContent = "The timer will repeat this process until all tasks are completed.";
        document.getElementById('howToItemsLine12').textContent = "If you want to stop to work on the task, click \"Stop\". The whole work period will be reset.";
        document.getElementById('howToItemsLine13').textContent = "Reward yourself for working so hard!";


        if (document.getElementById('state').textContent === longStateText[localStorage.getItem("language")]) {
            document.getElementById('state').textContent = "Long Break";
        } else if (document.getElementById('state').textContent === shortStateText[localStorage.getItem("language")]) {
            document.getElementById('state').textContent = "Short Break";
        }
        else {
            document.getElementById('state').textContent = "Work";
        }

        if (document.getElementById('startButton').textContent === startButtonText[localStorage.getItem("language")]) {
            document.getElementById('startButton').textContent = "START";
        }
        else {
            document.getElementById('startButton').textContent = "STOP";
        }
        document.getElementById('currentTaskHeader').textContent = "Current Task";
        document.getElementById('check').textContent = "Done";
        document.getElementById('workPeriodsHeader').textContent = "Work Periods Completed";
        document.getElementById('taskHeader').textContent = "Upcoming Tasks";
        document.getElementById('addTask').textContent = "Add a task";
        document.getElementById('taskNameLang').textContent = "Task Name:";
        document.getElementById('expectedPomosLang').textContent = "Number of Expected Pomos:"
        document.getElementById('createTask').textContent = "Create";

        document.getElementById('en').style.textDecoration = "underline";
        document.getElementById('es').style.textDecoration = "none";
        document.getElementById('ch').style.textDecoration = "none";

        localStorage.setItem('language', 'en');

    }
    else if (language === 'es') {
        document.getElementById('head').textContent = "Barbz Reloj";
        document.getElementById('startButton').style.width = "14vw";
        document.getElementById('workPeriodsHeader').style.fontSize = "2.5vh";

        document.getElementById('mute-notifications').textContent = "Silenciar Notificaciones";
        document.getElementById('settings').textContent = "Ajustes";
        document.getElementById('view-activity').textContent = "Ver actividad";
        document.getElementById('about-page').textContent = "Acerca de Page";
        document.getElementById("howto-page").textContent = "Empezando";
    

        document.getElementById('settingsTitle').textContent = "Ajustes";
        document.getElementById('timerSettingsTitle').textContent = "Configuración del Temporizador";
        document.getElementById('timeSettings').textContent = "Hora (minutos)";
        document.getElementById('workSettingsLang').textContent = "Trabaja";
        document.getElementById('shortBreakSettingsLang').textContent = "Pequeño Descanso";
        document.getElementById('longBreakSettingsLang').textContent = "Largo Descanso";

        document.getElementById('volumeSettingsTitle').textContent = "Configuraciones de Volumen";
        document.getElementById('volume-text').textContent = "Volumen";
        document.getElementById('saveButton').textContent = "Salvar";


        document.getElementById('activityTitle').textContent = "Actividad de la sesión";
        document.getElementById('totalWorkTime').textContent = "Tiempo total de trabajo";
        document.getElementById('totalPomosCompleted').textContent = "Total Tareas Completado";
        document.getElementById('completedTasksList').textContent = "Tareas Completadas";
        document.getElementById('estimatedPomos').textContent = "Pomos Estimado";
        document.getElementById('actualPomos').textContent = "Pomos Actuales";

        document.getElementById('aboutTitle').textContent = "La Técnica Pomodoro";
        document.getElementById('aboutTestDescription').textContent = "La Técnica Pomodoro proporcionará una herramienta / proceso simple para mejorar la productividad (la suya y la de los miembros de su equipo) que puede hacer lo siguiente";
        document.getElementById('aboutItemsLine1').textContent = "Aliviar la ansiedad vinculada al comienzo";
        document.getElementById('aboutItemsLine2').textContent = "Mejore el enfoque y la concentración reduciendo las interrupciones";
        document.getElementById('aboutItemsLine3').textContent = "Aumente el conocimiento de sus decisiones";
        document.getElementById('aboutItemsLine4').textContent = "Aumenta la motivación y mantenla constante";
        document.getElementById('aboutItemsLine5').textContent = "Refuerce la determinación para lograr sus objetivos";
        document.getElementById('aboutItemsLine6').textContent = "Perfeccionar el proceso de estimación, tanto en términos cualitativos como cuantitativos";
        document.getElementById('aboutItemsLine7').textContent = "Mejora tu proceso de trabajo o estudio";
        document.getElementById('aboutItemsLine8').textContent = "Fortalece tu determinación de seguir aplicándote frente a situaciones complejas";
        
        document.getElementById('howToTitle').textContent = "Cómo usar Barbz Timer";
        document.getElementById('howToItemsLine1').textContent = "Agregue tareas en las que trabajar durante el día en \"Próximas tareas\".";
        document.getElementById('howToItemsLine2').textContent = "Establezca el estimado que tomará terminar para cada tarea (un pomo predeterminado = 25 minutos de trabajo).";
        document.getElementById('howToItemsLine3').textContent = "Puede cambiar la prioridad en las listas de tareas utilizando los botones de flecha.";
        document.getElementById('howToItemsLine4').textContent = "La tarea actual será la tarea de máxima prioridad.";
        document.getElementById('howToItemsLine5').textContent = "Inicie el temporizador y trabaje en su tarea actual hasta que se acabe el tiempo.";
        document.getElementById('howToItemsLine6').textContent = "Los pomos terminados se realizarán un seguimiento y se registrarán en \"Períodos de trabajo completados\".";
        document.getElementById('howToItemsLine7').textContent = "Si finaliza su tarea, presione el botón \"Listo\" en su \"Tarea actual\".";
        document.getElementById('howToItemsLine8').textContent = "Si necesita más tiempo para terminar su tarea, presione \"+\" para agregar más pomos en \"Pomos estimados\".";
        document.getElementById('howToItemsLine9').textContent = "Tómese automáticamente un breve descanso (5 minutos) cuando termine el primer período de trabajo o si termina una tarea. ¡Te lo mereces!";
        document.getElementById('howToItemsLine10').textContent = "El temporizador repetirá estos pasos 3 veces y luego iniciará automáticamente una pausa larga (15 minutos).";
        document.getElementById('howToItemsLine11').textContent = "El temporizador repetirá este proceso hasta que se completen todas las tareas.";
        document.getElementById('howToItemsLine12').textContent = "Si desea dejar de trabajar en la tarea, haga clic en \"Detener\". Se reiniciará todo el período de trabajo.";
        document.getElementById('howToItemsLine13').textContent = "¡Recompénsese por trabajar tan duro!";

        if (document.getElementById('state').textContent === longStateText[localStorage.getItem("language")]) {
            document.getElementById('state').textContent = "Largo Descanso";
        } else if (document.getElementById('state').textContent === shortStateText[localStorage.getItem("language")]) {
            document.getElementById('state').textContent = "Pequeño Descanso";
        }
        else {
            document.getElementById('state').textContent = "Trabaja";
        }

        if (document.getElementById('startButton').textContent === stopButtonText[localStorage.getItem("language")]) {
            document.getElementById('startButton').textContent = "DETENER";
        }
        else {
            document.getElementById('startButton').textContent = "COMIENZO";
        }
        document.getElementById('currentTaskHeader').textContent = "Tarea Actual";
        document.getElementById('check').textContent = "Hecho";
        document.getElementById('workPeriodsHeader').textContent = "Períodos de Trabajo Completados";
        document.getElementById('taskHeader').textContent = "Próximas Tareas";
        document.getElementById('addTask').textContent = "Agregar una Tarea";
        document.getElementById('taskNameLang').textContent = "Nombre de la Tarea:";
        document.getElementById('expectedPomosLang').textContent = "Número de Pomos Esperados:"
        document.getElementById('createTask').textContent = "Crear";

        document.getElementById('es').style.textDecoration = "underline";
        document.getElementById('en').style.textDecoration = "none";
        document.getElementById('ch').style.textDecoration = "none";

        localStorage.setItem('language', 'es');

    }
    else {
        document.getElementById('head').textContent = "Barbz 时钟";

        document.getElementById('mute-notifications').textContent = "靜音通知";
        document.getElementById('settings').textContent = "設定值";
        document.getElementById('view-activity').textContent = "查看活動";
        document.getElementById('about-page').textContent = "關於頁面";
        document.getElementById("howto-page").textContent = "入門";

        document.getElementById('settingsTitle').textContent = "設定值";
        document.getElementById('timerSettingsTitle').textContent = "計時器設定";
        document.getElementById('timeSettings').textContent = "時間 (分鐘)";
        document.getElementById('workSettingsLang').textContent = "工作";
        document.getElementById('shortBreakSettingsLang').textContent = "短暫休息";
        document.getElementById('longBreakSettingsLang').textContent = "長時間休息";

        document.getElementById('volumeSettingsTitle').textContent = "音量设置";
        document.getElementById('volume-text').textContent = "体积";
        document.getElementById('saveButton').textContent = "救";

        document.getElementById('activityTitle').textContent = "会议活动";
        document.getElementById('totalWorkTime').textContent = "總工作時間";
        document.getElementById('totalPomosCompleted').textContent = "完成的任务总数";

        document.getElementById('completedTasksList').textContent = "任務完成";
        document.getElementById('estimatedPomos').textContent = "估計的Pomos";
        document.getElementById('actualPomos').textContent = "實際的Pomos";

        document.getElementById('aboutTitle').textContent = "番茄技術";
        document.getElementById('aboutTestDescription').textContent = "番茄技術將提供一個簡單的工具/流程來提高生產力（您自己和您的團隊成員的生產力），可以執行以下操作：";
        document.getElementById('aboutItemsLine1').textContent = "減輕與開始有關的焦慮";
        document.getElementById('aboutItemsLine2').textContent = "通過減少打擾來增強注意力和專注力";
        document.getElementById('aboutItemsLine3').textContent = "增強您的決策意識";
        document.getElementById('aboutItemsLine4').textContent = "增強動力並保持恆久不變";
        document.getElementById('aboutItemsLine5').textContent = "堅定實現目標的決心";
        document.getElementById('aboutItemsLine6').textContent = "在定性和定量方面完善估算過程";
        document.getElementById('aboutItemsLine7').textContent = "改善您的工作或學習過程";
        document.getElementById('aboutItemsLine8').textContent = "增強您的決心，以面對複雜的情況繼續努力";

        document.getElementById('howToTitle').textContent = "獎勵自己這麼努力！";
        document.getElementById('howToItemsLine1').textContent = "在接下來的任務中添加當天要處理的任務。";
        document.getElementById('howToItemsLine2').textContent = "設置完成每個任務所需的估計時間（一個默認的pomo = 25分鐘的工作時間）。";
        document.getElementById('howToItemsLine3').textContent = "您可以使用箭頭按鈕更改任務列表中的優先級";
        document.getElementById('howToItemsLine4').textContent = "當前任務將是最優先的任務。";
        document.getElementById('howToItemsLine5').textContent = "啟動計時器並處理您當前的任務，直到時間到了。";
        document.getElementById('howToItemsLine6').textContent = "完成的pomos將在工作期間跟踪和記錄。";
        document.getElementById('howToItemsLine7').textContent = "如果完成任務，請在當前任務上按完成按鈕";
        document.getElementById('howToItemsLine8').textContent = "如果您需要更多時間來完成任務，請按加號以在估計的pomos中添加更多pomos。";
        document.getElementById('howToItemsLine9').textContent = "在完成第一個工作時間或完成任務後，系統會自動休息片刻（5分鐘）。你應得的！";
        document.getElementById('howToItemsLine10').textContent = "計時器將重複這些步驟3次，然後將自動開始長時間休息（15分鐘）。";
        document.getElementById('howToItemsLine11').textContent = "計時器將重複此過程，直到完成所有任務。";
        document.getElementById('howToItemsLine12').textContent = "如果要停止執行該任務，請單擊“停止”。整個工作週期將被重置。";
        document.getElementById('howToItemsLine13').textContent = "獎勵自己這麼努力！";

        if (document.getElementById('state').textContent === longStateText[localStorage.getItem("language")]) {
            document.getElementById('state').textContent = "長時間休息";
        } else if (document.getElementById('state').textContent === shortStateText[localStorage.getItem("language")]) {
            document.getElementById('state').textContent = "短暫休息";
        }
        else {
            document.getElementById('state').textContent = "工作";
        }

        if (document.getElementById('startButton').textContent === stopButtonText[localStorage.getItem("language")]) {
            document.getElementById('startButton').textContent = "停止";
        }
        else {
            document.getElementById('startButton').textContent = "開始";
        }
        document.getElementById('currentTaskHeader').textContent = "當前任務";
        document.getElementById('check').textContent = "完畢";
        document.getElementById('workPeriodsHeader').textContent = "工作期完成";
        document.getElementById('taskHeader').textContent = "即將完成的任務";
        document.getElementById('addTask').textContent = "添加任務";
        document.getElementById('taskNameLang').textContent = "任務名稱：";
        document.getElementById('expectedPomosLang').textContent = "預期Pomos數量："
        document.getElementById('createTask').textContent = "創建";

        document.getElementById('ch').style.textDecoration = "underline";
        document.getElementById('es').style.textDecoration = "none";
        document.getElementById('en').style.textDecoration = "none";

        localStorage.setItem('language', 'ch');


    }
}
if (typeof exports !== 'undefined') {
  module.exports = { setLanguage };
}

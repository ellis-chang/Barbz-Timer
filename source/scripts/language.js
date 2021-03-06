/*========================================================================
 * Local Storage Check
 *========================================================================*/

if (!localStorage.getItem('language')) {
  localStorage.setItem('language', 'en');
} else {
  setLanguage(localStorage.getItem('language'));
}

/**
 * Sets the language of the page.
 * @param {String} language This takes in a string that indicates the user's selected language
 */
function setLanguage(language) {
  /*========================================================================
   * Set Language as English
   *========================================================================*/

  if (language === 'en') {
    document.getElementById('head').textContent = 'Barbz Timer';
    document.getElementById('mute-notifications').textContent =
      'Mute Notifications';
    document.getElementById('settings').textContent = 'Settings';
    document.getElementById('view-activity').textContent = 'View Activity';
    document.getElementById('about-page').textContent = 'About Page';
    document.getElementById('howto-page').textContent = 'Getting Started';

    document.getElementById('settingsTitle').textContent = 'Settings';
    document.getElementById('timerSettingsTitle').textContent =
      'Timer Settings';
    document.getElementById('timeSettings').textContent = 'Time (minutes)';
    document.getElementById('workSettingsLang').textContent = 'Work';
    document.getElementById('shortBreakSettingsLang').textContent =
      'Short Break';
    document.getElementById('longBreakSettingsLang').textContent = 'Long Break';
    document.getElementById('volumeSettingsTitle').textContent =
      'Volume Settings';
    document.getElementById('volume-text').textContent = 'Volume';
    document.getElementById('saveButton').textContent = 'Save';

    document.getElementById('activityTitle').textContent = 'Session Activity';
    document.getElementById('totalWorkTime').textContent = 'Total Work Time';
    document.getElementById('totalPomosCompleted').textContent =
      'Total Tasks Completed';

    document.getElementById('completedTasksList').textContent =
      'Tasks Completed';
    document.getElementById('estimatedPomos').textContent = 'Estimated Pomos';
    document.getElementById('actualPomos').textContent = 'Actual Pomos';

    document.getElementById('aboutTitle').textContent =
      'The Pomodoro Technique';
    document.getElementById('aboutTestDescription').textContent =
      'The Pomodoro Technique will provide a simple tool/process for improving productivity (your own and that of your team members) which can do the following:';
    document.getElementById('aboutItemsLine1').textContent =
      'Alleviate anxiety linked to beginning';
    document.getElementById('aboutItemsLine2').textContent =
      'Enhance focus and concentration by cutting down on interruptions';
    document.getElementById('aboutItemsLine3').textContent =
      'Increase awareness of your decisions';
    document.getElementById('aboutItemsLine4').textContent =
      'Boost motivation and keep it constant';
    document.getElementById('aboutItemsLine5').textContent =
      'Bolster the determination to achieve your goals';
    document.getElementById('aboutItemsLine6').textContent =
      'Refine the estimation process, both in qualitative and quantitative terms';
    document.getElementById('aboutItemsLine7').textContent =
      'Improve your work or study process';
    document.getElementById('aboutItemsLine8').textContent =
      'Strengthen your resolve to keep on applying yourself in the face of complex situations';

    document.getElementById('howToTitle').textContent =
      'How to use Barbz Timer';
    document.getElementById('howToItemsLine1').textContent =
      'Add tasks to work on for the day in the "Upcoming Tasks."';
    document.getElementById('howToItemsLine2').textContent =
      'Set the estimated that it will take to finish for each task (one defaulted pomo = 25 minutes of work).';
    document.getElementById('howToItemsLine3').textContent =
      'You are able to change the priority in task lists using the arrow buttons.';
    document.getElementById('howToItemsLine4').textContent =
      'Current task will be the top priority task.';
    document.getElementById('howToItemsLine5').textContent =
      'Start the timer and work on your current task until time is up.';
    document.getElementById('howToItemsLine6').textContent =
      'Finished pomos will be keep track and record in "Work Periods Completed."';
    document.getElementById('howToItemsLine7').textContent =
      'If you finish your task, press "Done" button on your "Current Task."';
    document.getElementById('howToItemsLine8').textContent =
      'If you need more time to finish your task, press "+" to add more pomos in "Estimated Pomos."';
    document.getElementById('howToItemsLine9').textContent =
      'Automatically take a short break (5 minutes) when the first work period is done or if you finish a task. You deserve it!';
    document.getElementById('howToItemsLine10').textContent =
      'The timer will repeat these steps 3 times then will automatically start a long break (15 minutes).';
    document.getElementById('howToItemsLine11').textContent =
      'The timer will repeat this process until all tasks are completed.';
    document.getElementById('howToItemsLine12').textContent =
      'If you want to stop to work on the task, click "Stop". The whole work period will be reset.';
    document.getElementById('howToItemsLine13').textContent =
      'Reward yourself for working so hard!';

    if (
      document.getElementById('state').textContent ===
      longStateText[localStorage.getItem('language')]
    ) {
      document.getElementById('state').textContent = 'Long Break';
    } else if (
      document.getElementById('state').textContent ===
      shortStateText[localStorage.getItem('language')]
    ) {
      document.getElementById('state').textContent = 'Short Break';
    } else {
      document.getElementById('state').textContent = 'Work';
    }

    if (
      document.getElementById('startButton').textContent ===
      startButtonText[localStorage.getItem('language')]
    ) {
      document.getElementById('startButton').textContent = 'START';
    } else {
      document.getElementById('startButton').textContent = 'STOP';
    }
    document.getElementById('currentTaskHeader').textContent = 'Current Task';
    document.getElementById('check').textContent = 'Done';
    document.getElementById('workPeriodsHeader').textContent =
      'Work Periods Completed';
    document.getElementById('taskHeader').textContent = 'Upcoming Tasks';
    document.getElementById('addTask').textContent = 'Add a task';
    document.getElementById('taskNameLang').textContent = 'Task Name:';
    document.getElementById('expectedPomosLang').textContent =
      'Number of Expected Pomos:';
    document.getElementById('createTask').textContent = 'Create';

    document.getElementById('en').style.textDecoration = 'underline';
    document.getElementById('es').style.textDecoration = 'none';
    document.getElementById('ch').style.textDecoration = 'none';

    localStorage.setItem('language', 'en');
  } else if (language === 'es') {
    /*========================================================================
     * Set Language as Spanish
     *========================================================================*/
    document.getElementById('head').textContent = 'Barbz Reloj';
    document.getElementById('startButton').style.width = '14vw';
    document.getElementById('workPeriodsHeader').style.fontSize = '2.5vh';

    document.getElementById('mute-notifications').textContent =
      'Silenciar Notificaciones';
    document.getElementById('settings').textContent = 'Ajustes';
    document.getElementById('view-activity').textContent = 'Ver actividad';
    document.getElementById('about-page').textContent = 'Acerca de Page';
    document.getElementById('howto-page').textContent = 'Empezando';

    document.getElementById('settingsTitle').textContent = 'Ajustes';
    document.getElementById('timerSettingsTitle').textContent =
      'Configuraci??n del Temporizador';
    document.getElementById('timeSettings').textContent = 'Hora (minutos)';
    document.getElementById('workSettingsLang').textContent = 'Trabaja';
    document.getElementById('shortBreakSettingsLang').textContent =
      'Peque??o Descanso';
    document.getElementById('longBreakSettingsLang').textContent =
      'Largo Descanso';

    document.getElementById('volumeSettingsTitle').textContent =
      'Configuraciones de Volumen';
    document.getElementById('volume-text').textContent = 'Volumen';
    document.getElementById('saveButton').textContent = 'Salvar';

    document.getElementById('activityTitle').textContent =
      'Actividad de la sesi??n';
    document.getElementById('totalWorkTime').textContent =
      'Tiempo total de trabajo';
    document.getElementById('totalPomosCompleted').textContent =
      'Total Tareas Completado';
    document.getElementById('completedTasksList').textContent =
      'Tareas Completadas';
    document.getElementById('estimatedPomos').textContent = 'Pomos Estimado';
    document.getElementById('actualPomos').textContent = 'Pomos Actuales';

    document.getElementById('aboutTitle').textContent = 'La T??cnica Pomodoro';
    document.getElementById('aboutTestDescription').textContent =
      'La T??cnica Pomodoro proporcionar?? una herramienta / proceso simple para mejorar la productividad (la suya y la de los miembros de su equipo) que puede hacer lo siguiente';
    document.getElementById('aboutItemsLine1').textContent =
      'Aliviar la ansiedad vinculada al comienzo';
    document.getElementById('aboutItemsLine2').textContent =
      'Mejore el enfoque y la concentraci??n reduciendo las interrupciones';
    document.getElementById('aboutItemsLine3').textContent =
      'Aumente el conocimiento de sus decisiones';
    document.getElementById('aboutItemsLine4').textContent =
      'Aumenta la motivaci??n y mantenla constante';
    document.getElementById('aboutItemsLine5').textContent =
      'Refuerce la determinaci??n para lograr sus objetivos';
    document.getElementById('aboutItemsLine6').textContent =
      'Perfeccionar el proceso de estimaci??n, tanto en t??rminos cualitativos como cuantitativos';
    document.getElementById('aboutItemsLine7').textContent =
      'Mejora tu proceso de trabajo o estudio';
    document.getElementById('aboutItemsLine8').textContent =
      'Fortalece tu determinaci??n de seguir aplic??ndote frente a situaciones complejas';

    document.getElementById('howToTitle').textContent = 'C??mo usar Barbz Timer';
    document.getElementById('howToItemsLine1').textContent =
      'Agregue tareas en las que trabajar durante el d??a en "Pr??ximas tareas".';
    document.getElementById('howToItemsLine2').textContent =
      'Establezca el estimado que tomar?? terminar para cada tarea (un pomo predeterminado = 25 minutos de trabajo).';
    document.getElementById('howToItemsLine3').textContent =
      'Puede cambiar la prioridad en las listas de tareas utilizando los botones de flecha.';
    document.getElementById('howToItemsLine4').textContent =
      'La tarea actual ser?? la tarea de m??xima prioridad.';
    document.getElementById('howToItemsLine5').textContent =
      'Inicie el temporizador y trabaje en su tarea actual hasta que se acabe el tiempo.';
    document.getElementById('howToItemsLine6').textContent =
      'Los pomos terminados se realizar??n un seguimiento y se registrar??n en "Per??odos de trabajo completados".';
    document.getElementById('howToItemsLine7').textContent =
      'Si finaliza su tarea, presione el bot??n "Listo" en su "Tarea actual".';
    document.getElementById('howToItemsLine8').textContent =
      'Si necesita m??s tiempo para terminar su tarea, presione "+" para agregar m??s pomos en "Pomos estimados".';
    document.getElementById('howToItemsLine9').textContent =
      'T??mese autom??ticamente un breve descanso (5 minutos) cuando termine el primer per??odo de trabajo o si termina una tarea. ??Te lo mereces!';
    document.getElementById('howToItemsLine10').textContent =
      'El temporizador repetir?? estos pasos 3 veces y luego iniciar?? autom??ticamente una pausa larga (15 minutos).';
    document.getElementById('howToItemsLine11').textContent =
      'El temporizador repetir?? este proceso hasta que se completen todas las tareas.';
    document.getElementById('howToItemsLine12').textContent =
      'Si desea dejar de trabajar en la tarea, haga clic en "Detener". Se reiniciar?? todo el per??odo de trabajo.';
    document.getElementById('howToItemsLine13').textContent =
      '??Recomp??nsese por trabajar tan duro!';

    if (
      document.getElementById('state').textContent ===
      longStateText[localStorage.getItem('language')]
    ) {
      document.getElementById('state').textContent = 'Largo Descanso';
    } else if (
      document.getElementById('state').textContent ===
      shortStateText[localStorage.getItem('language')]
    ) {
      document.getElementById('state').textContent = 'Peque??o Descanso';
    } else {
      document.getElementById('state').textContent = 'Trabaja';
    }

    if (
      document.getElementById('startButton').textContent ===
      stopButtonText[localStorage.getItem('language')]
    ) {
      document.getElementById('startButton').textContent = 'DETENER';
    } else {
      document.getElementById('startButton').textContent = 'COMIENZO';
    }
    document.getElementById('currentTaskHeader').textContent = 'Tarea Actual';
    document.getElementById('check').textContent = 'Hecho';
    document.getElementById('workPeriodsHeader').textContent =
      'Per??odos de Trabajo Completados';
    document.getElementById('taskHeader').textContent = 'Pr??ximas Tareas';
    document.getElementById('addTask').textContent = 'Agregar una Tarea';
    document.getElementById('taskNameLang').textContent = 'Nombre de la Tarea:';
    document.getElementById('expectedPomosLang').textContent =
      'N??mero de Pomos Esperados:';
    document.getElementById('createTask').textContent = 'Crear';

    document.getElementById('es').style.textDecoration = 'underline';
    document.getElementById('en').style.textDecoration = 'none';
    document.getElementById('ch').style.textDecoration = 'none';

    localStorage.setItem('language', 'es');
  } else {
    /*========================================================================
     * Set Language as Chinese Traditional
     *========================================================================*/
    document.getElementById('head').textContent = 'Barbz ??????';

    document.getElementById('mute-notifications').textContent = '????????????';
    document.getElementById('settings').textContent = '?????????';
    document.getElementById('view-activity').textContent = '????????????';
    document.getElementById('about-page').textContent = '????????????';
    document.getElementById('howto-page').textContent = '??????';

    document.getElementById('settingsTitle').textContent = '?????????';
    document.getElementById('timerSettingsTitle').textContent = '???????????????';
    document.getElementById('timeSettings').textContent = '?????? (??????)';
    document.getElementById('workSettingsLang').textContent = '??????';
    document.getElementById('shortBreakSettingsLang').textContent = '????????????';
    document.getElementById('longBreakSettingsLang').textContent = '???????????????';

    document.getElementById('volumeSettingsTitle').textContent = '????????????';
    document.getElementById('volume-text').textContent = '??????';
    document.getElementById('saveButton').textContent = '???';

    document.getElementById('activityTitle').textContent = '????????????';
    document.getElementById('totalWorkTime').textContent = '???????????????';
    document.getElementById('totalPomosCompleted').textContent =
      '?????????????????????';

    document.getElementById('completedTasksList').textContent = '????????????';
    document.getElementById('estimatedPomos').textContent = '?????????Pomos';
    document.getElementById('actualPomos').textContent = '?????????Pomos';

    document.getElementById('aboutTitle').textContent = '????????????';
    document.getElementById('aboutTestDescription').textContent =
      '??????????????????????????????????????????/??????????????????????????????????????????????????????????????????????????????????????????????????????';
    document.getElementById('aboutItemsLine1').textContent =
      '??????????????????????????????';
    document.getElementById('aboutItemsLine2').textContent =
      '????????????????????????????????????????????????';
    document.getElementById('aboutItemsLine3').textContent = '????????????????????????';
    document.getElementById('aboutItemsLine4').textContent =
      '?????????????????????????????????';
    document.getElementById('aboutItemsLine5').textContent =
      '???????????????????????????';
    document.getElementById('aboutItemsLine6').textContent =
      '??????????????????????????????????????????';
    document.getElementById('aboutItemsLine7').textContent =
      '?????????????????????????????????';
    document.getElementById('aboutItemsLine8').textContent =
      '?????????????????????????????????????????????????????????';

    document.getElementById('howToTitle').textContent = '???????????????????????????';
    document.getElementById('howToItemsLine1').textContent =
      '?????????????????????????????????????????????????????????';
    document.getElementById('howToItemsLine2').textContent =
      '???????????????????????????????????????????????????????????????pomo = 25???????????????????????????';
    document.getElementById('howToItemsLine3').textContent =
      '????????????????????????????????????????????????????????????';
    document.getElementById('howToItemsLine4').textContent =
      '???????????????????????????????????????';
    document.getElementById('howToItemsLine5').textContent =
      '??????????????????????????????????????????????????????????????????';
    document.getElementById('howToItemsLine6').textContent =
      '?????????pomos????????????????????????????????????';
    document.getElementById('howToItemsLine7').textContent =
      '?????????????????????????????????????????????????????????';
    document.getElementById('howToItemsLine8').textContent =
      '????????????????????????????????????????????????????????????????????????pomos???????????????pomos???';
    document.getElementById('howToItemsLine9').textContent =
      '?????????????????????????????????????????????????????????????????????????????????5???????????????????????????';
    document.getElementById('howToItemsLine10').textContent =
      '??????????????????????????????3?????????????????????????????????????????????15????????????';
    document.getElementById('howToItemsLine11').textContent =
      '?????????????????????????????????????????????????????????';
    document.getElementById('howToItemsLine12').textContent =
      '??????????????????????????????????????????????????????????????????????????????????????????';
    document.getElementById('howToItemsLine13').textContent =
      '???????????????????????????';

    if (
      document.getElementById('state').textContent ===
      longStateText[localStorage.getItem('language')]
    ) {
      document.getElementById('state').textContent = '???????????????';
    } else if (
      document.getElementById('state').textContent ===
      shortStateText[localStorage.getItem('language')]
    ) {
      document.getElementById('state').textContent = '????????????';
    } else {
      document.getElementById('state').textContent = '??????';
    }

    if (
      document.getElementById('startButton').textContent ===
      stopButtonText[localStorage.getItem('language')]
    ) {
      document.getElementById('startButton').textContent = '??????';
    } else {
      document.getElementById('startButton').textContent = '??????';
    }
    document.getElementById('currentTaskHeader').textContent = '????????????';
    document.getElementById('check').textContent = '??????';
    document.getElementById('workPeriodsHeader').textContent = '???????????????';
    document.getElementById('taskHeader').textContent = '?????????????????????';
    document.getElementById('addTask').textContent = '????????????';
    document.getElementById('taskNameLang').textContent = '???????????????';
    document.getElementById('expectedPomosLang').textContent =
      '??????Pomos?????????';
    document.getElementById('createTask').textContent = '??????';

    document.getElementById('ch').style.textDecoration = 'underline';
    document.getElementById('es').style.textDecoration = 'none';
    document.getElementById('en').style.textDecoration = 'none';

    localStorage.setItem('language', 'ch');
  }
}

/*========================================================================
 * Modules
 *========================================================================*/

if (typeof exports !== 'undefined') {
  module.exports = { setLanguage };
}

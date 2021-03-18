//var taskName = document.getElementById("taskName");
//var taskPomos = document.getElementById("taskPomos");
var numberOfTasks = 0;

/**
 * Displays a form to allow users to input a name
 * of the task as well as the expected pomos it
 * would take.
 */
function displayInput() {
  if (document.getElementById('taskInput').style.display == 'none') {
    document.getElementById('taskInput').style.display = 'block';
  } else {
    document.getElementById('taskInput').style.display = 'none';
  }
}

var positiveNumberText = {
  en: 'Please re-enter a positive number for the number of expected pomos.',
  es: 'Vuelva a ingresar un número positivo para el número de pomos esperados.',
  ch: '請重新輸入一個正數，以表示預期的pomos數量。”',
};

/**
 * Creates the task and adds it to the task list.
 */
function createTask() {
  let orderedList = document.getElementById('taskList').children;
  let i = 0;

  if (document.getElementById('taskName').value == '') {
    alert('Please enter a name for the task!');
    return;
  }

  while (i < orderedList.length) {
    if (
      document.getElementById('taskName').value ==
      orderedList[i].shadowRoot.querySelector('.name').innerHTML
    ) {
      alert('That tasks already exists!');
      return;
    }
    i++;
  }

  if (document.getElementById('taskPomos').value < 1) {
    alert(positiveNumberText[localStorage.getItem('language')]);
    return;
  }
  numberOfTasks++;
  var task = `<task-item taskName="${
    document.getElementById('taskName').value
  }" taskPomos="${
    document.getElementById('taskPomos').value
  }" id="${numberOfTasks}">`;
  document.getElementById('taskList').insertAdjacentHTML('beforeend', task);
}

/**
 * Deletes the event from the task list.
 *
 * @param {event} event The event related to the task that will be deleted.
 */
function deleteTask(event) {
  let orderedList = document.getElementById('taskList').children;
  let current = event.target.parentNode.children;
  let i = 0;
  while (
    current[0].innerHTML !=
    orderedList[i].shadowRoot.querySelector('.name').innerHTML
  ) {
    i++;
  }
  document.getElementById('taskList').removeChild(orderedList[i]);
}

var taskAtTopText = {
  en: 'The task is at the top already.',
  es: 'La tarea ya está en la cima.',
  ch: '任務已經是最重要的。',
};

/**
 * Swap the current task with the task above it. If there is no task above the current then
 * alert the user and return nothing.
 *
 * @param {event} event The event related to the task that will be moved up.
 */
function upTask(event) {
  let orderedList = document.getElementById('taskList').children;
  let current = event.target.parentNode.children;
  let temp;
  let tempNum;
  let i = 0;

  while (
    current[0].innerHTML !=
    orderedList[i].shadowRoot.querySelector('.name').innerHTML
  ) {
    i++;
  }

  if (i == 0) {
    alert(taskAtTopText[localStorage.getItem('language')]);
    return;
  } else {
    temp = current[0].innerHTML;
    tempNum = current[1].innerHTML;
    current[0].innerHTML = orderedList[i - 1].shadowRoot.querySelector(
      '.name',
    ).innerHTML;
    current[1].innerHTML = orderedList[i - 1].shadowRoot.querySelector(
      '.numPomos',
    ).innerHTML;
    orderedList[i].setAttribute('taskName', current[0].innerHTML);
    orderedList[i].setAttribute('taskPomos', current[1].innerHTML);
    orderedList[i - 1].setAttribute('taskName', temp);
    orderedList[i - 1].setAttribute('taskPomos', tempNum);
    orderedList[i - 1].shadowRoot.querySelector('.name').innerHTML = temp;
    orderedList[i - 1].shadowRoot.querySelector(
      '.numPomos',
    ).innerHTML = tempNum;
  }
}

var taskAtBottomText = {
  en: 'The task is at the bottom already.',
  es: 'La tarea ya está al final.',
  ch: '任務已經在底部了.',
};

/**
 * Swap the current task with the task below it. If there is no task below the current then
 * alert the user and return nothing.
 *
 * @param {event} event The event related to the task that will be moved down.
 */
function downTask(event) {
  let orderedList = document.getElementById('taskList').children;
  let current = event.target.parentNode.children;
  let temp;
  let tempNum;
  let i = 0;

  while (
    current[0].innerHTML !=
    orderedList[i].shadowRoot.querySelector('.name').innerHTML
  ) {
    i++;
  }

  if (orderedList[i + 1] == null) {
    alert(taskAtBottomText[localStorage.getItem('language')]);
    return;
  } else {
    temp = current[0].innerHTML;
    tempNum = current[1].innerHTML;
    current[0].innerHTML = orderedList[i + 1].shadowRoot.querySelector(
      '.name',
    ).innerHTML;
    current[1].innerHTML = orderedList[i + 1].shadowRoot.querySelector(
      '.numPomos',
    ).innerHTML;
    orderedList[i].setAttribute('taskName', current[0].innerHTML);
    orderedList[i].setAttribute('taskPomos', current[1].innerHTML);
    orderedList[i + 1].setAttribute('taskName', temp);
    orderedList[i + 1].setAttribute('taskPomos', tempNum);
    orderedList[i + 1].shadowRoot.querySelector('.name').innerHTML = temp;
    orderedList[i + 1].shadowRoot.querySelector(
      '.numPomos',
    ).innerHTML = tempNum;
  }
}

if (typeof exports !== 'undefined') {
  module.exports = {
    displayInput,
    createTask,
    deleteTask,
    upTask,
    downTask,
  };
}

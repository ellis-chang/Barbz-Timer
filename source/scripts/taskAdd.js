var taskInput = document.getElementById("taskInput");
var taskName = document.getElementById("taskName");
var taskPomos = document.getElementById("taskPomos");
var numberOfTasks = 0;



/**
 * Displays a form to allow users to input a name
 * of the task as well as the expected pomos it 
 * would take.
 */

function displayInput(){
    if(taskInput.style.display == "none"){
        taskInput.style.display = "block";
    }
    else{
        taskInput.style.display = "none";
    }
}

/**
 * Creates the task and adds it to the task list.
 */
function createTask(){
    numberOfTasks++;
    if(taskPomos.value < 1){
        alert("Please re-enter a positive number for the number of expected pomos.");
        return;
    }


    var task = `<task-item taskName="${taskName.value}" taskPomos="${taskPomos.value}" id="${numberOfTasks}">`;
    document.getElementById("taskList").insertAdjacentHTML('beforeend', task);
}



/**
 * Deletes the event from the task list.
 * 
 * @param {event} event The event related to the task that will be deleted. 
 */
function deleteTask(event){
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}


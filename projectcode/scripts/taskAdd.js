var taskInput = document.getElementById("taskInput");
var taskName = document.getElementById("taskName");
var taskPomos = document.getElementById("taskPomos");
var numberOfTasks = 0;


function displayInput(){
    if(taskInput.style.display == "none"){
        taskInput.style.display = "block";
    }
    else{
        taskInput.style.display = "none";
    }
}

function createTask(){
    numberOfTasks++;
    if(taskPomos.value < 1){
        alert("Please re-enter a positive number for the number of expected pomos.");
        return;
    }
    var task = `<task-item taskName="${taskName.value}" taskPomos="${taskPomos.value}" id="${numberOfTasks}">`;
    document.getElementById("taskList").insertAdjacentHTML('beforeend', task);
}

function deleteTask(event){
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}


var taskInput = document.getElementById("taskInput");
var taskName = document.getElementById("taskName");
var taskPomos = document.getElementById("taskPomos");

function displayInput(){
    if(taskInput.style.display == "none"){
        taskInput.style.display = "block";
    }
    else{
        taskInput.style.display = "none";
    }
}

function createTask(){
    var task = `<task-item taskName="${taskName.value}" taskPomos="${taskPomos.value}">`;
    document.getElementById("taskList").insertAdjacentHTML('beforeend', task);
}

function deleteTask(event){
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}

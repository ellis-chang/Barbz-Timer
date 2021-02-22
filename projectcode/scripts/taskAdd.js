var taskInput = document.getElementById("taskInput");
var taskName = document.getElementById("taskName");
var taskPomos = document.getElementById("taskPomos");
myStorage = window.localStorage;
var totalPomos = 0;

function displayInput(){
    if(taskInput.style.display == "none"){
        taskInput.style.display = "block";
    }
    else{
        taskInput.style.display = "none";
    }
}

function createTask(){
    totalPomos = totalPomos + parseInt(taskPomos.value);
    localStorage.setItem('totalPomos', `${totalPomos}`);
    var task = `<task-item taskName="${taskName.value}" taskPomos="${taskPomos.value}">`;
    document.getElementById("taskList").insertAdjacentHTML('beforeend', task);
}

function deleteTask(event){
    totalPomos = totalPomos - parseInt(event.target.parentNode.querySelector('.numPomos').innerHTML);
    localStorage.setItem('totalPomos', `${totalPomos}`);
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}

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
    var task = `<task-item taskName="${taskName.value}" taskPomos="${taskPomos.value}" id="${numberOfTasks}">`;
    document.getElementById("taskList").insertAdjacentHTML('beforeend', task);
}

function deleteTask(event){
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}

function swapTask(event){
    var orderedList = document.getElementById("taskList").children;
    var current = event.target.parentNode.children;
    var temp;
    var tempNum;
    var i = 0;
    
    while(current[0].innerHTML != orderedList[i].shadowRoot.querySelector(".name").innerHTML){
        i++;
    }

    if(i == 0){
        alert("The task is at the top already.");
        return;
    }
    else{
        temp = current[0].innerHTML;
        tempNum = current[1].innerHTML;
        current[0].innerHTML = orderedList[i-1].shadowRoot.querySelector(".name").innerHTML;
        current[1].innerHTML = orderedList[i-1].shadowRoot.querySelector(".numPomos").innerHTML;
        orderedList[i-1].shadowRoot.querySelector(".name").innerHTML = temp;
        orderedList[i-1].shadowRoot.querySelector(".numPomos").innerHTML = tempNum;
    }
}


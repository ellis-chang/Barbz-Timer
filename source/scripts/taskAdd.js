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
    let orderedList = document.getElementById("taskList").children;
    let current = event.target.parentNode.children;
    let i = 0;
    while(current[0].innerHTML != orderedList[i].shadowRoot.querySelector(".name").innerHTML){
        i++;
    }
    document.getElementById("taskList").removeChild(orderedList[i]);
}

function upTask(event){
    let orderedList = document.getElementById("taskList").children;
    let current = event.target.parentNode.children;
    let temp;
    let tempNum;
    let i = 0;
    
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
        orderedList[i].setAttribute("taskName", current[0].innerHTML);
        orderedList[i].setAttribute("taskPomos", current[1].innerHTML);
        orderedList[i-1].setAttribute("taskName", temp);
        orderedList[i-1].setAttribute("taskPomos", tempNum);
        orderedList[i-1].shadowRoot.querySelector(".name").innerHTML = temp;
        orderedList[i-1].shadowRoot.querySelector(".numPomos").innerHTML = tempNum;
    }
}

function downTask(event){
    let orderedList = document.getElementById("taskList").children;
    let current = event.target.parentNode.children;
    let temp;
    let tempNum;
    let i = 0;
    
    while(current[0].innerHTML != orderedList[i].shadowRoot.querySelector(".name").innerHTML){
        i++;
    }

    if(orderedList[i+1] == null){
        alert("The task is at the bottom already.");
        return;
    }
    else{
        temp = current[0].innerHTML;
        tempNum = current[1].innerHTML;
        current[0].innerHTML = orderedList[i+1].shadowRoot.querySelector(".name").innerHTML;
        current[1].innerHTML = orderedList[i+1].shadowRoot.querySelector(".numPomos").innerHTML;
        orderedList[i].setAttribute("taskName", current[0].innerHTML);
        orderedList[i].setAttribute("taskPomos", current[1].innerHTML);
        orderedList[i+1].setAttribute("taskName", temp);
        orderedList[i+1].setAttribute("taskPomos", tempNum);
        orderedList[i+1].shadowRoot.querySelector(".name").innerHTML = temp;
        orderedList[i+1].shadowRoot.querySelector(".numPomos").innerHTML = tempNum;
    }
}


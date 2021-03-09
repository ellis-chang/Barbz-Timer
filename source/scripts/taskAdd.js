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
    if(taskPomos.value < 1){
        alert("Please re-enter a positive number for the number of expected pomos.");
        return;
    }
    numberOfTasks++;
    var task = `<task-item taskName="${taskName.value}" taskPomos="${taskPomos.value}" id="${numberOfTasks}">`;
    document.getElementById("taskList").insertAdjacentHTML('beforeend', task);
}

/**
 * Deletes the event from the task list.
 * 
 * @param {event} event The event related to the task that will be deleted. 
 */
function deleteTask(event){
    let orderedList = document.getElementById("taskList").children;
    let current = event.target.parentNode.children;
    let i = 0;
    while(current[0].innerHTML != orderedList[i].shadowRoot.querySelector(".name").innerHTML){
        i++;
    }
    document.getElementById("taskList").removeChild(orderedList[i]);
}

/**
 * Swap the current task with the task above it. If there is no task above the current then
 * alert the user and return nothing.
 */
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

/**
 * Swap the current task with the task below it. If there is no task below the current then
 * alert the user and return nothing.
 */
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


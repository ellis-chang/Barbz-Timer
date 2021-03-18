const {displayInput, creatTask} = require('../scripts/taskAdd');

describe('taskInput is ', () => {
    document.body.innerHTML = `<div id="taskInput" style="display: none;"></div> 
    <ol id="taskList"></ol> 
    <input type="taskName" name="taskName" id="taskName">`;
    
    test('displayed and removed', () => {
        let taskInput= document.getElementById("taskInput");
        displayInput();
        expect(taskInput.style.display).toEqual("block");
        displayInput();
        expect(taskInput.style.display).toEqual("none");
    });

    let taskName = document.getElementById("taskName");
    
    test('alerts if there is no name',() =>{
        expect(taskName.value).toEqual("");
    });
});

/*describe('createTask',() => {
    document.body.innerHTML = `<ol id="taskList"></ol> 
    <input type="taskName" name="taskName" id="taskName">`; 

    let taskName = document.getElementById("taskName");
    test('alerts if there is no name',() =>{
        expect(taskName.value).toEqual("");
    });
});*/
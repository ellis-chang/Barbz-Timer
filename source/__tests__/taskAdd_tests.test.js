const {displayInput, createTask, deleteTask, upTask, downTask} = require('../scripts/taskAdd');

document.body.innerHTML = `
    <div id="taskInput" style="display: none;"></div>
    <ol id="taskList"></ol>
    <button id="addTask" onclick="displayInput()">Add a task</button>
            <div>
                <br>
                <div id="taskInput" style="display: none;">
                    <label id="taskNameLang" for="taskName">Task Name: </label>
                    <input type="taskName" name="taskName" id="taskName">
                    <br>
                    <br>
                    <label id="expectedPomosLang" for="taskPomos">Number of Expected Pomos: </label>
                    <input type="number" name="taskPomos" id="taskPomos" min="1" max="99">
                    <br>
                    <br>
                    <button id="createTask" onclick="createTask()">Create</button>
                </div>
            </div>
`;

describe('Input form is ', () => {
    test('displayed', () => {
        displayInput();
        expect(document.getElementById("taskInput").style.display).toEqual("block");
    })

    test('hidden', () => {
        displayInput();
        expect(document.getElementById("taskInput").style.display).toEqual("none");
    })
})

describe('Creating a task ', () => {
    test('works', () => {
        createTask();
        expect(document.getElementById("taskList").children.length).toBe(0);
    })
})
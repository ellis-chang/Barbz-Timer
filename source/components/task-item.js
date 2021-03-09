//taskItem.js
const template = document.createElement('template');
template.innerHTML = `
<style>

    .name {
        /*position*/
        display: inline-block;
        width: 17vw;
        margin-left: 0px;
        
        /*border*/
        border: solid black;
        border-radius: 1vh;
        
        /*text*/
        text-align: center;
        font-size: 20px;
    }

    .numPomos {
        /*position*/
        display: inline-block;
        width: 3vw;
        margin-left: 1vw;

        /*border*/
        border: solid black;
        border-radius: 1vh;
        
        /*text*/
        text-align: center;
        font-size: 20px;
    }

    .delete {
        display: inline-block;
        margin-left: 0.5vw;
        width: fit-content;
        text-align: center;
        font-size: 10px;
    }
    
    .upTask {
        display: inline-block;
        margin-left: 0.5vw;
        width: fit-content;
        text-align: center;
        font-size: 10px;
    }

    .downTask {
        display: inline-block;
        margin-left: 0.5vw;
        width: fit-content;
        text-align: center;
        font-size: 10px;
    }


</style>
<li class="uniqueTask">
    <p class="name"></p>
    <p class="numPomos"></p>
    <button class="upTask" onclick="upTask(event)">U</button>
    <button class="downTask" onclick="downTask(event)">D</button>
    <button class="delete" onclick="deleteTask(event)">X</button>
</li>`
class TaskItem extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('.name').innerHTML = this.getAttribute('taskName');
        this.shadowRoot.querySelector('.numPomos').innerHTML = this.getAttribute('taskPomos');
    }
}

customElements.define('task-item', TaskItem);
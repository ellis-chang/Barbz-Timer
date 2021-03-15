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
        border: 2px solid black;
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
        border: 2px solid black;
        border-radius: 1vh;
        
        /*text*/
        text-align: center;
        font-size: 20px;
    }

    .delete {
        display: inline-block;
        margin-left: 0.5vw;
        width: 1vw;
        height: 1vw;
        text-align: center;
        font-size: 10px;
        background-image: url("../images/exit.png");
        background-size: 100%;
    }

    .delete:hover {
        background-image: url("../images/exit-white.png");
        background-size: 100%;
    }
    
    .upTask {
        display: inline-block;
        margin-left: 0.5vw;
        width: 1vw;
        height: 1vw;
        text-align: center;
        font-size: 10px;
        background-image: url("../images/up.png");
        background-size: 100%;
    }

    .upTask:hover {
        background-image: url("../images/up-white.png");
        background-size: 100%;
    }

    .downTask {
        display: inline-block;
        margin-left: 0.5vw;
        width: 1vw;
        height: 1vw;
        text-align: center;
        font-size: 10px;
        background-image: url("../images/down.png");
        background-size: 100%;
    }

    .downTask:hover {
        background-image: url("../images/down-white.png");
        background-size: 100%;
    }


</style>
<li class="uniqueTask">
    <p class="name"></p>
    <p class="numPomos"></p>
    <button class="upTask" onclick="upTask(event)"></button>
    <button class="downTask" onclick="downTask(event)"></button>
    <button class="delete" onclick="deleteTask(event)"></button>
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
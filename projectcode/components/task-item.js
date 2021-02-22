//taskItem.js
const template = document.createElement('template');
template.innerHTML = `
<style>
    #taskList {
        list-style-type: none;
    }

    .uniqueTask {
        list-style-type: none;
        width: 400px;
    }

    .name {
        /*position*/
        display: inline-block;
        width: 250px;
        margin-left: 10px;
        
        /*border*/
        border: solid black;
        border-radius: 30px;
        
        /*text*/
        text-align: center;
        font-size: 20px;
    }

    .numPomos {
        /*position*/
        display: inline-block;
        width: 40px;
        margin-left: 30px;

        /*border*/
        border: solid black;
        border-radius: 30px;
        
        /*text*/
        text-align: center;
        font-size: 20px;
    }

    .delete {
        display: inline-block;
        margin-left: 20px;
    }
</style>
<li class="uniqueTask">
    <p class="name"></p>
    <p class="numPomos"></p>
    <button class="delete" onclick="alert('delete')">X</button>
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
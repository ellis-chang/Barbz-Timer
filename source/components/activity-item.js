const template2 = document.createElement('template');
template2.innerHTML = `
<style>

    .name {
        /*position*/
        display: inline-block;
        width: 17vw;
        margin-right: 5vw;
        
        /*border*/
        border: solid black;
        border-radius: 1vh;
        
        /*text*/
        text-align: center;
        font-size: 20px;
    }

    .actualPomos {
        /*position*/
        display: inline-block;
        width: 3vw;
        margin-left: 13vw;

        /*border*/
        border: solid black;
        border-radius: 1vh;
        
        /*text*/
        text-align: center;
        font-size: 20px;
    }

    .estimatedPomos {
        /*position*/
        display: inline-block;
        width: 3vw;
        margin-left: 2vw;

        /*border*/
        border: solid black;
        border-radius: 1vh;
        
        /*text*/
        text-align: center;
        font-size: 20px;
    }


</style>
<li class="uniqueTask">
    <p class="name"></p>
    <p class="estimatedPomos"></p>
    <p class="actualPomos"></p>
</li>`
class ActivityItem extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template2.content.cloneNode(true));
        this.shadowRoot.querySelector('.name').innerHTML = this.getAttribute('taskName');
        this.shadowRoot.querySelector('.actualPomos').innerHTML = this.getAttribute('actualPomos');
        this.shadowRoot.querySelector('.estimatedPomos').innerHTML = this.getAttribute('estimatedPomos');
    }
}

customElements.define('activity-item', ActivityItem);
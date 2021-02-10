
var minutes = 25;
var seconds = 0;
var interval;
document

function timeStart(){
    interval = setInterval(count, 1000);
    document.getElementById("clock").innerHTML = "25:00"; 
}

function count(){
    seconds--;
    if(seconds == -1){
        
        minutes--;
        
        if(minutes == -1){
            clearInterval(interval);
        }
        else{
            seconds = 59;
        }
    }
    if(seconds >= 10){
        document.getElementById("clock").innerHTML = minutes + ":" + seconds;
    }   
    else{
        document.getElementById("clock").innerHTML = minutes + ":0" + seconds;
    } 
}
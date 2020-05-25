console.log("js is running");
var time;
var set;
function timer(init){
    time=init;
    countdownMode();
    cancelVar = setInterval(countdown, 1000)
};
function countdown() {
    time--;
    var minutes = Math.floor(time / 60);
    var seconds = (time % 60);
    document.getElementById('countdown').innerHTML = minutes + ' : ';
    document.getElementById('countdown').innerHTML += seconds +'s';
    }

function countdownMode() {
    var btn1 = document.getElementById('btn1');
    btn1.innerHTML = "Cancelar";
    btn1.classList.remove('btn-primary');
    btn1.classList.add('btn-danger');
    document.getElementById('btn2').classList.add('disabled');
    document.getElementById('btn3').classList.add('disabled');
    document.getElementById('display1').style.opacity = 0.5;
    btn1.onclick = cancel; 
}

function reverseCountdownMode() {
    document.getElementById('countdown').innerHTML = " ";
    var btn1 = document.getElementById('btn1');
    btn1.innerHTML = "Continuar";
    btn1.classList.remove('btn-danger');
    btn1.classList.add('btn-primary');
    document.getElementById('btn2').classList.remove('disabled');
    document.getElementById('btn3').classList.remove('disabled');
    document.getElementById('display1').style.opacity = 1;
}

function cancel() {
    
    clearInterval(cancelVar);
    reverseCountdownMode();
}




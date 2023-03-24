
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const lamp = document.getElementById('lamp');

button1.addEventListener ("click", lampOn);
button2.addEventListener ("click", lampOff);

function lampOn() {
    lamp.src = "./imagens/lampadaacesa.jpg";
}


function lampOff() 

{
    lamp.src= "./imagens/lampadaoff.jpg";
}


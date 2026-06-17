// ==========================
// ABRIR LA CARTA
// ==========================

const boton = document.getElementById("abrir");
const carta = document.getElementById("carta");
const final = document.getElementById("final");
const sorpresa = document.getElementById("sorpresa");

boton.onclick = () => {

    carta.style.display = "block";

    carta.scrollIntoView({
        behavior: "smooth"
    });

};

// ==========================
// CONTADOR
// ==========================

const inicio = new Date("2026-01-12T00:00:00");

function actualizarTiempo(){

const ahora = new Date();

const diferencia = ahora - inicio;

const dias = Math.floor(diferencia/(1000*60*60*24));

const horas = Math.floor((diferencia/(1000*60*60))%24);

const minutos = Math.floor((diferencia/(1000*60))%60);

document.getElementById("contador").innerHTML =

`❤️ Llevamos juntos<br><br>

<b>${dias}</b> días

<b>${horas}</b> horas

<b>${minutos}</b> minutos`;

}

setInterval(actualizarTiempo,1000);

actualizarTiempo();

// ==========================
// ESTRELLAS
// ==========================

const canvas = document.getElementById("stars");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

let estrellas = [];

for(let i=0;i<180;i++){

estrellas.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2,

v:Math.random()*0.5+0.2

});

}

function animar(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

estrellas.forEach(e=>{

ctx.beginPath();

ctx.arc(e.x,e.y,e.r,0,Math.PI*2);

ctx.fill();

e.y+=e.v;

if(e.y>canvas.height){

e.y=0;

e.x=Math.random()*canvas.width;

}

});

requestAnimationFrame(animar);

}

animar();

// ==========================
// CORAZONES
// ==========================

function crearCorazon(){

const heart = document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(18+Math.random()*22)+"px";

heart.style.transition="8s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="-100px";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(crearCorazon,450);

// ==========================
// BOTÓN SORPRESA
// ==========================

sorpresa.onclick=()=>{

const pantalla=document.getElementById("pantallaFinal");

const texto=document.getElementById("textoFinal");

pantalla.style.display="flex";

const mensaje=`Gracias por llegar a mi vida.

Desde el 12 de enero de 2026 has convertido mis días en recuerdos que quiero guardar para siempre.

No sé qué nos espera mañana...

pero sí sé que volvería a elegirte una y otra vez.

❤️ Te amo muchísimo ❤️

— tu monito`;

let i=0;

texto.innerHTML="";

const escribir=setInterval(()=>{

texto.innerHTML+=mensaje.charAt(i);

i++;

if(i>=mensaje.length){

clearInterval(escribir);

}

},45);

};

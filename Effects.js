// =========================
// PÉTALOS DE ROSA
// =========================

function crearPetalo(){

    const petalo = document.createElement("div");

    petalo.innerHTML = "🌹";

    petalo.style.position = "fixed";
    petalo.style.left = Math.random()*100+"vw";
    petalo.style.top = "-60px";
    petalo.style.fontSize = (20+Math.random()*18)+"px";
    petalo.style.transition = (6+Math.random()*5)+"s linear";
    petalo.style.pointerEvents = "none";
    petalo.style.zIndex = "999";

    document.body.appendChild(petalo);

    setTimeout(()=>{
        petalo.style.top="110vh";
        petalo.style.transform=`rotate(${720+Math.random()*720}deg)`;
        petalo.style.left=(Math.random()*100)+"vw";
        petalo.style.opacity="0";
    },50);

    setTimeout(()=>{
        petalo.remove();
    },11000);

}

setInterval(crearPetalo,900);


// =========================
// CORAZONES EN EL CURSOR
// =========================

document.addEventListener("mousemove",(e)=>{

    const c = document.createElement("div");

    c.innerHTML="❤️";

    c.style.position="fixed";
    c.style.left=e.clientX+"px";
    c.style.top=e.clientY+"px";
    c.style.pointerEvents="none";
    c.style.fontSize="18px";
    c.style.transition="1s";
    c.style.zIndex="9999";

    document.body.appendChild(c);

    requestAnimationFrame(()=>{
        c.style.transform="translateY(-60px) scale(1.5)";
        c.style.opacity="0";
    });

    setTimeout(()=>{
        c.remove();
    },1000);

});


// =========================
// ESTRELLAS FUGACES
// =========================

function estrellaFugaz(){

    const s=document.createElement("div");

    s.style.position="fixed";
    s.style.width="3px";
    s.style.height="120px";
    s.style.background="linear-gradient(white,transparent)";
    s.style.left=Math.random()*window.innerWidth+"px";
    s.style.top="-100px";
    s.style.transform="rotate(35deg)";
    s.style.opacity=".9";
    s.style.transition="1.5s linear";
    s.style.pointerEvents="none";

    document.body.appendChild(s);

    setTimeout(()=>{
        s.style.top="120vh";
        s.style.left=(Math.random()*window.innerWidth+250)+"px";
        s.style.opacity="0";
    },20);

    setTimeout(()=>{
        s.remove();
    },1700);

}

setInterval(estrellaFugaz,4000);
// ==========================
// FUEGOS ARTIFICIALES
// ==========================

function lanzarFuegos(){

for(let i=0;i<250;i++){

const p=document.createElement("div");

p.className="firework";

const x=Math.random()*window.innerWidth;

const y=Math.random()*window.innerHeight*0.7;

p.style.left=x+"px";

p.style.top=y+"px";

const colores=[

"#ff4d6d",

"#ffd166",

"#ffffff",

"#7bdff2",

"#ff99c8",

"#cdb4db"

];

p.style.background=

colores[Math.floor(Math.random()*colores.length)];

const angulo=Math.random()*360;

const distancia=80+Math.random()*180;

p.style.setProperty(

"--x",

Math.cos(angulo*Math.PI/180)*distancia+"px"

);

p.style.setProperty(

"--y",

Math.sin(angulo*Math.PI/180)*distancia+"px"

);

document.body.appendChild(p);

setTimeout(()=>{

p.remove();

},1800);

}

}

setInterval(()=>{

if(document.getElementById("pantallaFinal").style.display==="flex"){

lanzarFuegos();

}

},2200);


// ==========================
// MENSAJE FINAL
// ==========================

const pantalla=document.getElementById("pantallaFinal");

const observador=new MutationObserver(()=>{

if(pantalla.style.display==="flex"){

document.getElementById("mensajeFinal").style.display="block";

}

});

observador.observe(pantalla,{

attributes:true

});
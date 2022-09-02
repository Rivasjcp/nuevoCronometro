const escribirNumeros = document.getElementById("escribirNumeros");

let h;
let m;
let s;

function init(){
    const empezarCrono = document.getElementById("empezarCrono").addEventListener("click",cronometrar);
    const terminarCrono = document.getElementById("terminarCrono").addEventListener("click",parar);
    const reiniciar = document.getElementById("reiniciar").addEventListener("click",reinicio);
    
    h = 0;
    m = 0;
    s = 0;

    document.getElementById("escribirNumeros").innerHTML = "00:00:00"
}

function escribir(){
    let hConCero, mConCero, sConCero;
    s++;
    if (s>59){m++;s = 0;};
    if (m>59){h++;m = 0;};
    if (h>24){h = 0;}

    if (h<10){hConCero = "0" + h}else{hConCero = h;};
    if (m<10){mConCero = "0" + h}else{mConCero = m;};
    if (s<10){sConCero = "0" + s}else{sConCero = s;};

    document.getElementById("escribirNumeros").innerHTML = `${hConCero}:${mConCero}:${sConCero}`
}

function cronometrar(){
    escribir();
    id =  setInterval(escribir,1000);
    document.getElementById("empezarCrono").removeEventListener("click",cronometrar)
}

function parar(){
    clearInterval(id);
    document.getElementById("empezarCrono").addEventListener("click",cronometrar);
}

function reinicio(){
    clearInterval(id)
    document.getElementById("escribirNumeros").innerHTML = "00:00:00"
    h = 0; m = 0; s = 0
    document.getElementById("empezarCrono").addEventListener("click",cronometrar)
}
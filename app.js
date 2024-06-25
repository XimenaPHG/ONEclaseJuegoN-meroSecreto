//variables
let numeroReal = Math.floor(Math.random()*10)+1;
console.log(numeroReal);
let numeroUser;
let intentos = 1;
let trys = "vez"; 
let maxIntentos = 5;

while(numeroUser != numeroReal) {  
    numeroUser = parseInt(prompt("Me indicas un número, por favor?:"));
    //Variables ^^
    console.log(numeroUser);
    //comparacion vv
    if (numeroUser == numeroReal){
        alert("ese número es correcto. El número es " + numeroUser + ". lo hiciste en " + intentos + " " + trys);
        //si sí
    }
    else {
        if(numeroUser < numeroReal){ alert("el número secreto es mayor");}
    else {alert("el número secreto es menor");}
        //si no
}
//contador incrementa cada q no acierta
intentos++;
trys = "veces";
if (intentos > maxIntentos){
    alert("Llegaste al num max de "+ maxIntentos + " intentos");
    break; 
}
}

/* alert("Bienvenida y bienvenido a nuestro sitio web!");
alert("¡Error! Completa todos los campos");
let nombreUser = prompt("nombre");
console.log(nombreUser);
let edadUser = prompt("edad");
console.log(edadUser);
if(edadUser >= 18){
    alert("¡Puedes obtener tu licencia de conducir!");
}
let nombre = Luna;
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError); */

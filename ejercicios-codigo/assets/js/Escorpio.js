function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
} //Esta función fue obtenida de https://desarrolloweb.com/articulos/763.php

function mensaje(){
    return (Number(prompt("Para salir de este bucle tienes dos opciones: \n Adivina el número mágico o \n rindete ingresando -1 \n Ingresa un número: ")));
}
let nuMagico = random(1, 100);
let numIngresado = mensaje()

console.log(nuMagico);
console.log(numIngresado);

while (numIngresado !== nuMagico && numIngresado !== -1){
    if (nuMagico < numIngresado){
        alert("El número ingresado es mayor que el número mágico");
    } else {
        alert("El número ingresado es menor que el número mágico")
    }
    numIngresado = mensaje()
} 
if (numIngresado === -1){
    //alert ("¿Dónde esta tu honor basura? ¡Eres una completa verguenza!, ¡No te mereces el respeto de nadie!")
    document.getElementById("soldados").hidden = false;
} else {
    alert ("¡¡Felicidades!! Adivinaste el número magico")
}
function deCelciusaF(grados) {
    return ((grados * 1.8) + 32);
}

function deCelciusaK(grados) {
    return (grados + 273.15);
}

function deKelvinaC(grados) {
    return (grados - 273.15);
}

function deKelvinaF(grados) {
    return (((grados - 273) * 1.8) + 32);
}

function deFahrenheitaC(grados) {
    return ((grados - 32) / 1.8);
}

function deFahrenheitaK(grados) {
    return (((grados - 32) / 1.8) + 273.15);
}

let grados = (Number(prompt("valor")));
let unidad = (Number(prompt("¿En qué unidad de medida esta? \n -Ingresa 1 para Celsius \n -Ingresa 2 para Fahrenheit \n -Ingresa 3 para Kelvin")));


if (unidad === 1) {
    alert(grados + " grados Celsius equivalen a " + deCelciusaF(grados) + " grados Fahrenheit y a " + deCelciusaK(grados) + " grados Kelvin");

} else if (unidad === 2) {
    alert(grados + " grados Fahrenheit equivalen a " + deFahrenheitaC(grados) + " grados Celsius y a " + deFahrenheitaK(grados) + " grados Kelvin");

} else if (unidad === 3) {
    alert(grados + " grados Kelvin equivalen a " + deKelvinaF(grados) + " grados Fahrenheit y a " + deKelvinaC(grados) + " grados Celsius");

} else {
    alert("Opción no válida")

}
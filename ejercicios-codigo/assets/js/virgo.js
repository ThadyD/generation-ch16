const pesoPayasos = 112
const pesoMunecas = 75
let ventaPayasos = prompt("Ingresa el número de payasos")
let ventaMunecas = prompt("Ingresa el número de muñecas")
let pesoPack = ((pesoMunecas * ventaMunecas) + (pesoPayasos * ventaPayasos))

numeroPacks = Math.ceil(pesoPack / 1000)
   
alert("Se enviaran " + numeroPacks + " paquetes");

alert("El peso total de la mercancia es: " + (pesoPack / 1000) + " Kg");
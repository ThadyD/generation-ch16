function calculadoraSueldo (sueldo, diasSemana, semanasMes){

let nombre = prompt("ingresa nombre:");

let sueldoSemanal= (sueldo * diasSemana);
let sueldoMensual= (sueldoSemanal * semanasMes);

console.log(nombre);
console.log("Sueldo semanal: $" + sueldoSemanal);
console.log("Sueldo mensual: $" + sueldoMensual);
}

calculadoraSueldo(6, 4,3)
calculadoraSueldo(5,5,2)
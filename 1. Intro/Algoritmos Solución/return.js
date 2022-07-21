// function calculadoraPorcentaje(numero, porcentaje){
//     return numero * porcentaje;
    
// }

// let resultadoFuncion= calculadoraPorcentaje(100, 0.40);
// console.log(resultadoFuncion);

function divisionR(valor){
    let resultado1= valor % 8;
    let resultado2= valor % 7;
    return resultado1 === 0 && resultado2 === 0;
}

let valor = (parseInt(prompt("Ingrese un número: ")));
console.log(divisionR(valor));




function miFuncion(a, b){
    return (a + b);
};

let resultado = miFuncion(3, 6);
console.log(resultado);

/***** funcion expresion o anonima *****/
let suma= function (a, b) {return (a + b)}
let res = suma(2, 3)
console.log("La suma es: " + res);

let caracteres= "El resultado es: "
console.log(caracteres + res);


let resta= function (a, b) {return (a - b)}
let resultadoR = resta(2, 3)

let multiplicacion= function (a, b) {return (a * b)}
let resultadoM = multiplicacion(2, 3)

let division= function (a, b) {return (a / b)}
let resultadoD = division(9, 3)

console.log(caracteres + resultadoR);
console.log(caracteres + resultadoM);
console.log(caracteres + resultadoD);


/***** Self Invoking  ******/
(function (a, b){
    console.log("El resultado de self invoking es: " +(a + b));
}
)(3, 4)
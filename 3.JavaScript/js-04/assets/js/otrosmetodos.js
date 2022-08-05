/**** sort() ****/
//ordena los elementos de un arreglo
//para acomodar toma en cuenta el valor que la primera letra o numero tenga en el ASCII. Por lo que ordena alfabeticamente sí, pero primero las mayusculas. E igualmente ordena numericamente pero solo el primer elemento.
console.log("METODO SORT");
const arr = ["X", "A", "H", "a", "W", "b"]

arr.sort(); 

console.log(arr);

const arr2 = ["Hola", "adiós", "bienvenido", "Calle"]; 

arr2.sort();
console.log(arr2);

const arr3 = [3, 1220, 474, 2, 1, 89, 3567];
arr3.sort();
console.log(arr3);
console.log("METODO SORT CON ORDENAMIENTO BURBUJA");
//para hacer un ordenamiento de menor a mayor se realiza de la siguiente manera:

arr3.sort((a, b) => a - b);
console.log(arr3);

//de mayor a menor
arr3.sort((a, b) => b - a);
console.log(arr3);

//función declarada
console.log("FUNCIONES");

console.log(sumar(5, 7));

//las funciones declaradas pasan por el proceso de hoisting y por tanto se pueden invocar incluso antes del lugar donde se declararon. A diferencia de las variables que solo pueden ser llamadas despues de su declaración.
function sumar (a, b){
    return a + b;
}

let a = 2;
console.log(a);

//función expresada
//en el caso de las funciones expresadas el hoisting no funciona, por tanto no podemos invocar la función antes de declararlas.
const multiplicar = function (a, b){
    return a * b;
}

console.log(multiplicar(3,5));

//funciones flecha
const dividir= (a, b) => {
    return a / b;
}

console.log(dividir(10, 2));

//estas funciones también pueden declararse de la siguiente manera cuando va a regresar una sola cosa

const res = (a, b) => a % b

console.log(res(10, 2));

//forEach()
//un ciclo que recorre en automatico todo nuestro arreglo

console.log("METODO FOREACHE");
const arrNum = [1,4,6,8,10,20,30]
// for(let i = 0; i < arrNum.length; i++){
//     arrNum[i] = arrNum[i] * 2;    
// } //forma de recorrer una lista sin for each

// console.log(arrNum);

// arrNum.forEach((elemento, index, arr)=> console.log(elemento, index, arr)); //ejemplos de iteraciones de la lista con for each.

arrNum.forEach((elemento) => console.log(elemento *= 2));

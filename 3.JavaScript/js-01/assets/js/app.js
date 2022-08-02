//uso de javascript de forma estricta
'use strict'


// tipos de datos
console.log("TIPOS DE DATOS");

// string
let cadena = "Hola mundo";

//number
let numero = 5;
let numero2 = 5.89;
let numero3 = -5.89;

//Boolean
let booleano = true;
let booleano2 = false;

//undefined
//no es un tipo de dato es más un estado en que se encuentra la variable por ejemplo
let variable
//console.log(variable); lanza undefined a la consola

//null
let vacio = null;

console.log(cadena, numero, numero2, numero3, booleano, booleano2, vacio);

//NaN - Not a Number
// surge cuando se trata de realizar alguna operación aritmética con algún dato que no es un número

// plantillas literales
//     template strings
//     literal strings
// La interpolación nos permite agregar codigo dentro de cadenas
console.log("PLANTILLAS LITERALES");
console.log(`Esta es una cadena ${5+4}`)
console.log("Esta es una cadena normal ${5+4)");

let nombre = "Thady"

//let presentación = ``
console.log("Mi nombre es" + nombre);
console.log(`Yo me llamo ${nombre}`);

console.log("<h1>Hola</h1>");
console.log(`<h1>Hola</h1>`)

// tipos de variables

console.log("TIPOS DE VARIABLES");
let a = 20; //local
const b = 0; //constante y local
var c; //global
    /* scope - contexto
    espacio en el que vive la variable*/


if(true){
    let d= 15;
}

//cuando usamos var corremos el riesgo de que, si esta variable se definio dentro de una función, pueda ser modificada fuera de esa función: por ejemplo
var d = "hola";
console.log(d);

// arreglos - matrices - arrays

console.log("ARREGLOS");
let arr = [1, "A", null, undefined, [true, false]]
//notacion de corchetes permite llamar un solo valor del array:
console.log(arr[4[0]]); //imprime el valor true que se encuentra en el array
let arr2 = new Array("B", 2);
console.log(arr2);

if(arr.length >= 5){
    console.log("Tiene más de 5 elemento");
}

if(arr[4][0] === true){
    console.log("Es verdad");
}


//objetos
console.log("OBJETOS");

//clave/valor
const persona={
    nombre: "Thady",
    edad: 26,
    hobbies: [
        "cantar",
        "aprender",
        "Maquillarme"
    ],
    auto:{
        marca: "VW",
        modelo: "bettle",
        year: 2010
    },
    saludar: function (){
        return "Hola";
    }
}

console.log(persona);

//notacion de punto
// permite visualizar propiedades dentro los objetos
console.log(`Mi nombre es ${persona.nombre}`);
console.log(`Mi hobbie favorito es ${persona.hobbies[2]}`); //llamar un elemento de un arreglo dentro de un objeto
console.log(`La marca de mi carro es ${persona.auto.marca}`); //llamar un elemento de un objeto dentro de un objeto.
console.log(persona.saludar()); //llamar el resultado de una función dentro de un objeto

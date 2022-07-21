alert("si te vas a casar conmigo ¿o qué?"); //comentario de una sola linea
/*
Este es un 
comentario
multilinea o
de bloque
*/

/*variables en el caso de js es necesario usar las palabras reservadas
let(se puede mutar la variable), const(es para constantes y no se puede 
mutar el valor) y var(aún no especificado)*/

let miVariable = "Thady";

console.log(miVariable);

const apellido = "Díaz";
console.log(apellido);

miVariable = "Ana Thady";

console.log(miVariable, apellido);

// apellido = "Díaz Salmerón"; Esta orden genera error porque const no puede modificarse

console.log(typeof miVariable); //para saber el tipo de una variable
console.log(typeof "texto");
console.log(typeof 8903); //tipeof también dice el tipo de valores 
console.log(typeof null);

/* datos primitivos
1. string -- cadena ejem. "texto" "número" "35" "Hola mundo"*/

//2. Numeros --Casos con números

let varNum= 25;
console. log(varNum + 15);

varNum = varNum *10;
console.log(varNum);

//concatenación unir dos cadenas de texto o un num y un texto mediante un +
let a = 1;
let b = "1";
let c = "2";

console.log(a+b);
console.log(b+c);
//el resto de signos aritmeticos (* - /) realizan la operación si detectan que hay num
console.log(a*c);
console.log(b*c);

//3. Boolean -- Boleano datos logicos (true o false)
let verdadero = true;
let falso = false;
console.log(verdadero, falso);

// 4. null -- nulo, un valor vacio

let varNull = null;
console.log(varNull);

//5. undefined- asusencia completa de valor, variable declaradapero sin asignación de valor.
let variable;
console.log(variable);


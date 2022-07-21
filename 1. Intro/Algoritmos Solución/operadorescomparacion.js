//igualdad
console.log("igualdad");
console.log(5 == 5); //true
console.log("hola" == "adios"); //false
console.log("hola" == "Hola"); //false
console.log("hola" == "hola");  //true
console.log("5" == 5); //caso especial, requiere el ===

console.log("comparación estricta ===");
// esta comparación revisa también que el dato sea del mismo tipo 
console.log("5" === 5); //false
console.log("1"=== true); //false
console.log(0 === false); //false
console.log("5" !== 5); //True

// desigualdad
console.log("desigualdad");
console.log(5 != 5); //False
console.log("5" != 5); //False
console.log(5 != 7); //True
console.log("hola" != "adios"); //True
console.log("hola" != "hola"); //False

//mayor que
console.log("Mayor que"); 
console.log(20 > 8); //true
console.log(40 > 50); //false
console.log(20 > 20); //false

//Mayor o igual
console.log("mayor o igual"); 
console.log(20 >= 20); //true

//menor que
console.log("menor que");
console.log(80<100); //true
console.log(5 < 2); //false

//Menor o igual
console.log("menor o igual");
console.log(30 <= 30); //true

//LAS COMPARACIONES FUNCIONAN MÁS PARA NUMEROS 
//LAS COMPARACIONES ENTRE CADENAS DEPENDEN DEL NUMERO QUE LA CADENA TENGA (MIN MAYORES QUE MAYUS)

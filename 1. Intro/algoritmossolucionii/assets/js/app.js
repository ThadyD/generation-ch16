function saludar(){
    console.log("Hola Mundo")
}

// saludar()

//ARREGLOS
let num = [1, 2, 3, 4, 5, 6];
console.log(num);

let arr1 = new Array (8, 3, 2, 6);
console.log(arr1);

//usar un arreglo
const arr = [4, 3, 9, 2, 5];
console.log(arr);
//notación de corchetes
console.log(arr [3]);

//agregar o cambiar elementos
arr[5] = 25;
console.log(arr);
//tambien puede ser arr.splice(2,1,7) (locacion, cantidad de elementos, nuevo numero)

//propiedades de los arreglos
//**encuentras todos los metodos en developer.mozilla.org **
    //length() 
    //nos dice la longitud (cantidad de elementos)
console.log(arr.length);

const frutas = ["manzana", "platano"];
console.log(frutas.length);
    //push() 
    //agrega un elemento al final de la lista
frutas.push("Naranja");
console.log(frutas);

let fruta = "Toronja"
frutas.push(fruta);
console.log(frutas);

    //pop() 
    //el ultimo elemento del arreglo

let elementoBorrado = frutas.pop(); //de esta manera guardamos en una variable el elemento que se esta borrando.
console.log(elementoBorrado);
console.log(frutas);

    //unshif() 
    //agregar un elemento al principio del arreglo
let devolver = frutas.unshift("uva", "Pera");
console.log(frutas);
console.log(devolver);

    //shif()
    //Elimina o devuelve el primer elemento del arreglo.
frutaeliminada1 = frutas.shift() //de nuevo lo converimos en variable para guardarlo
frutaeliminada2 = frutas.shift()
frutaeliminada3 = frutas.shift()
frutaeliminada4 = frutas.shift()
console.log(frutas);

    //splice
    //elimina o remplaza un valor(vease linea 23)
const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"]; 
personas.splice(1,1); //borrar a Dani
console.log(personas);
    
    //indexOf
    //dice el indice del lugar donde se encuentra el valor dentro del arreglo.
console.log(personas.indexOf("Maria"));

//Matrices

const newArr = [1, 45, "hola", "adios", true, null, [30, 31, 32], ["azul", "amarillo", "Verde"]];
console.log(newArr)
console.log(newArr[6][1]);
console.log(newArr[7][1]);

//objetos (same as diccionarios en python)
//guarda pares de valores en formato key - value

const obj = {
    nombre: "Ana Thady", 
    edad: 26,
    color: "Morado",
    hobbies: ["Series", "Maquillaje", "tik tok"],
    newArr: newArr
};
console.log(obj);

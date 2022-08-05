/* Arreglos */
/* Coleccion de elementos */
/* Cada elemento ocupa una posicion */
/* Esa posicion se conoce como indice y comienza a partir de 0 */

let arr = [1,2,3,4];
console.log(arr);

/* propiedades = describen el objeto */
/* metodos = acciones que puede realizar */

console.log(arr[2]);
arr[4] = 100;
arr[4] = "Hola";
console.log(arr);


/* metodos de arreglos */

const arreglo = ["adios"];

/* push () */
/* agrega elementos al final */
arreglo.push(2);
arreglo.push(false);

let num = 500;

arreglo.push(num);

console.log(arreglo);

/* unshit () */
/* agrega elementos al inicio del arreglo */
arreglo.unshift("A");
arreglo.unshift("B");

console.log(arreglo);


console.log(typeof (arreglo[4]));

/* metodos para quitar elementos */
/* pop */
/* quita un elemento del final de un arreglo */

let dato1 = arreglo.pop();
console.log(dato1);

console.log(arreglo);

/* shift () */
/* nos permite quitar un elemento del inicio de un arreglo */

let dato2 = arreglo.shift();
console.log(dato2);
console.log(arreglo);

/* splice */
/* quita una parte de cualquier elemento de nuestro arreglo */
/* permite reemplazar un elemento */
/* permite insertar un elemento en una posicion en especifico */

arreglo.splice(1, 1, "parangaricutiricuaro", 568980);
/* splice(
    1-posicion de inicio,
    2-cantidad de elementos a afectar y si se coloca 0 no elimina nada,
    3-elementos que queremos insertar)*/
console.log(arreglo);


/* modifican el arreglo original */

/* metodos que no modifican el arreglo original */
/* hacen una copia, modifican esa copia */

/* slice */
/* cortar partes de un arreglo */
let dato3 = arreglo.slice(0, 2)

/* debemos indicar un rango */
/* genera un arreglo con los elementos cortados */

console.log(dato3);

console.log(arreglo);


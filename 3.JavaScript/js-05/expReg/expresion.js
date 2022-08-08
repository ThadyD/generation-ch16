//es un metodo que sirve para encontrar elementos dentro de una cadena de texto. Se realiza de lasiguiene manera:

let texto = "hoy parece que va a salir el sol";
let texto01 = "la espero en el aereopuerto de LA"; //estos son los textos donde se busca

let buscar1 = /LA/; //esta variable define lo que vamos a buscar.
console.log(buscar1.test(texto01)); //se usa la notación de texto y el metodo test para buscar.

let buscar2 = /[ao]/ //busca los dos elementos o más que se hayan asignado dentro del corchete.
console.log(buscar2.test(texto));

let texto03 = o = 9 
let buscar3 = /[1-5]/; //busca en el rango asignado, en este caso si debe ser sin espacios para que el rango sea bien leido.
console.log(buscar3.test(texto03));

let texto04 = "los números primos son 235, 7 dentro de los 10 primeros números"
let buscar4 = /\d{5}/; //busca si hay cifras con la cantidad de digitos especificados.
console.log(buscar4.test(texto04));

let texto05 = "usuarid@servidor.com";
let buscar5 = /[\w]+@{1}[\w]+\.[a-z]{2,3}/; //busca correos electronicos.
console.log(buscar5.test(texto05));


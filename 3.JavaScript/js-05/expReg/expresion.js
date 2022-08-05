//es un metodo que sirve para encontrar elementos dentro de una cadena de texto. Se realiza de la siguiene manera:

let texto = "hoy parece que va a salir el sol";
let texto01 = "la espero en el aereopuerto de LA"; //estos son los textos donde se busca
let buscar = /LA/; //esta variable define lo que vamos a buscar.
console.log(buscar.test(texto01)); //se usa la notación de texto y el metodo test para buscar.
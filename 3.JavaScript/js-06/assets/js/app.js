// console.log(document);

console.log(document.getElementById("parrafo1").textContent);

const parrafo1 = document.getElementById("parrafo1");

console.log(parrafo1.textContent);

parrafo1.textContent = "Hola desde el párrafo1"; //guardar el parrafo dentro de una variable permite hacerle modificaciones

console.log(parrafo1.textContent);

console.log(parrafo1.style);

parrafo1.style.color = "red"
parrafo1.style.backgroundColor = "yellow";
//este cambio de estilo es algo que se puede hacer pero que no es necesariamente una practica ni comun ni muy adecuada.

//querySelector()
//usa la misma sintaxis para llamar a los elementos que css
//etiqueta = p
//clase = .parrafo
//id = #parrafo1


const parrafo2 = document.querySelector(".parrafo");
console.log(parrafo2.textContent);

parrafo2.textContent += "Modificando el contenido desde javascript"

//querySelector(all) //lista de nodos - nodeList
//la recopilación de todos los elementos con la clase especificada tiene algunos atributos del array por lo que se puede iterar con algunos metodos de array. ejemplo:

const parrafos = document.querySelectorAll("p");

console.log(parrafos.length);

parrafos[2].style.fontSize = "2rem";

//css - font-size
//js - fontSize - lower camel case 

//Modificar los atributos de html
const enlace = document.getElementById("enlace");
console.log(enlace.href);

enlace.href = "https://www.youtube.com"

enlace.target = "_blanck";

enlace.textContent = "Enlace de Youtube"

        //ejercicio

const parrafo4 = document.getElementById("parrafo4")

parrafo4.textContent += "Hola desde el JavaScript"

parrafo4.style.margin = "50px";

parrafo4.style.backgroundColor = "#139929";

//apuntes

const parrafo5 = document.getElementById("parrafo5")

console.log(parrafo5.nodeName);
console.log(parrafo5.textContent);
console.log(document.body.innerHTML); //muestra el html que haya en el interior del elemento
console.log(parrafo5.outerHTML); //muestra el contenido html incluyendo al elemento

// parrafo5.innerHTML = '<a href="http://google.com"> Enlace </a>' //remplaza el contenido del elemento

// parrafo5.outerHTML = '<a href="http://google.com"> Enlace </a>' //reemplaza el elemento completo

parrafo5.innerHTML = '<div class="elemento"> Este es un div</div>';

console.log(parrafo5.classList.contains("elemento"));
    
const cambiarColor = () => {
    parrafo5.classList.toggle("elemento");
}

cambiarColor(); //se agrega la clase
cambiarColor(); //se quita la clase
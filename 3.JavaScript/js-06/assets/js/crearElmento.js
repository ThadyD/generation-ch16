// crear un elemento
const imagen = document.createElement("img");

console.log(imagen);

//modificar los atributos html del elemento
imagen.src = 'https://placeimg.com/200/200/animals';
imagen.alt = "imagenes aleatorias de animales";

//lo insertamos en un elemento padre
document.body.appendChild(imagen)
document.body.insertAdjacentElement("afterbegin", imagen)
document.body.insertAdjacentElement("afterend", imagen)
document.body.insertAdjacentElement("beforebegin", imagen)
document.body.insertAdjacentElement("beforeend", imagen)


//forma correcta de crear e insertar un elemento
//1 - se crea el elemento que contendrá la imagen
//2 - seleccionar el elemento padre
const padreImg = document.getElementById("padreImg")

//3 - crear el elemento
const imagen2 = document.createElement("img")

//4 - modificar los atributos del elemento
imagen2.src = "https://placeimg.com/200/200/nature"
imagen2.alt = "imagenes de la naturaleza"

//5 - insertar elemento
padreImg.appendChild(imagen2)

//utilizar foreach para pintar datos
const frutas = ["Toronja", "Manzana", "Mandarina", "Limón", "Granada", "Melon", "Platano", "Guayaba"]

const listaFrutas= document.getElementById("frutas")

//forma 1
/*frutas.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element
    listaFrutas.appendChild(li)
})*/

//forma2
frutas.forEach((el)=>{
    listaFrutas.innerHTML += `<li>${el}</li>`;
})
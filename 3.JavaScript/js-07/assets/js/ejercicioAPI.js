const urlGatos = "https://api.thecatapi.com/v1/images/search?limit=10"
const imgenGatito = document.getElementById("imgGatito")

console.log(imgenGatito);
const btn = document.getElementById("btn-Gatito")
console.log(btn)

//Eventos
btn.addEventListener("click", () =>{
    console.log("Boton presionado");
    //agregar la funcionalidad
    obtenerGatitoAleatorio(urlGatos)
})


async function obtenerGatitoAleatorio(url){
    const respuesta = await fetch(url)
    const datos = await respuesta.json()

    console.log(datos[0].url)

    imgGatito.src = datos[0].url
}

obtenerGatitoAleatorio(urlGatos)


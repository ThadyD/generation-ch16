const url = "https://dog.ceo/api/breeds/image/random" //por buena practica las apis se guardan dentro de una variable cuando vamos a usarlas

//respuesta de la petición
fetch(url).then((respuesta) => {
    console.log(respuesta);
})
// fetch es una api que nos permite consumir datos de internet, regresa una promesa por lo cual es equivalente lo que tenemos en el archivo promesas.js

//obtener el cuerpo de la información
fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
        console.log(datos);
    }).catch((error) => {
        console.log(error);
    })


//forma #2
async function obtenerPerritoAleatorio() {
    try {
        const respuesta = await fetch(url)
        const datos = await respuesta.json()

        console.log(datos);
    } catch (error) {
        console.log(error);
    }
}

obtenerPerritoAleatorio()

//lo importante es que lleguemos a un archivo json que es lo que nos manda a consola cualquiera de estas dos formas. 
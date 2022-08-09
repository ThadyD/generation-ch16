//variable que simula los pedidos
const saludo = "hola mundo"
const datos = [
    {
        nombre: "Ana Thady",
        apellido: "Díaz"
    },
    {
        nombre: "Ana Thady",
        apellido: "Díaz"
    },
    {
        nombre: "Ana Thady",
        apellido: "Díaz"
    },
]
//funcion para simular una peticion
function obtenerDatos() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (false){
                resolve(datos);
            } else{
                reject("nunca te quiso")
            }

        }, 2000)

    })

}

//forma #1
obtenerDatos().then((datos) =>{
    console.log(datos);
}).catch((error)=> {
    console.log("Existe un error enla petición 1");
    console.log(error);
})

//forma #2 - funciones asincronas - await async

async function funcionAsincrona(){
    try{
        const datos = await obtenerDatos()
        console.log(datos);
    }catch(error){
        console.log(error);
    }
}

funcionAsincrona()
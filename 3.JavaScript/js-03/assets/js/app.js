/***** Control de flujo *****/
//Condicionales (if) (evalua condiciones)

let condicion = "A"
if(condicion === "A"){
    // codigo que se hace si se cumple la condición A
    console.log("Entro enla condición A");

} else if(condicional === "B"){
    // codigo que se hace si se cumple la condición B
    console.log("Entro enla condición B");

} else if(condicional === "C"){
    // codigo que se hace si se cumple la condición C
    console.log("Entro enla condición C");

} else {
    // codigo que se hace si se cumple ninguna de las condiciones anteriores
    console.log("No entro en ninguna de las condiciones definidas");
}


function dividir(a,b){
if (b === 0){
    console.log("no se puede realizar la operación");
}else{
    console.log(a / b);
}
}

dividir(9,3)



/**** switch ****/
//Switch se utiliza principalmente para evaluar expresiones (opciones)
let nuevaCondicion = 1
//las comparaciones que hace Switch son estrictas (como si se usara ===)

//un comparador (==, ===, <, >) regresa un true si la condición se cumple
//switch(nuevaCondicion == 1) retorna true

switch(nuevaCondicion){
    case "hola":
        console.log("Buenos días");
        console.log("Espero que te encuentres bien");
        break;
        //si no se agrega el break despues de cada caso seguira ejecutando todo lo que se encuentre dentro de las llaves.
    
    case "Adios":
        console.log("Nos vemos");
        break;

    case "Saludo":
        console.log("Te mando un saludo");
        break;
    
    default:
        console.log("No entendí tu mensaje");
        break;
        //en el default no es necesario agregar un break ya que no hace diferencia pero se agrega por buena práctica
    }


    let edad = 30

    switch(edad >= 18){
        case true:
            console.log("mayor");
            break
        case false:
            console.log("menor");
    }

    let elegir= "sumar"

switch(elegir){
    case "sumar":
        console.log("vamos a sumar");
        break
    case "restar":
        console.log("vamos a restar");
        break
    case  "dividir":
        console.log("vamos a dividir");
        break
    case "multiplicar":
        console.log("vamos a multiplicar");
        break
    default:
        console.log("No entiendo");
        break
}

if(elegir === "sumar"){ 
    console.log("Vamos a sumar"); 

}else if(elegir == "restar"){ 
    console.log("Vamos a restar");

}else if(elegir == "dividir"){ 
    console.log("Vamos a dividir"); 

}else if(elegir == "multiplicar"){ 
    console.log("Vamos a multiplicar");

} else { 
    console.log("No entiendo"); 
} 
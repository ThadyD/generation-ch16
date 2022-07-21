//control de flujo

let name = (prompt("Ingresa tu nombre"));
console.log(name);
//Casteo convertir un tipo de dato
let edad = parseInt(prompt("Ingresa tu edad"));
console.log(edad);


if(name === "Marina" && edad === 24){
    console.log("Eres la jefa");
} else if (name === "Victor" || name === "Jonathan"){
    console.log("Eres un instructor");
} else if (name === "Magali" || name === "Maria"){
    console.log("Eres una mentora");
} else {
    console.log("Eres Alumn@");
};

//comentar algo por default solo seleccionando
//Shift + Alt + a


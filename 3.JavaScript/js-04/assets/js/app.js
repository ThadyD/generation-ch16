//for ( )

for(let i = 0; i < 5; i++){
    console.log("el valor de i es: " +  i);
}

//while
let control = 0; //control

while (control < 5){
    console.log(("while " + control));
    control ++ //modificador
}

let control2 = true;

    while (control2 === false);
        alert("estoy trabajando");

    
//do... while
// es similar al while sin embargo por condiciones este se ejecuta por lo menos una vez. Ya que la iteracion primero ejecuta y luego pregunta. Mientras que en en while y for primero se pregunta si se cumple la condicion para poder ejecutar.
let numero = 0
do{
    console.log("Do... While: " + numero);
    numero ++

} while (numero <  5);


var numRespuestas = 10;
numRespuestas = numRespuestas + 1;
numRespuestas += 1;
numRespuestas++;
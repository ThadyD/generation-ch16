console.log(1);
console.log(2);
setTimeout( () =>{
    console.log("Hola");
}, 2000)

console.log(3);
setTimeout( () =>{
    console.log("Adiós");
}, 0)

console.log(4);
for (let i= 0; i<5000; i++){
    console.log("Estoy procesando");
}

console.log(5);
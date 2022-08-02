'used strict'
function miSuma(a, b){
    let resultado = (a + b);
    console.log("la suma es: " + resultado);
};

miSuma(2, 3)

function miSuma2(a, b){
    console.log("la suma es: "+ (a+b));
};

miSuma2(4, 6)

function miProducto(a, b){
    return (a * b);
};

console.log("El producto es: " + miProducto(4,5));

function miResta(a, b){
    return (a - b);
};

res = miResta(10, 4)
console.log("la resta es: " + res);

function fullName(n, ln1, ln2){
    return(n + ln1 + ln2);
};

function miDiv(a, b){
    return (a / b);
};

console.log("Mi nombre completo es: " + (fullName("Thady ", "Díaz ", "Salmerón")));

console.log("El resultado de la división es: " + (miDiv(6,2)));
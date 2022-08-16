const suma = require("../js/suma")

//pedir un valor esperado
//comparar el resultado con el valor esperado

test("sumar 1 + 2 debe ser 3", ()=>{
    expect( suma(1,2)).toBe( 3 ); //esta linea explica el funcionamilento que se espera del fragmento de codigo testeado
})
//una buena practica es poner primero un resultado que sabemos que fallara para corroborar que el test


test("sumar 1 + 4 no debe ser 0", ()=>{
    expect( suma(1,4)).not.toBe( 0 ); //uso del not
})


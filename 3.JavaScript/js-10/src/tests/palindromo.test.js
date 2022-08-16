const palindromo = require("../js/palindromo.js");

describe("Pruebas de la fuención palindromo", () => {
    test('Debe regresar "Es un palíndromo" si ingresamos ojo', () => {
        let mensaje = "Es un palindromo";
        let palabra = "ojo"

        expect(palindromo(palabra)).toBe(mensaje)
    })

    test('No debe regrar "Es un palindromo" al ingresar generation', () => {

        let mensaje = "Es un palindromo";
        let palabra = "generation";

        expect(palindromo(palabra)).not.toBe(mensaje)

    })

    test('Al ingresar un numero debe regresar el mensaje', () => {
        let mensaje = "No es una palabra"
        let valor = 1
        expect(palindromo(valor)).toBe(mensaje)
    })
})
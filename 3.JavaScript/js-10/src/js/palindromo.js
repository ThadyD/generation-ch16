const palindromo = (palabra) => {
    if (typeof palabra == 'number') return 'No es una palabra'

    let palabraInvetida = palabra.split("").reverse().join("");
   /* if (palabra === palabraInvetida) {
        return "Es un palindromo";
    } else {
        return "NO es un palindromo";
    } */

//operador ternario para desiciones con else. funciona de la siguiente manera y suple toda la parte condicional de la función (if, else if y else):
    return (palabra === palabraInvetida) ? 'Es un palindromo' : 'No es un palindromo'; 
// (condicion) ? if : else
};

console.log(palindromo("Generation"));

module.exports = palindromo;
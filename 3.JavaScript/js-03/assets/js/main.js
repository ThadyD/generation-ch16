/*****Bucles*****/
//Es una estructura que nos permite repetir nuestro codigo equis cantidad de veces


/**For**/
// Es un ciclo controlado
/* Se le tiene que indicar lo siguiente
    * La variable con la que va a trabajar
        (i, j, k, l)
    * Condición para que se ejecute
        (separado por cunto y coma)
    * El cambio de nuestra variable de trabajo.

*/

for(let i = 0; i < 10; i++){
    console.log("El valor de i es " + i);
}

/**While **/
//ciclo no controlado
/*Solo necesita una condicion True o False. El ciclo comienza evaluando la condicion. Si condition se evalúa como true, se ejecuta el código en el bloque de código. Si condition se evalúa como false, el código del bloque de código no se ejecuta y el bucle finaliza.  */

let saludo;

while(saludo  != "Hola"){
    saludo = prompt("Saludame");

}
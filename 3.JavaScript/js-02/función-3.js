/**** Funciones como objetos ****/
function miFuncion (a, b){
    let res=0; //propiedad
    res= (a * b); //accion o proceso
    return res;
};

console.log(typeof miFuncion);
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this.apellido = apellido;
    } //estos atributos estan encapsulados.

get nombre(){
    return this._nombre //_nombre el guion bajo hace que un atributo privado (encapsulado) se convierta en publico
}
set nombre(nombre){
    this._nombre = nombre;
}


}
let persona1= new Persona("Jose" , "Perez")
console.log(persona1);

let persona2= new Persona("Ana" , "Cruz")
console.log(persona2);

persona1.nombre="Hugo Sanchez"
console.log(persona1.nombre);
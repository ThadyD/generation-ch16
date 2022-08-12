let x = 10;
console.log(x.length);

let persona = {
    nombre: "Ana Thady",
    apellido: "Díaz",
    edad: 26,
    correo: "thadydiaz@gmail.com",
    /* nombreCompleto: function(){
      return this.nombre + " " + this.apellido;*/
 
    idioma: "es",
        get idioma1(){
            return this.idioma.toUpperCase();
        }, //formas de acceder a los atributos de un objeto
        set idioma1(Lang){
        this.idioma = Lang.toLowerCase();
        }
}


console.log(persona.idioma);
console.log(persona.idioma1);
console.log(persona.idioma1);

console.log(persona.nombre);
// console.log(persona.nombreCompleto());


persona.apellido = "Soto";

console.log(persona.apellido);

persona.tel = "5516013187";

//For in
for (varPropiedad in persona){
    console.log(persona[varPropiedad]); 
}

let personaString = JSON.stringify(persona);
console.log(personaString);
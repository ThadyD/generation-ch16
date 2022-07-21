const personas = ["Maria", "Dani", "Luis", "Juan", "Camila"]; 
console.log(personas);
//borrar a Dani
personas.splice(1,1);
console.log(personas);
//Borrar a Juan
personas.splice(2,1);
console.log(personas);
//agregar a Luis
personas.splice(1,1);
personas.unshift("Luis");
console.log(personas);
//agregar tu nombre
personas.push("Thady");
console.log(personas);
//mostrar la posición de Maria
console.log(personas.indexOf("Maria"));
//Mostrar la posición de mi nombre
console.log(personas.indexOf("Thady"));

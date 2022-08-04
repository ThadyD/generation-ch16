//inicio
let carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"];
console.log(carreritas);

//Andra adelanta a Maria
carreritas.splice(4, 1)
carreritas.splice(2, 0, "Andrea")
console.log(carreritas);

//Jose es descalificado
carreritas.pop()
console.log(carreritas);

//Ingresan 3 competidores entre Lucia y Roberto
carreritas.splice(1, 0, "Cristobal", "Fernanda", "Armando")
console.log(carreritas);

//Federico se pone a la cabeza
carreritas.unshift("Federico")
console.log(carreritas);

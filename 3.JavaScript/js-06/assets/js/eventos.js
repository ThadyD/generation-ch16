function autodestruccion(){
    alert("Tu computadora se autodestruira en un minuto")
}

const boton = document.getElementById("boton");
console.log(boton);

boton.addEventListener("click", ()=>{
    alert("Tu computadora va explotar")
})

const formulario = document.getElementById("form");
formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log(formulario[0].value);
})
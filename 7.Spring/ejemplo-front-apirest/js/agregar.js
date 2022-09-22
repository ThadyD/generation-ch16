const $formulario = document.getElementById('user-form');




$formulario.addEventListener('submit', (e) => {
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let prioridad = document.getElementById('prioridad').value;
    
    if (nombre === "" && correo === "" && prioridad === "") return alert("Todos los espacios están vacíos");

    e.preventDefault();



    const datos = Object.fromEntries(
        new FormData(e.target)
    )

    console.log(datos);
    

    $formulario.reset();


    fetch('http://localhost:8080/usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: datos.nombre,
            correo: datos.correo,
            prioridad: Number(datos.prioridad),
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

});


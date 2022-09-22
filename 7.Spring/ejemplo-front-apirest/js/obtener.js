const $form = document.getElementById('formulario');
const cohorte = [];

//obtener y mostrar datos en tabla 

fetch('http://localhost:8080/usuario')

.then(response => response.json())
.then(productos =>

    productos.forEach(el => {
        if (el === null) {
            el = ""
        } else {
            const productList = document.getElementById('tabla');
            const element = document.createElement('tr');
            element.innerHTML = `
            <tr>
            <td>${el.id}</td>
            <td>${el.nombre}</td>
            <td>${el.correo}</td>
            <td>${el.prioridad}</td>

            <td><button id="${el.id}" class="btn btn-danger"
            name="eliminar">Eliminar</button>
            </td>
            <td>
            <button id="${el.id}" type="button" class="btn btn-primary"
            data-toggle="modal" data-target="#exampleModalCenter" name="editar">Editar</button>
            </td>
            </tr>
          `;
            productList.appendChild(element);
        }
    })

   /*   */

);


//

document.getElementById('tabla').addEventListener('click', function (e) {
    borrar(e.target);
    mostrar(e.target); 
})


// función del botón borrar
function borrar(elemento) {
    const fila = elemento.parentElement.parentElement;

    console.log(fila);

    if (elemento.name === 'eliminar') {

        document.getElementById("tabla").deleteRow(fila.rowIndex);

        fetch('http://localhost:8080/usuario/eliminar/' + elemento.id, {
            method: 'DELETE'
        })
            .then(res => res)
            .then(res => console.log(res))
        console.log(elemento.id)
    }


}



// mostrar elemento individual en modal

function mostrar(elemento) {
    if (elemento.name === 'editar') {

        fetch('http://localhost:8080/usuario/' + elemento.id /* , { mode: 'no-cors' } */)

            .then(response => response.json())
            .then(el => {

                const elemento = {
                    "id": el.id,
                    "nombre": el.nombre,
                    "correo": el.correo,
                    "prioridad": el.prioridad,
                    
                };

                if (el === null) {
                    el = ""
                } else {
                    const productList = document.getElementById('tablaModal');
                    const element = document.createElement('tr');
                    element.innerHTML = `
                <tr>
                    <td>${el.id}</td>
                    <td>${el.nombre}</td>
                    <td>${el.correo}</td>
                    <td>${el.prioridad}</td>
                </tr>
              `;
                    productList.appendChild(element);
                    cohorte.push(elemento);
                }

                console.log(elemento);
            })

        

    }
}





//borrar fila de tabla en modal


function borrarFila() {
    document.getElementById('tablaModal').deleteRow(1);
    cohorte.length = 0;
}




//función de actualizar elemento


$form.addEventListener('submit', e => {
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let prioridad = document.getElementById('prioridad').value;
    
    let nombreP, correoP, prioridadP;
    const elemento = cohorte;
    console.log(elemento)

    if (nombre === "" && correo === "" && prioridad === "") return alert("Todos los espacios están vacíos");

    if (nombre === "") {
        nombreP = elemento[0].nombre;
    } else {
        nombreP = nombre;
    }

    if (correo === "") {
        correoP = elemento[0].correo;
    } else {
        correoP = correo;
    }

    if (prioridad === "") {
        prioridadP = elemento[0].prioridad;
    } else {
        prioridadP = prioridad;
        
    }

    



    const data = {
        id: elemento[0].id,
        nombre: nombreP,
        correo: correoP,
        prioridad: prioridadP,
       
    }

    console.log(data);
    e.preventDefault();

     fetch('http://localhost:8080/usuario/actualizar', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(response => response.text())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    $form.reset(); 
})


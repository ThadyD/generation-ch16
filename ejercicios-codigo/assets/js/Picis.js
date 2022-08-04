let saldo = 10000

function cajero() {

    while (saldo > 0) {
        let ingreso = prompt("¿Qué operación quieres realizar? -Ingresa 1 para consulta -Ingresa 2 para retiro");

        //consulta
        if (ingreso == 1) {
            alert("El saldo disponible es: " + saldo);

        //retiro
        } else if(ingreso == 2) {
            let retiro = (Number(prompt("Ingrese el monto que desea retirar: ")));
            //si hay saldo suficiente
            if (retiro <= saldo){
                saldo = (saldo - retiro);
                alert("Usted ha retirado " + retiro + " pesos");
            } else{ //si no hay saldo suficiente
                alert("Saldo insuficiente")
            }
            
        } 
    }
}

cajero()
package com.disa.excepcion;

public class TestLogin {
    public static void main(String[] args) {
        try {
        Aplicacion app = new Aplicacion();
// intento el login
        Usuario u = app.login("juan", "juan123sito");
// muestro el resultado
        System.out.println("\t\t -->" + u.getNombre());
        System.out.println("\t\t -->" + u.getEmail());

        } catch (Exception ex) {
//ocurrio un error
            System.out.print("Servicio temporalmente interrumpido: ");
            System.out.println(ex.getMessage());
        }
    }
}
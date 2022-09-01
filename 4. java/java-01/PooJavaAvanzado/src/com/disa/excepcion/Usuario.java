package com.disa.excepcion;

public class Usuario {
    private String usrname;
    private String password;
    private String nombre;
    private String email;

    public String getUsrname() {
        return usrname;
    }
    public String getPassword() {
        return password;
    }
    public String getNombre() {
        return nombre;
    }
    public String getEmail() {
        return email;
    }
    public void setUsrname(String usrname) {
        this.usrname = usrname;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setEmail(String email) {
        this.email = email;
    }
}
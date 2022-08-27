package Repaso;

public class Animal {
    private String raza;
    private String nombre;
    private int edad;

    public Animal(String nuevoNombre){
        nombre = nuevoNombre;
    }
    public int getEdad(){
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }
}

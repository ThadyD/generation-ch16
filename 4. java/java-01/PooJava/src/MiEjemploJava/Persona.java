package MiEjemploJava;

public class Persona {
    private String nombre;
    private int edad;  //le agregamos el private para asegurar que los datos sean exclusivos de la clase persona
    private int nss;

    public Persona(){

    }

    //Persona(){ //así se declara un constructor
        //caracteristicas: es una función sin tipo identificado (sin modificador)
        //click derecho -> Generate -> Constructor -> Seleccionamos los atributos y/o metodos que se quieren inicializar
        //el metodo set y get se pueden encontrar en la misma ruta.
   //}

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setNss(int nss) {
        this.nss = nss;
    }

    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }

    public int getNss() {
        return nss;
    }

    public Persona(String nombre, int edad, int nss) {
        this.nombre = nombre;
        this.edad = edad;
        this.nss = nss;
    }

    void caminar(){
        System.out.println("Yo iba caminando, birip... birip");
    }
    void dormir(){
        System.out.println("zzzzzzzzzzzzzzzzzzzz");
    }

}

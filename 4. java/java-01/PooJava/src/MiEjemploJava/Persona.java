package MiEjemploJava;

public class Persona {
    private String nombre;
    private int edad;  //le agregamos el private para asegurar que los datos sean exclusivos de la clase persona
    private int nss;


    //Persona(){ //así se declara un constructor
        //caracteristicas: es una función sin tipo identificado (sin modificador)
        //click derecho -> Generate -> Constructor -> Seleccionamos los atributos y/o metodos que se quieren inicializar
   //}

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

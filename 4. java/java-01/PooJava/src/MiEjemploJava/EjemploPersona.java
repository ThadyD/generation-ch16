package MiEjemploJava;

public class EjemploPersona {
    public static void main(String[] args) {
    Persona p = new Persona();
    p.setNombre("Dora");
    p.setEdad(32);
    p.setNss(1246845);

        System.out.println("el valor de la variable de instancia p.nombre ->" + p.getNombre());
        System.out.println("el valor de la variable de instancia p.Edad ->" + p.getEdad());
        System.out.println("el valor de la variable de instancia p.Nss ->" + p.getNss());
    }

}

public class EjemploVariables {
    public static void main(String[] args) {
        String lugar = "en Java"; //definir una variable requiere del Tipodedato nombreDeVariable = lo que se va a guardar
        String titulo = "Ejemplos de variables";
        char espacio = '\u0020'; //esta es la forma en que se define una variable con un caracter. es necesario buscar el valor del caracter en el unicode.

        System.out.println(titulo + espacio + lugar);

        char caracter = 'f';
        System.out.println("espacio= " + espacio);
        System.out.println("char corresponde en byte: " + Character.BYTES);
        System.out.println("char corresponde en bits: " + Character.SIZE);
        System.out.println("char valor máximo: " + Character.MAX_VALUE);
        System.out.println("char valor mínimo: " + Character.MIN_VALUE);

        int numeroEntero    = 1;
        System.out.println("numeroEntero= " + numeroEntero);
        System.out.println("int corresponde en byte: " + Integer.BYTES);
        System.out.println("int corresponde en bits: " + Integer.SIZE);
        System.out.println("int valor máximo: " + Integer.MAX_VALUE);
        System.out.println("int valor mínimo: " + Integer.MIN_VALUE);

        float numeroFloat = .000000000015f; //1.5e-10f
        System.out.println("numeroFloat= " + numeroFloat);
        System.out.println("float corresponde en byte: " + Float.BYTES);
        System.out.println("float corresponde en bits: " + Float.SIZE);
        System.out.println("float valor máximo: " + Float.MAX_VALUE);
        System.out.println("float valor mínimo: " + Float.MIN_VALUE);

        double numeroDouble = 3.444567E39; //1.5e-10f
        System.out.println("numeroDouble= " + numeroDouble);
        System.out.println("double corresponde en byte: " + Double.BYTES);
        System.out.println("double corresponde en bits: " + Double.SIZE);
        System.out.println("double valor máximo: " + Double.MAX_VALUE);
        System.out.println("double valor mínimo: " + Double.MIN_VALUE);


        short valorShort = 1;
        System.out.println("valorShort= " + valorShort);
        System.out.println("short corresponde en byte: " + Short.BYTES);
        System.out.println("short corresponde en bits: " + Short.SIZE);
        System.out.println("short valor máximo: " + Short.MAX_VALUE);
        System.out.println("short valor mínimo: " + Short.MIN_VALUE);

        long valorLong = 1237512345;
        System.out.println("valorLong= " + valorLong);
        System.out.println("long corresponde en byte: " + Long.BYTES);
        System.out.println("long corresponde en bits: " + Long.SIZE);
        System.out.println("long valor máximo: " + Long.MAX_VALUE);
        System.out.println("long valor mínimo: " + Long.MIN_VALUE);


        boolean valorBoolean = (3-2 == 4);
        System.out.println("valorBoolean= " + valorBoolean);

        var miVar = '2';
        System.out.println("miVar= " + miVar);



    }

}


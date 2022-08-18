public class EjemploString {
    public static void main(String[] args) {
        String curso = "Curso de java";
        System.out.println("curso: " + curso);
        String nombre = "Thady";
        String resultado = new String("Curso de java");
        System.out.println("resultado= " +resultado);

        boolean esigual = curso == resultado; //el == compara la forma de declarar por lo que hace diferencia entre una referncia literal y una referencia de tipo objeto+
        System.out.println("esigual: " + esigual); // false

        esigual = curso.equals(resultado); //equals compara el valor asignado en las variables (lo que contienen)
        System.out.println("esigual: " + esigual); //true

        //ignoreCase se usa para ignorar las letras mayusculas

        String concat = curso + " " + nombre;
        System.out.println("concat= " + concat);
        //String concat1 = concat.concat(nombre);
        String dia = "jueves";
        String concat1 = concat.concat(" ").concat(dia); //curso + nombre + dia
        System.out.println("concat 1 = " + concat1); //el metodo concat solo puede sera asociado a cadenas. por tanto si se intenta usar como number.concat() nos generara error. Su resultaro sera una cadena igualmente.
    }

}
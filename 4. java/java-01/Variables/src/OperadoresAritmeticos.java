import java.util.Scanner;

public class OperadoresAritmeticos {
    public static void main(String[] args) {
        int i = 5, j = 4, suma = i + j;
        System.out.println("suma = " + suma); //suma esta definida por lo que el resultado sera 9

        System.out.println("i + j= " + i + j); //concatena por lo que el resultado sera 54
        System.out.println("i + j= " + (i +j)); //realizara la suma ya que estan concatenando una cadena y una operación aislada por ()

        int resta = i - j;
        System.out.println("resta = " + resta); //1
        System.out.println("i - j = " + (i - j)); //1

        int multi = i * j;
        System.out.println("multi = " + multi);
        System.out.println("i * j =" + (i * j));

        int div = i / j;
        System.out.println("div = " + div); //al estar en una variable int la respuesta que nos dara sera unicamente un entero.
        float div1 = (float)i /(float)j; //este es un ejemplo de casteo que es cambiar el tipo de dato con que se opera, en este caso de entero a flotante.
        System.out.println("div1 = " + div1);

        int resto = i % j;
        System.out.println("resto = " + resto);
        resto = 8 % 5;
        System.out.println("resto = " + resto);

        Scanner scanner = new Scanner(System.in); //in hace referencia que ahora se espera una entrada
        System.out.println("¿cual es tu nombre?");
        String nombre = scanner.next(); //aqui se pide que ingrese el dato de nombre
        System.out.println("Hola " + nombre);
        System.out.println("¿Cual es tu edad?");
        String edadString = scanner.next(); //aqui se pide que ingrese el dato de edad
        int edad = Integer.parseInt(edadString); //cambiamos edad de string a entero
        System.out.println("tienes " + edad);


    }
}

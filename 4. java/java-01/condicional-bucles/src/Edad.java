import java.util.Scanner;

public class Edad {
    public static void main(String[] args) {
        System.out.println("esta es la clase Edad");
        //determinar si una persona es mayor de edad

        //tener la edad - pedir al usuario
        //hacer una condición para verificar la edad
        Scanner escaner = new Scanner(System.in);
        System.out.println("Escribe tu edad: ");
        int edad = escaner.nextInt();
        escaner.close();


        if(edad >= 18){
            System.out.println("Eres mayor de edad");
        } else {
            System.out.println("Eres menor de edad");
        }

        //operador ternario

        String resultado = (edad >= 18) ? "Eres mayor de edad": "Eres menor de edad";
        System.out.println(resultado);
    }

}

package MetPrincipal;
import MiEjemploJava.Persona;
import MiFecha.Fecha;
import Repaso.Animal;
import MiSaludo.Saludo;

import java.util.Scanner;


public class EjecutaT {
    public static void main(String[] args) {
        MenuOp menuOp = new MenuOp();
        Scanner sc = new Scanner(System.in);
        int op = 0;
        do{
            System.out.println("Elija una opción");
            menuOp.menu();
            op = sc.nextInt();
            switch (op) {
            case 1:
                Saludo s = new Saludo();
                s.saludar();
                System.out.println(s.saludar0());
                break;
            case 2:
                Persona p = new Persona();
                p.setNombre("Dora");
                p.setEdad(32);
                p.setNss(1246845);

                System.out.println("el valor de la variable de instancia p.nombre ->" + p.getNombre());
                System.out.println("el valor de la variable de instancia p.Edad ->" + p.getEdad());
                System.out.println("el valor de la variable de instancia p.Nss ->" + p.getNss());
                break;
            case 3:
                Fecha hoy = new Fecha(25, 8, 2022);
                hoy.format();
                break;
            case 4:
                Animal miAnimal = new Animal("Falco");
                miAnimal.setEdad(3);
                System.out.println("El nombre es: " + miAnimal.getNombre());
                System.out.println("y tiene " + miAnimal.getEdad() + " años");
                break;
            default:
                System.out.println("Opción invalida");
        }
        }while(op < 5);
    }
}

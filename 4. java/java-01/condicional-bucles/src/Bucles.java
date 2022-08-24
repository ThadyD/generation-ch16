import java.util.Objects;
import java.util.Scanner; //importa el paquete de scanner. con un java.util.* se importan todos los paquetes

public class Bucles {
    public static void main(String[] args) {
        System.out.println("Bucles");

        for(int i= 0; i <= 10; i++){
            System.out.println(i);

            //while
            //bucle no controlado
            //la condición se debe de modificar dentro del while

            //Mientras la condidición sea true}
            String condicion = "";
            Scanner sc = new Scanner(System.in);
            while(!Objects.equals(condicion, "Hola"));{
                System.out.println("Saludame:");
                condicion = sc.next();


                //do while ejecuta la acción aunque sea solo una vez
                do{
                    System.out.println("Saludame x2");
                    condicion = sc.next();
                }while(!Objects.equals(condicion, "Hola"));
            }




        }

    }

}

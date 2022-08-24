import java.util.Scanner;
public class ejercicio {
    public static void main(String[] args) {
     /*   String[] estrellitas = {" "};
        for(int i = 0; i<6; i++) {
            for (int j = 0; j < 6; j++) {
                System.out.println(estrellitas[i]);
                    estrellitas[i] += "*";
            }

        }*/

        Scanner sc = new Scanner(System.in);
        System.out.println("Indique la cantidad de estrellas");
        int numEstrellas = sc.nextInt();
        System.out.println("Indique la direccion (Ascendente,Descendente)");
        String direccion = sc.next();
        switch (direccion){
            case "Ascendente": for(int i=1; i<=numEstrellas ; i++){
                for (int j=0; j<i; j++){ System.out.print("*"); } System.out.println(""); }
                break;
            case "Descendente": for(int i=numEstrellas; i>=1 ; i--){
                for (int j=0; j<i; j++){ System.out.print("*"); } System.out.println(""); }
                break;
            default: System.out.println("Opcion no valida"); }
    }

}

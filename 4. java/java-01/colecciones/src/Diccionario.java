import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Diccionario {
    public static void main(String[] args) {
        Map<String, String> inglesEspanol = new HashMap<String,String>();
        inglesEspanol.put("Run","Correr");
        inglesEspanol.put("Play","Jugar");
        inglesEspanol.put("Jump","Brincar");
        inglesEspanol.put("Fly","Volar");
        inglesEspanol.put("Sing","Cantar");
        inglesEspanol.put("Dance","Bailar");
        inglesEspanol.put("Read","Leer");
        inglesEspanol.put("Get","Tomar");
        inglesEspanol.put("Scream","Gritar");
        inglesEspanol.put("Drink","Beber");
        inglesEspanol.put("Talk","Hablar");
        inglesEspanol.put("Walk","Caminar");
        inglesEspanol.put("Eat","Comer");
        inglesEspanol.put("Wake up","Despertar");
        inglesEspanol.put("Greet","Saludar");
        inglesEspanol.put("Fix","Arreglar");
        inglesEspanol.put("Push","Empujar");
        inglesEspanol.put("Drive","Manejar");
        inglesEspanol.put("Forgot","Olvidar");
        inglesEspanol.put("Program","Programar");


        System.out.println("Escribe la palabra en Inglés:");
        Scanner sc = new Scanner(System.in);
        String respuesta = sc.nextLine();
        String traduccion = inglesEspanol.get(respuesta);
        System.out.println(traduccion);

            

    }
}

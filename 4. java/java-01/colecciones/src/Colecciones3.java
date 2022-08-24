import java.util.*;

public class Colecciones3 {
    public static void main(String[] args) {
        //int -> Integer
        //char -> Character
        //float -> Float
        //double -> Double
        System.out.println("ArrayList");
        List<String> comidas = new ArrayList<String>();
        comidas.add("Pozole");
        comidas.add("Tostadas");
        comidas.add("Ceviche");
        comidas.add(2,"Esquites");

        System.out.println(comidas);

        List<Integer> numeros = new ArrayList<Integer>(Arrays.asList(1,2,3,56,789));
        System.out.println(numeros);
        System.out.println("____________________________");
        System.out.println("HashSet");

        List<String> ciudades = new ArrayList<String>();
        ciudades.add("CDMX");
        ciudades.add("GDL");
        ciudades.add("MTY");
        ciudades.add("MTY");
        System.out.println(ciudades);


        Set<Boolean> verdad = new HashSet<Boolean>(Arrays.asList(true, false)); //no acepta valores duplicados
        System.out.println(verdad);

        System.out.println("____________________________");
        System.out.println("HashMap");

        Map<Integer, String> alumnos = new HashMap<Integer,String>();
        alumnos.put(1,"Pedro");
        alumnos.put(2,"Sofía");
        alumnos.put(3,"Salma");
        alumnos.put(4,"Miguel");
        alumnos.put(4,"Saúl"); //de esta manera se puede cambiar un valor, el dato se sobre escribe si usamos una key ya asignada
        alumnos.put(5,"Miguel"); //esto se agregara como un nuevo par de valores
        System.out.println(alumnos);
        System.out.println(alumnos.size());
        System.out.println(alumnos.values());//lista de valores
        System.out.println(alumnos.keySet());//lista de las llaves
        System.out.println(alumnos.get(2));

        for(int i=0; i<alumnos.size(); i++) {
            Object llaves = alumnos.keySet().toArray()[i]; //.toArray es un metodo del tipo object
            System.out.println(alumnos.get(llaves));
        }
        for(Integer llave : alumnos.keySet()) {
            System.out.println(llave + " " + alumnos.get(llave));
        }
    }
}

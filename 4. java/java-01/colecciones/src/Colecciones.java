import java.util.ArrayList;
import java.util.List;

public class Colecciones {
    public static void main(String[] args) {
        //List -- ArrayList
        //los valores toman el orden en que fueron agregados
        //Permite tener valores duplicados
        //Es una colección de objetos del mismo tipo

        List<String> meses = new ArrayList<String>();
        meses.add("Enero");
        meses.add("Febrero");
        meses.add("Marzo");
        meses.add(1, "Abril"); //de esta manera podemos ingresar datos en la lista (index, elemento a agregar)

        String mes = meses.remove(3); //remove sirve para eliminar el elemento, guardarlo en una variable permite saber que objeto se remueve.

        System.out.println(meses);

        System.out.println(mes);
        System.out.println(meses.get(0)); //imprime un elemento de la lista
        System.out.println(meses.size()); //imprime la longitud de la lista

        for(String elemento : meses){
            System.out.println(elemento);
        }

        //List<int> numeros = new ArrayList(<int>);

        int num1 = 10;
        Integer num2 = 10;

        System.out.println(num1 + 10);
        System.out.println(num2 - 5);

        //System.out.println(num2.getClass().getSimpleName());



    }
}
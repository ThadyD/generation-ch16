public class Arreglos {

    public static void main(String[] args) {
        System.out.println("Arreglos");

        //a diferencia de otros lenguas de programación en java no se pueden mezclar tipos de datos
        int[] numeroAleatorios = {1,2,3,4,5,6};
        String[] valores = {"Hola", "Adios", "etc"};
        //byte otrosNumeros[] = {1,2,3}; //esta es otra forma de definir un arreglo pero que se utiliza rara vez

        //Los arreglos tienen un tamaño definido que se establece cuando se crean.
        char[] caracteres = new char[4];
        caracteres[0] = 'h';
        caracteres[1] = 'o';
        caracteres[2] = 'l';
        caracteres[3] = 'a';

        System.out.println(numeroAleatorios.length);
        System.out.println(valores[2]); //usando metodo de corchetes también se puede imprimir solo un elemento del arreglo.
        System.out.println(caracteres);


        //for each
        for(String elemento : valores) {
            System.out.println(elemento);
        }
        for(int numero : numeroAleatorios){
            System.out.println(numero);
        }
    }
}

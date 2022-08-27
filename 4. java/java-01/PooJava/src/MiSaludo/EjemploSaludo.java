package MiSaludo;

public class EjemploSaludo {
    public static void main(String[] args) {
        //sintaxis de la instacia
        Saludo objSaludo; //declaración
        objSaludo = new Saludo(); //construcción
        objSaludo.saludar(); //invocación

        Saludo objSaludo0 = new Saludo();
        System.out.println(objSaludo.saludar0());
        System.out.println("este es otro objeto ->" + objSaludo0.saludar0());

        objSaludo.textoS = "Hola"; //aqui se redefinen las variables definidas en la clase saludo
        objSaludo0.a = 4;

        System.out.println("objSaludo = " + objSaludo);
        System.out.println("objSaludo0 = " + objSaludo0); //las salidas de estos sout nos demuestrasn que no son el mismo objeto
    }


}
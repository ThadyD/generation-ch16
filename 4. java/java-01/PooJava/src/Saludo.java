public class Saludo {
    String textoS= "Hola Mundo Java oop"; //declarando la variable aquí nos permite usarla publicamente
    int a = 3;
    void saludar(){
        System.out.println("Hola Java OOP");
    }
    String saludar0(){
        //String textoS= "Hola Mundo Java oop"; si se declara aquí quedaria encapsulada y no podria usarse
        return textoS;


    }

}

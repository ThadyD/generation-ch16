package Repaso;

public class Aclaracion {
    private int atributo1;
    private int atributo2;
    private String atributo3;

    public Aclaracion(int atr1, int atr2, String atr3){
        atributo1=atr1;
        atributo2=atr2;
        atributo3=atr3;
    }

    public static void main(String[] args) {
        Aclaracion ac = new Aclaracion(5,18, "x");
        System.out.println(ac.atributo1+ " " + ac.atributo2 + " " + ac.atributo3);
    }













}

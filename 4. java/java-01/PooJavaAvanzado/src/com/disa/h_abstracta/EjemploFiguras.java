package com.disa.h_abstracta;

public class EjemploFiguras {
    public static void main(String[] args) {
        //no se puede hacer na instancia de una clase abstracta
        //por eso tiene que definirse así
        Triangulo t = new Triangulo (5,10);

        System.out.println(t);

        Circulo c = new Circulo(5);
        System.out.println(c);
    }
}

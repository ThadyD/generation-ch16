package com.disa.herencia;

public class BasePadre {
    private int a;
    private double b;
    private String c;

    public BasePadre(){

    }

    public BasePadre(int a, double b, String c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public void visualizarA(){
        System.out.println(a);
    }

    public void visualizarABC(){
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }


    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }




}

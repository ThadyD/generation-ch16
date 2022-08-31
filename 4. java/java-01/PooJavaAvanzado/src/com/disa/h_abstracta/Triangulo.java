package com.disa.h_abstracta;

public class Triangulo extends FigurasGeometricas{
    private float base;
    private float altura;

    public Triangulo(float base, float altura){

        super("Triangulo");
        this.base = base;
        this.altura = altura;
    }

    @Override //sobre escribe el método
    public float area(){
        return (getBase()*getAltura())/2;
    }

    public float getBase() {
        return base;
    }

    public float getAltura() {
        return altura;
    }

}

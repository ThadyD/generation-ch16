package com.disa.herencia;
import com.disa.herencia.Concentrador;
import com.disa.herencia.Hija;

public class EjemploHerencia {

    public static void main(String[] args) {

        Hija h = new Hija();
        h.visualizarA();

        Hijo ho = new Hijo();
        ho.visualizarABC();

        BasePadre obj = new BasePadre();
        obj.setA(253255);
        System.out.println("Atributo de Clase Base Padre" + h.getA());
    }

}

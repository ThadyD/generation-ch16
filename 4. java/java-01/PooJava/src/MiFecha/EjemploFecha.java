package MiFecha;

public class EjemploFecha {
    public static void main(String[] args) {
        Fecha hoy = new Fecha(25, 8, 2022);
        hoy.format();
        hoy.setDia(26);
        hoy.format();

        //otra forma de definirlo seria
        //Fecha hoy = new Fecha ();
        //hoy.setDia(25);
        //hoy.setMes(8);
        //hoy.setAnio(2022);
        //System.out.println(hoy.format());

    }


}



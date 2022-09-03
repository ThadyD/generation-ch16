package com.disa.excepcion;

public class ErrorFisicoException extends Exception{

    public ErrorFisicoException(Exception ex){
        super("<-- ocurrio un error fisico -->", ex);

    }






}

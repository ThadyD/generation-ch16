package com.generation.atds.Models;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "Usuario")

public class UsuarioModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(unique = true, nullable = false) 
 private int id;
 private String nombre;
 private String clave;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getNombre() {
	return nombre;
}
public void setNombre(String nombre) {
	this.nombre = nombre;
}
public String getClave() {
	return clave;
}
public void setClave(String clave) {
	this.clave = clave;
}
}

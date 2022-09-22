package com.generation.mvc.models;

import java.util.List;

import javax.persistence.*;



@Entity
@Table(name = "usuario")
public class UsuarioModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Long id;
	private String nombre;
	private String correo;
	private Integer prioridad;
	
	@OneToMany(mappedBy = "user")
    private List<PostModel> posts;
	
	@OneToOne(mappedBy = "usuario_id")
	private DireccionModel direccion;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public Integer getPrioridad() {
		return prioridad;
	}
	public void setPrioridad(Integer prioridad) {
		this.prioridad = prioridad;
	}
	public List<PostModel> getPosts() {
		return posts;
	}
	public void setPosts(List<PostModel> posts) {
		this.posts = posts;
	}
	public DireccionModel getDireccion() {
		return direccion;
	}
	public void setDireccion(DireccionModel direccion) {
		this.direccion = direccion;
	}	
	
}

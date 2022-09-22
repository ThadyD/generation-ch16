package com.generation.mvc.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.generation.mvc.models.UsuarioModel;
import com.generation.mvc.services.UsuarioService;


@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	UsuarioService usuarioService;
	
	//obtener todos los usuarios
	@GetMapping() // http://localhost:8080/usuario
	public ArrayList<UsuarioModel> obtenerUsuarios(){
        return usuarioService.obtenerUsuario();
    }
	
	@GetMapping("/{id}")  // http://localhost:8080/usuario/1
	public UsuarioModel getProducto(@PathVariable Long id) {
		return usuarioService.obtenerUsuario(id);
	}
	
	//Buscar por prioridad   
	@GetMapping("/query")  // http://localhost:8080/usuario/query?prioridad=4
	public ArrayList<UsuarioModel> obtenerUsuarioPorPrioridad(@RequestParam("prioridad") Integer prioridad){
        return this.usuarioService.obtenerPorPrioridad(prioridad);
    }

	
	@PostMapping()  // http://localhost:8080/usuario
	public UsuarioModel guardarUsuario(@RequestBody UsuarioModel usuario){
        return usuarioService.guardarUsuario(usuario);
    }

	// Editar usuario
	@PutMapping("/actualizar") //http://localhost:8080/usuario/actualizar
	public UsuarioModel update(@RequestBody UsuarioModel usuarioModel) {
		return usuarioService.actualizar(usuarioModel);
	}
	
	//Eliminar usuario
	@DeleteMapping("/eliminar/{id}") //http://localhost:8080/usuario/eliminar/1
		public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.usuarioService.eliminar(id);
        if (ok){
            return "Se eliminó el usuario con id " + id;
        }else{
            return "No pudo eliminar el usuario con id " + id;
        }
    }
	
	

}

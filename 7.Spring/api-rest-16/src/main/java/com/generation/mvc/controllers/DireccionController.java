package com.generation.mvc.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.mvc.models.DireccionModel;
import com.generation.mvc.services.DireccionService;

@RestController
@RequestMapping("/direccion")
public class DireccionController {

	@Autowired
	private DireccionService direccionService;

	// obtener todos los posts
	@GetMapping() // http://localhost:8080/direccion
	public ArrayList<DireccionModel> obtenerDireccion() {
		return direccionService.obtenerDireccion();
	}

	@GetMapping("/{id}") // http://localhost:8080/direccion/1
	public DireccionModel getDireccion(@PathVariable Integer id) {
		return direccionService.obtenerDireccion(id);
	}

	@PostMapping() // http://localhost:8080/direccion
	public DireccionModel guardarDireccion(@RequestBody DireccionModel direccionModel) {
		return direccionService.guardarDireccion(direccionModel);
	}

	// Editar usuario
	@PutMapping("/actualizar") // http://localhost:8080/direccion/actualizar
	public DireccionModel update(@RequestBody DireccionModel direccionModel) {
		return direccionService.actualizar(direccionModel);
	}

	// Eliminar usuario
	@DeleteMapping("/eliminar/{id}") // http://localhost:8080/posts/eliminar/1
	public void eliminar(@PathVariable Integer id) {
		direccionService.eliminar(id);
	}
}

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

import com.generation.mvc.models.PostModel;
import com.generation.mvc.services.PostService;

@RestController
@RequestMapping("/post")
public class PostController {

	@Autowired
	private PostService postService;
	
	// obtener todos los posts
	@GetMapping() // http://localhost:8080/posts
	public ArrayList<PostModel> obtenerPosts() {
		return postService.obtenerPosts();
	}

	@GetMapping("/{id}") // http://localhost:8080/posts/1
	public PostModel getPost(@PathVariable Long id) {
		return postService.obtenerPost(id);
	}

	@PostMapping() // http://localhost:8080/posts
	public PostModel guardarPost(@RequestBody PostModel postModel) {
		return postService.guardarPost(postModel);
	}

	// Editar usuario
	@PutMapping("/actualizar") // http://localhost:8080/posts/actualizar
	public PostModel update(@RequestBody PostModel postModel) {
		return postService.actualizar(postModel);
	}

	// Eliminar usuario
	@DeleteMapping("/eliminar/{id}") // http://localhost:8080/posts/eliminar/1
	public void eliminar(@PathVariable Long id) {
		postService.eliminar(id);
	}
}

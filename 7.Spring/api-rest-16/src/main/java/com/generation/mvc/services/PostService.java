package com.generation.mvc.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.mvc.models.PostModel;
import com.generation.mvc.repositories.PostRepository;

@Service
public class PostService {
	
	@Autowired
	private PostRepository postRepository;

	public ArrayList<PostModel> obtenerPosts(){
		return (ArrayList<PostModel>) postRepository.findAll();
    }
	
	//obtener usuario por id
	public PostModel obtenerPost(Long id) {
		Optional<PostModel> post = postRepository.findById(id);
		return post.orElse(null);
	}
	
	public PostModel guardarPost(PostModel postModel){
        return postRepository.save(postModel);
    }

	
	// eliminar
	public void eliminar(Long id) {
		postRepository.deleteById(id);	
	}

	//actualizar
	public PostModel actualizar(PostModel postModel) {
		return postRepository.save(postModel);
	}
}

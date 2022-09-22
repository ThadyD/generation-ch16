package com.generation.mvc.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.mvc.models.UsuarioModel;
import com.generation.mvc.repositories.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private  UsuarioRepository usuarioRepository;
	
	public ArrayList<UsuarioModel> obtenerUsuario(){
		return (ArrayList<UsuarioModel>) usuarioRepository.findAll();
    }
	
	//obtener usuario por id
	public UsuarioModel obtenerUsuario(Long id) {
		Optional<UsuarioModel> user = usuarioRepository.findById(id);
		return user.orElse(null);
	}
	
	public UsuarioModel guardarUsuario(UsuarioModel usuario){
        return usuarioRepository.save(usuario);
    }

	
	// eliminar
	public boolean eliminar(Long id) {
        try{
            usuarioRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }


	//actualizar
	public UsuarioModel actualizar(UsuarioModel usuarioModel) {
		return usuarioRepository.save(usuarioModel);
	}
	
	//buscar por prioridad
	public ArrayList<UsuarioModel> obtenerPorPrioridad(Integer prioridad) {
		return usuarioRepository.findByPrioridad(prioridad);
	}
	
}


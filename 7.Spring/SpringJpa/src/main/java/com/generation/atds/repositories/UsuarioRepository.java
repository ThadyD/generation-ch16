package com.generation.atds.repositories;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import org.springframework.data.repository.CrudRepository;
import com.generation.atds.models.UsuarioModel;

@Repository
public interface UsuarioRepository extends CrudRepository<UsuarioModel, Long>{
	public abstract ArrayList<UsuarioModel>findByPrioridad(Integer prioridad);
}

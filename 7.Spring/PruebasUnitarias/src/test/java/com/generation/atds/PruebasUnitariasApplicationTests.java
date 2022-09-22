package com.generation.atds;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.generation.atds.Models.UsuarioModel;
import com.generation.atds.Repository.UsuarioRepository;
import static org.junit.jupiter.api.Assertions.assertTrue; 

@SpringBootTest
class PruebasUnitariasApplicationTests {
@Autowired 
private UsuarioRepository usuariorepository;
	@Test
	void contextLoads() {
		UsuarioModel usuariomodelo = new UsuarioModel();
		usuariomodelo.setId(0);
		usuariomodelo.setNombre("Victor");
		usuariomodelo.setClave("1234");
		
		UsuarioModel r = usuariorepository.save(usuariomodelo);
		assertTrue(r.getClave().equalsIgnoreCase(usuariomodelo.getNombre()));
		
	}

}

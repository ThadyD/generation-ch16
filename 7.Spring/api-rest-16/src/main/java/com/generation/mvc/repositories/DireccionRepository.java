package com.generation.mvc.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.generation.mvc.models.DireccionModel;

@Repository
public interface DireccionRepository extends CrudRepository<DireccionModel, Integer> {

}

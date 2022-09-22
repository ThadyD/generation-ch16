package com.generation.mvc.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.generation.mvc.models.PostModel;

@Repository
public interface PostRepository  extends CrudRepository<PostModel, Long>{

}

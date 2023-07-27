package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Feedback;


public interface feedback_repo extends  JpaRepository<Feedback, Integer>{
	
}

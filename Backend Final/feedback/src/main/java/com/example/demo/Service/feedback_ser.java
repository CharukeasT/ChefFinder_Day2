package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.feedback_repo;
import com.example.demo.entity.Feedback;

@Service
public class feedback_ser {
	@Autowired
	feedback_repo repo;
	
	public Feedback save(Feedback e)
	{
		return repo.save(e);
	}
}

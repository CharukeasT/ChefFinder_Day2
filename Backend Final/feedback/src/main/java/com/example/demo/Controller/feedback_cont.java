package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.feedback_ser;
import com.example.demo.entity.Feedback;

@RestController
@CrossOrigin(origins= "*")
@RequestMapping("/api/v1/user")
public class feedback_cont {
	@Autowired
	feedback_ser ser;
	
	@PostMapping("/send-data")
	public Feedback saveFeedback(@RequestBody Feedback e) {
		return ser.save(e);
	}
}

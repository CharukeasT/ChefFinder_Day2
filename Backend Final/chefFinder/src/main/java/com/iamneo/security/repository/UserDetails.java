package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.user_details;

public interface UserDetails extends JpaRepository<user_details, Integer>{

}

package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.orders;

public interface Orders extends JpaRepository<orders, Integer>{

}

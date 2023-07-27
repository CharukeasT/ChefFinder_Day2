package com.iamneo.security.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.Chef;

public interface ChefRepository extends JpaRepository<Chef, Long> {
    Optional<Chef> findByEmail(String email);
}

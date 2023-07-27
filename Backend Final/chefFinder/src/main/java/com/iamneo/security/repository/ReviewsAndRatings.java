package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.reviews_and_ratings;

public interface ReviewsAndRatings extends JpaRepository<reviews_and_ratings, Integer>{

}

package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.user_accounts;

public interface UserAccounts extends JpaRepository<user_accounts, Integer>{

}

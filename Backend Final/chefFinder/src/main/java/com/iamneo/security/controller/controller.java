package com.iamneo.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.chef_accounts;
import com.iamneo.security.entity.chef_details;
import com.iamneo.security.entity.chef_food;
import com.iamneo.security.entity.chef_menu;
import com.iamneo.security.entity.user_details;
import com.iamneo.security.repository.ChefAccounts;
import com.iamneo.security.repository.ChefDetails;
import com.iamneo.security.repository.ChefFood;
import com.iamneo.security.repository.ChefMenu;
import com.iamneo.security.repository.Orders;
import com.iamneo.security.repository.Payments;
import com.iamneo.security.repository.ReviewsAndRatings;
import com.iamneo.security.repository.UserAccounts;
import com.iamneo.security.repository.UserDetails;
import com.iamneo.security.repository.UserFood;
import com.iamneo.security.repository.UserMenu;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/user")
public class controller {
	@Autowired
	ChefAccounts ca;
	@Autowired
	ChefDetails cd;
	@Autowired
	ChefMenu cm;
	@Autowired
	ChefFood cf;
	@Autowired
	UserDetails ud;
	@Autowired
	UserFood uf;
	@Autowired
	UserMenu um;
	@Autowired
	UserAccounts ua;
	@Autowired
	Payments p;
	@Autowired
	Orders o;
	@Autowired
	ReviewsAndRatings rar;
	@PostMapping("/chefSignUp")
	public chef_accounts addAccount(@RequestBody chef_accounts cas) {
		return ca.save(cas);
	}
	@PostMapping("/userAddDetails")
	public user_details addAccount(@RequestBody user_details uds) {
		return ud.save(uds);
	}
	@PostMapping("/addChefDetails")
	public chef_details addAccount(@RequestBody chef_details cds) {
		return cd.save(cds);
	}
	@PostMapping("/chefMenu")
	public chef_menu addAccount(@RequestBody chef_menu cms) {
		return cm.save(cms);
	}
	@PostMapping("/chefFood")
	public chef_food addAccount(@RequestBody chef_food cfs) {
		return cf.save(cfs);
	}
}

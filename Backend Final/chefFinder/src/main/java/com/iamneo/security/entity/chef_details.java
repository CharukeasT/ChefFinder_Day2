package com.iamneo.security.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;
@Entity
@Transactional
@Table(name = "chef_details")
public class chef_details {
	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "chef_id")
	private int chef_id;
	@Column(name = "chef_location")
	private String chef_location;
	@Column(name = "chef_experience")
	private int chef_experience;
	@Column(name = "chef_speciality_cuisine")
	private String chef_speciality_cuisine;
	@Column(name = "chef_culinary_background")
	private String chef_culinary_background;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "chef_id")
	private List<payments> payment_chef_id;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "chef_id")
	private List<reviews_and_ratings> reviews_and_ratings_chef_id;
	public int getChef_id() {
		return chef_id;
	}
	public void setChef_id(int chef_id) {
		this.chef_id = chef_id;
	}
	public String getChef_location() {
		return chef_location;
	}
	public void setChef_location(String chef_location) {
		this.chef_location = chef_location;
	}
	public int getChef_experience() {
		return chef_experience;
	}
	public void setChef_experience(int chef_experience) {
		this.chef_experience = chef_experience;
	}
	public String getChef_speciality_cuisine() {
		return chef_speciality_cuisine;
	}
	public void setChef_speciality_cuisine(String chef_speciality_cuisine) {
		this.chef_speciality_cuisine = chef_speciality_cuisine;
	}
	public String getChef_culinary_background() {
		return chef_culinary_background;
	}
	public void setChef_culinary_background(String chef_culinary_background) {
		this.chef_culinary_background = chef_culinary_background;
	}
	public List<payments> getPayment_chef_id() {
		return payment_chef_id;
	}
	public void setPayment_chef_id(List<payments> payment_chef_id) {
		this.payment_chef_id = payment_chef_id;
	}	
	public List<reviews_and_ratings> getReviews_and_ratings_chef_id() {
		return reviews_and_ratings_chef_id;
	}
	public void setReviews_and_ratings_chef_id(List<reviews_and_ratings> reviews_and_ratings_chef_id) {
		this.reviews_and_ratings_chef_id = reviews_and_ratings_chef_id;
	}
	public chef_details(int chef_id, String chef_location, int chef_experience, String chef_speciality_cuisine,
			String chef_culinary_background) {
		super();
		this.chef_id = chef_id;
		this.chef_location = chef_location;
		this.chef_experience = chef_experience;
		this.chef_speciality_cuisine = chef_speciality_cuisine;
		this.chef_culinary_background = chef_culinary_background;
	}
	public chef_details() {
		super();
	}
	
}

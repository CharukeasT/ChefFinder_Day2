package com.iamneo.security.entity;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Table(name = "user_details")
public class user_details {
	@Id
	@Column(name = "user_id")
	private int user_id;
	@Column(name = "user_location")
	private String user_location;
	@Column(name = "user_date")
	private Date user_date;
	@Column(name = "user_time")
	private Time user_time;
	@Column(name = "user_size")
	private int user_size;
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getUser_location() {
		return user_location;
	}
	public void setUser_location(String user_location) {
		this.user_location = user_location;
	}
	public Date getUser_date() {
		return user_date;
	}
	public void setUser_date(Date user_date) {
		this.user_date = user_date;
	}
	public Time getUser_time() {
		return user_time;
	}
	public void setUser_time(Time user_time) {
		this.user_time = user_time;
	}
	public int getUser_size() {
		return user_size;
	}
	public void setUser_size(int user_size) {
		this.user_size = user_size;
	}
	public user_details(int user_id, String user_location, Date user_date, Time user_time, int user_size) {
		super();
		this.user_id = user_id;
		this.user_location = user_location;
		this.user_date = user_date;
		this.user_time = user_time;
		this.user_size = user_size;
	}
	public user_details() {
		super();
	}	
}

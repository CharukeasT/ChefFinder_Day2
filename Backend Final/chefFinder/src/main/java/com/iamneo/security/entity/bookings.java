package com.iamneo.security.entity;

import java.sql.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Table(name = "bookings")
public class bookings {
	@Id
	@Column(name = "booking_id")
	private int booking_id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "chef_id")
	private chef_details chef_id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private user_details user_id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "order_id")
	private orders order_id;
	@Column(name = "order_date")
	private Date order_date;
	public int getBooking_id() {
		return booking_id;
	}
	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}
	public chef_details getChef_id() {
		return chef_id;
	}
	public void setChef_id(chef_details chef_id) {
		this.chef_id = chef_id;
	}
	public user_details getUser_id() {
		return user_id;
	}
	public void setUser_id(user_details user_id) {
		this.user_id = user_id;
	}
	public orders getOrder_id() {
		return order_id;
	}
	public void setOrder_id(orders order_id) {
		this.order_id = order_id;
	}
	public Date getOrder_date() {
		return order_date;
	}
	public void setOrder_date(Date order_date) {
		this.order_date = order_date;
	}
	public bookings(int booking_id, chef_details chef_id, user_details user_id, orders order_id, Date order_date) {
		super();
		this.booking_id = booking_id;
		this.chef_id = chef_id;
		this.user_id = user_id;
		this.order_id = order_id;
		this.order_date = order_date;
	}
	public bookings() {
		super();
	}
}

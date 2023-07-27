package com.iamneo.security.entity;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Table(name = "payments")
public class payments {
	@Id
	@GeneratedValue
	private int payment_id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "booking_id")
	private bookings booking_id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private user_details user_id;
	@Column(name = "amount")
	private float amount;
	@Column(name = "payment_type")
	private String payment_type;
	public int getPayment_id() {
		return payment_id;
	}
	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}
	public bookings getBooking_id() {
		return booking_id;
	}
	public void setBooking_id(bookings booking_id) {
		this.booking_id = booking_id;
	}
	public user_details getUser_id() {
		return user_id;
	}
	public void setUser_id(user_details user_id) {
		this.user_id = user_id;
	}
	public float getAmount() {
		return amount;
	}
	public void setAmount(float amount) {
		this.amount = amount;
	}
	public String getPayment_type() {
		return payment_type;
	}
	public void setPayment_type(String payment_type) {
		this.payment_type = payment_type;
	}
	public payments(int payment_id, bookings booking_id,
			user_details user_id, float amount,
			String payment_type) {
		super();
		this.payment_id = payment_id;
		this.booking_id = booking_id;
		this.user_id = user_id;
		this.amount = amount;
		this.payment_type = payment_type;
	}
	public payments() {
		super();
	}
}

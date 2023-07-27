package com.iamneo.security.entity;

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
@Table(name = "orders")
public class orders {	
	@Id
	@Column(name = "order_id")
	private int order_id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private user_details user_id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_menu_id")
	private user_menu user_menu_id;
	public int getOrder_id() {
		return order_id;
	}
	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}
	public user_details getUser_id() {
		return user_id;
	}
	public void setUser_id(user_details user_id) {
		this.user_id = user_id;
	}
	public user_menu getUser_menu_id() {
		return user_menu_id;
	}
	public void setUser_menu_id(user_menu user_menu_id) {
		this.user_menu_id = user_menu_id;
	}
	public orders(int order_id, user_details user_id, user_menu user_menu_id) {
		super();
		this.order_id = order_id;
		this.user_id = user_id;
		this.user_menu_id = user_menu_id;
	}
	public orders() {
		super();
	}
	
}

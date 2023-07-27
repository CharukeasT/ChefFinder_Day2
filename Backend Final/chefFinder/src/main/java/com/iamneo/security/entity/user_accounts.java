package com.iamneo.security.entity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
@Entity
@Table(name = "user_accounts")
public class user_accounts {
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private user_details user_id;
	@Column(name = "user_name")
	private String user_name;
	@Id
	@Column(name = "user_email")
	private String user_email;
	@Column(name = "user_password")
	private String user_password;
	@Column(name = "user_mobile")
	private String user_mobile;
	public user_details getUser_id() {
		return user_id;
	}
	public void setUser_id(user_details user_id) {
		this.user_id = user_id;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getUser_email() {
		return user_email;
	}
	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}
	public String getUser_password() {
		return user_password;
	}
	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}
	public String getUser_mobile() {
		return user_mobile;
	}
	public void setUser_mobile(String user_mobile) {
		this.user_mobile = user_mobile;
	}
	public user_accounts(user_details user_id, String user_name, String user_email, String user_password,
			String user_mobile) {
		this.user_id = user_id;
		this.user_name = user_name;
		this.user_email = user_email;
		this.user_password = user_password;
		this.user_mobile = user_mobile;
	}
	public user_accounts() {
		
	}
}

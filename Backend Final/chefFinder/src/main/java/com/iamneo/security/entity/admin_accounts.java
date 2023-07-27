package com.iamneo.security.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "admin_accounts")
public class admin_accounts {
	@Id
	@Column(name = "admin_id")
	private int admin_id;
	@Column(name = "admin_name")
	private String admin_name;
	@Column(name = "admin_email")
	private String admin_email;
	@Column(name = "admin_password")
	private String admin_password;
	@Column(name = "admin_mobile")
	private String admin_mobile;
	public int getadmin_id() {
		return admin_id;
	}
	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}
	public String getAdmin_name() {
		return admin_name;
	}
	public void setAdmin_name(String admin_name) {
		this.admin_name = admin_name;
	}
	public String getAdmin_email() {
		return admin_email;
	}
	public void setAdmin_email(String admin_email) {
		this.admin_email = admin_email;
	}
	public String getAdmin_password() {
		return admin_password;
	}
	public void setAdmin_password(String admin_password) {
		this.admin_password = admin_password;
	}
	public String getAdmin_mobile() {
		return admin_mobile;
	}
	public void setAdmin_mobile(String admin_mobile) {
		this.admin_mobile = admin_mobile;
	}
	public admin_accounts(int admin_id, String admin_name, String admin_email, String admin_password,
			String admin_mobile) {
		this.admin_id = admin_id;
		this.admin_name = admin_name;
		this.admin_email = admin_email;
		this.admin_password = admin_password;
		this.admin_mobile = admin_mobile;
	}
	public admin_accounts() {
		
	}
}

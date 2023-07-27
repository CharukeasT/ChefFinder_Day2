package com.iamneo.security.entity;
//import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;
@Entity
@Transactional
@Table(name = "chef_accounts")
public class chef_accounts {
	@Column(name = "chef_name")
	private String chef_name;
	@Id
	@Column(name = "chef_email")
	private String chef_email;
	@Column(name = "chef_password")
	private String chef_password;
	@Column(name = "chef_mobile")
	private String chef_mobile;
//	@OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "chef_id")
//	private chef_details chef_id;
	public String getChef_name() {
		return chef_name;
	}
	public void setChef_name(String chef_name) {
		this.chef_name = chef_name;
	}
	public String getChef_email() {
		return chef_email;
	}
	public void setChef_email(String chef_email) {
		this.chef_email = chef_email;
	}
	public String getChef_password() {
		return chef_password;
	}
	public void setChef_password(String chef_password) {
		this.chef_password = chef_password;
	}
	public String getChef_mobile() {
		return chef_mobile;
	}
	public void setChef_mobile(String chef_mobile) {
		this.chef_mobile = chef_mobile;
	}
	
//	public chef_details getChef_id() {
//		return chef_id;
//	}
//	public void setChef_id(chef_details chef_id) {
//		this.chef_id = chef_id;
//	}
	public chef_accounts(String chef_name, String chef_email, String chef_password, String chef_mobile
//			,chef_details chef_id
			) {
		super();
		this.chef_name = chef_name;
		this.chef_email = chef_email;
		this.chef_password = chef_password;
		this.chef_mobile = chef_mobile;
//		this.chef_id = chef_id;
	}
	public chef_accounts() {
		super();
	}
	
	
}

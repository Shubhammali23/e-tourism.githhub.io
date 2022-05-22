package com.example.demo;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Signup 
{
	private int cust_id;
	private String fname;
	private String lname;
	private String email;
	private String phone;
	private String password;
	private String flag;
	
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
	@Id
	@GeneratedValue(strategy = IDENTITY)
	public int getCust_id() {
		return cust_id;
	}
	/**
	 * @param cust_id the cust_id to set
	 */
	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}

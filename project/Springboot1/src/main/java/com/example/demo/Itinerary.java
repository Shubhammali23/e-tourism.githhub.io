
package com.example.demo;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Itinerary {
	
	private int itr_id;
	private int catmaster_id;
	private int day_no;
	private String activity;
	
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	public int getItr_id() {
		return itr_id;
	}
	/**
	 * @param itr_id the itr_id to set
	 */
	public void setItr_id(int itr_id) {
		this.itr_id = itr_id;
	}
	/**
	 * @return the catmaster_id
	 */
	public int getCatmaster_id() {
		return catmaster_id;
	}
	/**
	 * @param catmaster_id the catmaster_id to set
	 */
	public void setCatmaster_id(int catmaster_id) {
		this.catmaster_id = catmaster_id;
	}
	/**
	 * @return the day_no
	 */
	public int getDay_no() {
		return day_no;
	}
	/**
	 * @param day_no the day_no to set
	 */
	public void setDay_no(int day_no) {
		this.day_no = day_no;
	}
	/**
	 * @return the activity
	 */
	public String getActivity() {
		return activity;
	}
	/**
	 * @param activity the activity to set
	 */
	public void setActivity(String activity) {
		this.activity = activity;
	}
	

}

package com.example.demo;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;

import java.util.Date;

import javax.persistence.Id;


@Entity
public class Category_master
{

	private int catmaster_id;
	private String cat_id;
	private String subcat_id;
	private String catname;
	private String imagepath;
	private Date valid_from;
	private Date valid_to;
	private String days;
	private double cost;
	private double extra;
	private double cwb;
	private double cwob;
	private String flag;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
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
	 * @return the cat_id
	 */
	public String getCat_id() {
		return cat_id;
	}
	/**
	 * @param cat_id the cat_id to set
	 */
	public void setCat_id(String cat_id) {
		this.cat_id = cat_id;
	}
	/**
	 * @return the subcat_id
	 */
	public String getSubcat_id() {
		return subcat_id;
	}
	/**
	 * @param subcat_id the subcat_id to set
	 */
	public void setSubcat_id(String subcat_id) {
		this.subcat_id = subcat_id;
	}
	/**
	 * @return the catname
	 */
	public String getCatname() {
		return catname;
	}
	/**
	 * @param catname the catname to set
	 */
	public void setCatname(String catname) {
		this.catname = catname;
	}
	/**
	 * @return the imagepath
	 */
	public String getImagepath() {
		return imagepath;
	}
	/**
	 * @param imagepath the imagepath to set
	 */
	public void setImagepath(String imagepath) {
		this.imagepath = imagepath;
	}
	/**
	 * @return the valid_from
	 */
	public Date getValid_from() {
		return valid_from;
	}
	/**
	 * @param valid_from the valid_from to set
	 */
	public void setValid_from(Date valid_from) {
		this.valid_from = valid_from;
	}
	/**
	 * @return the valid_to
	 */
	public Date getValid_to() {
		return valid_to;
	}
	/**
	 * @param valid_to the valid_to to set
	 */
	public void setValid_to(Date valid_to) {
		this.valid_to = valid_to;
	}
	/**
	 * @return the days
	 */
	public String getDays() {
		return days;
	}
	/**
	 * @param days the days to set
	 */
	public void setDays(String days) {
		this.days = days;
	}
	/**
	 * @return the cost
	 */
	public double getCost() {
		return cost;
	}
	/**
	 * @param cost the cost to set
	 */
	public void setCost(double cost) {
		this.cost = cost;
	}
	/**
	 * @return the extra
	 */
	public double getExtra() {
		return extra;
	}
	/**
	 * @param extra the extra to set
	 */
	public void setExtra(double extra) {
		this.extra = extra;
	}
	/**
	 * @return the cwb
	 */
	public double getCwb() {
		return cwb;
	}
	/**
	 * @param cwb the cwb to set
	 */
	public void setCwb(double cwb) {
		this.cwb = cwb;
	}
	/**
	 * @return the cwob
	 */
	public double getCwob() {
		return cwob;
	}
	/**
	 * @param cwob the cwob to set
	 */
	public void setCwob(double cwob) {
		this.cwob = cwob;
	}
	/**
	 * @return the flag
	 */
	public String getFlag() {
		return flag;
	}
	/**
	 * @param flag the flag to set
	 */
	public void setFlag(String flag) {
		this.flag = flag;
	}
}

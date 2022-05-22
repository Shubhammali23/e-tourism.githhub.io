package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController  
@CrossOrigin("http://localhost:3000")
public class Category_masterController
{
	@Autowired
	Category_masterManager manager;
	
	@GetMapping(value = "crud/homepage",headers = "Accept=application/json")  
	 public List<Category_master> showHomepage()
	 {
		  return manager.getHomepage();
	 }
	
	@GetMapping(value = "crud/subpage/{cat_id}", headers = "Accept=application/json")  
	 public List<Category_master> showSubpage(@PathVariable String cat_id)
	 {
		return manager.getSubpage(cat_id);
	 }
	
	@GetMapping(value = "crud/subsector/{cat_id}", headers = "Accept=application/json")  
	 public List<Category_master> showSubsector(@PathVariable String cat_id)
	 {
		return manager.getSubsector(cat_id);
	 }
	
	@GetMapping(value = "crud/costpage/{catmaster_id}", headers = "Accept=application/json")  
	 public List<Category_master> showCostpage(@PathVariable int catmaster_id)
	 {
		return manager.getCostpage(catmaster_id);
	 }
	
	@GetMapping(value = "crud/bookpage/{catmaster_id}", headers = "Accept=application/json")  
	 public List<Category_master> showBookpage(@PathVariable int catmaster_id)
	 {
		return manager.getBookpage(catmaster_id);
	 }
	
	@GetMapping(value = "crud/searchpage", headers = "Accept=application/json")  
	 public List<Category_master> showCostpage()
	 {
		return manager.getSearchpage();
	 }

	
//	@GetMapping(value = "crud/booking/{catmaster_id}", headers = "Accept=application/json")  
//	 public String showCostData(@PathVariable int catmaster_id)
//	 {
//		return manager.getCostData(catmaster_id));
//	 }
	
	
}

package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController  
@CrossOrigin("http://localhost:3000")
public class SignupController 
{
	@Autowired
	SignupManager manager;
	
	@PostMapping(value = "crud/add", headers = "Accept=application/json")  
	 public void addCus(@RequestBody Signup signup)
	 {
		manager.save(signup);
	 }
	
	@GetMapping(value = "crud/signup",headers = "Accept=application/json")  
	 public List<Signup> showCustomers()
	 {
		  return manager.findAll();
	 }
	
	@GetMapping(value = "crud/search/{pwd}", headers = "Accept=application/json")  
	 public List<Signup> getCus(@PathVariable String pwd)
	 {
		List<Signup> p=manager.getCustomer(pwd);
		return p;
	 }
}

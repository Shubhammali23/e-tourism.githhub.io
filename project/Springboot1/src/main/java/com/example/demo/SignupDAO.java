package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SignupDAO extends JpaRepository<Signup, Integer>
{
	@Query("from Signup p where p.password=:password")
	List<Signup> getCustomer(String password);
	@Query("from Signup p")
	List<Signup> getCustomers();
}

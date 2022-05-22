package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface Category_masterDAO extends JpaRepository<Category_master, Integer>{
	@Query("FROM Category_master c where c.subcat_id is null")
	List<Category_master> getHomepage();
	
	@Query("FROM Category_master c where c.subcat_id=:cat_id")
	List<Category_master> getSubpage(String cat_id);
	
	@Query("from Category_master c where c.subcat_id=:cat_id")
	List<Category_master> getSubsector(String cat_id);
	
	@Query("from Category_master c where c.catmaster_id=:catmaster_id")
	List<Category_master> getCostpage(int catmaster_id);
	
	@Query("from Category_master c where c.catmaster_id=:catmaster_id")
	List<Category_master> getBookpage(int catmaster_id);
	
	@Query("from Category_master c where cost != 0")
	List<Category_master> getSearchpage();

//	Category_master getCostData(int catmaster_id);
}

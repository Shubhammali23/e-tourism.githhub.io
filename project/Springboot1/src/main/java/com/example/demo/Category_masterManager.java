package com.example.demo;

import java.util.List;

public interface Category_masterManager
{
	List<Category_master> getHomepage();
	List<Category_master> getSubpage(String cat_id);
	List<Category_master> getSubsector(String cat_id);
	List<Category_master> getCostpage(int catmaster_id);
	List<Category_master> getBookpage(int catmaster_id);
	List<Category_master> getSearchpage();

//	Category_master getCostData(int catmaster_id);
}

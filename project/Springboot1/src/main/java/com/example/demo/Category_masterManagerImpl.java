package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Category_masterManagerImpl implements Category_masterManager
{
	@Autowired
	Category_masterDAO dao;

	@Override
	public List<Category_master> getHomepage() {
		// TODO Auto-generated method stub
		return dao.getHomepage();
	}
	
	@Override
	public List<Category_master> getSubpage(String cat_id) {
		// TODO Auto-generated method stub
		return dao.getSubpage(cat_id);
	}
	
	@Override
	public List<Category_master> getSubsector(String cat_id) {
		// TODO Auto-generated method stub
		return dao.getSubsector(cat_id);
	}
	
	@Override
	public List<Category_master> getCostpage(int catmaster_id) {
		// TODO Auto-generated method stub
		return dao.getCostpage(catmaster_id);
	}
	
	@Override
	public List<Category_master> getBookpage(int catmaster_id) {
		// TODO Auto-generated method stub
		return dao.getBookpage(catmaster_id);
	}
	
	@Override
	public List<Category_master> getSearchpage() {
		
		return dao.getSearchpage();
	}

//	@Override
//	public Category_master getCostData(int catmaster_id) {
//		// TODO Auto-generated method stub
//		return dao.getCostData(catmaster_id);
//	}
}

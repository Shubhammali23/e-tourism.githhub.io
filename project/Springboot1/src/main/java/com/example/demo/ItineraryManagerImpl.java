package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItineraryManagerImpl implements ItineraryManager{

	@Autowired
	ItineraryDAO dao;
	
	@Override
	public List<Itinerary> getItinerary(int catmaster_id) {
		
		return dao.getItinerary(catmaster_id);
	}

	
}

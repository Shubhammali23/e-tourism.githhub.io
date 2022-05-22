package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ItineraryDAO extends JpaRepository<Itinerary, Integer> {
	
	@Query("from Itinerary i where i.catmaster_id =:catmaster_id")
	List<Itinerary> getItinerary(int catmaster_id);
}

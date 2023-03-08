package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.repository.TicketRepository;
@Service

public class TicketService {
	@Autowired
	TicketRepository BookingRepository;
	public String deleteDetails(int aadhar_id)
	{
		BookingRepository.deleteById(aadhar_id);
		return "deleted";
	}

}

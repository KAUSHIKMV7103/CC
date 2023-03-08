package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.ticketBooking;
import com.example.demo.repository.TicketRepository;
import com.example.demo.service.TicketService;

@RestController
@CrossOrigin
public class TicketController {
	@Autowired
	TicketRepository BookingRepository;
	@Autowired
	TicketService BookingService;
	@GetMapping("/get")
	List<ticketBooking> getList() {
		return BookingRepository.findAll();
	}
    @PostMapping("/post")
    public ticketBooking create(@RequestBody ticketBooking obj)
    {
    	return BookingRepository.save(obj);
    }
    @DeleteMapping("/del/{aadhar_id}")
    public String delete(@PathVariable int aadhar_id) {
    	return BookingService.deleteDetails(aadhar_id);
    }
    
    }

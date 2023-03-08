package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.ticketBooking;

public interface TicketRepository extends JpaRepository<ticketBooking,Integer>{

}

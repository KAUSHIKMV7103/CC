package com.example.demo.model;

import org.springframework.web.bind.annotation.RestController;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ticketBooking {
	@Id
	private int Aadhar_id;
	private String Name;
	private int Age;
	private String Gender;
	private String Date;
	private String Starting_Destination;
	private String Ending_Destination;
	public ticketBooking(int aadhar_id, String name, int age, String gender, String date, String Start,String End) {
		super();
		Aadhar_id = aadhar_id;
		Name = name;
		this.Age = age;
		this.Gender = gender;
		Date = date;
		Starting_Destination = Start;
		Ending_Destination=End;
	}
	public ticketBooking() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getAadhar_id() {
		return Aadhar_id;
	}
	public void setAadhar_id(int aadhar_id) {
		Aadhar_id = aadhar_id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public int getAge() {
		return Age;
	}
	public void setAge(int age) {
		Age = age;
	}
	public String getGender() {
		return Gender;
	}
	public void setGender(String gender) {
		Gender = gender;
	}
	public String getDate() {
		return Date;
	}
	public void setDate(String date) {
		Date = date;
	}
	public String getStarting_Destination() {
		return Starting_Destination;
	}
	public void setStarting_Destination(String starting_Destination) {
		Starting_Destination = starting_Destination;
	}
	public String getEnding_Destination() {
		return Ending_Destination;
	}
	public void setEnding_Destination(String ending_Destination) {
		Ending_Destination = ending_Destination;
	}

	

}

package models;

import javax.persistence.Entity;

import play.db.jpa.Model;

@Entity
public class Person extends Model {
	
	public String firstName;
	public String lastName;
	public String phoneNumber;
	public String emailAddress;
	public Address address;	
	
	public Person() { }
	public Person(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	

}

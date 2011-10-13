package models;

import javax.persistence.Entity;

import play.db.jpa.Model;

@Entity
public class Product extends Model {
	
	public String name;
	public double width;
	public double height;
	public Address location;
	
	public Product() { }
	public Product(String name, double width, double height, Address location) {
	    this.name = name;
	    this.width = width;
	    this.height = height;
	    this.location = location;
	}
	

}

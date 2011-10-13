package models;

import javax.persistence.Entity;

import play.db.jpa.Model;

@Entity
public class Product extends Model {
	
	public String name;
	public double width;
	public double height;
	public Address location;
	public String url;
	
	public Product() { }
	public Product(String name, double width, double height, Address location, String url) {
	    this.name = name;
	    this.width = width;
	    this.height = height;
	    this.location = location;
	    this.url = url;
	}
	

}

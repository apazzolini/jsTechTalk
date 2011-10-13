package models;

import javax.persistence.Entity;

import play.db.jpa.Model;

@Entity
public class Address extends Model {

    public String addressLine1;

    public String addressLine2;

    public String city;

    public String state;

    public String postalCode;

}

package controllers;

import models.Person;
import play.mvc.Controller;

public class Ajax extends Controller {

	public static void getFirstName(String lastName) {
		Person person = Person.find("lastName = ?", lastName).first();
		if (person != null) {
			renderText(person.firstName);
		} else {
			renderText("Error: Could not find person with that last name.");
		}
	}
	
	public static void getFirstNameSlow(String lastName) throws InterruptedException {
		Thread.sleep(2000l);
		getFirstName(lastName);
	}
    
}
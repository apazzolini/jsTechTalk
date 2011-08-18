package jobs;

import models.Person;
import play.jobs.Job;
import play.jobs.OnApplicationStart;

@OnApplicationStart
public class Boostrap extends Job {
	
	public void doJob() {
		new Person("Andre", "Azzolini").save();
		new Person("John", "Doe").save();;
	}

}

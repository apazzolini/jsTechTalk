function Car(year, make, model) {
	this.year = year;
	this.make = make;
	this.model = model;
    this.drive = function() {
        alert(this.year + " " + this.make + " " + this.model + " is driving!");
    }
}
		
var truck = new Car(2008, 'Nissan', 'Titan'); 

Car.prototype.stopDriving = function() {
    alert(this.year + " " + this.make + " " + this.model + " came to a stop");
}

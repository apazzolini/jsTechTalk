var message = "Hello World";
	
function printMessage(messageToPrint) {
    alert(messageToPrint);
}
	
var Car = {
    year: 2008,
    make: "Nissan",
    model: "Titan",
    
    drive: function() {
        alert(this.year + " " + this.make + " " + this.model + " is driving!");
    }
};

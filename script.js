/*
* COMP 125 Lab 9 - Object Oriented Programming (OOP)
*/

var myObj1, myObj2; // global variables to hold object instances

function setup() {
  createCanvas(500, 350); // create a canvas with dimensions 500x350
  myObj1 = new MyClass(100, 150); // Create the first object at position (100, 150)
  myObj2 = new MyClass(400, 200); // Create the second object at position (400, 200)
}

function draw() {
  background(200); // clear the canvas with a background color of light gray (200)
  myObj1.move(); // Move and display the first object
  myObj1.display();
  myObj2.move(); // Move and display the second object
  myObj2.display();
}

// Class constructor:
function MyClass(tempX, tempY){
  
  // Define some basic object properties
  this.x = tempX; // assign the first argument to the x property
  this.y = tempY; // assign the second argument to the y property
  this.d = random(25, 100); // Set diameter of the object randomly between 25 and 100
  this.xSpeed = random (-1.0, 1.0); // Set horizontal speed of the object randomly between -1 and 1
  this.ySpeed = random (-1.0, 1.0); // Set vertical speed of the object randomly between -1 and 1
  this.color = color(random(255), random(255), random(255)); // Set color of the object randomly
  
  // Define some basic object methods
  this.move = function (){
    this.x += this.xSpeed; // Update the x position by adding xSpeed
    this.y += this.ySpeed; // Update the y position by adding ySpeed
    
    // Check if the object hits the canvas edges and change direction if it does
    if (this.x > width || this.x < 0) {
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  }
  
  this.display = function (){
    push(); // Create a transparency layer for the object
    translate(this.x, this.y); // Shift the canvas (0,0) to the object location
    fill(this.color); // Set the fill color to the object's color
    ellipse(0, 0, this.d/2, this.d); // Draw an ellipse at the object's position with diameter this.d
    // Note: drawing is relative to the object's location, hence (0,0) is the center of the object

    // Add more drawing code here to make the image a little more complex

    pop(); // Remove the transparency layer after drawing the image
  }
}
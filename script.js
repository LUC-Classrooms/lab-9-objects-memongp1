/*
* COMP 125 Lab 9 - Object Oriented Programming (OOP)
*/

var myObj1, myObj2; // global variables to hold object instances

function setup() {
  createCanvas(500, 350);
  /* 
  add lines here to create 2 new objects using the class constructor below.
  hint: use the "new" keyword with the constructor function MyClass()
  assign the result of this function to myObj1 and then to myObj2
  */
}

function draw() {
  background(200);
  // add code here to make your objects move and display on canvas
  
}

//Class constructor:
function MyClass(tempX, tempY){
  
  // some basic object properties
  this.x = tempX; // assign the first argument to the x property
  this.y = tempY; // assign the second argument to the y property
  this.d = random(25, 100); //each instance will be a different size
  this.xSpeed = random (-1.0, 1.0); // each instance moves in a different direction
  this.ySpeed = random (-1.0, 1.0);
  this.color = color(random(255), random(255), random(255));
  
  //some basic object methods
  this.move = function (){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    //maybe add some code to keep it on the canvas ...
  }
  
  this.display = function (){
    
    push(); // create a transparency layer for the object
    translate(this.x, this.y); //shift the canvas (0,0) to the object location
    fill(this.color); // set the color
    ellipse(0, 0, this.d/2, this.d);
    // note that when you want to use the objects properties, you need to use "this"
    // add more drawing code to make your image a little more complex

    pop(); // delete the tansparency layer after drawing the image
  }
}

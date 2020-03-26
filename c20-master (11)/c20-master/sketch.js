
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){
  

 r=map(mouseX,0,1200,0,255);
 g=map(mouseX,50,1200,0,255);
 b=map(mouseX,255,1200,0,255);
 

  background(r,g,b);


ellipse(mouseX,100,50,50)
  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}
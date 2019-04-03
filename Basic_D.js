function setup() {
  createCanvas(500, 500);
}

var circleX = 125;
var circleY = 250;
var backwards = false;

function draw() {
  background(255,255,255);
  fill(36,184,0);
  strokeWeight(2);
  rect(50,0,300,250);
  strokeWeight(5);
  fill(230, 71, 0);
  ellipse(circleX, circleY, 200);
  fill(0,20,254);
  triangle(85, 498, 260, 498, 260, 200);
  fill(254,121,23);
  rect(300,100,150,999);
  fill(178,23,254);  
  rect(270,320,228,178);
  fill(254,236,0);
  rect(100,25,190,80);
  line(270,320,500,500);
  
  if (backwards == false)
  {
  circleX = circleX+1;
  }
  if (circleX > 500)
  {
   backwards = true; 
  }
  if (backwards == true)
  {
    circleX = circleX-1;
  }
  if (circleX < 0)
  {
   backwards = false; 
  }
  
}  

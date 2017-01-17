function setup() {
  createCanvas(720,400); // sets dimensions of canvas
  smooth(); // draws shapes with smooth edges
  strokeWeight(2); // sets thickness of lines to 2
}
  
  function draw() { 
    background(205); // when background is present there is a gray background and robot follows the mouse 
    // when background is removed it creates copy after copy of the robot as you move the mouse 
    translate(mouseX,mouseY);
    
  // Neck
  stroke(180,210,186); // outline of shape // changed color of all lines
  line(266, 257, 266, 162); // draws the first line of the neck 
  line(276, 257, 276, 162); // draws the second line of the neck 
  line(286, 257, 286, 162); // draws the third line of the neck 
  
  //Antennae
  line(276, 155, 246, 112); // draws the left most line 
  line(276, 155, 306, 56); // draws the center line
  line(276, 155, 342, 170); // draws the right most line 
  
  //Body
  noStroke (); // no outline of shape
  fill(180,210,186); // fills shape with color
  ellipse(264,377,66,66); // draws bottom of robot
  fill(129,192,181); // fills shape with color
  rect(219,257,90,120); // creates the larger rectangle
  fill(11,101,112); // fills shape with color
  rect(219, 274, 90, 6); // creates the smaller rectangle 
  
  // Head
  fill(247,235,195);// fills shape with color // color changed
  ellipse(276, 155, 90, 90); // creates the main part of the head
  fill(180,210,186); // fills shape with color // color changed 
  ellipse(288,160, 28, 28); // creates the white part of the eye 
  fill(255); // fills shape with color
  ellipse(288, 150, 6, 6); // creates the pupil of the eye 
  fill(180,210,186); // fills shape with color // color changed 
  ellipse(263, 148, 10, 10); // left most gray circle 
  ellipse(296, 130, 8, 8); // middle circle
  ellipse(305, 162, 6, 6); // right circle
}

function setup() { // prepares for the setup canvas with this function
  createCanvas(800,700); // sets dimensions of canvas
  smooth(); // draws shapes with smooth edges
  strokeWeight(2); // sets thickness of lines to 2
  background(245,244,223); // colors the background with RGB color inputs

} 

function draw() {   // holds artwork together within this function

  // Blue Moon
  stroke (177, 221, 237); // adds a line that bounds shape with a slightly lighter color
  fill (155, 203, 207); // creates moon color
  ellipse(600, 75, 90, 90); // sets location and size of moon

  // white mountains
  noStroke(); //no lines around white mountains
  fill(207, 208, 210); // adds color to the triangles
  triangle(265, 150, 200, 430, 350, 450); // creates the left white triangle
  triangle(340, 150, 250, 430, 400, 450); // creates the right white triangle
  
  //green mountains
  noStroke(); //no lines around green mountains
  fill(154, 177, 73); // adds color to the triangle
  triangle(290, 190, 220, 450, 350, 450); // creates center green triangle
  fill(62, 65, 41); // adds color to the triangles
  triangle(400, 290, 440, 450, 355, 450); // creates smaller right green triangle
  triangle(310, 260, 390, 450, 250, 450); // creates smaller left green triangle (x, y(left), x, y(right), x, y)

  // Ocean 
  noStroke (); // no line around the arc
  translate(400, 400); // rotates shape by x,y (400,400)
  fill(74, 135, 154); // adds coloring to circle 
  arc(0, 30, 400, 400, 0, PI); // creates arc
  fill(12, 142, 25); // adds color to arc
  translate(-400, -400); // reverts shape back to x,y (-400,-400)
  
  //Mountains within the arc
  noStroke(); // no line around the arc
  fill(66, 81, 88); // adds color to the triangles
  triangle(275, 540, 200, 430, 305, 430); // creates left most blue triangle
  triangle(300, 485, 330, 430, 250, 430); // creates middle blue triangle
  triangle(370, 540, 430, 430, 305, 430); // creates right blue triangle 
  
  // sand
  noStroke();  // no line around the arc
  fill(152,123,45); // adds color to the triangles
  ellipse(400, 615, 125, 30); //creates ellipse that forms the sand part of the picture
  
  // fish 
  noStroke(); 
  fill(166, 219, 193); // adds color to the triangles
  quad(505, 515, 470, 525, 445, 515, 470, 505); // adds bottom most fish
  quad(465, 495, 430, 505, 405, 495, 430, 485); // adds fish closest to mountain
  quad(515, 480, 480, 488, 455, 480, 480, 470); // adds fish above other fish
  quad(550, 500, 515, 510, 495, 500, 515, 490); // adds right most fish
 }

 
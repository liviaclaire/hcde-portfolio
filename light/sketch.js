/*  Livia Brown
    Last Edited on 2.11.17
    Create a light that you can adjust the color and turn off the light with the off butto
*/

var slider; // creates the slider variable
var button; // creates button variable

function setup() {
  createCanvas(600, 600);                 // sets canvas to 600x600
  noStroke();                             // nothing in canvas has a stroke
  slider = createSlider(170, 255, 200);   // creates slider and assigns variable to it
  slider.position(450, 250);              // sets sliser position
  button = createButton("off");           // creates button with text off
  button.position(480, 280, 50, 25);      // sets button position and height and width
  button.mousePressed(reset);             // creates action when mouse is pressed
}

function draw() {
  background(64);             // sets background to a dark gray
  bulb();                     // calls bulb function
  bottom();                   // calls bottom function
  // creates if statement that says if mouse is pressed & is at an x point > 480 or < 530 & the y is > 280 or < 305 the button will run reset
  if (mouseIsPressed && mouseX > 480 && mouseX < 530 && mouseY > 280 && mouseY < 305) { 
    reset();                 // reset button is run within if statement
  }
}

  // draws the top part of the bulb
function bulb() {
  fill(255, slider.value(), 58);
  ellipse (300, 250, 250, 250);
  rect(225, 290, 150, 150);
  triangle(180, 280, 260, 280, 230, 450);
  triangle(330, 280, 420, 280, 370, 450); 
}

  // creates the bottom gray part of the lightbulb
function bottom() {
  fill(238, 238, 238);
  rect(225, 435, 150, 60);
  arc(300, 490, 150, 150, 0, PI);
}

  // creates reset function which turns background and all shapes black
function reset() {
  background(0);
  fill(0);
  ellipse (300, 250, 250, 250);
  rect(225, 290, 150, 150);
  triangle(180, 280, 260, 280, 230, 450);
  triangle(330, 280, 420, 280, 370, 450); 
  rect(225, 435, 150, 60);
  arc(300, 490, 150, 150, 0, PI);
}

  // Livia Brown
  // Last Edited 2.4.17
  // Create a monster that shifts its eyes and jumps with the use of a mouse
  
var page = 0; 
var eyeDirection = 0; 
var jumpValue = 10;
var jumpDir = -5;

function setup(){ //prepares canvas
  createCanvas(800, 800);   // creates canvas
}

function draw() { //runs everything within it's function
  background(223, 226, 222); // puts in background color and repeats with draw function
  cheeto(400, 200); // calls on the function cheeto and places function at x, y coordinates
  if (page == 0) {   // if the variable page is equal to 0 then the following code happens
    if (mouseX > 10 && mouseX < 400) {  // if mouseX is greater than 10 and also less than 40 then the following code happens
      eyeDirection = min(eyeDirection + .5, 50); // eye direction moves to the right
    } else { // otherwise
      eyeDirection = max(eyeDirection - .5, -50); // eye direction moves to the left
    } //closes statement
  } else { // othersise if page === 0 this happens
    jumpValue = jumpValue + jumpDir; // the jumpValue is equal to the jumpValue plus jumpDirection
    if (jumpValue < 5 || jumpValue > 80) { // if jumpValue is less thatn 5 OR jump value is greater than 80; constrains the following statement
      jumpDir = jumpDir * -1; // jump direction will move 
    } //closes statement
  } //closes statement
} //closes statement

// sets up mousePressed function to help with the jumpValue and jumpDirection statement
function mousePressed() {
  page = 1 - page;
}

// draws a monster at the x,y location passed
// this monster includes a body, head, eyes, and legs
function cheeto(x, y) {
  body(x, y + jumpValue);
  head(x, y + jumpValue);
  eyes(x + eyeDirection, y - 50 + jumpValue); 
  legs(x, y + 450 + jumpValue);
}

// draws the head of the monster at the x, y location
function head(x, y) {
  noStroke();
  fill(255, 149, 79);
  ellipse (x, y, 300, 300);
  fill(255, 235, 170);
  triangle(x - 100, y - 100, x - 200, y - 150, x + 305, y - 150); 
  fill(58, 34, 11);
  ellipse(x - 10, y + 70, 150, 150);
}

// draws the body of the monster at thhe x, y location
function body(x, y) {
  noStroke();
  fill(7, 12, 40);
  rect (x - 90, y + 50, 180, 400);
  fill(255);
  triangle(x - 40, y + 100, x, y + 250, x + 35, y + 100);
}

// draws the eyes at the x, y location
function eyes(x, y) {
  noStroke();
  fill(204, 0, 0);
  ellipse(x + 50, y, 60, 60);
  ellipse(x - 50, y, 60, 60);
  fill(255);
  ellipse(x + 50, y, 30, 30);
  ellipse(x - 50, y, 30, 30);
  fill(0);
  ellipse(x + 50, y, 10, 10);
  ellipse(x - 50, y, 10, 10);
}

// draws the legs at the x, y location
function legs(x, y) {
  fill(7, 12, 40);
  rect(x - 50, y, 30, 80);
  rect(x + 25, y, 30, 80);
  fill(140, 78, 21);
  rect(x -50, y + 75, 50, 20);
  rect(x + 25, y + 75, 50, 20);
}

// Livia Brown
// Last Edited 1.28.17
// Created a Star Wars Droid lego family and moved them to the center of the screen from the corners 

var sassyA = 50; // x axis for K2SO
var sassyB = 50; // y axis for K2SO  

var smartC = 50; // x axis for R2D2
var smartD = 600; // y axis for R2D2

var talkE = 700; // x axis for C3PO
var talkF = 20;  // y axis for C3PO

var beepG = 700; // x axis for BB8
var beepH = 600; // y axis for BB8

var woofI = 50;  // x axis for AT-AT
var woofJ = 625; // y axis for AT-AT

function setup() { // setting up the canvas function
  createCanvas(800, 800); // creates canvas size
  background(83, 126, 116); // fills background with color
}

function draw() { //sets up draw function
  background(83, 126, 116); // keeps background color in tact while  other functions move
  sassy(); // runs K2SO function below
  smart (); // runs R2D2 function below
  talk (); // runs C3PO function below
  beep (); // runs BB8 function below
  woof(); // runs AT-AT function below 
}  
  
  // K2S0 droid top left to center 
function sassy() {  // begins function
  noStroke(); // makes sure there is no border around image
  fill(43, 39, 39); // creates color for the shapes below
  rect(sassyA, sassyB, 50, 300); // creates body rectangular shape + includes variables from above
  rect(sassyA - 8, sassyB - 30, 65, 60); // creates head rectangular shape + includes variables from above
  fill(209, 208, 208); // creates color for the shapes below
  ellipse(sassyA + 7, sassyB, 15, 15); // creates left eye shape + includes variables from above
  ellipse(sassyA + 42, sassyB, 15, 15); // creates right eye shape + includes variables from above
  fill(83, 126, 116); // creates color for the shapes below
  rect(sassyA + 5, sassyB + 150, 40, 375); // creates background color rect to allude to leg shapes + includes variables from above
  sassyA = min(sassyA + 1, 290); // sets movement for x coordinates and then stops the shape
  sassyB = min(sassyB + 1, 200); // sets movement for y coordinates and then stops the shape
}
  
  // R2D2 bottom left to center
function smart() { // begins function
  fill(255); // creates color for the shapes below
  rect(smartC, smartD, 60, 150); // creates body rectangular shape + includes variables from above
  fill(235, 235, 236); // creates color for the shape below
  rect(smartC, smartD, 60, 60); // creates rectangular shape for head + includes variables from above
  fill(0, 35, 109); // creates color for the shapes below
  rect(smartC, smartD + 65, 60, 5); // creates blue rect bar + includes variables from above
  rect(smartC, smartD + 50, 60, 10); // creates blue rect bar + includes variables from above
  rect(smartC + 20, smartD + 15, 20, 20); // creates blue box in middle of head + includes variables from above
  fill(255, 0, 0); // creates color for the shape below
  ellipse(smartC + 30, smartD + 25, 13, 13); // creates red dot + includes variables from above
  smartC = min(smartC + 1, 410); // sets movement for x coordinates and then stops the shape
  smartD = max(smartD - 1, 350); // sets movement for y coordinates and then stops the shape
}
  
  // C3PO moves from top right to center
function talk() { // begins function
  fill(254, 216, 128); // creates color for the shapes below
  rect(talkE, talkF, 60, 250); // creates the body shape + includes variables from above
  fill(0, 20, 20); // creates color for the shapes below
  rect(talkE, talkF + 120, 60, 20); // creates the little middle bar shape + includes variables from above
  talkE = max(talkE - 1, 530); // sets movement for x coordinates and then stops the shape
  talkF = min(talkF + 1, 250); // sets movement for y coordinates and then stops the shape
}
  
  // BB8 move from bottom right to center
function beep() { // begins function
  fill(255); // creates color for the shape below
  rect(beepG, beepH, 60, 150); // creates body rect + includes variables from above
  fill(217, 212, 216); // creates color for the shape below
  rect(beepG, beepH, 60, 10); // creates grey top piece + includes variables from above
  fill(0); // creates color for the shapes below
  ellipse(beepG + 30, beepH + 25, 20, 20); // creates larger eye + includes variables from above
  ellipse(beepG + 45, beepH + 40, 10, 10); // creates smaller eye + includes variables from above
  fill(231, 133, 24); // creates color for the shape below
  rect(beepG, beepH + 50, 60, 15); // creates orange stripe + includes variables from above
  beepG = max(beepG - 1, 660); // sets movement for x coordinates and then stops the shape
  beepH = max(beepH - 1, 350); // sets movement for y coordinates and then stops the shape
}
 
  // AT-AT moves from bottom left of screen to center of the screen
function woof() { // begins function
  fill(216, 216, 208); // creates color for the shapes below
  rect(woofI, woofJ, 125, 55);// main body rect + includes variables from above 
  rect(woofI, woofJ + 20, 12, 100); // left leg + includes variables from above
  rect(woofI + 25, woofJ + 20, 12, 100); // second from the left leg + includes variables from above
  rect(woofI + 90, woofJ + 20, 12, 100); // second from the right leg + includes variables from above
  rect(woofI + 113, woofJ + 20, 12, 100); // back leg + includes variables from above
  rect(woofI - 50, woofJ + 8, 40, 30); // head + includes variables from above
  rect(woofI - 70, woofJ + 35, 30, 2); // smallest rect coming off of head + includes variables from above
  rect(woofI - 15, woofJ + 20, 20, 10); // neck rect piece  + includes variables from above
  rect(woofI - 75, woofJ + 33, 10, 5); // small rect attached to front of face + includes variables from above
  woofI = min(woofI + 1, 110); // sets movement for x coordinates and then stops the shape
  woofJ = max(woofJ - 1, 380); // sets movement for y coordinates and then stops the shape
}

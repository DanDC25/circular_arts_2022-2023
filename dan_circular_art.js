// This is for a square canvas. A helper function moves the origin to the center of the canvas and optionally shows grid lines for a cartesian plane. This means that all transforms afterwards are with respect to this new coordinate system.

// This code is located at https://editor.p5js.org/hikebros01/sketches/XUAKaahtt

let CANVAS_SIZE = 400;
let GRID_SQUARES = 10;
let STEP = CANVAS_SIZE/GRID_SQUARES;
let NUM_ROTATIONS = 20;
let NUM_OF_POINTS = 8

var COLORS = [[216, 164, 127],[239, 131, 84],[238, 75, 106],[223, 59, 87],[15, 113, 115], [179, 255, 179], [202, 231, 185], [205, 247, 246], [16, 255, 203], [181, 248, 254], [151, 249, 249], [164, 222, 249]]


function setupStandardAxes(showLines){
  push()
  translate(CANVAS_SIZE/2,CANVAS_SIZE/2)
  scale(1.0,-1.0)
  
  
}

function drawGridLines(){
  
  fill(0,0,255)
  circle(0,0,5)
  stroke(200)
  for(var i = -GRID_SQUARES;i<GRID_SQUARES;i++){
    
      line(i*STEP,-GRID_SQUARES/2*STEP,i*STEP,GRID_SQUARES/2*STEP)
      
  }
  for(var j = -GRID_SQUARES;j<GRID_SQUARES;j++){
    
      line(-GRID_SQUARES/2*STEP,j*STEP,GRID_SQUARES/2*STEP,j*STEP)
      
  }
}

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(220);
  angleMode(DEGREES);
  setupStandardAxes();
  drawGridLines();
  
  
  for(var j = 0;j<NUM_OF_POINTS;j++){
    
    let randomX = random (0,GRID_SQUARES/2)
    let randomY = random (-GRID_SQUARES/4, GRID_SQUARES/6)
    let randomColor = random(COLORS)
    fill(randomColor)
    
    for(var i = 0; i < NUM_ROTATIONS; i++){
    circle(randomX*STEP, randomY*STEP,10)
      rotate(360/NUM_ROTATIONS);
    } 
    
      
//   circle(3*STEP,2*STEP,10);
//   circle(2*STEP,1*STEP,10);
//   circle(0*STEP,4*STEP,10);
//   circle(3*STEP,3*STEP,10);
  
  }
}

function draw() {
  
  
}

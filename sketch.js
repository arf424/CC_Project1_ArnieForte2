var power = false;

var zoom = 1.00;
var zMin = 0.05;
var zMax = 9.00;
var sensativity = 0.005;//variables to control parameters of mousewheel function

function setup() {
  createCanvas(1000,650);
  rectMode(CENTER);//set the rectangles to be created from the center out.
  b = new Ball();
  pL = new Paddle(-68, 0);
  pR = new Paddle(68,0);
}
function draw() {
  if (power == false){
    background(117, 138, 94);
    translate(width/2,height/2);
    fill(0);
    scale(zoom);//set up the scene and zoom.
	
    stroke(1);
    fill(135, 80, 70);
    rect(0, 0, 200, 150, 20);
    fill(150);
    rect(0, 0, 150, 100);
    fill(94, 106, 138);
    rect(0, 195, 280, -220);
    fill(0);
    rect(-75, 80, 10,10);
    rect(75, 80, 10,10);
    line(0, -75, -75, -180);
    line(0, -75, 75, -180);
    circle(75, 60, 10);//create the tv and block it stands on

  
    noStroke();
    static();//enable static function to add static effect to screen.
  }
  if (power == true){
    powerOn();
    b.update();
    b.display();
    pL.update();
    pL.display();
    pR.update();
    pR.display();
    //b.collision(pL);
    //b.collision(pR);
  }

  }
 
function mouseWheel() {//if the mousewheel is used, zoom is schanged to affect the scale of the scene.
  if (zoom < 4.00){
  	zoom += sensativity * event.delta;
    zoom = constrain(zoom, zMin, zMax);
    return false;
  }
	if (zoom >= 4.00){
	  background(117, 138, 94);
	  fill(135, 80, 70);
    rect(0, 0, 200, 150, 20);
    fill(150);
    rect(0, 0, 150, 100, 10);//stop the zoom once it gets to a certain threshold.
	}
}
function static() {//static function for starting sequence
 if (power == false){   
  for (var x = 0; x <= 145; x +=5) {//noprotect
      for (var y = 0; y <= 90; y+=5) {
        fill(0);
        circle(x-random(5)-70, y-random(5)-42.5, 3);
        fill(255);
        circle(x-random(5)-70, y-random(5)-42.5, 3);
			}
	 }
 }
}

function powerOn(){
  power = true;
  translate(width/2,height/2);
  fill(0);
  scale(zoom);
  background(117, 138, 94);
  stroke(1);
  fill(135, 80, 70);
  rect(0, 0, 200, 150, 20);
  fill(0);
  rect(0, 0, 150, 100);
  fill(94, 106, 138);
  rect(0, 195, 280, -220);
  fill(0);
  rect(-75, 80, 10,10);
  rect(75, 80, 10,10);
  line(0, -75, -75, -180);
  line(0, -75, 75, -180);
  circle(75, 60, 10);
}
function mousePressed(){
  //console.log("mouse pressed");
  if (power == false);{
  setTimeout(powerOn, 1000);
  }
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    pR.setDir(-1);
  }
  else if (keyCode === DOWN_ARROW){
    pR.setDir(1);
  }
  if (key === 'w'){
    pL.setDir(-1);
  }
  else if (key === 's'){
    pL.setDir(1);
  }
}

function keyReleased(){
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW){
    pR.setDir(0);
  }
  if (key === 'w' || key === 's'){
    pL.setDir(0);
  }
}
var circlesGroup
var speed

function preload(){
  green = loadImage("images/green.png")
  blue = loadImage("images/blue.png")
  i = loadImage("images/bg check.jpg")
  skin1 = loadImage("images/skin1.png")
  skin2 = loadImage("images/skin2.png")
  
}
function setup() {
  createCanvas(displayWidth,displayHeight-150);
  
circlesGroup = new Group()
speed = 5
  for (var i = 0 ;i < displayWidth ; i=i+150 ){
    for(var j = 0; j < displayHeight ; j =j +150  ){
    //  circle = new Circle(random(i,displayHeight),random(j,displayWidth),5,blue,0.1)
    circle = new Circle(random(0,displayWidth),random(0,displayHeight),5,blue,0.1)
    circle1 = new Circle(random(0,displayWidth),random(0,displayHeight),5,green,0.07)
    }
  }
  player1 = new Player(displayWidth/2,displayHeight/2,5,0.4)
  
  
}


function draw() {
  background(i);
  //if (frameCount % 100 == 0){
    //circle = new Circle(100,200,green,0.1)
  //}
  
 player1.touch()
  player1.move(speed)
  drawSprites();
}
var ground,groundImage;
var hunter,hunterImage;

function preload(){
  groundImage=loadImage("ground.jpg");
  hunterImage = loadAnimation("hunter1.png","hunter2.png","hunter3.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);

  ground= createSprite(500,400,displayWidth,displayHeight);
  ground.x=ground.x/2;
  
  ground.addImage(groundImage);

  hunter = createSprite(300,300,100,50)
  hunter.addAnimation("hunter",hunterImage)
  
 
}

function draw() {
  background(0); 

 
  drawSprites();
}
  
 
  
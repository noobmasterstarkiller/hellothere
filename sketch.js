var mario,mariimg;
var ground,groundimg
var invisibleground
var cloudimage
var pipesimg
function preload(){
  
  marioimg = loadAnimation("mario1.png","mario2.png");
  groundimg = loadAnimation("ground.png")
  cloudimage = loadAnimation("cloud.png")
  pipesimg = loadAnimation("pipes.png")
}
function setup() {
  createCanvas(600, 200);
  mario = createSprite(50,140,20,20);
  mario.addAnimation("marioimg",marioimg);
  mario.scale =0.25;
  ground = createSprite(0 ,200)
  ground.addAnimation("groundimg",groundimg)
  invisibleground = createSprite(0,200,1200,60)
  invisibleground.visible = false


}

function draw() {
  background("lightblue");
  drawSprites();
  ground.velocityX = -10
  
  if(ground.x<0){
    ground.x = ground.width/2
  }
    if(keyDown("space")){
      mario.velocityY= -15
      
      
  }
  mario.velocityY = mario.velocityY + 0.8
  mario.collide(invisibleground)
  spawnClouds();
  spawnPipes();
  
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(600,320,40,10);
    cloud.y = random(50,120);
    cloud.addAnimation("cloudimage",cloudimage);
  
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
  }
  
}

function spawnPipes() {
  //write code here to spawn the clouds
  if (World.frameCount % Math.round (random(60,120)) === 0) {
    var pipes = createSprite(600,150,40,10);
    pipes.addAnimation("pipesimg",pipesimg);
  
    pipes.velocityX = -3;
    pipes.scale = 0.3
     //assign lifetime to the variable
    pipes.lifetime = 200;
  }
}
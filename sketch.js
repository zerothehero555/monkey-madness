
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0;
var END = 0;
var SurvivalTime = 0;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {  
 monkey = createSprite(80,315,20,20)
 monkey.addAnimation("moving",monkey_running)
 monkey.scale = 0.1;
  
ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2;
console.log(ground.x);
  
 
  
  
  
bananaGroup = new Group()
obstacleGroup = new Group()

}


function draw() {
 background(255)
  
  
if (ground.x < 0){
      ground.x = ground.width/2;
    } 
  
  if(keyDown("space")) {
      monkey.velocityY = -12;
}  

monkey.velocityY = monkey.velocityY + 1.0;
monkey.collide(ground)
  
if(World.frameCount % 80 === 0){
   banana=createSprite(300,300,20,20) 
   banana.addImage(bananaImage)
   banana.y=Math.round(random(120,200))
   banana.velocityX=-4;
   banana.scale = 0.1;
   banana.setLifetime = 20;
  
}  

  if(World.frameCount % 300 === 0){
   obstacle=createSprite(400,310,20,20) 
   obstacle.addImage(obstacleImage)
   obstacle.velocityX=-7;
   obstacle.scale = 0.2;

}  
  
stroke("white");
textSize(20);
fill("white");
text("Score"+ score,500,50)
  
stroke("black");
textSize(20);
fill("black");
SurvivalTime = Math.ceil(frameCount/frameRate())
text("Survival Time: "+ SurvivalTime,100,50)
    
   if (obstacleGroup.isTouching(monkey)){
      banana.Y = 0;
      obstacle.Y = 0;
}  
  
 drawSprites();
}


function food(){
  
  if(World.frameCount % 80 === 0){
   banana=createSprite(300,300,20,20) 
   banana.addImage(bananaImage)
   banana.y=Math.round(random(120,200))
   banana.velocityX=-1;
   banana.scale = 0.1;

   bananaGroup.add(banana)
}
}

function obstacles(){
  
  if(World.frameCount % 300 === 0){
   obstacle=createSprite(400,300,20,20) 
   obstacle.addImage(obstacleImage)
   obstacle.velocityX=-1;
   obstacle.scale = 0.2;

   obstacleGroup.add(obstacle)
}

}

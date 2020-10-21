
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(600, 600);
  monkey=createSprite(80,315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
 
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  ground.visible = false;
  console.log(ground.x);
  
bananaGroup = new Group();


  
}


function draw() {
  background("green");
  
  stroke("white");
  textSize(20);
  fill("white");
   text("Score:"+ score, 500 ,50 );
  
  stroke("black");
  textSize(20);
  fill("white");
  score=Math.ceil(frameCount/frameRate())
   text("Survival Time:"+ score, 100 ,50 );
  
  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y > 250) {
        monkey.velocityY = -12;
        
        
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
 //stop monkey from falling down
  monkey.collide(ground);
  
  
  
  food();
  stone();
  drawSprites();
}
 
function food(){
if (frameCount % 80 === 0) {
    banana = createSprite(200,315,40,150);
    banana.y = Math.round(random(300,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 100;
    
    
   bananaGroup.add(banana);
    }

}

function stone(){
if (frameCount % 120 === 0) {
    obstacle = createSprite(200,315,40,150);
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 100;
    
   
  
    }

}







var iss
var sleep
var bath
var brush
var drink
var eat
var gym, gymCircle
var move
var astronaut

function preload() {

  iss = loadImage("iss.png")
  sleep = loadAnimation("sleep.png")
  bath = loadAnimation("bath1.png", "bath2.png")
  brush = loadAnimation("brush.png")
  drink = loadAnimation("drink1.png", "drink2.png")
  eat = loadAnimation("eat1.png", "eat2.png")
  gym - loadAnimation("gym1.png", "gym2.png")
  gymCircle = loadAnimation("gym11.png", "gym12.png")
  move = loadAnimation("move.png", "move1.png")

}

function setup() {
  createCanvas(800, 400);

  astronaut = createSprite(400, 200)
  astronaut.addAnimation("sleeping", sleep)
  astronaut.changeAnimation("sleeping")
  astronaut.scale = 0.1
}

function draw() {
  edges = createEdgeSprites()
  astronaut.bounceOff(edges)
  
  background(iss)

  if (keyDown(RIGHT_ARROW)) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing")
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if (keyDown (LEFT_ARROW)){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing")
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if(keyDown("u")){
    
    astronaut.addAnimation("moving",move);
    astronaut.addAnimation("moving",move);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown(DOWN_ARROW)){
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking")
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if (keyDown("e")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating")
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  /*gym = createSprite(200,200);
  gym = addImage(gym)
 
  gymCircle = createSprite(200,200);
  gymCircle = addImage(gymCircle)
 
  moving = createSprite(200,200);
  moving = addImage(move)*/

  drawSprites();
}

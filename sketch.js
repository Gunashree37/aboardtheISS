var iss
var sleep
var bath
var brush
var drink
var eat
var gym, gymCircle
var move

function preload(){

iss = loadImage("iss.png")  
sleep = loadImage("sleep.png")
bath = loadAnimation ("bath1.png", "bath2.png")
brush = loadImage("brush.png")
drink = loadAnimation("drink1.png", "drink2.png")
eat = loadAnimation("eat1.png", "eat2.png")
gym - loadAnimation("gym1.png", "gym2.png")
gymCircle = loadAnimation("gym11.pmg", "gym12.png")
move = loadAnimation("move.png", "move1.png")

}

function setup() {
 createCanvas(800,400);
 createSprite(400, 200, 50, 50);

}

function draw() {
  background(iss)  
 
  if (keyDown(RIGHT_ARROW)){
  sleep = createSprite(200,200);
  sleep.addImage(sleep)
  }
 
  if (keyDown (LEFT_ARROW)){
  bath = createSprite(200,200);
  bath.addAnimation(bath)
  }

  if (keyDown (UP_ARROW)){
  brush = createSprite(200,200);
  brush.addImage(brush)
  }

  if (keyDown(DOWN_ARROW)){
  drink = createSprite(200,200);
  drink.addAnimation(drink)
  }

  if (keyDown("space")){
  eat = createSprite(200,200);
  eat.addAnimation(eat)
  }

  /*gym = createSprite(200,200);
  gym = addImage(gym)
 
  gymCircle = createSprite(200,200);
  gymCircle = addImage(gymCircle)
 
  move = createSprite(200,200);
  move = addImage(move)*/
  
  drawSprites();
}
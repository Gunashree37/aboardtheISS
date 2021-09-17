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
moving = loadAnimation("move.png", "move1.png")
astronaut = loadAnimation("move.png", "move1.png")

}

function setup() {
 createCanvas(800,400);
 createSprite(400, 200, 50, 50);

}

function draw() {
  background(iss)  
 
  astronaut = createSprite(400,200)
  
  if (keyDown(RIGHT_ARROW)){
  astronaut.changeAnimation(sleep)
  }
 
  if (keyDown (LEFT_ARROW)){
  astronaut.changeAnimation(bath)
  }

  if (keyDown (UP_ARROW)){
  astronaut.changeAnimation(brush)
  }

  if (keyDown(DOWN_ARROW)){
  astronaut.changeAnimation(drink)
  }

  if (keyDown("space")){
  astronaut.changeAnimation(eat)
  }

  /*gym = createSprite(200,200);
  gym = addImage(gym)
 
  gymCircle = createSprite(200,200);
  gymCircle = addImage(gymCircle)
 
  moving = createSprite(200,200);
  moving = addImage(move)*/
  
  drawSprites();
}
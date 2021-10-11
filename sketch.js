
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var ball_options={
	  isStatic:false,
	  restitution:0.3,
	  friction:0,
	  density:1.2
  }
  
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ground = new Ground(width/2,670,width,20);
  leftSide = new Ground(1100,600,20,120);
  rightSide = new Ground(1150,600,20,120);
    
	rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-0.85})
  }
}

function draw() {
  
  background(51);

  ellipse(ball.position.x,ball.position.y,20);
  
  ground.show();
  leftSide.show();
  rightSide.show();

  Engine.update(engine);
  
}







const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var engine;
var world;

var ground
var g1, g2
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 570, 1000, 20);
	g1 = new Ground(900, 500, 20, 120);
	g2 = new Ground(600, 500, 20, 120);
    rectMode(CENTER)

var ball_options={
	isStatic:false,
	restitution : 1,
	friction:0,
	density:1.2
}
ball = Bodies.circle(200, 100, 30, ball_options)
World.add(world, ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  ellipse(ball.position.x, ball.position.y, 30)
  g1.display();
  g2.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {
			x:85, y:85
		})
		
	}
}


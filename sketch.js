
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin
function preload(){ 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	dustbin1 = new dustbin(700, 500, 30, 40)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




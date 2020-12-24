var helicopterIMG, helicopterSprite, packageSprite,packageIMG,bgimg,bg;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	bgimg=loadImage("bbg.png")
}

function setup() {
	createCanvas(800, 650);
	rectMode(CENTER);

	bg=createSprite(250	, 300, 10,10);
	bg.addImage(bgimg)
	bg.scale=0.7	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)

	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 90, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.8

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	groundSprite.visible=false


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}




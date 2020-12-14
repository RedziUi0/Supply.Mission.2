var helicopterIMG, helicopterSprite, packageSprite,packageIMG,pixel1sprite,pixel2sprite,pixel3sprite;
var packageBody,ground,pixelBody,pixel1Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 250, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	pixel1sprite=createSprite(width/2, height-40, 100,5);
	pixel1sprite.shapeColor="red"

	pixel2sprite=createSprite(350, height-62, 5,50);
	pixel2sprite.shapeColor="red"

	pixel3sprite=createSprite(450, height-62, 5,50);
	pixel3sprite.shapeColor="red"


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 pixelBody = Bodies.circle(width/2 , height-40 , 5 , { isStatic:true});
	World.add(world, pixelBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageBody = Bodies.circle(width/2 , 260 , 5 , { isStatic:false});
	World.add(world, packageBody);
	
      Engine.update(engine);
	

    
  }
}




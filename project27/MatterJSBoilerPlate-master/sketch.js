
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var bob,bob2,bob3,bob4,bob5
var roof,slingShot,slingShot2,slingShot3,slingShot4,slingShot5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

   
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob=new Bob(200,600,100)
	bob.shapeColor=("purple")
	
	bob2=new Bob(300,600,100)
	bob2.shapeColor=("purple")

	bob3=new Bob(400,600,100)
	bob3.shapeColor=("purple")

	bob4=new Bob(500,600,100)
	bob4.shapeColor=("purple")

	bob5=new Bob(600,600,100)
	bob5.shapeColor=("purple")
	
	roof=new Roof(400,100,600,50)
	
	slingShot = new Slingshot(bob.body,{x:200,y:100});
	slingShot2 = new Slingshot(bob2.body,{x:300,y:100});
	slingShot3= new Slingshot(bob3.body,{x:400,y:100});
	slingShot4 = new Slingshot(bob4.body,{x:500,y:100});
	slingShot5 = new Slingshot(bob5.body,{x:600,y:100});

	Engine.run(engine);


	
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  bob.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
roof.display()
slingShot.display();   
slingShot2.display();  
slingShot3.display();  
slingShot4.display();  
slingShot5.display();  

  drawSprites();
 
  

}

function keyPressed(){
	if( keyCode===UP_ARROW){
	
		Matter.Body.applyForce(bob.body,bob.body.position,{x:-550,y:-485})
	}
	
	
	}
	
	
	
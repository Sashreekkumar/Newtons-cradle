
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint; 
var bob1, bob2, bob3, bob4, bob5;
var roof, rope1, rope2, rope3, rope4, rop5; 
const Render = Matter.Render;
var world; 

function setup() {
	createCanvas(500, 600);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(194, 300, 20)
	bob2 = new Bob(234, 300, 20)
	bob3 = new Bob(274, 300, 20)
	bob4 = new Bob(314, 300, 20)
	bob5 = new Bob(354, 300, 20)

	roof= new Roof(276, 100, 220, 10)

	var render   = Render.create({
		      element: document.body,
		      engine: engine,
		      options: {
		        width: 1200,
		        height: 700,
		        wireframes: false
		      }
		    });

	rope1= new Rope(bob1.body, roof.body, -82, 0)
	rope2= new Rope(bob2.body, roof.body, -42, 0)
	rope3= new Rope(bob3.body, roof.body, -2, 0)
	rope4= new Rope(bob4.body, roof.body, 38, 0)
	rope5= new Rope(bob5.body, roof.body, 78, 0)
	Engine.run(engine);
  
}


function draw() {
 
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	  }
}



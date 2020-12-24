
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1,log2,log3;
var paper;
var ground1,ground2;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//	ground = new Ground(600,height,1200,20);
  ground1= new Ground(1005,630,200,10);
  ground2= new Ground(1080,582,1,80)
  ground=new Ground(width/2, 650, width, 10);
	log2 = new Log(915,570,100,0);
	log3 = new Log(1095,570,100,0);
	log1 = new Log(1005,634,200,90);

    paper= new Paper(100,600,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ground.display();
  ground1.display();
  log2.display();
  log3.display();
  log1.display();
  paper.display();
  ground2.display();

  keypressed();
  drawSprites();
 
}

function keypressed(){
	if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-2});
  //Matter.Body.setStatic(paperBody,false);
   }
}

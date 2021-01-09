
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	boyImage = loadImage('boy.png');
	treeImage = loadImage('tree.png');
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	
	tree1 = new tree(900,350);
	ground1 = new ground(600,675,1500,50);
	stone1 = new stone(100,500);

	mango1 = new mango(1000,200,70);
	mango2 = new mango(1150,200,80);
	mango3 = new mango(950,80,100);
	mango4 = new mango(700,250,50);
	mango5 = new mango(600,300,70);
	mango6 = new mango(900,300,70);
	mango7 = new mango(750,180,80);
	mango8 = new mango(900,200,80);
	mango9 = new mango(800,350,75);
	mango10 = new mango(1050,300,60);

	constraint1 = new constraint(stone1.body,{x:120,y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('DeepSkyBlue');

  boy = createSprite(200,585,10,10);
  boy.addImage(boyImage);
  boy.scale=0.15;

  tree1 = createSprite(900,350,100,100);
  tree1.addImage(treeImage);
  tree1.scale=0.55;

  constraint1.display();
  //tree1.display();
  ground1.display();

  //mouseDragged();
  //mouseReleased();

  drawSprites();

  stone1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectCollision(mango1,stone1);
  detectCollision(mango2,stone1);
  detectCollision(mango3,stone1);
  detectCollision(mango4,stone1);
  detectCollision(mango5,stone1);
  detectCollision(mango6,stone1);
  detectCollision(mango7,stone1);
  detectCollision(mango8,stone1);
  detectCollision(mango9,stone1);
  detectCollision(mango10,stone1);

  textSize(40);
  fill('white')
  textFont('jokerman');
  text("Press Space to try again!!",20,50);

}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    constraint1.fly();
}

function detectCollision(lmango,lstone){
	mangoBodyPosition = lmango.body.position ;
	stoneBodyPosition = lstone.body.position ;
  
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x,  mangoBodyPosition.y)
  
  if (distance <= lmango.r + lstone.r)
  {
	  Matter.Body.setStatic(lmango.body,false);
	}
  }

  function keyPressed(){
	if (keyCode === 32){
	  Matter.Body.setPosition(stone1.body,{x:88, y:450})
	  constraint1.attach(stone1.body)
	}
  }

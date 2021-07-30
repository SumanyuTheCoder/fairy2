

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var barrier

function preload()
{
	starImg = loadImage("star.png");
  	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 510);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairyVoice.play();
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
  
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650,30,5,{restitution:0.5, isStatic:true});

	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  keyPressed()
  star.x= starBody.position.x 
  star.y= starBody.position.y 

 // Engine.update(engine);
 if(keyCode === DOWN_ARROW){
	Matter.Body.setStatic(starBody, false);

}
if(  starBody.position.y > 470){
	Matter.Body.setStatic(starBody, true);

}
 drawSprites();

}

//starfall();




//function starfall(){
	
//star.velocityY =  2 ;
	//}

function keyPressed() {
	//write code here
	if(keyWentDown("RIGHT_ARROW")){
		fairy.velocityX = 3
	}
	if(keyWentUp("RIGHT_ARROW")){
		fairy.velocityX = 0;
	}

	if(keyWentDown("LEFT_ARROW")){
		fairy.velocityX = -3
	}
	
	if(keyWentUp("LEFT_ARROW")){
		fairy.velocityX = 0;
	}
	
}
var starImg,bgImg;
var star, starBody;
var hada, fairyImg, fairyVoice;
var fairyVoice, farysonido;
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png")
	fairyVoice = loadSound("sound/JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice

    hada = createSprite(400,600,50,50)
	hada.addAnimation("hadamovie", fairyImg)
	hada.scale = 0.2;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 530 && starBody.position.y > 530){
    Matter.Body.setStatic(starBody,true);
	fairyVoice.play();
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyCode === LEFT_ARROW){
		hada.x = hada.x -15;
	}
	if(keyCode === RIGHT_ARROW){
      hada.x = hada.x +15;
	}
	
}

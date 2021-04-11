var backgroundImage
var tom,tomImage,t2
var jerry,jerryImage,j2

function preload() {
    //load the images here
backgroundImage=loadImage("images/garden.png")
tomImage=loadAnimation("images/cat1.png")
jerryImage=loadAnimation("images/mouse1.png")
t2=loadAnimation("images/cat2.png","images/cat3.png")
j2=loadAnimation("images/mouse2.png","images/mouse3.png")
t3=loadAnimation("images/cat4.png")
j3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom = createSprite(800,550,20,20);
 tom.addAnimation("tom",tomImage);
 tom.scale=0.3

 jerry = createSprite(150,600,20,20);
 jerry.addAnimation("jerry",jerryImage);
 jerry.scale=0.2

}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
 

 if(tom.x-jerry.x<tom.width/2-jerry.width/2){
 jerry.addAnimation("mousehappy",j3)
 jerry.changeAnimation("mousehappy")
 tom.addAnimation("cathappy",t3)
 tom.changeAnimation("cathappy")
 }

 

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    jerry.addAnimation("mouseTeasing",j2)
    jerry.changeAnimation("mouseTeasing",j2)
    jerry.frameDelay=25;

 tom.addAnimation("movingcat",t2)
tom.changeAnimation("movingcat")
tom.velocityX=-5
}


}

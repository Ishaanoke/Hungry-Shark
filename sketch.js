var fish1,fish2;
var shark,sharkLeftImage,sharkRightImage,sharkUpImage,sharkDownImage;
var fish1Image,fish2Image;
var backgroundImg;
var fish1Group,fish2Group;
var r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20;
var BombImage,bombGroup;
var gameState = "Play";
var gameOverSound,waveSound;
var gameOverImage;

function preload(){

fish1Image = loadImage("Images/Fish1.png");
fish2Image = loadImage("Images/Fish2.png");
sharkRightImage = loadImage("Images/Shark.png");
sharkLeftImage = loadImage("Images/FlippedShark.png");
sharkUpImage = loadImage("Images/SharkUp.png");
sharkDownImage = loadImage("Images/SharkDown.png");
backgroundImg = loadImage("Images/Water.jpg");
BombImage = loadImage("Images/black-bomb.png");
gameOverSound = loadSound("gameover.mp3");
waveSound = loadSound("Waves.wav");
gameOverImage = loadImage("Images/GameOverImage.jpg");
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  shark = createSprite(width/2,height-100,50,50);
  shark.addImage(sharkRightImage);
  
fish1Group = new Group();
fish2Group = new Group();

r1 = createSprite(windowWidth-20,50,10,10);
r1.shapeColor = ("Green");
r2 = createSprite(windowWidth-30,50,10,10);
r2.shapeColor = ("Green");
r3 = createSprite(windowWidth-40,50,10,10);
r3.shapeColor = ("Green");
r4 = createSprite(windowWidth-50,50,10,10);
r4.shapeColor = ("Green");
r5 = createSprite(windowWidth-60,50,10,10);
r5.shapeColor = ("Green");
r6 = createSprite(windowWidth-70,50,10,10);
r6.shapeColor = ("Green");
r7 = createSprite(windowWidth-80,50,10,10);
r7.shapeColor = ("Green");
r8 = createSprite(windowWidth-90,50,10,10);
r8.shapeColor = ("Green");
r9 = createSprite(windowWidth-100,50,10,10);
r9.shapeColor = ("Green");
r10 = createSprite(windowWidth-110,50,10,10);
r10.shapeColor = ("Green");
r11 = createSprite(windowWidth-120,50,10,10);
r11.shapeColor = ("Green");
r12 = createSprite(windowWidth-130,50,10,10);
r12.shapeColor = ("Green");
r13 = createSprite(windowWidth-140,50,10,10);
r13.shapeColor = ("Green");
r14 = createSprite(windowWidth-150,50,10,10);
r14.shapeColor = ("Green");
r15 = createSprite(windowWidth-160,50,10,10);
r15.shapeColor = ("Green");
r16 = createSprite(windowWidth-170,50,10,10);
r16.shapeColor = ("Green");
r17 = createSprite(windowWidth-180,50,10,10);
r17.shapeColor = ("Green");
r18 = createSprite(windowWidth-190,50,10,10);
r18.shapeColor = ("Green");
r19 = createSprite(windowWidth-200,50,10,10);
r19.shapeColor = ("Green");
r20 = createSprite(windowWidth-210,50,10,10);
r20.shapeColor = ("Green");

shark.lifetime = 500;

bombGroup = new Group();
}

function draw() {
   

  if(gameState==="Play"){
    background(backgroundImg);
    waveSound.loop();
    if(keyDown("LEFT_ARROW")){
      shark.x = shark.x-3;
      shark.addImage(sharkLeftImage);
    }
    if(keyDown("RIGHT_ARROW")){
      shark.x = shark.x+3;
      shark.addImage(sharkRightImage);
    }
    if(keyDown("UP_ARROW")){
      shark.y = shark.y-3;
      shark.addImage(sharkUpImage);
    }
    if(keyDown("DOWN_ARROW")){
      shark.y = shark.y+3;
      shark.addImage(sharkDownImage);
    }
    spawnFood();
    spawnBomb();

if(bombGroup.isTouching(shark)){
  gameState = "End";
  shark.lifetime = 0;
}

    if(shark.isTouching(fish1Group)){
      fish1Group[0].destroy();
      shark.lifetime = shark.lifetime+75;
    }
    if(shark.isTouching(fish2Group)){
      fish2Group[0].destroy();
      shark.lifetime = shark.lifetime+125;
    }
    if(shark.lifetime<=0){
      r1.visible = false;
    }
    else if(shark.lifetime<=25){
      r2.visible = false;
      r1.visible = true;
    }
    else if(shark.lifetime<=50){
      r3.visible = false;
      r2.visible = true;
       r1.visible = true;
    }
    else if(shark.lifetime<=75){
      r4.visible = false;
      r3.visible = true;
     
      r2.visible = true;
       r1.visible = true;
    }
   else if(shark.lifetime<=100){
      r5.visible = false;
      r4.visible = true;
     
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
   else if(shark.lifetime<=125){
      r6.visible = false;
      r5.visible = true;
     
      r4.visible = true;
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
   else if(shark.lifetime<=150){
      r7.visible = false;
      r6.visible = true;
     
       r6.visible = true;
      r5.visible = true;
      r4.visible = true;
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
  else  if(shark.lifetime<=175){
      r8.visible = false;
      r7.visible = true;
   
       r6.visible = true;
      r5.visible = true;
      r4.visible = true;
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
   else if(shark.lifetime<=200){
      r9.visible = false; 
     r8.visible = true;
      
      r7.visible = true;
       r6.visible = true;
      r5.visible = true;
      r4.visible = true;
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
  else  if(shark.lifetime<=225){
      r10.visible = false;
      r9.visible = true;
    
      r8.visible = true;
      r7.visible = true;
       r6.visible = true;
      r5.visible = true;
      r4.visible = true;
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
  else  if(shark.lifetime<=250){
      r11.visible = false;
      r10.visible = true;
    
      r9.visible = true;
      r8.visible = true;
      r7.visible = true;
       r6.visible = true;
      r5.visible = true;
      r4.visible = true;
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
  else  if(shark.lifetime<=275){
      r12.visible = false;
      r11.visible = true;
    
      r10.visible = true;
      r9.visible = true;
      r8.visible = true;
      r7.visible = true;
       r6.visible = true;
      r5.visible = true;
      r4.visible = true;
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
 else   if(shark.lifetime<=300){
      r13.visible = false;
      r12.visible = true;
   
       r11.visible = true;
      r10.visible = true;
      r9.visible = true;
      r8.visible = true;
      r7.visible = true;
       r6.visible = true;
      r5.visible = true;
      r4.visible = true;
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
  else  if(shark.lifetime<=325){
      r14.visible = false;
      r13.visible = true;
    
      r12.visible = true;
       r11.visible = true;
      r10.visible = true;
      r9.visible = true;
      r8.visible = true;
      r7.visible = true;
       r6.visible = true;
      r5.visible = true;
      r4.visible = true;
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
  else  if(shark.lifetime<=350){
      r15.visible = false;
      r14.visible = true;
      r13.visible = true;
      r12.visible = true;
       r11.visible = true;
      r10.visible = true;
      r9.visible = true;
      r8.visible = true;
      r7.visible = true;
       r6.visible = true;
      r5.visible = true;
      r4.visible = true;
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
  else  if(shark.lifetime<=375){
      r16.visible = false;
      r15.visible = true;
      r14.visible = true;
      r13.visible = true;
      r12.visible = true;
       r11.visible = true;
      r10.visible = true;
      r9.visible = true;
      r8.visible = true;
      r7.visible = true;
       r6.visible = true;
      r5.visible = true;
      r4.visible = true;
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
  else  if(shark.lifetime<=400){
      r17.visible = false;
      r16.visible = true;
      r15.visible = true;
      r14.visible = true;
      r13.visible = true;
      r12.visible = true;
       r11.visible = true;
      r10.visible = true;
      r9.visible = true;
      r8.visible = true;
      r7.visible = true;
       r6.visible = true;
      r5.visible = true;
      r4.visible = true;
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
  else  if(shark.lifetime<=425){
      r18.visible = false;
      r17.visible = true;
      r16.visible = true;
      r15.visible = true;
      r14.visible = true;
      r13.visible = true;
      r12.visible = true;
       r11.visible = true;
      r10.visible = true;
      r9.visible = true;
      r8.visible = true;
      r7.visible = true;
       r6.visible = true;
      r5.visible = true;
      r4.visible = true;
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
  else  if(shark.lifetime<=450){
      r19.visible = false;
      r18.visible = true;
      r17.visible = true;
       r16.visible = true;
      r15.visible = true;
      r14.visible = true;
      r13.visible = true;
      r12.visible = true;
       r11.visible = true;
      r10.visible = true;
      r9.visible = true;
      r8.visible = true;
      r7.visible = true;
       r6.visible = true;
      r5.visible = true;
      r4.visible = true;
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
  else  if(shark.lifetime<=475){
      r20.visible = false;
      r19.visible = true;
      r18.visible = true;
      r17.visible = true;
       r16.visible = true;
      r15.visible = true;
      r14.visible = true;
      r13.visible = true;
      r12.visible = true;
       r11.visible = true;
      r10.visible = true;
      r9.visible = true;
      r8.visible = true;
      r7.visible = true;
       r6.visible = true;
      r5.visible = true;
      r4.visible = true;
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
  else  if(shark.lifetime>475){
      r20.visible = true;
      r19.visible = true;
      r18.visible = true;
      r17.visible = true;
       r16.visible = true;
      r15.visible = true;
      r14.visible = true;
      r13.visible = true;
      r12.visible = true;
       r11.visible = true;
      r10.visible = true;
      r9.visible = true;
      r8.visible = true;
      r7.visible = true;
       r6.visible = true;
      r5.visible = true;
      r4.visible = true;
      r3.visible = true;
      r2.visible = true;
       r1.visible = true;
    }
  }
  
if(gameState==="End"){
background(gameOverImage);

shark.destroy();
fish1Group.destroyEach();
fish2Group.destroyEach();
bombGroup.destroyEach();
waveSound.stop();
gameOverSound.play();
}

  drawSprites();
}

function spawnFood(){
  if(frameCount%100===0){
    var select = Math.round(random(1,2));
    if(select===1){
      fish1 = createSprite(Math.round(random(50,width-100)), -50, 50, 50);
      fish1.addImage(fish1Image);
      fish1.velocityY = 4;
      fish1.scale = 0.1;
      fish1Group.add(fish1);
      fish1.lifetime = displayHeight/5+100;
    }
    else{
      if(select===2){
        fish2 = createSprite(Math.round(random(50,width-100)), -50, 50, 50);
        fish2.addImage(fish2Image);
        fish2.velocityY = 4;
        fish2.scale = 0.150;
        fish2Group.add(fish2);
        fish2.lifetime = displayHeight/5+100;
      }
    }
  }
}
function spawnBomb(){
  if(frameCount%130===0){
    var bomb = createSprite(Math.round(random(50,width-50)),-40,50,50);
bomb.addImage(BombImage);
bomb.velocityY=5;
bomb.lifetime = displayHeight/5+100;
bomb.scale = 0.1;
bombGroup.add(bomb);
  }
}
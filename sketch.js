var fixedRect, movingRect;
var obj1,obj2,obj3,obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(100, 100, 50, 50);
  obj1.shapeColor = "green";
  obj1.debug = true;

  obj2 = createSprite(200, 100, 50, 50);
  obj2.shapeColor = "green";
  obj2.debug = true;

  obj3 = createSprite(300, 100, 50, 50);
  obj3.shapeColor = "green";
  obj3.debug = true;

  obj4 = createSprite(400, 100, 50, 50);
  obj4.shapeColor = "green";
  obj4.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,obj1)){
 obj1.shapeColor = "yellow";
 movingRect.shapeColor = "yellow";

  }
  else{
 obj1.shapeColor = "green";
 movingRect.shapeColor = "green";
  }

  drawSprites();
}


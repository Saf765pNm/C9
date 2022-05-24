var box
function setup() {
  createCanvas(600,600);
  box=createSprite(500,200,10,10);
  box.shapeColor="Green";
}

function draw() 
{
  background("purple");
drawSprites();
if(keyDown("down")){
  box.y= box.y+2
}
if(keyDown("up")){
  box.y= box.y-2
}
if(keyDown("right")){
  box.x= box.x+2
}
if(keyDown("left")){
  box.x= box.x-2
}
}





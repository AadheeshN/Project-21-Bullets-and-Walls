var bullet, wall;

var speed, weight;

var thickness;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(500, 200, 60, 10);
  bullet.velocityX = random(-30, -90);

  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
  

  speed = random(55, 80);
  weight = random(400, 1500);

  thickness = random(22, 83);
}


function draw() {
  background(255,255,255); 
    
    
  if (wall.x = bullet.x < (bullet.width + wall.width) / 2)  
    {

    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/ (thickness * thickness * thickness);
    
    if (damage > 10)
    {
      wall.shapeColor = color(255, 0, 0);
    }

    if (damage < 10)
    {
      wall.shapeColor = color(0, 255, 0);
    }

    }

  drawSprites();
}
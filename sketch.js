let font;
function setup() {
  createCanvas(400, 400);
  font = loadFont('Hubot-Sans-SemiBoldWide.otf');
}

function draw() {
  background(220);
  drawCharacter(200, 200);
}

function drawCharacter(x, y)
{
  noStroke();
  push();
  fill(50);
  ellipse(x, y, 300, 300);
  fill(256);
  arc(x, y, 180, 130, PI, TWO_PI);
  arc(x+35, y, 110, 140, TWO_PI, PI/2);
  arc(x-35, y, 110, 140, PI/2, PI + TWO_PI);
  rect(x-35,y, 35*2, 70);
  
  arc(x+40, y-50, 80, 80, -PI/5, PI/5);
  arc(x-40, y-50, 80, 80, PI-PI/5, PI+PI/5);
  
  ellipse(x, y+90, 70, 70);
  rect(x-70/2,y+90, 70, 60);
  
  noFill();
  stroke(255);
  strokeWeight(7);
  bezier(
      115,
      273,
      140,
      290,
      113,
      310,
      170,
      313
    );
  
  bezier(
      110,
      270,
      135,
      270,
      130,
      310,
      170,
      300
    );
  
  bezier(
      110,
      270,
      135,
      280,
      135,
      320,
      170,
      305
    );
  
  noStroke();
  fill(0);
  ellipse(x-80, y+73, 4, 2);
  ellipse(x-73, y+79, 5, 3);
  ellipse(x-67, y+87, 5, 3);
  ellipse(x-67, y+87, 6, 4);
  ellipse(x-60, y+94, 6, 4);
  ellipse(x-51, y+99, 7, 4);
  ellipse(x-40, y+101, 7, 4);
  
  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("GITHUB", x, y+180);
  
  noFill();
  stroke(255);
  strokeWeight(7);
  ellipse(x, y, 300, 300);
  pop();
}
var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
//  rect(x, 250, 50, 50);

//  textsize();
text("Assignment done", x, 250);

  x+=5 ;

  if(x > width) {
    x = -20 ;
  }
}

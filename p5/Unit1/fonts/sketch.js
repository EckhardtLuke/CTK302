var f;
var f1;

function setup() {
  createCanvas(800,800);

    f = loadFont("assets/med.ttf");
    f1 = loadFont("assets/star.ttf");

    textAlign(CENTER);
}

function draw() {
  background(100);

  fill("red");

  textFont(f);
  textSize(60);
  text("hello", width/2, height/2);

  textFont(f1);
  textSize(60);
  text("whats up", width/2, height/2 + 100);

}

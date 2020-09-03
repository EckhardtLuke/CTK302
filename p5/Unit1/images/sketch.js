var img1, img2, img3;

function setup() {
  createCanvas(800,800);
  imageMode(CENTER);

  img1 = loadImage("assets/img1.jpg");
  img2 = loadImage("assets/img2.jpg");
  img2 = loadImage("assets/img3.jpg");
}

function draw() {
  image(img1, width/2, height/2, 200, 200);
  image(img2, width/2, height/2 - 210, 200, 200);
  image(img3, width/2, height/2 + 210, 200, 200);

}

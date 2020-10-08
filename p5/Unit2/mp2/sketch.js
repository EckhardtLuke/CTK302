let timer = 0;
var img1, img2, img3;
let state = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  img1 = loadImage("assets/frog1.jpg");
  img2 = loadImage("assets/frog2.jpg");
  img3 = loadImage("assets/frog3.jpg");
}

function draw() {

  switch(state) {

    case 0:
      background('white');
      image(img3, width/2, height/2, 1000, 1000);
      text("Oh No You Scared Phil Away!", 200, 200);
    break;

    case 1:
      background('white');
      image(img1, width/2, height/2, 1000, 1000);

      text("This is Phil the Frog! \n Click to see him croak. \n Try not to scare him away.", 200, 200)

      timer++;

      if(timer > 10*60) {
        state = 0;
        timer = 0;
      }

    break;

    case 2:
      image(img2, width/2, height/2, 1000, 1000);
    break;

  }

}
function mouseReleased() {
  state++;

  if (state > 2) {
      state = 1;
  }
}

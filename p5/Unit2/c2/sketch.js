var mic;
var vol;
var c = 'green';
let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  vol = (mic.getLevel()).toFixed(2);

  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);

  background(c);

  switch (state) {

    case 0:
      text("Shhhh", 100, 100);
      if (vol > .05) {
        state = 1;
      }
      break;

    case 1:
      background('red');
      text("Quiet Down", 100, 100);
      timer = timer + 1;

      if (timer > 1 * 60) {
        state = 0;
        timer = 0;
      }
      break;

  }
}

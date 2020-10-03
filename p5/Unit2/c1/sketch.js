var x = 0;
var vol;
var c = 'green';

function setup() {
  createCanvas(500, 500);

  mic = new p5.AudioIn();
  mic.start();

}

function draw() {
  background(c);
  rect(x, 10, 10, 10);

  vol = (mic.getLevel()).toFixed(2);

  if(vol > 0.02) {
    x = x + 1;
  }

  if(x > width) {
    x = 0;
  }

  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}

function touchStarted() {
    getAudioContext().resume();
}

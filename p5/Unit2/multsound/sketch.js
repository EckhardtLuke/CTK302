let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound("assets/adtr.mp3");
  song2 = loadSound("assets/atr.mp3");
  song3 = loadSound("assets/sws.mp3");


    song1.loop();
    song1.pause();

    song2.loop();
    song2.pause();

    song3.loop();
    song3.pause();
}

function setup() {
  createCanvas(500, 500);
}

function draw() {

  background(100);
  switch (state) {

    case 0:
    song1.play();
    state = 1;
    break;

    case 1:
    text("Listen to song 1", 100, 100);
    break;

    case 2:
    text("2", 100, 100);
    song2.play();
    state = 3;
    break;

    case 3:
    text("Listen to song 2", 100, 100);
    break;

    case 4:
    text("2", 100, 100);
    song3.play();
    state = 5;
    break;

    case 5:
    text("Listen to song 3", 100, 100);
    break;

  }

}

function mouseReleased() {
  state++;
  if (state > 5)
  state = 0;

  song1.pause();
  song2.pause();
  song3.pause();
}

//function touchStarted() {
//  getAudioContext().resume();
//}

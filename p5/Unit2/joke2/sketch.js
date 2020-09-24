let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER);
}

function draw() {

  switch(state) {

    case 0:
    background('red');
    text("You cannot explain\n Japanese history in a meme", 250, 250);
    timer++;

    if(timer > 10*60) {
      state = 1;
      timer = 0;
    }

    break;

    case 1:
    background('blue');
    text("You can samurais it", 250, 250);
    break;

  }
}

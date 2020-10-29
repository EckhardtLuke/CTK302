let cars = [];
let f1, f2, f3;
let bg;
let cimg;
let pimg;
let wbg;
let fonts = [];
let maxCars = 5;
let frogPos;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(600, 600);

  frogPos = createVector(width/2, height-80);

  textAlign(CENTER);
  rectMode(CENTER);

  f1 = loadFont("assets/skyrim.ttf");
  f2 = loadFont("assets/oblivion.ttf");
  //f3 = loadFont("assets/spaceage.ttf");
  bg = loadImage("assets/pumpkinB.jpg");
  cimg = loadImage("assets/pumpkinC.png");
  pimg = loadImage("assets/knife.png");
  wbg = loadImage("assets/pumpkinW.jpg");

  fonts = [f1, f2];

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

}

function draw() {
  switch(state) {
    case 0:
    fill('red');
    image(bg, 0, 0);
    textFont(f1);
    textSize(40);
    text("CARVE THE PUMPKIN!", width/2, 75);
    text("CLICK ANYWHERE TO START!", width/2, 150);
    break;

    case 1:
    game();
    timer++;
    if (timer > 10*60) {
      state = 3;
    }
    break;

    case 2:
    image(wbg, 0, 0);
    fill('red');
    text("YAY YOU WON!", width/2, 75);
    text("HAPPY HALLOWEEN!", width/2, 150);
    break;

    case 3:
    fill('green');
    image(bg, 0, 0);
    textSize(40);
    text("YOU FAILED!", width/2, 75);
    text("CLICK TO TRY AGAIN", width/2, 150)
    break;
  }
}

function game() {

    image(bg, 0, 0, width, height);

    // display and move objects
      for (let i = 0; i < cars.length; i++) {
        cars[i].display();
        cars[i].move();
        if (cars[i].pos.dist(frogPos) < 50) {
          cars.splice(i, 1);
        }

      }

      if (cars.length == 0) {
        state = 2;
      }

      //draw the frog
      //fill('green');
      //ellipse(frogPos.x, frogPos.y, 50, 50);
      image(pimg, frogPos.x, frogPos.y);
      checkForKeys();
}

function resetTheGame() {
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  timer = 0;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
   if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
   if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
   if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}

function mouseReleased() {
  switch(state) {
    case 0:
    state = 1;
    break;

    case 2: //they won
    resetTheGame();
    state = 0;
    break;

    case 3: //they LOST
    resetTheGame();
    state = 0;
    break;
  }
}

// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-8, 8), random(-8, 8));
    //this.size = random(80);
    //this.c = color(random(150, 200), random(50), random(50));

    let b = floor(random(2));

    this.font = fonts[b];

  }

  // methods

  display() {
    // rect(this.pos.x, this.pos.y, 50, 25);
    //fill(this.c);
    textFont(this.font);
    textSize(40);
    //text("vote", this.pos.x, this.pos.y);
    image(cimg, this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

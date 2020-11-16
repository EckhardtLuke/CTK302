var bubbles = [];
let bg;
let nf;
let hl;
let dplus;

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '14UQHYtBNaicRq70EYnFtqH3filt7FdF7fWpVAzfTycU'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff

  bg = loadImage("assets/tv.jpg");
  nf = loadImage("assets/netflix.png");
  hl = loadImage("assets/hulu.png");
  dplus = loadImage("assets/disney.jpg");


  // Regular setup code we usually have
  createCanvas(700, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Name, data[i].Service)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  image(bg, 0, 0, 700, 600);
  //background('blue');

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }

}


// my Bubble class
class Bubble {

  constructor(myName, myService) {
    this.name = myName;
    this.service = myService;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-2, 2), random(-2, 2));

  }


  display() {
     if (this.service == "Netflix") {
       image(nf, this.pos.x, this.pos.y, 100, 50);
     }
     if (this.service == "Hulu") {
       image(hl, this.pos.x, this.pos.y, 100, 50);
     }
     if (this.service == "Disney Plus") {
       image(dplus, this.pos.x, this.pos.y, 100, 50);
     }

     fill('#818181');
    //ellipse(this.pos.x, this.pos.y, 50, 50);
    text(this.name, this.pos.x+50, this.pos.y+45);
    //text(this.service, this.pos.x, this.pos.y-16);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

  // drive() {
  //   this.pos.x += 5;
  //   if (this.pos.x > width) this.pos.x = 0;
  // }


}

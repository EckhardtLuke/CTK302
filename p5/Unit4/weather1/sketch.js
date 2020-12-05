// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temperature = 0;
var humidity = 0;
var name;
let f1;
let bg;
let cloud;


function setup() {
  createCanvas(600, 600);

  f1 = loadFont("assets/skyrim.ttf");
  bg = loadImage("assets/skyrim.jpg");
  cloud = loadImage("assets/dragon.png");

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Plainfield,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=5e5c07a1c7ec196fbe3b9c475710e217'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  name = weather.name;


}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);
      image(bg, 0, 0, width, height);
      fill('black');
      textFont(f1);
      textSize(20)
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("humidity is " + humidity + "%", 20, 60);
      text("temperature is " + temperature + " Fahrenheit", 20, 80);


      // cloud
      // fill('white');
      // noStroke();
      // ellipse(x, 300, 200, 100);
      // ellipse(x+50, 350, 300, 70);
      image(cloud, x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed/4;
      if (x > width + 50) x = -100;

      break;

  }
}

function setup() {
  createCanvas(800,800);
}

function draw() {

if (mouseIsPressed) {     //This stuff happens when pressed
  background('#162356');
  noStroke();

  fill('#46F06A');  //Hill left
  arc(40, 800, 700, 600, PI, TWO_PI);

  fill('#75F171');  //Hill right
  arc(750, 800, 1000, 1000, PI, TWO_PI);

  fill('204');  //Clouds
  ellipse(420, 10, 70, 70);

  fill('204');
  ellipse(450, 10, 70, 70);

  fill('#5F5E5E');
  ellipse(475, 10, 70, 70);

  fill('204');
  ellipse(485, 10, 70, 70);

  fill('#9C9C9C');
  ellipse(495, 40, 70, 70);

  fill('#5F5E5E');
  ellipse(410, 10, 70, 70);

  fill('#5F5E5E');
  ellipse(400, 40, 70, 70);

  fill('#9C9C9C');
  ellipse(390, 40, 70, 70);

  fill('#5F5E5E');
  ellipse(380, 10, 70, 70);


  fill('#29BB48');  //Green Hill
  ellipse(400, 515, 300, 300);
  quad(800, 800, 470, 385, 540, 500, 400, 800);
  quad(0, 800, 330, 385, 540, 500, 400, 800);

  fill('#6F4B22');  //Brown Path
  quad(240, 800, 520, 750, 485, 680, 100, 810);
  quad(450, 760, 530, 750, 375, 500, 300, 523);
  quad(300, 525, 376, 367, 446, 370, 340, 580);

  fill('#EDBB99');  //Neck
  rect(410, 295, 15, 20);

  fill('#F5CBA7');  //Head
  ellipse(420, 280, 50, 50);

  fill('#CACFD2');  //Torso
  rect(395, 310, 40, 50);

  fill('black');  //feet
  ellipse(432, 395, 20, 15);
  ellipse(397, 395, 20, 15);

  fill('#AAB7B8');  //Arm
  quad(435, 310, 435, 329, 465, 300, 460, 290);

  quad(440, 395, 425, 395, 415, 360, 435, 360); //legs
  quad(405, 395, 390, 395, 395, 360, 415, 360);

  fill('#443B3E');  //Sword Handle
  quad(460, 275, 450, 280, 460, 310, 470, 305);

  fill('#839192');  //Hilt
  quad(457, 262, 438, 274, 443, 282, 460, 275);

  fill('#D7DBDD');  //Blade
  quad(423, 184, 400, 160, 442, 272, 458, 265);

  fill('#F5CBA7');  //Hand
  ellipse(460, 295, 20, 20);

  fill('#F1E74B'); //Lightning
  quad(423, 184, 430, 40, 442, 272, 458, 265);

  fill('#5F5E5E');  //Cloud
  ellipse(440, 70, 70, 70);



  //fill('white');
  //text(mouseX + ', ' + mouseY, 20, 20);


} else {                 //This stuff is there normally
  background('#46ADF0');
  noStroke();

  fill('#46F06A');  //Hill left
  arc(40, 800, 700, 600, PI, TWO_PI);

  fill('#75F171');  //Hill right
  arc(750, 800, 1000, 1000, PI, TWO_PI);

  fill('#F6FC29');  //Sun
  arc(420, -20, 280, 280, TWO_PI, PI);

  fill('#29BB48');  //Green Hill
  ellipse(400, 515, 300, 300);
  quad(800, 800, 470, 385, 540, 500, 400, 800);
  quad(0, 800, 330, 385, 540, 500, 400, 800);

  fill('#6F4B22');  //Brown Path
  quad(240, 800, 520, 750, 485, 680, 100, 810);
  quad(450, 760, 530, 750, 375, 500, 300, 523);
  quad(300, 525, 376, 367, 446, 370, 340, 580);


  fill('#EDBB99');  //Neck
  rect(410, 295, 15, 20);

  fill('#F5CBA7');  //Head
  ellipse(420, 280, 50, 50);

  fill('#CACFD2');  //Torso
  rect(395, 310, 40, 50);

  fill('black');  //feet
  ellipse(432, 395, 20, 15);
  ellipse(397, 395, 20, 15);

  fill('#AAB7B8');  //Arms
  quad(435, 310, 435, 329, 460, 350, 465, 340);

  quad(440, 395, 425, 395, 415, 360, 435, 360); //legs
  quad(405, 395, 390, 395, 395, 360, 415, 360);

  fill('#443B3E');  //Sword Handle
  quad(475, 335, 465, 325, 445, 345, 455, 355);

  fill('#839192');  //Hilt
  quad(485, 325, 465, 310, 460, 320, 475, 335);

  fill('#D7DBDD');
  quad(530, 270, 545, 230, 470, 315, 483, 324);

  fill('#F5CBA7');  //Hand
  ellipse(460, 340, 20, 20);


  //fill('white');
  //text(mouseX + ', ' + mouseY, 20, 20);
}
  //Finished the hill and path at about the 25 minute mark
  //Guy finished at around the 90 minute mark
  //Sword done. Sword and arm moving when pressed also done. 2 hour 30 minute mark
  //Finished up the other hills and the story at around the 3 hours and 30 minute point
}

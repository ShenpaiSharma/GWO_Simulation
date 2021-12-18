var C, a, A, X_slider, X_p_Slider, r1, r2;
var wolf_img, bufallo_img;

var Y = 500;

function setup() {
  createCanvas(1000, 800);
  C = createSlider(0, 2, 1, 0.1);
  a = createSlider(0, 2, 1, 0.1);
  r1 = createSlider(0, 1, 0.75, 0.01);
  r2 = createSlider(0, 1, 0.5, 0.01);
  A = createSlider(-5, 5, 1, 0.1);
  
  X_t1_slider = createSlider(0, width, 600, 1);
  X_t2_slider = createSlider(0, width, 600, 1);
  
  X_p_slider = createSlider(0, width, 200, 1);
  
  a.position(50, 50);
  r1.position(50, 100);
  r2.position(50, 150);
  A.position(50, 200);
  C.position(50, 250);
  
  X_t1_slider.position(450, 50);
  X_t2_slider.position(450, 50);
  X_p_slider.position(450, 100);
  
  
  wolf_img = loadImage('wolf.png');
  bufallo_img = loadImage('bison.png');
  
}


function draw() {
  background(220);
  
  textSize(20);
  fill(0);
  
  text("a = " + a.value(), 250, 70);
  text("r1 = " + r1.value(), 250, 120);
  text("r2 = " + r2.value(), 250, 170);
  text("A = " + A.value(), 250, 220);
  text("C = " + C.value(), 250, 270);
  
  fill(0, 0, 255);
  text("X_wolf in t1 " + X_t1_slider.value(), 250, 100);
  fill(255, 0, 0);
  text("X_prey = " + X_p_slider.value(), 650, 120);
  
  A.value(2*a.value()*r1.value() - a.value());
  C.value(2*r2.value());
  
  fill(255, 0, 0);
  circle(X_p_slider.value(), Y, 50);
  
  X_p = X_p_slider.value();
  
  X_t1 = X_t1_slider.value();
  
  noFill();
  circle(X_t1, Y, 50);
  
  D1 = abs(C.value() * X_p - X_t1);
  
  X_t2 = X_t1 - A.value() * D1;
  X_t2_slider.value(X_t2);
  
  fill(0, 0, 0);
  circle(X_t2, Y, 35);
  
  line(X_t1, Y, X_t2, Y);
  fill(0, 0, 255);
  text("X_t1 = " + X_t1, X_t1, Y+50);
  fill(0, 0, 0);
  text("X_t2 = " + round(X_t2), X_t2, Y+50);
  fill(255, 0, 0);
  text("X_prey = " + X_p, X_p, Y+50);
  fill(0, 0, 0);
  text("X_wolf in t2 = " + round(X_t2), X_t2, 650);
  
  
  image(wolf_img, X_t2, Y+150, 50, 50);
  image(bufallo_img, X_p, Y+150, 60, 50);
  
  noFill();
  
  rect(40, 40, 300, 150);
  rect(440, 40, 400, 100);
  
  // r1.value(random(0, 1));
  // r2.value(random(0, 1));
  
}
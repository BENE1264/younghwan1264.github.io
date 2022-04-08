function setup() {
  createCanvas(400, 400);
}
let y =0,u = 0.6,i =0.2,p=2;

let velocity_y = 1;
function draw() {
  background(240);
  line(100,400,100,0);
  line(200,400,200,0);
  line(300,400,300,0);
  line(0,350,400,350);
  let velocity = 0.5;
  ellipse(50,u,40,40);
  ellipse(150,y,40,40);
  ellipse(250,i,40,40);
  ellipse(350,p,40,40);
  ellipse(50 ,350,40,40);
  ellipse(150 ,350,40,40);
  ellipse(250 ,350,40,40);
  ellipse(350 ,350,40,40);
  u += 10;
  u %= 400;
  y += 11;
  y %=400;
  i += 4;
  i %=400;
  p += 5;
  p %=400;

}


  

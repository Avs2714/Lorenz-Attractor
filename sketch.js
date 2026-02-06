let x=0.01,y=0,z=0;
let a=10;
let b=28;
let c=8/3;
let points=[];


function setup() {
  
  background(0);
  colorMode(HSB);
  createCanvas(windowWidth, windowHeight,WEBGL);
 
}

function draw() {
  rotateX(PI/2);
  //small time steps for smooth animation
  
  let dt=0.01;
  let dx=(a*(y-x))*dt;
  x=x+dx;
  let dy=(x*(b-z)-y)*dt;
  y=y+dy;
  let dz=(x*y-c*z)*dt;
  z=z+dz;
  points.push(new p5.Vector(x,y,z));
  scale(5);

  stroke(255);
  noFill();
  strokeWeight(2);
  beginShape();
  let hu=0;
  for(let p of points)
    {

      stroke(hu,255,255);
      vertex(p.x,p.y,p.z);
      hu+=0.1;
      if(hu>=255)
        {
          hu=0;
        }
    }
  endShape();
}

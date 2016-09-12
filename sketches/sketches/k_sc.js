//Kaleidoscope Slow Circles

var z1,z2,z3,z4,z5,z6,z7,z8;


function setup() {

	const canvasHolder = select('#p5wall'),
    canvasWidth  = canvasHolder.width,
    canvasHeight = canvasHolder.height;
  
  	createCanvas(canvasWidth, canvasHeight).parent('p5wall');

   z1=10;
   z2=20;
   z3=30;
   z4=40;
   z5=50;
   z6=60;
   z7=70;
   z8=80;
   fill(255,100);
   strokeWeight(0.9);  //thickness of the shape borders
   }



function draw() {
  background(0);
  var n=5;
  var n2=6;
  var rad=100*sin(z7);
  var rad2=100*sin(z8);
  
  z7=z7+0.01;
  z8=z8+0.01;
  
  translate(width/2,height/2);




for(var k=0;k<5;k++)
{

 ellipse(0,0,50,50);

  for(var i=0;i<n;i++){
      push();
	  var angle=TWO_PI*(i/n);
	  rotate(angle);
	  translate(rad,0);
	  ellipse(0,0,20,20);
	  for(var j=0;j<n2;j++){
		  push();
		  var angle=TWO_PI*(j/n2);
		  rotate(angle);
		  translate(rad2,0);
		  ellipse(0,0,20,20);
		  pop();
	  
	    
		}
	  
	  pop();
	  }

 } 
}
 

 



  

//Kaleidoscope White Triangles (with permanence)


var z1,z2,z3,z4,z5,z6,z7,z8;


function setup() {
//   createCanvas(500, 500);   //makes a canvas
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

  
  z1=z1+0.01;
  z2=z2+0.01;
  z3=z3+0.01;
  z4=z4+0.01;
  z5=z5+0.01;
  z6=z6+0.01;
  z7=z7+0.01;
  z8=z8+0.01;

  var n=20;
  var n2=20;
  var rad=300*sin(z1);
  var rad2=300*sin(z2);
  var x1=300*noise(z3);
  var y1=300*noise(z4);
  var x2=300*noise(z5);
  var y2=300*noise(z6);
  var x3=300*noise(z7);
  var y3=300*noise(z8);
  
  
  
  
  translate(width/2,height/2);


 ellipse(0,0,50,50);

  for(var i=0;i<n;i++){
      push();
	  var angle=TWO_PI*(i/n);  //TWO_PI is a conssint 
	  rotate(angle);
	  translate(rad,0);

	  ellipse(0,0,20,20);
	  for(var j=0;j<n2;j++){
		  push();
		  var angle2=TWO_PI*(j/n2);
		  rotate(angle2);
		  translate(rad2,0);

		  triangle(x1,y1,x2,y2,x3,y3);
		  pop();
	  
	    
		}
	  
	  pop();
	  }

  
  } 
  


  

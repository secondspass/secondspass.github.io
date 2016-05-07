//Bezier and his buddy, Robby the rectangle

var z1,z2,z3,z4,z5,z6,z7,z8;


function setup() {
	
   const canvasHolder = select('#p5wall'),
   canvasWidth  = canvasHolder.width,
   canvasHeight = canvasHolder.height;
   createCanvas(canvasWidth, canvasHeight).parent('p5wall');
   
   background(12,12,250); //three args: red,green,blue 
   noFill(); //so draws only the bezier curve. the inner color is transparent
   
   stroke(0,25); //two args: grayscale and opacity
   strokeWeight(2); //thickness of stroke 

   frameRate(600); //determines the fps
   z1=random(1200);
   z2=random(1200);   
   z3=random(1200); 
   z4=random(1200);  
   z5=random(1200);
   z6=random(1200);
   z7=random(1200);
   z8=random(1200);
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
  
  var x1=1200*noise(z1);
  var y1=400*noise(z2);
  var x2=789*noise(z3);
  var y2=919*noise(z4);
  var x3=899*noise(z5);
  var y3=509*noise(z6);
  var x4=542*noise(z5);
  var y4=212*noise(z6);
  
  rect(x4,y4,x1,y1); //args: x,y,width,height
     
  bezier(x4+x1,y4+y1,x2,y2,x3,y3,x4,y4); //the anchor points are fixed to top left and bottom right of rect
	
  }


  
   
  

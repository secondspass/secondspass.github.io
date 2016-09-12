//Drunk Ellipse

var z1;
var z2;
var z3;
var z4;
var z5;
var z6;


function setup() {
   const canvasHolder = select('#p5wall'),
   canvasWidth  = canvasHolder.width,
   canvasHeight = canvasHolder.height;
   createCanvas(canvasWidth, canvasHeight).parent('p5wall');
   
   background(0);  
   z1=random(10000);
   z2=random(1000);
   z3=4;
   z4=4;
   z5=12;
   z6=34;
   z7=54;

   
}

function draw() {
  
 

  
  z1=z1+0.01;
  z2=z2+0.01;
  z3=z3+0.01;
  z4=z4+0.01;
  z5=z5+0.01;
  z6=z6+0.01;
  z7=z7+0.01;
  var x=noise(z1)*1500;  //noise always returns a value b/w 0 and 1
  var y=noise(z2)*700;
  var ht=noise(z3)*300;
  var wd=noise(z4)*300;
  var colRed=noise(z5)*500;
  var colBlue=noise(z6)*300;
  var colGreen=noise(z7)*222;
   fill(colRed,colBlue,colGreen);
 
  ellipse(x,y,ht,wd);

	
}

  


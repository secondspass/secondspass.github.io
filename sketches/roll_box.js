//Rolling Box


function setup() {
   const canvasHolder = select('#p5wall'),
   canvasWidth  = canvasHolder.width,
   canvasHeight = canvasHolder.height;
   createCanvas(canvasWidth, canvasHeight).parent('p5wall');
	
   background(0,0,0); //three args: red,green,blue 
   noFill(); //doesnt fill the interior of the shape
   stroke(255,100);
   
   rectMode(CENTER); //sets the x and y coords of rect to refer to its center point
   }

   


function draw() {
  //background(0,0);
  var angle=0.02*mouseX+0.02*mouseY;
  translate(mouseX,mouseY); 
  rotate(angle);       //rotate objects below this statement around the canvas origin point in radians by rotating the whole canvas. 
                        //increasing the value by n will rotate around the origin of canvas by n radians
  rect(0,0,100,100);   //rect with origin (i.e. the mouse location) at its center
  
  
  }
 



  

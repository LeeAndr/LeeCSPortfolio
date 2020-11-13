function setup() {
 createCanvas(490, 480);
	background(255);
	stroke(0);
	fill(255, 200, 0);
ellipse(240, 240, 100, 100);
fill(0);
	var g = "-Andrew L";
		var w = "The Jouch Under the Sunset.";
	textSize(30);	
	text(w, 60, 100);
	textSize(40);
	text(g,300,240);
	
	var x = 187;
	var y = 445;
	var w = 100;
	 h = 40;
	fill(27,135,227);
  stroke(0,0,255);
   ellipse((x+w/2), y, w, h);
      rect(x,y,w,h*.5);
    ellipse(x,y,w*.2,h*.5);
    ellipse(x+w, y, w*.2, h*.5);
	fill(0);
	stroke(0);
rect(0,460,490,50);
    

}

function draw() {
	fill(0);
	stroke(0);
	rect(mouseX,mouseY,1,1);
	
	
}
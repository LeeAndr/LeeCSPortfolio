function setup() {
  createCanvas(1280, 720);
	background(255);
}

function draw() {
var z = "I am messing around with TEXT";
	textSize((int)(Math.random()*255+1));
			background(255);
		text(z, 60, 200);
		
		var w = "I am messing around with TEXT";
	textSize(50);
	text(w, 60, 100);
			var a = "I am messing around with TEXT";
	fill((int)(Math.random()*255+1),(int)(Math.random()*255+1),(int)(Math.random()*255+1));
		text(a, 60, 300);
	
	for(var i=0; i<a.length;i++)
	{
			fill((int)(Math.random()*255),(int)(Math.random()*255),(int)(Math.random()*255));
		text(a.charAt(i), 60+40*i, 400);
	}
	for(var i=0; i<a.length;i++)
	{
    textSize((int)(Math.random()*255));
		text(a.charAt(i), 60+40*i, 500);
	}

			fill(0);

}
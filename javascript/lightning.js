var width = 1920;
var height = 1080;
function setup() {
	createCanvas(1920, 1080);
	createCloud(950,10);
	function Cloud(x, y){
		var positionH = x;
		var positionV =y;
		fill(155);
		stroke(155);
		ellipse(x,y,50,50)
	}
	function createCloud (xPosition, yPosition)
	{ Cloud(xPosition, yPosition)
	 Cloud(xPosition+45, yPosition+45)
	 Cloud(xPosition+random(100), yPosition+random(45))
	 Cloud(xPosition+random(100), yPosition+random(45))
	 Cloud(xPosition+random(100), yPosition+random(45))
	 Cloud(xPosition+random(100), yPosition+random(45))
	 Cloud(xPosition+random(100), yPosition+random(45))
	 Cloud(xPosition+random(100), yPosition+random(45))
	 Cloud(xPosition+random(100), yPosition+random(45))
	 Cloud(xPosition+random(100), yPosition+random(45))
	 Cloud(xPosition+random(100), yPosition+random(45))
	 Cloud(xPosition+random(100), yPosition+random(45))
	 Cloud(xPosition+random(100), yPosition+random(45))
	 Cloud(xPosition+random(100), yPosition+random(45))
	 Cloud(xPosition+random(100), yPosition+random(45))
	 Cloud(xPosition+random(100), yPosition+random(45))
	 Cloud(xPosition+random(100), yPosition+random(45))
	 Cloud(xPosition+random(100), yPosition+random(45))
	 Cloud(xPosition-random(100), yPosition+random(45))
	 Cloud(xPosition-random(100), yPosition+random(45))
	 Cloud(xPosition-random(100), yPosition+random(45))
	 Cloud(xPosition-random(100), yPosition+random(45))
	 Cloud(xPosition-random(100), yPosition+random(45))
	 Cloud(xPosition-random(100), yPosition+random(45))
	 Cloud(xPosition-random(100), yPosition+random(45))
	 Cloud(xPosition-random(100), yPosition+random(45))
	 Cloud(xPosition-random(100), yPosition+random(45))
	 Cloud(xPosition-random(100), yPosition+random(45))
	 Cloud(xPosition-random(100), yPosition+random(45))
	 Cloud(xPosition-random(100), yPosition+random(45))
	 Cloud(xPosition-random(100), yPosition+random(45))
	 Cloud(xPosition-random(100), yPosition+random(45))
	}
}
	function draw() {
		fill(255,255,0);
		stroke(255,255,0)
		ellipse(width/2,1150-height,16,16);
		height=height -7;
		var loc = floor(random(4));
		if (loc == 0) {
			width = width + 5;
		} else if (loc == 1) {
			width = width - 5;
		} else if (loc == 2) {
			width = width + 25;
		} else if (loc == 3) {
			width = width - 25;
		}
	}


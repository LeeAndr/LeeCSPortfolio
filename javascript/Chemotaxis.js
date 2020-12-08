var colony = []; //array of ant objects in colony array. This is an ant hill
function setup() {
	createCanvas(1280, 720);
	background(125, 55, 05);
	for (var i = 0; i < 50; i++) {
		colony[i] = new ant();
	}
}
function draw() {
	for (var i = 0; i < colony.length; i++) {
		colony[i].move();
	}
}
class ant {
	constructor() {
		this.xPOS = (int)(random() * 1280 + 1);
		this.yPOS = (int)(random() * 720 + 1);
		this.size = 4;
		this.badMood = false;
		this.message = "Don't touch the ants. They will attack you!";
	}
	setAngry() {
		this.badMood = true;
	}
	move() {
		if (mouseX == this.xPOS && mouseY == this.yPOS) {
			for (var i = 0; i < colony.length; i++) {
				colony[i].setAngry();
			}
		}
		if (this.badMood == true) {
			if (mouseX < this.xPOS)
				this.xPOS = this.xPOS - 1;
			else
				this.xPOS = this.xPOS + 1;
			if (mouseY < this.yPOS)
				this.yPOS = this.yPOS - 1;
			else
				this.yPOS = this.yPOS + 1;
		}
		stroke(169, 99, 49);
		fill(169, 99, 49);
		ellipse(this.xPOS, this.yPOS, this.size, this.size);
		ellipse(this.xPOS + 3, this.yPOS + 3, this.size, this.size);
		ellipse(this.xPOS - 3, this.yPOS - 3, this.size, this.size);
		this.xPOS = this.xPOS + (int)(random() * (6) - 3);
		this.yPOS = this.yPOS + (int)(random() * (6) - 3);
		stroke(169, 99, 49);
		fill(0)
		ellipse(this.xPOS, this.yPOS, this.size, this.size);
		ellipse(this.xPOS + 3, this.yPOS + 3, this.size, this.size);
		ellipse(this.xPOS - 3, this.yPOS - 3, this.size, this.size);
		fill(188, 143, 143);
		rect(320, 0, 640, 50);
		fill(0);
		textSize(30);
		text(this.message, 360, 34);
	}
}

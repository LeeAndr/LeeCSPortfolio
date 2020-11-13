function setup() {
createCanvas(265, 265);
noLoop();
}

function draw() {
var r1 = new Die(10, 10);
var r2 = new Die(150, 10);
var r3 = new Die(10, 150);
var r4 = new Die(150, 150);
r1.roll();
r1.show();
r2.roll();
r2.show();
r3.roll();
r3.show();
r4.roll();
r4.show();
}

function mousePressed() {
redraw();
}
class Die //models one single dice cube
{
constructor(x, y) //constructor
{

this.xPOS = x;
this.yPOS = y;
this.dieFace = 0;


}
roll() {
this.dieFace = (int)(random() * 6 + 1);
}
show() {
if (this.dieFace < 2) {
rect(this.xPOS, this.yPOS, 100, 100)
fill(0);
ellipse(this.xPOS + 50, this.yPOS + 50, 10, 10);
fill(255);
} else if (this.dieFace < 3) {
rect(this.xPOS, this.yPOS, 100, 100)
fill(0);
ellipse(this.xPOS + 25, this.yPOS + 75, 10, 10);
ellipse(this.xPOS + 75, this.yPOS + 25, 10, 10);
fill(255);
} else if (this.dieFace < 4) {
rect(this.xPOS, this.yPOS, 100, 100)
fill(0);
ellipse(this.xPOS + 25, this.yPOS + 75, 10, 10);
ellipse(this.xPOS + 75, this.yPOS + 25, 10, 10);
ellipse(this.xPOS + 50, this.yPOS + 50, 10, 10);
fill(255);
} else if (this.dieFace < 5) {
rect(this.xPOS, this.yPOS, 100, 100)
fill(0);
ellipse(this.xPOS + 25, this.yPOS + 75, 10, 10);
ellipse(this.xPOS + 75, this.yPOS + 25, 10, 10);
ellipse(this.xPOS + 75, this.yPOS + 75, 10, 10);
ellipse(this.xPOS + 25, this.yPOS + 25, 10, 10);
fill(255)
} else if (this.dieFace < 6) {
rect(this.xPOS, this.yPOS, 100, 100);
fill(0);
ellipse(this.xPOS + 25, this.yPOS + 75, 10, 10);
ellipse(this.xPOS + 75, this.yPOS + 25, 10, 10);
ellipse(this.xPOS + 75, this.yPOS + 75, 10, 10);
ellipse(this.xPOS + 25, this.yPOS + 25, 10, 10);
ellipse(this.xPOS + 50, this.yPOS + 50, 10, 10);
fill(255);
} else if (this.dieFace < 7) {
rect(this.xPOS, this.yPOS, 100, 100)
fill(0);
ellipse(this.xPOS + 25, this.yPOS + 75, 10, 10);
ellipse(this.xPOS + 75, this.yPOS + 25, 10, 10);
ellipse(this.xPOS + 75, this.yPOS + 75, 10, 10);
ellipse(this.xPOS + 25, this.yPOS + 25, 10, 10);
ellipse(this.xPOS + 25, this.yPOS + 50, 10, 10);
ellipse(this.xPOS + 75, this.yPOS + 50, 10, 10);
fill(255)
}
}
}
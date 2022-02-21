function setup() {
    createCanvas(1000, 1000);
    background(255);
    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {
    drawBoxes(50, color('#ccff44'), 1);
    drawBoxes(10, color('black'), 2);
}
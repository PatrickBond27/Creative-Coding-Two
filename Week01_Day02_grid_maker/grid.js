let numBoxes = 20;

function setup() {
    createCanvas(1000, 1000);
    background(255);
}

function draw() {
    drawBoxes();
    console.log("fill & stroke");
}

function drawBoxes() {
    let boxSize = width/numBoxes;
    stroke(0);
    for(let j = 0; j < 15; j++) {
        for(let i = 0; i < 15; i++) {
            rect(boxSize*i, boxSize*j, boxSize, boxSize);
        }
    }
}
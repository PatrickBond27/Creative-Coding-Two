let boxWidth = 20;
let boxHeight = 20;
let spacing = 5;
let numBoxes = 5;
let xOffset = 0;
let yOffset = 0;

function setup() {
    createCanvas(500, 500);
    background(0);
}

function draw() {
    drawBoxes();
}

function drawBoxes() {
    fill(255, 0, 0);
    noStroke();
    for(let i = 0; i < numBoxes; i++) {
        let totalSpace = boxWidth + spacing;
        rect(i*totalSpace + xOffset, yOffset, boxWidth, boxHeight);
    }
}

clap(3, 8);

function clap(startNum, endNum) {
    let loopCount = endNum - startNum;
    for(let i = startNum; i <= loopCount; i++) {
        console.log("hi" + (startNum + i));
    }

    return "Done";
}

function addMeUp(num1, num2) {
    let total = num1 + num2;
    console.log("all my work is done");
    return total;
}
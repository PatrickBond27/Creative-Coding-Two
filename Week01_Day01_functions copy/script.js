let boxWidth = 50;
let boxHeight = 10;
let spacing = 5;
let numBoxes = 5;
let xOffset = 0;
let yOffset = 0;

let number = 31.2476;
let decimal = 100;

function setup() {
    createCanvas(400, 400);
    background(0);
    roundDecimal();
    looping();
}

function draw() {
    drawRectangle();
}

function roundDecimal() {
    let num = Math.round(number * decimal) / decimal;
    console.log(num);
}

let myCars = [
    {name:'Fiat', value:220, cc:1020, color:'red'},
    {name:'VW', value:120,cc:1040,color:'blue'},
    {name:'BMW', value:190,cc:900,color:'green'}
 ];

function looping() {
    for(let i = 0; i < myCars.length; i++) {
        console.log(myCars[i].color);
    }
}

function drawRectangle() {
    fill(255, 0, 0);
    noStroke();
    translate(width / 2, height / 2);
    rotate(PI / 4);
    rectMode(CENTER);
    rect(0, 0, boxWidth, boxHeight);
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
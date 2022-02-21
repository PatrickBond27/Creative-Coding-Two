let chartWidth = 400;
let chartHeight = 400;
let data = [230, 390, 120, 260, 150, 340];
let spacing = 10;
let margin = 20;

let numTicks = 10;
let tickLength = 10;
let tickSpacing = chartHeight / numTicks;
let tickValues = chartHeight / numTicks;

let chartTitle = ["Kyle", "Jason", "Maggie", "Jack", "Judy", "Trevor"];

let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1));
let barWidth = availableWidth / data.length;

console.log(barWidth);

function setup() {
    createCanvas(500, 500);
    background(0);
}

function draw() {
    background(0);

    translate(50, 450);
    stroke(255, 200);
    line(0, 0, 0, -400);
    line(0, 0, 400, 0);

    for(let i = 0; i <= numTicks; i++) {
        stroke(255, 200);
        line(0, -tickSpacing * i, -tickLength, -tickSpacing * i);

        fill(255, 0, 0);
        noStroke();
        textSize(15);
        textAlign(RIGHT, CENTER);
        text(i * tickValues, -15, tickSpacing * -i);
    }

    translate(margin, 0);

    for(let i = 0; i < data.length; i++) {
        totalSpace = barWidth + spacing;
        rect(i * totalSpace, 0, barWidth, -data[i]);

        fill(255, 0, 0);
        noStroke();
        textSize(15);
        textAlign(CENTER, TOP);
        text(chartTitle[i], i * totalSpace + (barWidth/2), -data[i] - 18);
    }
}
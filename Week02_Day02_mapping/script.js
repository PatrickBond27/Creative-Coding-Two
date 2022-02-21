let chartWidth = 400;
let chartHeight = 400;
let data = [230, 270, 120, 260, 150, 250];
let scaledData = [];

let maxValue;

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

    maxValue = max(data);
    tickIncrements = Math.round(maxValue/numTicks);

    for(let i = 0; i < data.length; i++) {
        let tempValue = map(data[i], 0, max(data), 0, chartHeight);

        scaledData.push(tempValue);
    }
}

function draw() {
    background(0);

    translate(50, 450);
    stroke(255, 200);
    line(0, 0, 0, -chartHeight);
    line(0, 0, chartWidth, 0);

    for(let i = 0; i <= numTicks; i++) {
        stroke(255, 200);
        line(0, -tickSpacing * i, -tickLength, -tickSpacing * i);

        fill(255, 0, 0);
        noStroke();
        textSize(15);
        textAlign(RIGHT, CENTER);
        text(i * tickIncrements, -15, tickSpacing * -i);
    }

    translate(margin, 0);

    for(let i = 0; i < scaledData.length; i++) {
        totalSpace = barWidth + spacing;
        fill(255, 0, 0);
        rect(i * totalSpace, 0, barWidth, -scaledData[i]);

        fill(255, 0, 0);
        noStroke();
        textSize(15);
        textAlign(CENTER, TOP);
        text(data[i], i * totalSpace + (barWidth/2), -scaledData[i] - 18);

        fill(255);
        noStroke();
        textSize(15);
        textAlign(CENTER, TOP);
        text(chartTitle[i], i * totalSpace + (barWidth/2), 10);
    }
}
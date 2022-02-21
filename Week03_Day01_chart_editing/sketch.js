let chartWidth = 300;
let chartHeight = 300;
let posX = 100;
let posY = 400;

let data = [
    {name: "Oranges", total: 23}, 
    {name: "Bananas", total: 43}, 
    {name: "Pears", total: 41}, 
    {name: "Apples", total: 26}
];

let listValues = data.map(function (x){return x.total});

let scaledData = [];

let spacing = 10;
let margin = 20;
let numTicks = 10;
let tickIncrements;
let maxValue;
let colors;
let numPlaces = 2;
let showValues = true;
let showLabels = true;
let rotateLabels = true;

let tickSpacing = chartHeight / numTicks; //space between ticks on  the left 
let availableWidth = chartWidth - (margin * 2) - (spacing * (data.length - 1)); //available space for bars
let barWidth = availableWidth / data.length; //bar width

function setup() {
    createCanvas(500,500);
    background(0);

    colors = [
        color('#ffe066'), 
        color('#fab666'), 
        color('#f68f6a'), 
        color('#f3646a')
    ];

    maxValue = max(listValues);
    tickIncrements = Math.round(maxValue / numTicks);

    for(let i=0; i<data.length; i++){
        let tempVal = map(data[i].total, 0, maxValue, 0, chartHeight);
        scaledData.push(tempVal);
    }
}

function draw() {
    background(0);
    
    translate(posX, posY);
    //chart
    stroke(255, 180);
    strokeWeight(2);
    line(0, 0, 0, -chartHeight); //y
    line(0, 0, chartWidth, 0); //x

    for(let i=0; i<=numTicks; i++){
        //ticks
        stroke(255, 100);
        strokeWeight(2);
        line(0, tickSpacing * -i, -10, tickSpacing * -i);
        line(0, tickSpacing * -i, chartWidth, tickSpacing * -i);

        //numbers (text)
        fill(255, 200);
        noStroke();
        textSize(14);
        textAlign(RIGHT, CENTER);
        text((i * tickIncrements).toFixed(numPlaces), -15, tickSpacing * -i);
    }

    translate(margin, 0);
    for(let i=0; i<scaledData.length; i++){
        let colorNumber = i % 4;

        //bars
        fill(colors[colorNumber]);
        noStroke();
        rect((barWidth + spacing) * i, 0, barWidth, -scaledData[i]);

        if (showValues) {
            //numbers (text)
            noStroke();
            fill(255);
            textSize(16);
            textAlign(CENTER, BOTTOM);
            text(data[i].total, ((barWidth + spacing) * i) + barWidth / 2, -scaledData[i]);
        }

        if (showLabels) {
            if (rotateLabels) {
            //text
            push();
            noStroke();
            fill(255);
            textSize(14);
            textAlign(LEFT, CENTER);
            translate(((barWidth + spacing) * i) + barWidth / 2, 20);
            rotate(PI / 2);
            text(data[i].name, 0, 0);
            pop();
    } else {
            //text
            noStroke();
            fill(255);
            textSize(14);
            textAlign(CENTER, BOTTOM);
            text(data[i].name, ((barWidth + spacing) * i) + barWidth / 2, 20);
            }
        }
    }
}
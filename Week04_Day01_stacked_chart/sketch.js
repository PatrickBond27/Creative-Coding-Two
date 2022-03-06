let data01 = [
    { name: "Oranges", total: 23 },
    { name: "Bananas", total: 34 },
    { name: "Pears", total: 23 },
    { name: "Apples", total: 18 }
];

let data02 = [
    { name: "Oranges", total: 223 },
    { name: "Bananas", total: 134 },
    { name: "Pears", total: 233 },
    { name: "Apples", total: 118 }
];

let data03 = [
    { name: "Oranges", total: 25 },
    { name: "Bananas", total: 32 },
    { name: "Pears", total: 34 },
    { name: "Apples", total: 27 }
];

let data04 = [
    { name: "Spain", total: 127, values: [36, 29, 44, 18]},
    { name: "Germany", total: 189, values: [39, 23, 48, 79]},
    { name: "Italy", total: 187, values: [49, 67, 18, 53]}
];

let chart01;
let chart02;
let chart03;
let chart04;

function setup() {
    createCanvas(800, 800);

    chart01 = new BarChart(data01);
    chart01.chartWidth = 200;
    chart01.chartHeight = 200;
    chart01.posX = 100;
    chart01.posY = 350;
    chart01.updateValues();

    chart02 = new BarChart(data02);
    chart02.chartWidth = 200;
    chart02.chartHeight = 200;
    chart02.posX = 400;
    chart02.posY = 350;
    chart02.updateValues();

    chart03 = new HorizontalBarChart(data03);
    chart03.chartWidth = 200;
    chart03.chartHeight = 200;
    chart03.posX = 100;
    chart03.posY = 700;
    chart03.updateValues();

    chart04 = new StackedBarChart(data04);
    chart04.chartWidth = 200;
    chart04.chartHeight = 200;
    chart04.posX = 400;
    chart04.posY = 700;
    chart04.updateValues();
}


function draw() {
    background(50);
    chart01.render();
    chart02.render();
    chart03.render();
    chart04.render();
}
let data01 = [
    { name: "Oranges", total: 23 },
    { name: "Bananas", total: 34 },
    { name: "Pears", total: 23 },
    { name: "Apples", total: 18 }
];

let data02 = [
    { name: "IRE", total: 44 },
    { name: "UK", total: 31 },
    { name: "FRE", total: 59 },
    { name: "GRM", total: 26 }
];

let data03 = [
    { name: "Spain", total: 127, values: [36, 29, 44, 18]},
    { name: "Germany", total: 189, values: [39, 23, 48, 79]},
    { name: "Italy", total: 187, values: [49, 67, 18, 53]}
];

let data04 = [
    { name: "2013", total: 127, values: [36, 29, 44, 18]},
    { name: "2014", total: 189, values: [39, 23, 48, 79]},
    { name: "2015", total: 141, values: [39, 64, 22, 20]},
    { name: "2014", total: 152, values: [49, 62, 19, 22]}
];

let data05 = [
    { name: "Spain", total: 127, values: [36, 29, 44, 18]},
    { name: "Germany", total: 189, values: [39, 23, 48, 79]},
    { name: "Italy", total: 187, values: [49, 67, 18, 53]},
    { name: "Greece", total: 151, values: [49, 61, 18, 33]},
    { name: "France", total: 163, values: [34, 67, 27, 35]}
];

let data06 = [
    { name: "Spain", total: 127, values: [45, 20, 47, 15]},
    { name: "Germany", total: 189, values: [42, 20, 47, 80]},
    { name: "Italy", total: 171, values: [34, 76, 18, 45]}
];

let chart01;
let chart02;
let chart03;
let chart04;
let chart05;
let chart06;

function setup() {
    createCanvas(1500, 800);

    chart01 = new BarChart(data01);
    chart01.chartWidth = 200;
    chart01.chartHeight = 200;
    chart01.posX = 100;
    chart01.posY = 350;
    chart01.updateValues();

    chart02 = new HorizontalBarChart(data02);
    chart02.chartWidth = 200;
    chart02.chartHeight = 200;
    chart02.posX = 500;
    chart02.posY = 350;
    chart02.updateValues();

    chart03 = new StackedBarChart(data03);
    chart03.chartWidth = 200;
    chart03.chartHeight = 200;
    chart03.posX = 100;
    chart03.posY = 700;
    chart03.updateValues();

    chart04 = new LineChart(data04);
    chart04.chartWidth = 200;
    chart04.chartHeight = 200;
    chart04.posX = 500;
    chart04.posY = 700;
    chart04.updateValues();

    chart05 = new ScatteredPlotChart(data05);
    chart05.chartWidth = 200;
    chart05.chartHeight = 200;
    chart05.posX = 900;
    chart05.posY = 350;
    chart05.updateValues();

    chart06 = new FullStackedBarChart(data06);
    chart06.chartWidth = 200;
    chart06.chartHeight = 200;
    chart06.posX = 900;
    chart06.posY = 700;
    chart06.updateValues();
}


function draw() {
    background(50);
    chart01.render();
    chart02.render();
    chart03.render();
    chart04.render();
    chart05.render();
    chart06.render();
}
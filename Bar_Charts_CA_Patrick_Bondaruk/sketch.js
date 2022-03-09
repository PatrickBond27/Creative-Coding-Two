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

//let myFont;
//function loadingFont() {
//    myFont = loadFont('RobotoCondensed-Regular.ttf');
//}

function setup() {
    createCanvas(1500, 2500);
    generateData();
    //loadingFont();

    chart01 = new BarChart(dataIrishMovies);
    chart01.chartWidth = 400;
    chart01.chartHeight = 400;
    chart01.posX = 150;
    chart01.posY = 600;
    chart01.updateValues();

    chart02 = new HorizontalBarChart(dataHighGross);
    chart02.chartWidth = 400;
    chart02.chartHeight = 700;
    chart02.posX = 900;
    chart02.posY = 900;
    chart02.updateValues();

    chart03 = new StackedBarChart(dataAvgRating);
    chart03.chartWidth = 400;
    chart03.chartHeight = 400;
    chart03.posX = 150;
    chart03.posY = 1300;
    chart03.updateValues();

    chart04 = new LineChart(dataCompanyGross);
    chart04.chartWidth = 500;
    chart04.chartHeight = 300;
    chart04.posX = 900;
    chart04.posY = 1400;
    chart04.updateValues();

    chart05 = new ScatteredPlotChart(dataBudgetGross);
    chart05.chartWidth = 900;
    chart05.chartHeight = 700;
    chart05.posX = 150;
    chart05.posY = 2300;
    chart05.updateValues();
}

function draw() {
    background(50);
    fill(230);
    textSize(50);
    textAlign(CENTER);
    text("Data Visualisation on Movie & Film Industry", width / 2, 70);
    chart01.render();
    chart02.render();
    chart03.render();
    chart04.render();
    chart05.render();
}
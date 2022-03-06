let data01 = [
    { name: "Oranges", total: 23 },
    { name: "Bananas", total: 34 },
    { name: "Pears", total: 23 },
    { name: "Apples", total: 18 }
];

let chart01;
let chart02;

function setup() {
    createCanvas(800,800);

    // for(let i=0; i<data.length; i++){
    //     let tempVal = map(data[i].total, 0, maxValue, 0, chartHeight);
    //     scaledData.push(tempVal);
    // }

    chart01 = new BarChart(data02);
    chart01.chartWidth = 200;
    chart01.chartHeight = 200;
    chart01.posX = 100;
    chart01.posY = 350;
    chart01.updateValues();

    chart02 = new BarChart(data01);
    chart02.chartWidth = 200;
    chart02.chartHeight = 200;
    chart02.posX = 400;
    chart02.posY = 350;
    chart02.updateValues();

}

function draw() {
    background(0);

    chart01.updateValues();
    chart01.render();
    chart02.updateValues();
    chart02.render();
}

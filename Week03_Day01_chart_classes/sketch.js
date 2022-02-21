let data = [
    {name: "Oranges", total: 23, price: 0.27}, 
    {name: "Bananas", total: 43, price: 0.22}, 
    {name: "Pears", total: 41, price: 0.27}, 
    {name: "Apples", total: 26, price: 0.24}
];

let chart01;

function setup() {
    createCanvas(800,800);

    // for(let i=0; i<data.length; i++){
    //     let tempVal = map(data[i].total, 0, maxValue, 0, chartHeight);
    //     scaledData.push(tempVal);
    // }

}

function draw() {
    background(0);

    chart01.render();
    chart01.updateValues();
}

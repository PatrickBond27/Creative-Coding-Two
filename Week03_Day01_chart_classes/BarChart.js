class BarChart {
    constructor(_data) {

        this.data = _data;

        this.chartWidth = 300;
        this.chartHeight = 300;
        this.posX = 100;
        this.posY = 400;

        this.spacing = 10;
        this.margin = 20;
        this.numTicks = 10;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces = 2;

        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = true;

        this.colors = [
            color('#ffe066'), 
            color('#fab666'), 
            color('#f68f6a'), 
            color('#f3646a')
        ];;

        this.calculateMaxValue();
        this.updateValues();
    }

    updateValues() {
        this.tickSpacing = this.chartHeight / this.numTicks; //space between ticks on  the left 
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1)); //available space for bars
        this.barWidth = this.availableWidth / this.data.length; //bar width
    }

    calculateMaxValue() {
        // This is array method that maps out a new array - {23, 43, 34 42}
        let listValues = this.data.map(function (x){return x.total});
        this.maxValue = max(listValues);
        this.tickIncrements = Math.round(this.maxValue / this.numTicks);
    }

    render() {
        background(0);
    
        translate(this.posX, this.posY);

        this.drawTicks();
        this.drawHorizontalLines();
        this.drawRects();
        this.drawAxis();
    }

    // The function accepts a parameter and scales it using the max and chartHeight
    scaledData(num) {
    return map(num, 0, this.maxValue, 0, this.chartHeight);
}

    drawAxis() {
    //chart
    stroke(255, 180);
    strokeWeight(2);
    line(0, 0, 0, -this.chartHeight); //y
    line(0, 0, this.chartWidth, 0); //x
}

    drawTicks() {
    for(let i=0; i <= this.numTicks; i++){
        //ticks
        stroke(255, 200);
        strokeWeight(2);
        line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

        //numbers (text)
        fill(255, 100);
        noStroke();
        textSize(14);
        textAlign(RIGHT, CENTER);
        text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
    }
}

    drawHorizontalLines() {
    for(let i=0; i <= this.numTicks; i++){
        //ticks
        stroke(255, 100);
        strokeWeight(2);
        line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);

        //numbers (text)
        fill(255, 200);
        noStroke();
        textSize(14);
        textAlign(RIGHT, CENTER);
        text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
    }
}

    drawRects() {
    push();
    translate(this.margin, 0);
    for(let i=0; i < this.data.length; i++){
        let colorNumber = i % 4;

        //bars
        fill(this.colors[colorNumber]);
        noStroke();
        rect((this.barWidth + this.spacing) * i, 0, this.barWidth, -scaledData(this.data[i].total));

        if (this.showValues) {
            //numbers (text)
            noStroke();
            fill(255);
            textSize(16);
            textAlign(CENTER, BOTTOM);
            text(this.data[i].total, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, -scaledData(this.data[i].total));
        }

        if (this.showLabels) {
            if (this.rotateLabels) {
            //text
            push();
            noStroke();
            fill(255);
            textSize(14);
            textAlign(LEFT, CENTER);
            translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
            rotate(PI / 2);
            text(this.data[i].name, 0, 0);
            pop();
            } else {
            //text
            noStroke();
            fill(255);
            textSize(14);
            textAlign(CENTER, BOTTOM);
            text(this.data[i].name, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
            }
        }
    }
    pop();
}
}
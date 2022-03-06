class HorizontalBarChart {
    constructor(_data) {
        this.data = _data;

        this.chartWidth = 300;
        this.chartHeight = 300;
        this.spacing = 5;
        this.margin = 30;
        this.numTicks = 10;
        this.posX = 50;
        this.posY = 50;
        this.tickIncrements;
        this.maxValue;
        this.numPlaces = 0;
        this.barTextSpacing = 10;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;

        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = false;

        this.colors = [color('#ffe066'), color('#fab666'), color('#f68f6a'), color('#f3646a')];

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues() {
        this.tickSpacing = this.chartWidth / this.numTicks;
        this.availableHeight = this.chartHeight - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barHeight = this.availableHeight / this.data.length;
    }

    calculateMaxValue() {
        let listValues = this.data.map(function(x) { return x.total })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {
        push();
        translate(this.posX, this.posY);

        this.drawTicks();
        this.drawVerticalLines();
        this.drawRects();
        this.drawAxis();
        pop();
    }

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartWidth);
    }

    drawAxis() {
        //chart
        stroke(255, 180);
        strokeWeight(1);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
    }

    drawTicks() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            strokeWeight(1)
            line(this.tickSpacing * i, 0, this.tickSpacing * i, 10);

            //numbers (text)
            if (this.showValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(CENTER, TOP);
                text((i * this.tickIncrements).toFixed(this.numPlaces), this.tickSpacing * i, 15);
            }
        }
    }

    drawVerticalLines() {
        for (let i = 0; i <= this.numTicks; i++) {

            //vertical line
            stroke(255, 50);
            strokeWeight(1)
            line(this.tickSpacing * i, 0, this.tickSpacing * i, -this.chartHeight);
        }
    }

    drawRects() {
        push();
        translate(0, -this.margin);
        for (let i = 0; i < this.data.length; i++) {
            let colorNumber = i % 4;

            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            rect(0, -(this.barHeight + this.spacing) * i, this.scaleData(this.data[i].total), -this.barHeight);

            //numbers (text)
            noStroke();
            fill(255);
            textSize(16);
            textAlign(LEFT, CENTER);
            text(this.data[i].total, this.scaleData(this.data[i].total) + this.barTextSpacing, -((this.barHeight + this.spacing) * i) - this.barHeight / 2);

            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push();
                    noStroke();
                    textSize(14);
                    textAlign(CENTER, CENTER);
                    translate(-15, -((this.barHeight + this.spacing) * i) - this.barHeight / 2);
                    rotate(PI / 2)
                    text(this.data[i].name, 0, 0);
                    pop();
                } else {
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(RIGHT, CENTER);
                    text(this.data[i].name, -10, -((this.barHeight + this.spacing) * i) - this.barHeight / 2);
                }
            }
        }
        pop();
    }
}
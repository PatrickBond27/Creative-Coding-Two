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
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;

        this.showValues = true;
        this.showLabels = true;
        this.rotateLabels = false;

        this.colors = [color('#b5ffe1'), color('#65b891'), color('#4e878c'), color('#40916c'), color('#2d6a4f'), color('#1b4332')];

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues() {
        this.tickSpacing = this.chartWidth / this.numTicks;
        this.availableHeight = this.chartHeight - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barHeight = this.availableHeight / this.data.length;
    }

    calculateMaxValue() {
        let listValues = this.data.map(function(x) { return x.gross })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {

        push()
        translate(this.posX, this.posY);

        this.drawTitles();
        this.drawTicks();
        this.drawVerticalLines();
        this.drawRects();
        this.drawAxis();
        pop()
    }

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartWidth);
    }

    drawTitles() {
        push();
        fill(255);
        textAlign(CENTER);
        textSize(20);
        text("Highest Grossing Movies (in dollars) from 1986 - 2016", this.chartWidth / 2, -this.chartHeight - 40);
        textSize(15);
        text("Gross of the Movies (in millions)", this.chartWidth / 2, this.chartHeight / 8);
        textSize(15);
        rotate(-PI/2);
        //text("Chart title Vertical", this.chartHeight / 2, -this.chartWidth / 5);
        pop();
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
            let colorNumber = i % 3;

            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            rect(0, -(this.barHeight + this.spacing) * i, this.scaleData(this.data[i].gross), -this.barHeight);

            //numbers (text)
            noStroke();
            fill(255);
            textSize(16);
            textAlign(LEFT, CENTER);
            text(this.data[i].gross, this.scaleData(this.data[i].gross) + 10, -((this.barHeight + this.spacing) * i) - this.barHeight / 2);
            fill(40);
            textSize(16);
            textAlign(LEFT, CENTER);
            text(1986 + i, 10, -((this.barHeight + this.spacing) * i) - this.barHeight / 2);

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
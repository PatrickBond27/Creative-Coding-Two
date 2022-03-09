class StackedBarChart {
    constructor(_data) {
        this.data = _data;

        this.chartWidth = 300;
        this.chartHeight = 300;
        this.spacing = 5;
        this.margin = 30;
        this.numTicks = 10;
        this.posX = 50;
        this.posY = 400;
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
        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;
    }

    calculateMaxValue() {
        let listValues = this.data.map(function(x) { return x.total })
        this.maxValue = max(listValues);
        this.tickIncrements = this.maxValue / this.numTicks;
    }

    render() {

        push();
        translate(this.posX, this.posY);

        this.drawTitles();
        this.drawLegend();
        this.drawTicks();
        this.drawHorizontalLines();
        this.drawRectangles();
        this.drawAxis();
        pop();
    }

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }

    drawTitles() {
        push();
        fill(255);
        textAlign(CENTER);
        textSize(20);
        text("Average Movie Scores within every Decade", this.chartWidth / 2, -this.chartHeight - 40);
        textSize(15);
        text("Year", this.chartWidth / 2, this.chartHeight / 6);
        textSize(15);
        rotate(-PI/2);
        text("Amount of Movies", this.chartHeight / 2, -this.chartWidth / 5);
        pop();
    }

    drawLegend() {
        // Legend Title
        for (let i = 0; i < this.data.length; i++) {
            let colorNumber = i % 3;
            fill(255);
            textSize(15);
            textAlign(LEFT, BOTTOM);
            text(this.data[i].ratingRange, this.chartWidth + 60, -(this.chartHeight - 30) + 30 * i);
            noStroke();
            fill(this.colors[colorNumber]);
            rect(this.chartWidth + 40, -(this.chartHeight - 30) + 30 * i, -15, -15);
        }
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
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

            //numbers (text)
            if (this.showValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(RIGHT, CENTER);
                text((i * this.tickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
            }
        }
    }

    drawHorizontalLines() {
        for (let i = 0; i <= this.numTicks; i++) {

            //horizontal line
            stroke(255, 50);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);
        }
    }

    drawRectangles() {
        push();
        translate(this.margin, 0);
        for (let i = 0; i < this.data.length; i++) {

            push();
            //bar 1
            fill(color('#b5ffe1'));
            noStroke();
            rect((this.barWidth + this.spacing) * i, 0, this.barWidth, this.scaleData(-this.data[i].high));
            fill(20);
            textAlign(CENTER, TOP);
            text(this.data[i].high, (this.barWidth + this.spacing) * i + (this.barWidth / 2), this.scaleData(-this.data[i].high));
            translate(0, this.scaleData(-this.data[i].high));
            
            //bar 2
            fill(color('#65b891'));
            noStroke();
            rect((this.barWidth + this.spacing) * i, 0, this.barWidth, this.scaleData(-this.data[i].medium));
            fill(20);
            textAlign(CENTER, TOP);
            text(this.data[i].medium, (this.barWidth + this.spacing) * i + (this.barWidth / 2), this.scaleData(-this.data[i].medium));
            translate(0, this.scaleData(-this.data[i].medium));
            
            //bar 3
            fill(color('#4e878c'));
            noStroke();
            rect((this.barWidth + this.spacing) * i, 0, this.barWidth, this.scaleData(-this.data[i].low));
            fill(20);
            textAlign(CENTER, TOP);
            text(this.data[i].low, (this.barWidth + this.spacing) * i + (this.barWidth / 2), this.scaleData(-this.data[i].low));
            pop();

            //numbers (text)
            noStroke();
            fill(255);
            textSize(16);
            textAlign(CENTER, BOTTOM);
            text(this.data[i].total, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaleData(-this.data[i].total));

            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push();
                    noStroke();
                    textSize(14);
                    textAlign(LEFT, CENTER);
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 10);
                    rotate(PI / 2)
                    text(this.data[i].year, 0, 0);
                    pop()
                } else {
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].year, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 20);
                }
            }
        }
        pop();
    }

    drawRects() {
        push();
        translate(this.margin, 0);
        for (let i = 0; i < this.data.length; i++) {
            push();
            for (let j = 0; j < this.data[i].values.length; j++) {
            let colorNumber = j % 4;

            //bars
            fill(this.colors[colorNumber]);
            noStroke();
            rect((this.barWidth + this.spacing) * i, 0, this.barWidth, this.scaleData(-this.data[i].values[j]));
            translate(0, this.scaleData(-this.data[i].values[j]));
            }
            pop();

            //numbers (text)
            noStroke();
            fill(255);
            textSize(16);
            textAlign(CENTER, BOTTOM);
            text(this.data[i].total, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, this.scaleData(-this.data[i].total));

            //text
            if (this.showLabels) {
                if (this.rotateLabels) {
                    push();
                    noStroke();
                    textSize(14);
                    textAlign(LEFT, CENTER);
                    translate(((this.barWidth + this.spacing) * i) + this.barWidth / 2, 10);
                    rotate(PI / 2)
                    text(this.data[i].name, 0, 0);
                    pop()
                } else {
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
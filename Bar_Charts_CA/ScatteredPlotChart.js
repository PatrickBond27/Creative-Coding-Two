class ScatteredPlotChart {
    constructor(_data) {
        this.data = _data;

        this.chartWidth = 300;
        this.chartHeight = 300;
        this.spacing = 5;
        this.margin = 30;
        this.numTicks = 10;
        this.posX = 50;
        this.posY = 400;
        this.dotRadius = 15;
        this.verticalTickIncrements;
        this.horizontalTickIncrements;
        this.maxValue;
        this.numPlaces = 0;
        this.tickSpacing;
        this.barWidth;
        this.availableWidth;

        this.showVerticalValues = true;
        this.showHorizontalValues = true;
        this.showLabels = true;
        this.rotateLabels = true;

        this.colors = [color('#d8f3dc'), color('#95d5b2'), color('#52b788'), color('#40916c'), color('#2d6a4f'), color('#1b4332')];

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
        this.verticalTickIncrements = this.maxValue / this.numTicks;
        this.horizontalTickIncrements = this.maxValue / this.numTicks;
    }

    render() {

        push();
        translate(this.posX, this.posY);

        this.drawVerticalTicks();
        this.drawHorizontalTicks();
        this.drawHorizontalLines();
        this.drawAxis();
        this.drawVertexes();
        pop();
    }

    scaleData(num) {
        return map(num, 0, this.maxValue, 0, this.chartHeight);
    }

    drawAxis() {
        //chart
        stroke(255, 180);
        strokeWeight(1);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
        line(0, 0, this.chartWidth, -this.chartHeight);
    }

    drawVerticalTicks() {
        // Vertical Ticks
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            strokeWeight(1)
            line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

            //numbers (text)
            if (this.showVerticalValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(RIGHT, CENTER);
                text((i * this.verticalTickIncrements).toFixed(this.numPlaces), -15, this.tickSpacing * -i);
            }
        }
    }

    drawHorizontalTicks() {
        for (let i = 0; i <= this.numTicks; i++) {
            //ticks
            stroke(255);
            strokeWeight(1)
            line(this.tickSpacing * i, 0, this.tickSpacing * i, 10);

            //numbers (text)
            if (this.showHorizontalValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(CENTER, TOP);
                text((i * this.horizontalTickIncrements).toFixed(this.numPlaces), this.tickSpacing * i, 15);
            }
        }
    }

    drawHorizontalValues() {
        for (let i = 0; i <= this.data.length; i++) {

            //numbers (text)
            if (this.showHorizontalValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(CENTER, TOP);
                text((i * this.tickIncrements).toFixed(this.numPlaces), this.tickSpacing * i, 15);
            }
        }
    }

    drawHorizontalLines() {
        for (let i = 0; i <= this.numTicks; i++) {

            //horizontal line
            stroke(255, 50);
            strokeWeight(1);
            line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);
        }
    }

    drawText() {
        push();
        translate(this.margin, 0);
        
        for (let i = 0; i < this.data.length; i++) {

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
                    pop();
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

    drawVertexes() {
        translate(this.margin, 0);

        //dots
        beginShape();
        for (let i = 0; i < this.data.length; i++) {
            let colorNumber = i % 6;
            fill(this.colors[colorNumber]);
            strokeWeight(1);
            ellipse((this.barWidth + this.spacing) * i + (this.barWidth / 2), this.scaleData(-this.data[i].total), this.dotRadius);
        }
        endShape();

        translate(240, -160);
        // Legend Title
        for (let i = 0; i < this.data.length; i++) {
            let colorNumber = i % 6;
            fill(255);
            textSize(15);
            text(this.data[i].name, 30, 30 * i);
            fill(this.colors[colorNumber]);
            rect(-40, 30 * i, 15, 15);
        }
    }
}
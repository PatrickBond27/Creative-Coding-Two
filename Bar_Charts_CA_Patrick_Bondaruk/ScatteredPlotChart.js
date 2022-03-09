class ScatteredPlotChart {
    constructor(_data) {
        this.data = _data;

        this.chartWidth = 300;
        this.chartHeight = 300;
        this.spacing = 5;
        this.margin = 30;
        this.xNumTicks = 7;
        this.yNumTicks = 10;
        this.posX = 50;
        this.posY = 400;
        this.dotRadius = 8;
        this.verticalTickIncrements;
        this.horizontalTickIncrements;
        this.maxValue;
        this.numPlaces = 0;
        this.xTickSpacing;
        this.yTickSpacing;
        this.barWidth;
        this.availableWidth;

        this.showVerticalValues = true;
        this.showHorizontalValues = true;
        this.showLabels = true;
        this.rotateLabels = true;

        this.colors = [color('#b5ffe1'), color('#65b891'), color('#4e878c'), color('#40916c'), color('#2d6a4f'), color('#1b4332')];

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues() {
        this.xTickSpacing = this.chartWidth / this.xNumTicks;
        this.yTickSpacing = this.chartHeight / this.yNumTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length));
        this.barWidth = this.availableWidth / this.data.length;
    }

    calculateMaxValue() {
        let listValuesY = this.data.map(function(x) { return x.gross })
        this.maxValueY = max(listValuesY);
        this.verticalTickIncrements = this.maxValueY / this.yNumTicks;
        let listValuesX = this.data.map(function(x) { return x.budget })
        this.maxValueX = max(listValuesX);
        this.horizontalTickIncrements = this.maxValueX / this.xNumTicks;
    }

    render() {

        push();
        translate(this.posX, this.posY);

        this.drawTitles();
        this.drawVerticalTicks();
        this.drawHorizontalTicks();
        this.drawHorizontalLines();
        this.drawAxis();
        this.drawVertexes();
        pop();
    }

    scaleDataY(num) {
        return map(num, 0, this.maxValueY, 0, this.chartHeight);
    }

    scaleDataX(num) {
        return map(num, 0, this.maxValueX, 0, this.chartWidth);
    }

    drawTitles() {
        push();
        fill(255);
        textAlign(CENTER);
        textSize(20);
        text("The Budget and the Gross of the Movies in the year 2000", this.chartWidth / 2, -this.chartHeight - 40);
        textSize(15);
        text("Budget (in dollars)", this.chartWidth / 2, this.chartHeight / 8);
        textSize(15);
        rotate(-PI/2);
        text("Gross (in dollars)", this.chartHeight / 2, -this.chartWidth / 9);
        pop();
    }

    drawLegend() {
        // Legend Title
        for (let i = 0; i < this.data.length; i++) {
            let colorNumber = i % 3;
            fill(255);
            textSize(15);
            text(this.data[i].name, this.chartWidth + 60, -(this.chartHeight - 30) + 30 * i);
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
        line(0, 0, this.chartWidth, -this.chartHeight);
    }

    drawVerticalTicks() {
        // Vertical Ticks
        for (let i = 0; i <= this.yNumTicks; i++) {
            //ticks
            stroke(255);
            strokeWeight(1)
            line(0, this.yTickSpacing * -i, -10, this.yTickSpacing * -i);

            //numbers (text)
            if (this.showVerticalValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(RIGHT, CENTER);
                text((i * this.verticalTickIncrements).toFixed(this.numPlaces), -15, this.yTickSpacing * -i);
            }
        }
    }

    drawHorizontalTicks() {
        for (let i = 0; i <= this.xNumTicks; i++) {
            //Horizontal Ticks
            stroke(255);
            strokeWeight(1)
            line(this.xTickSpacing * i, 0, this.xTickSpacing * i, 10);

            //numbers (text)
            if (this.showHorizontalValues) {
                fill(255, 200);
                noStroke();
                textSize(14);
                textAlign(CENTER, TOP);
                text((i * this.horizontalTickIncrements).toFixed(this.numPlaces), this.xTickSpacing * i, 15);
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
                text((i * this.horizontalTickIncrements).toFixed(this.numPlaces), this.xTickSpacing * i, 15);
            }
        }
    }

    drawHorizontalLines() {
        for (let i = 0; i <= this.yNumTicks; i++) {

            //horizontal line
            stroke(255, 50);
            strokeWeight(1);
            line(0, this.yTickSpacing * -i, this.chartWidth, this.yTickSpacing * -i);
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
        //translate(this.margin, 0);

        //dots
        beginShape();
        for (let i = 0; i < this.data.length; i++) {
            let colorNumber = i % 3;
            fill(this.colors[colorNumber]);
            noStroke();
            ellipse(this.scaleDataX(this.data[i].budget), this.scaleDataY(-this.data[i].gross), this.dotRadius);
            fill(220);
            textSize(10);
            text(this.data[i].name, this.scaleDataX(this.data[i].budget), this.scaleDataY(-this.data[i].gross) - 18);
        }
        endShape();
    }
}
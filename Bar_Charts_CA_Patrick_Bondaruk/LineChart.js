class LineChart {
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
        this.showHorizontalValues = false;
        this.showLabels = true;
        this.rotateLabels = false;

        this.colors = [color('#ffe066'), color('#fab666'), color('#f68f6a'), color('#f3646a')];

        this.updateValues();
        this.calculateMaxValue();
    }

    updateValues() {
        this.tickSpacing = this.chartHeight / this.numTicks;
        this.availableWidth = this.chartWidth - (this.margin * 2) - (this.spacing * (this.data.length - 1));
        this.barWidth = this.availableWidth / this.data.length;
    }

    calculateMaxValue() {
        let listValues = this.data.map(function(x) { return x.billion })
        this.maxValue = max(listValues);
        this.verticalTickIncrements = this.maxValue / this.numTicks;
        this.horizontalTickIncrements = this.maxValue / this.data.length;
    }

    render() {

        push();
        translate(this.posX, this.posY);

        this.drawTitles();
        this.drawVerticalTicks();
        this.drawHorizontalValues();
        this.drawHorizontalLines();
        this.drawText();
        this.drawAxis();
        this.drawVertexes();
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
        text("The Gross of Paramount Pictures every 5 years (in dollars)", this.chartWidth / 2, -this.chartHeight - 40);
        textSize(15);
        text("Year", this.chartWidth / 2, this.chartHeight / 5);
        textSize(15);
        rotate(-PI/2);
        text("Gross (billions)", this.chartHeight / 2, -this.chartWidth / 8);
        pop();
    }

    drawAxis() {
        //chart
        stroke(255, 180);
        strokeWeight(1);
        line(0, 0, 0, -this.chartHeight); //y
        line(0, 0, this.chartWidth, 0); //x
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
            strokeWeight(1)
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
                    text(this.data[i].year, 0, 0);
                    pop();
                } else {
                    noStroke();
                    fill(255);
                    textSize(14);
                    textAlign(CENTER, BOTTOM);
                    text(this.data[i].year, ((this.barWidth + this.spacing) * i) + this.barWidth / 2, 30);
                }
            }
        }
        pop();
    }

    drawVertexes() {
        translate(this.margin, 0);

        //HorizontalTicks
        stroke(255);
        strokeWeight(1);
        for (let i = 0; i < this.data.length; i++) {
            line((this.barWidth + this.spacing) * i + (this.barWidth / 2), 0, (this.barWidth + this.spacing) * i + (this.barWidth / 2), 10);
        }

        //dots
        fill(160);
        stroke(200, 0, 0);
        strokeWeight(1);
        beginShape();
        for (let i = 0; i < this.data.length; i++) {
            ellipse((this.barWidth + this.spacing) * i + (this.barWidth / 2), this.scaleData(-this.data[i].billion), this.dotRadius);
        }
        endShape();

        //lines 
        noFill();
        stroke(200, 0, 0);
        strokeWeight(3);
        beginShape();
        for (let i = 0; i < this.data.length; i++) {
            vertex((this.barWidth + this.spacing) * i + (this.barWidth / 2), this.scaleData(-this.data[i].billion));
        }
        endShape();
    }

    drawDoubleLoopVertexes() {
        translate(this.margin, 0);

        //HorizontalTicks
        stroke(255);
        strokeWeight(1);
        for (let i = 0; i < this.data.values.length; i++) {
            line((this.barWidth + this.spacing) * i + (this.barWidth / 2), 0, (this.barWidth + this.spacing) * i + (this.barWidth / 2), 10);
        }

        for (let i = 0; i < this.data.length; i++) {
        //dots
        fill(160);
        stroke(200, 0, 0);
        strokeWeight(1);
        beginShape();
        for (let j = 0; j < this.data[i].length; j++) {
            ellipse((this.barWidth + this.spacing) * j + (this.barWidth / 2), -this.data[i].billion, this.dotRadius);
        }
        endShape();

        //lines 
        noFill();
        stroke(200, 0, 0);
        strokeWeight(3);
        beginShape();
        for (let j = 0; j < this.data[i].length; j++) {
            vertex((this.barWidth + this.spacing) * j + (this.barWidth / 2), this.scaleData(-this.data[i].billion));
        }
        endShape();
    }
    }
}
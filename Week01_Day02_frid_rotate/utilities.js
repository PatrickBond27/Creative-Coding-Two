function drawBoxes(numBoxes, strokeColor, strokeThickness) {
    let boxSize = width/numBoxes;
    for(let j = 0; j < numBoxes; j++) {
        for(let i = 0; i < numBoxes; i++) {
            noFill();
            strokeWeight(strokeThickness);
            stroke(strokeColor)
            push();
            translate(boxSize*i, boxSize*j);
            rotate(45);
            rect(0, 0, boxSize, boxSize);
            pop();
        }
    }
}
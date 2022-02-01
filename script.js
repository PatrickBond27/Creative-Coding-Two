// This is a variable 
let distance = 25;

// This is a function or a method
clap();

// This is declaring a function
function clap() {
    console.log("hi");
}

clap(3, 8);

function clap(startNum, endNum) {
    let countDown = endNum - startNum;
    for(let i = startNum, countDown<0, i++) {
        console.log("hi");
    }
}
// This is a variable 
let distance = 25;

// This is a function or a method
clap();

// This is declaring a function
function clap() {
    console.log("hi");
}

clap(3, 8);
// This is a function that loops
function clap(startNum, endNum) {
    // The variable that is assigning the other variables like an equation is called an expression
    let countDown = endNum - startNum;
    for(let i = startNum; countDown<0; i++) {
        console.log("hi");
    }
}
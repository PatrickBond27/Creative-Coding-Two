let dataMovies = [];
let table;

let dataHighGross = [];
let highGrossTable;

let dataAvgScore = [];
let avgScoreTable;

let dataBudgetGross = [];
let budgetGrossTable;

function preload() {
    table = loadTable('data/dataMovies.csv', 'csv', 'header');
    highGrossTable = loadTable('data/highGrossData.csv', 'csv', 'header');
    avgScoreTable = loadTable('data/avgScoreData.csv', 'csv', 'header');
    budgetGrossTable = loadTable('data/budgetGrossData.csv', 'csv', 'header');
}

function generateData() {
    for (let r = 0; r < table.getRowCount(); r++) {
        dataMovies.push(table.rows[r].obj);
    }

    for (let i = 0; i < dataMovies.length; i++) {
        dataMovies[i].gross = int(dataMovies[i].gross);
    }

    for (let r = 0; r < highGrossTable.getRowCount(); r++) {
        dataHighGross.push(highGrossTable.rows[r].obj);
    }

    for (let i = 0; i < dataHighGross.length; i++) {
        dataHighGross[i].gross = float(dataHighGross[i].gross);
    }

    for (let i = 0; i < dataHighGross.length; i++) {
        dataHighGross[i].year = int(dataHighGross[i].year);
    }

    for (let r = 0; r < avgScoreTable.getRowCount(); r++) {
        dataAvgScore.push(avgScoreTable.rows[r].obj);
    }

    for (let i = 0; i < dataAvgScore.length; i++) {
        dataAvgScore[i].avgScore = float(dataAvgScore[i].avgScore);
    }

    for (let i = 0; i < dataAvgScore.length; i++) {
        dataAvgScore[i].year = int(dataAvgScore[i].year);
    }

    for (let r = 0; r < budgetGrossTable.getRowCount(); r++) {
        dataBudgetGross.push(budgetGrossTable.rows[r].obj);
    }

    for (let i = 0; i < dataBudgetGross.length; i++) {
        dataBudgetGross[i].budget = int(dataBudgetGross[i].budget);
    }

    for (let i = 0; i < dataBudgetGross.length; i++) {
        dataBudgetGross[i].gross = int(dataBudgetGross[i].gross);
    }
}
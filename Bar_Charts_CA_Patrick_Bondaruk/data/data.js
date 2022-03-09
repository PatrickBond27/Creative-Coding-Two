let dataMovies = [];
let table;

let dataHighGross = [];
let highGrossTable;

let dataAvgScore = [];
let avgScoreTable;

let dataBudgetGross = [];
let budgetGrossTable;

let dataAvgRating = [];
let avgRatingTable;

let dataIrishMovies = [];
let irishMoviesTable;

let dataCompanyGross = [];
let companyGrossTable;

function preload() {
    table = loadTable('data/dataMovies.csv', 'csv', 'header');
    highGrossTable = loadTable('data/highGrossData.csv', 'csv', 'header');
    avgScoreTable = loadTable('data/avgScoreData.csv', 'csv', 'header');
    budgetGrossTable = loadTable('data/budgetGrossData.csv', 'csv', 'header');
    avgRatingTable = loadTable('data/avgRatingData.csv', 'csv', 'header');
    irishMoviesTable = loadTable('data/irishMoviesData.csv', 'csv', 'header');
    companyGrossTable = loadTable('data/companyGrossData.csv', 'csv', 'header');
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

    for (let r = 0; r < avgRatingTable.getRowCount(); r++) {
        dataAvgRating.push(avgRatingTable.rows[r].obj);
    }

    for (let i = 0; i < dataAvgRating.length; i++) {
        dataAvgRating[i].high = int(dataAvgRating[i].high);
    }

    for (let i = 0; i < dataAvgRating.length; i++) {
        dataAvgRating[i].medium = int(dataAvgRating[i].medium);
    }

    for (let i = 0; i < dataAvgRating.length; i++) {
        dataAvgRating[i].low = int(dataAvgRating[i].low);
    }

    for (let r = 0; r < irishMoviesTable.getRowCount(); r++) {
        dataIrishMovies.push(irishMoviesTable.rows[r].obj);
    }

    for (let i = 0; i < dataIrishMovies.length; i++) {
        dataIrishMovies[i].amount = int(dataIrishMovies[i].amount);
    }

    for (let r = 0; r < companyGrossTable.getRowCount(); r++) {
        dataCompanyGross.push(companyGrossTable.rows[r].obj);
    }

    for (let i = 0; i < dataCompanyGross.length; i++) {
        dataCompanyGross[i].billion = float(dataCompanyGross[i].billion);
    }
}
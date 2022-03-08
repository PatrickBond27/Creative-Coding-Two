let data02 = [];
let table;

function preload() {
    table = loadTable('data/Fruit_sales.csv', 'csv', 'header');
}

function generateData() {
    for (let r = 0; r < table.getRowCount(); r++) {
        data02.push(table.rows[r].obj);
    }

    for (let i = 0; i < data02.length; i++) {
        data02[i].total = int(data02[i].total);
    }
}
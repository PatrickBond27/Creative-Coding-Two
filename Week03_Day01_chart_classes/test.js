class dataObject {
    constructor(_title, _num, _price) {
        this.name = _title;
        this.total = _num;
        this.price = _price;
        this.totalPrice = this.totalPrice();
    }

    totalPrice() {
        this.totalPrice = this.total * this.price;
        return this.totalPrice;
    }
}

let myObjects = [];

for (let i = 0; i < 10; i++) {
    myObjects.push(new dataObject());
}

console.log(new dataObject("Oranges", 45));
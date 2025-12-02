//Base Class: Product Properties
 
class productProperties {
    //Method: Constructor initializing name, price, and quantity
    constructor (name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
    }

getTotalValue() {
    return this.price * this.quantity;
}

toString() {
    return `Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
}
}
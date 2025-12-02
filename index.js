//Base Class: Product Properties
 
class productProperties {
    //Method: Constructor initializing name, price, and quantity
    constructor (name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    //Displaying info for product properties
    displayInfo() {
        console.log(`Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
    }
//getTotalValue: Returns the value of the product in stock
getTotalValue() {
    return this.price * this.quantity;
}
//toString: Returns a string representation of the product
toString() {
    return `Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
}
}

//Create a subclass: Perishable Product Properties
class perishableProductProperties extends productProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
    toString() {
        return `Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
    }
}
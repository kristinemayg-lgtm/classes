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
//Add a static method to product
static applyDiscount(products, discount) {
    productProperties.forEach(product => {
        product.price = product.price - (product.price * discount);
    });
}
}

//Create a subclass: Perishable Product Properties
class perishableProductProperties extends productProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
    toString() {
        return `Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }
}
//Example instances

const yogurt = new perishableProductProperties("Yogurt", 4.00, 12, "2027-05-21");
const bread = new perishableProductProperties("Bread", 5.50, 2, "2025-12-25");
console.log(yogurt.toString());
console.log(bread.toString());
//Store class inventory
class store {
    constructor () {
         //stores products and perishable objects
        this.inventory = [];
    }
    //Adds product to inventory
addProduct(product) {
    this.inventory.push(product);
}
//Returns total value of all products in the inventory
getInventoryValue() {
    return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
}
}
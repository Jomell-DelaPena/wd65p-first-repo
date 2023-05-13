// this variable represents the Product Name RTX 4090
const productName = 'RTX 4090';

// this variable represents the quantity of the RTX 4090 which is 10
const quantity = 10;

// this variable represents the amount for each RTX 4090
const amount = 115000;

// this variable represents the Tax Rate of the 4090
const taxRate = '20%';

// this variable converts the string 20% to the actual value of 20%
const trueTaxRate = parseFloat(taxRate) / 100;

//this variable represents the Subtotal by multiplying the values of quantity and amount
const subTotal = quantity * amount;

//this variable represents the Tax Amount by multiplying the values of Subtotal and Tax Rate
const taxAmount = subTotal * trueTaxRate;

//this variable represents the Total Amount by adding the values of Subtotal and Tax Amount
const totalAmount = subTotal + taxAmount;

console.log('Product Name: ' + productName);

console.log('Quantity: ' + quantity);

console.log('Amount: ' + amount);

console.log('Tax Rate: ' + taxRate);

console.log('Subtotal: ' + subTotal);

console.log('Tax Amount: ' + taxAmount);

console.log('Total Amount: ' + totalAmount);
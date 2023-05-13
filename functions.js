// Function that multiplies the value of each bread and the quantity of existent bread.
const findTotalAmount = (value, quantity) => value * quantity;

// Variables created for the price of the bread and quantity of bread.
const breadPrice = 749;
const breadQuantity = 10;

// Added Bread Price and Quantity
console.log(`Bread Price: ₱${breadPrice}`);
console.log(`Quantity: ${breadQuantity}`);

//Spacer
console.log(`-------------------------------------`);

//Variable that will hold the returned output of the totalAmount function
const totalAmount = findTotalAmount(breadPrice, breadQuantity);

//Prints the Total Amount of the Bread.
console.log(`Total amount: ₱${totalAmount}`);


//Function that will divide the total amount into two equal amounts.
const divideTotalAmount = total  => total /2;

// The output of the function after dividing it into 2 equal amounts.
console.log(`Divided total amount: ₱${divideTotalAmount(totalAmount)}`);

//Spacer
console.log(`-------------------------------------`);

//Expected Output
console.log(`"Juan and Pedro have to contribute ₱${divideTotalAmount(totalAmount)} each."`);
// Function for the Calculation of Travel Time
const calculateTravelTime = () => {
    let distance = NaN;

    while (isNaN(distance)) {
    distance = parseFloat(prompt("Enter the distance: "));

    if (isNaN(distance)) {
        console.log("Error! Please enter a valid number: ");
    }
    }
    
  // Constant Speed 5km
    const speed = 5;
    const time = distance / speed;

    console.log(`The estimated travel time is ${time} hours.`);
};

calculateTravelTime();

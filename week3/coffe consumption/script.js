document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');
    const maxAge = 80; // You can adjust the max age here

    calculateButton.addEventListener('click', () => {
        const age = parseFloat(document.getElementById('age').value);
        const cupsPerDay = parseFloat(document.getElementById('cupsPerDay').value);

        if (age && cupsPerDay) {
            calculateCoffeeSupply(age, cupsPerDay);
        } else {
            alert('Please fill in both fields');
        }
    });

    function calculateCoffeeSupply(age, cupsPerDay) {
        const yearsRemaining = maxAge - age;
        const totalCups = Math.round(yearsRemaining * 365.25 * cupsPerDay); // 365.25 accounts for leap years
        const result = `You will need ${totalCups} cups of coffee to keep you awake until the age of ${maxAge}.`;
        document.getElementById('result').innerHTML = `<p>${result}</p>`;
    }

    // Call the function three times with different values
    console.log(calculateCoffeeSupply(25, 3)); // Example 1
    console.log(calculateCoffeeSupply(30, 2.5)); // Example 2
    console.log(calculateCoffeeSupply(40, 4)); // Example 3
});

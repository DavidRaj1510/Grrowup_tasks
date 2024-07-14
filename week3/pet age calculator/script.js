document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculateButton');

    calculateButton.addEventListener('click', () => {
        const petAge = document.getElementById('petAge').value;
        const conversionRate = document.getElementById('conversionRate').value;

        if (petAge && conversionRate) {
            calculatePetAge(petAge, conversionRate);
        } else {
            alert('Please fill in all fields');
        }
    });

    function calculatePetAge(petAge, conversionRate) {
        const petAgeInHumanYears = petAge * conversionRate;
        const result = `Your pet is ${petAgeInHumanYears} years old in pet years!`;
        document.getElementById('result').innerHTML = `<p>${result}</p>`;
    }

    // Call the function three times with various pet ages and conversion rates
    console.log(calculatePetAge(2, 7));  // Cat
    console.log(calculatePetAge(3, 5));  // Dog
    console.log(calculatePetAge(4, 2));  // Rabbit
});

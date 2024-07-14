document.addEventListener('DOMContentLoaded', () => {
    const metersToFeetButton = document.getElementById('metersToFeetButton');
    const feetToMetersButton = document.getElementById('feetToMetersButton');

    metersToFeetButton.addEventListener('click', () => {
        const distanceMeters = parseFloat(document.getElementById('distanceMeters').value);
        if (distanceMeters) {
            metersToFeet(distanceMeters);
        } else {
            alert('Please enter a distance in meters');
        }
    });

    feetToMetersButton.addEventListener('click', () => {
        const distanceFeet = parseFloat(document.getElementById('distanceFeet').value);
        if (distanceFeet) {
            feetToMeters(distanceFeet);
        } else {
            alert('Please enter a distance in feet');
        }
    });

    function metersToFeet(distanceMeters) {
        const distanceFeet = distanceMeters * 3.281;
        document.getElementById('result').innerHTML = `<p>${distanceMeters} meters is equal to ${distanceFeet.toFixed(2)} feet.</p>`;
    }

    function feetToMeters(distanceFeet) {
        const distanceMeters = distanceFeet * 0.3048;
        document.getElementById('result').innerHTML = `<p>${distanceFeet} feet is equal to ${distanceMeters.toFixed(2)} meters.</p>`;
    }

    // Call the functions with different values
    console.log(metersToFeet(10)); // Example 1
    console.log(metersToFeet(25.5)); // Example 2
    console.log(feetToMeters(32.8)); // Example 3
    console.log(feetToMeters(100)); // Example 4
});

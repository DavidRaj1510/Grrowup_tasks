document.addEventListener('DOMContentLoaded', () => {
    const calcPerimeterButton = document.getElementById('calcPerimeterButton');
    const calcAreaButton = document.getElementById('calcAreaButton');

    calcPerimeterButton.addEventListener('click', () => {
        const length = document.getElementById('length').value;
        const width = document.getElementById('width').value;

        if (length && width) {
            calcPerimeter(length, width);
        } else {
            alert('Please fill in both fields');
        }
    });

    calcAreaButton.addEventListener('click', () => {
        const length = document.getElementById('length').value;
        const width = document.getElementById('width').value;

        if (length && width) {
            calcArea(length, width);
        } else {
            alert('Please fill in both fields');
        }
    });

    function calcPerimeter(length, width) {
        const perimeter = 2 * (parseFloat(length) + parseFloat(width));
        document.getElementById('result').innerHTML = `<p>The perimeter is ${perimeter}</p>`;
    }

    function calcArea(length, width) {
        const area = parseFloat(length) * parseFloat(width);
        document.getElementById('result').innerHTML = `<p>The area is ${area}</p>`;
    }
});

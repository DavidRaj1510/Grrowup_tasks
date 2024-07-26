const employees = [
    { name: 'Justin', age: 30, department: 'HR', salary: 30000 },
    { name: 'Smith', age: 25, department: 'Finance', salary: 40000 },
    { name: 'Harry', age: 35, department: 'IT', salary: 40000 },
    { name: 'Peter', age: 28, department: 'IT', salary: 85000 }
];

document.getElementById('average-salary-btn').addEventListener('click', () => {
    const averageSalary = calculateAverageSalary(employees);
    displayResult(`Average Salary: $${averageSalary}`);
});

document.getElementById('department-btn').addEventListener('click', () => {
    const selectedDepartments = Array.from(document.querySelectorAll('input[name="department"]:checked'))
                                     .map(checkbox => checkbox.value);
    if (selectedDepartments.length === 0) {
        displayResult('No department selected.');
    } else {
        const employeesInDept = findEmployeesInDepartments(employees, selectedDepartments);
        displayResult(`Employees in Selected Departments: ${JSON.stringify(employeesInDept)}`);
    }
});

document.getElementById('increase-salary-btn').addEventListener('click', () => {
    const percentage = parseFloat(prompt('Enter percentage increase:'));
    increaseSalary(employees, percentage);
    displayResult('Salaries increased successfully!');
});

document.getElementById('sort-age-btn').addEventListener('click', () => {
    const sortedEmployees = sortEmployeesByAge(employees);
    displayResult(`Employees sorted by age: ${JSON.stringify(sortedEmployees)}`);
});

function calculateAverageSalary(employeeArray) {
    const totalSalary = employeeArray.reduce((acc, employee) => acc + employee.salary, 0);
    return (totalSalary / employeeArray.length).toFixed(2);
}

function findEmployeesInDepartments(employeeArray, departments) {
    return employeeArray.filter(employee => departments.includes(employee.department));
}

function increaseSalary(employeeArray, percentage) {
    employeeArray.forEach(employee => {
        employee.salary += employee.salary * (percentage / 100);
    });
}

function sortEmployeesByAge(employeeArray) {
    return employeeArray.sort((a, b) => a.age - b.age);
}

function displayResult(result) {
    document.getElementById('result').innerText = result;
}

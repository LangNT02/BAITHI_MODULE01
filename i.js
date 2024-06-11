function editEmployee(id) {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    let employee = employees.find(employee => employee.id === id);
    if (employee) {
        document.getElementById('employeeID').value = employee.id;
        document.getElementById('employeeName').value = employee.name;
        document.getElementById('formTitle').textContent = "Update Employee";
        document.getElementById('formButton').textContent = "Update";
        document.getElementById('formButton').onclick = function() {
            updateEmployeeData(id);
        };
    }
}

function updateEmployeeData(id) {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    let employeeIndex = employees.findIndex(employee => employee.id === id);
    if (employeeIndex !== -1) {
        employees[employeeIndex].name = document.getElementById('employeeName').value;
        localStorage.setItem('employees', JSON.stringify(employees));
        renderEmployeeData();
    }
}
function renderEmployeeData() {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    let employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';
    employees.forEach(employee => {
        let listItem = document.createElement('li');
            listItem.textContent = `ID: $ {employee.id}, Name: ${employee.name}`;
    employeeList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', renderEmployeeData);

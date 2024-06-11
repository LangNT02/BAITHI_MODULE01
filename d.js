function saveEmployeeData(employee) {
    if (!validateEmployeeID(employee.id))
return;

let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
    
}
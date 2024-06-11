function deleteEmployee(id) {
    let confirmation = confirm("Are you sure you want to delete this employee?");
    if (confirmation) {
        let employees = JSON.parse(localStorage.getItem('employees')) || [];
        employees = employees.filter(employee => employee.id !== id);
        localStorage.setItem('employees', JSON.stringify(employees));
        renderEmployeeData();
    }
}
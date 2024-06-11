let employees = [
    { code: 'NV001', name: 'Thornton', email: 'Thornton@gmail.com' },
    { code: 'NV002', name: 'Stark', email: 'Stark@gmail.com' },
    { code: 'NV003', name: 'Rogers', email: 'Rogers@gmail.com' },
    { code: 'NV004', name: 'Banner', email: 'Banner@gmail.com' },
    { code: 'NV005', name: 'Romanoff', email: 'Romanoff@gmail.com' }
];

function renderEmployeeList() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';
    employees.forEach((employee, index) => {
        const row = `<tr>
            <td>${index + 1}</td>
            <td>${employee.code}</td>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td><button onclick="editEmployee(${index})">Sửa</button> <button onclick="deleteEmployee(${index})">Xóa</button></td>
        </tr>`;
        employeeList.innerHTML += row;
    });
}

function updateEmployee() {
    const code = document.getElementById('employeeCode').value;
    const name = document.getElementById('employeeName').value;
    const email = document.getElementById('email').value;

    if (!code || !name || !email) {
        alert('All fields are required');
        return;
    }

    const index = employees.findIndex(emp => emp.code === code);
    if (index !== -1) {
        employees[index].name = name;
        employees[index].email = email;
        renderEmployeeList();
        document.getElementById('updateEmployeeForm').reset();
        alert('Employee updated successfully');
    } else {
        alert('Employee not found');
    }
}

function editEmployee(index) {
    const employee = employees[index];
    document.getElementById('employeeCode').value = employee.code;
    document.getElementById('employeeName').value = employee.name;
    document.getElementById('email').value = employee.email;
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    renderEmployeeList();
}

renderEmployeeList();
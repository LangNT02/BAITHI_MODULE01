document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("employeeForm");
    const table = document.getElementById("employeeTable").getElementsByTagName('tbody')[0];
    let employeeData = [];
    let employeeCount = 0;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const employeeCode = form.employeeCode.value.trim();
        const employeeName = form.employeeName.value.trim();
        const email = form.email.value.trim();

        if (!employeeCode || !employeeName || !email) {
            alert("All fields are required!");
            return;
        }
        
        if (employeeData.some(emp => emp.employeeCode === employeeCode || emp.email === email)) {
            alert("Employee code or email already exists!");
            return;
        }

        employeeCount++;
        employeeData.push({ employeeCode, employeeName, email });
        const newRow = table.insertRow();
        newRow.insertCell(0).innerText = employeeCount;
        newRow.insertCell(1).innerText = employeeCode;
        newRow.insertCell(2).innerText = employeeName;
        newRow.insertCell(3).innerText = email;

        const optionsCell = newRow.insertCell(4);
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.className = "edit";
        editButton.onclick = () => editEmployee(newRow, employeeCode);
        optionsCell.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete";
        deleteButton.onclick = () => deleteEmployee(newRow, employeeCode);
        optionsCell.appendChild(deleteButton);

        form.reset();
    });

    function editEmployee(row, employeeCode) {
        const employee = employeeData.find(emp => emp.employeeCode === employeeCode);
        if (employee) {
            form.employeeCode.value = employee.employeeCode;
            form.employeeName.value = employee.employeeName;
            form.email.value = employee.email;
            deleteEmployee(row, employeeCode);
        }
    }

    function deleteEmployee(row, employeeCode) {
        table.deleteRow(row.rowIndex - 1);
        employeeData = employeeData.filter(emp => emp.employeeCode !== employeeCode);
        employeeCount--;
        for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].cells[0].innerText = i + 1;
        }
    }
});
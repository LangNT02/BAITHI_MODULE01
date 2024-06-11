function validateEmployeeID (employeeID) {
    if (!employeeID) {
        alert("Mã nhân viên không được để trống");
        return false;
    }
    return true;
}
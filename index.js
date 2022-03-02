// Write your solution in this file!
let employee = {
    name: "Elias",
    streetAddress: "33 Highland Ave",

}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
    
}
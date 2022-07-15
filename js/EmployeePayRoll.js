window.addEventListener('DOMContentLoaded', (event) => {

    validateName();
    salaryRange();
})

function validateName() {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        try {
            let empData = new Payroll();
            empData.name = name.value;
            nameError.textContent = "";
        } catch (e) {
            nameError.textContent = e;
        }
    });
}

function salaryRange() {
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });
}
//save function-----------------------------------
const save = () => {
    try{
    let employeePayroll = createEmployeePayRroll();
    createAndUpdateStorage(employeePayroll);
    }catch{
        return;
    }
}
const createEmployeePayRroll = () => {
    let employeePayroll = new Payroll();
    try {
        employeePayroll._name = getInputValueId("#name");
        setTextValue('.text-error', "");
    } catch (e) {
        setTextValue('.text-error', e);
    }

    try {
        let date = getInputValueId('#day') + " " + getInputValueId('#month') + " " + getInputValueId('#year');
        employeePayroll._startDate = new Date(Date.parse(date));
        setTextValue('.date-error', "");
    } catch (e) {
        setTextValue('.date-error', e);
    }

    employeePayroll._profilePic = getSelectedValue('[name=profile]').pop();
    employeePayroll._gender = getSelectedValue('[name=gender]').pop();
    employeePayroll._department = getSelectedValue('[name=department]');
    employeePayroll._salary = getInputValueId('#salary');
    employeePayroll._notes = getInputValueId('#notes');
    employeePayroll._id = new Date().getTime()+1;
    return employeePayroll;
}

const getInputValueId = (id) => {
    return document.querySelector(id).value;
}

const setTextValue = (id, message) => {
    const textError = document.querySelector(id);
    textError.textContent = message;
}

const getSelectedValue = (propertyValue)=> {
    let allItem = document.querySelectorAll(propertyValue);
    let setItem = [];
    allItem.forEach(item=>{
        if(item.checked == true){
            setItem.push(item.value);
        }
    })
    return setItem;
}
//localStorage-----------------------------
function createAndUpdateStorage(employeePayroll){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayroll);
    }else{
        employeePayrollList = [employeePayroll]
    }    
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
    alert(JSON.stringify(employeePayrollList));
}
//create reset form
const resetForm = () => {
    setValue('#name','');
    unsetSelectedValues('[name=Profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2022');
}
const unsetSelectedValues = (propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item =>{
        item.checked = false;
    });
}
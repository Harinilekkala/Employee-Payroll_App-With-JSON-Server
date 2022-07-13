//Salary Range
const salary = document.querySelector('#salary');
const message = document.querySelector('.salary-output');
salary.addEventListener('input', function(){
    message.textContent = salary.value;
});
window.addEventListener('DOMContentLoaded',(event) =>{
    const  NAME = document.querySelector('#name');
    const ERROR_OP = document.querySelector('.error-output');
    NAME.addEventListener('input',function(){
        if(NAME.value.length == 0){
            ERROR_OP.textContent = "";
            return;
        }
        try{
            (new PayrollClass()).empName = NAME.value;
            ERROR_OP.textContent = "";
        }
        catch(e){
            ERROR_OP.textContent = e;
        }
    });
});
const save = () =>{
    try{
        let employeePayrollData = createEmployeePayroll();
    }
    catch(e){
        return;
    }
}

const createEmployeePayroll = () =>{
    let employeePayrollData = new EmployeePayrollClass();
    try{
        employeePayrollData.name = getInputValueById('#name');
    }
    catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayrollData.ProfilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]').pop();
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
               getInputValueById('#year');
    employeePayrollData.startDate = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getInputValueById = (id) =>{
    let value = document.querySelector(id).value;
    return value;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItem = [];
    allItems.forEach(item => {
        if(item.checked){
            selItem.push(item.value);
        }
    });
    return selItem;
}

/*
* 1: querySelector is the newer feature.
* 2: The querySelector method can be used when selecting by element name,
*    nesting, or class name.
* 3: querySelector lets you find elements with rules that can't be
*    expressed with getElemetById
*/

const getElemetById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

/*
* 1: getElementId is better supported than querySelector in older versions
* of the browsers.
* 2: The thing with getElementId is that it only allows to select an
* element by its id.
*/

const getSelectedValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}
//Salary Range
const salary = document.querySelector('#salary');
const message = document.querySelector('.salary-output');
salary.addEventListener('input', function(){
    message.textContent = salary.value;
});
window.addEventListener('DOMContentLoaded',(event) =>{
    const  name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            textError.textContent = "";
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.value;;
            textError.textContent = "";
        }
        catch(e){
            textError.textContent = e;
        }
    });

});
const save = () =>{
    try{
        let employeePayrollData = createEmployeePayroll();
        storeDataInLocalStorage(employeePayrollData);
    }
    catch(e){
        return;
    }
}
function storeDataInLocalStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    }
    else{
        employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}

const createEmployeePayroll = () =>{
    let employeePayrollData = new EmployeePayrollData();
    try{
        employeePayrollData.name = getInputValueById('#name');
    }
    catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.Department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
               getInputValueById('#year');
    employeePayrollData.StartDate = new Date(Date.parse(date)).toLocaleDateString();
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
/* Reset Entered VAlues*/
const resetValues = () => {
    satValue('#name','');
    unSelectValue('[name=profile]');
    unSelectValue('[name=gender]');
    unSelectValue('[name=department]');
    setValue('#salary','20000');
    setTextValue('#day','Day');
    setTextValue('#month','Month');
    setTextValue('#year','Year');
    setValue('#notes','');
}

const setValue = (id, value) =>{
    const element = document.querySelector(id);
    element.value = value;
}

const setTextValue = (id, value) =>{
    const element = document.querySelector(id);
    element.textContent = value;
}

const unSelectValue = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => item.checked = false);
}
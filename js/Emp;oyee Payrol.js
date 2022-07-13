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
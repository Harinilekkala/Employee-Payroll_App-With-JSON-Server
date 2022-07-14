window.addEventListener("DOMContentLoaded", (event) =>{
    createInnetHtml();
});

const createInnetHtml = () => {
    const tableheader = "<tr><th>Profile</th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>" +
        "<th>Start Date</th><th>Action</th></tr>";
    let innerHtlm = `${tableheader}`;
    let getData = createEmployeePayrollJSON();
    for (const employeePayrollData of getData) {
        innerHtlm = `${innerHtlm}
     <tr>
        <td><img class="profile" alt="Profile Photo" src="${employeePayrollData._empProfile}"></td>
        <td>${employeePayrollData._empName}</td>
        <td>${employeePayrollData._gender}</td>
        <td>${getDeptHtml(employeePayrollData._dept)}</td>
        <td>${employeePayrollData._salary}</td>
        <td>${employeePayrollData._startDate}</td>
        <td>
            <img id="delete" onclick="remove(this)" class="action_img" src="../assests/trashbin.jpeg">
            <img id="update" onclick="update(this)" class="action_img" src="../assests/add.jpeg">
        </td>
    </tr>
`;
    }
    document.querySelector('#table-display').innerHTML = innerHtlm;
}

const createEmployeePayrollJSON = () => {
    let employeePayrollList = [
        {
            _empProfile : '../assests/icon3.jpg',
            _empName : 'Harshini',
            _gender : 'Female',
            _dept : ['Engineering','HR'],
            _salary : '30000',
            _startDate : '01 Jan 2022',
            _note : '',
            _id : new Date().getTime(),
        },
        {
            _empProfile : '../assests/icon4.jpg',
            _empName : 'Ganesh',
            _gender : 'Male',
            _dept : ['Engineering'],
            _salary : '35000',
            _startDate : '01 Jan 2022',
            _note : '',
            _id : new Date().getTime(),
        }
    ];
    return employeePayrollList;
}

const getDeptHtml = (deptList) =>{
    let deptHtml = '';
    for (const dept of deptList){
        deptHtml = `${deptHtml} <div class="dept">${dept}</div>`
    }
    return deptHtml
}

window.addEventListener("DOMContentLoaded", (event) =>{
    createInnetHtml();
});

const createInnetHtml = () =>{
    const tableheader = "<tr><th>Profile</th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>"+
        "<th>Start Date</th><th>Action</th></tr>";

    const innerHtlm = `${tableheader}
     <tr>
        <td><img class="profile" alt="Profile Photo" src="../assests/icon1.jpg"></td>
        <td>Harini</td>
        <td>Female</td>
        <td><div class="dept">Engineer</div>
            <div class="dept">HR</div>
        </td>
            <td>30000</td>
            <td>14 May 2022</td>
        <td>
            <img id="delete" onclick="remove(this)" class="action_img" src="../assests/add.jpeg">
            <img id="update" onclick="update(this)" class="action_img" src="../assests/trashbin.jpeg">
        </td>
    </tr>
`;
document.querySelector('#table-display').innerHTML = innerHtlm;
}
let role = localStorage.getItem("role");

let currentEditId = null;

// hide add for non-supervisor
if(role !== "SUPERVISOR"){
    document.getElementById("addBtn").style.display = "none";
}

// show form
function showForm(){
    document.getElementById("formSection").style.display = "block";
}

// 🔥 LOAD FROM BACKEND
function loadShifts(){

fetch("http://localhost:8080/api/shifts")
.then(res => res.json())
.then(data => {

let table = document.getElementById("shiftTable");
table.innerHTML = "";

data.forEach((s)=>{

let action = "";

if(role === "SUPERVISOR"){
action = `
<button onclick="editShift(${s.id}, '${s.empId}', '${s.shift}', '${s.date}')">Edit</button>
<button class="delete-btn" onclick="deleteShift(${s.id})">Delete</button>
`;
}

let row = `
<tr>
<td>${s.empId}</td>
<td>${s.shift}</td>
<td>${s.date}</td>
<td style="display:${role==="SUPERVISOR" ? "table-cell":"none"}">${action}</td>
</tr>
`;

table.innerHTML += row;

});

});

}

// 🔥 ADD / UPDATE
function saveShift(){

let empId = document.getElementById("empId").value;
let shift = document.getElementById("shiftType").value;
let date = document.getElementById("date").value;

if(!empId || !shift || !date){
alert("Fill all fields!");
return;
}

let url = "http://localhost:8080/api/shifts";
let method = "POST";

// if editing
if(currentEditId){
url = `http://localhost:8080/api/shifts/${currentEditId}`;
method = "PUT";
}

fetch(url,{
method:method,
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
empId:empId,
shift:shift,
date:date
})
})
.then(res => res.json())
.then(() => {

alert(currentEditId ? "Updated ✅" : "Added ✅");

currentEditId = null;

document.getElementById("formSection").style.display = "none";

clearForm();

loadShifts();

});

}

// 🔥 EDIT
function editShift(id, empId, shift, date){

currentEditId = id;

document.getElementById("formSection").style.display = "block";

document.getElementById("empId").value = empId;
document.getElementById("shiftType").value = shift;
document.getElementById("date").value = date;

}

// 🔥 DELETE
function deleteShift(id){

fetch(`http://localhost:8080/api/shifts/${id}`,{
method:"DELETE"
})
.then(() => {
loadShifts();
});

}

// clear form
function clearForm(){
document.getElementById("empId").value="";
document.getElementById("shiftType").value="";
document.getElementById("date").value="";
}

// initial load
loadShifts();
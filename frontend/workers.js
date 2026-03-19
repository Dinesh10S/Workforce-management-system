let role = localStorage.getItem("role");

let editMode = false;

// Hide buttons for non-manager
if(role !== "MANAGER"){
    document.getElementById("editBtn").style.display = "none";
    document.getElementById("addBtn").style.display = "none";
}

// Enable Edit Mode
function enableEdit(){
    editMode = true;
    document.getElementById("actionHeader").style.display = "table-cell";
    loadWorkers();
}

// Show Add Form
function showAddForm(){
    document.getElementById("addSection").style.display = "block";
}

// 🔥 LOAD FROM BACKEND
function loadWorkers(){

fetch("http://localhost:8080/api/workers")
.then(res => res.json())
.then(data => {

let table = document.getElementById("workerTable");
table.innerHTML = "";

data.forEach((w)=>{

let action = "";

if(editMode){
action = `
<button onclick="editWorker(${w.id}, '${w.empId}', '${w.name}', '${w.department}', '${w.phone}')">Edit</button>
<button onclick="deleteWorker(${w.id})" class="delete-btn">Delete</button>
`;
}

let row = `
<tr>
<td>${w.empId}</td>
<td>${w.name}</td>
<td>${w.department}</td>
<td>${w.phone}</td>
<td style="display:${editMode ? 'table-cell':'none'}">${action}</td>
</tr>
`;

table.innerHTML += row;

});

});

}

// 🔥 ADD (API)
function addWorker(){

let name = document.getElementById("name").value;
let empId = document.getElementById("empId").value;
let dept = document.getElementById("dept").value;
let phone = document.getElementById("phone").value;

let url = "http://localhost:8080/api/workers";
let method = "POST";

if(currentEditId){
    url = `http://localhost:8080/api/workers/${currentEditId}`;
    method = "PUT";
}

fetch(url,{
method:method,
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
empId:empId,
name:name,
department:dept,
phone:phone
})
})
.then(res => res.json())
.then(() => {

alert(currentEditId ? "Updated ✅" : "Added ✅");

currentEditId = null;

document.getElementById("addSection").style.display = "none";

loadWorkers();

});

}
// 🔥 DELETE (API)
function deleteWorker(id){

fetch(`http://localhost:8080/api/workers/${id}`,{
method:"DELETE"
})
.then(() => {
loadWorkers();
});

}


let currentEditId = null;

function editWorker(id, empId, name, dept, phone){

currentEditId = id;

document.getElementById("addSection").style.display = "block";

document.getElementById("empId").value = empId;
document.getElementById("name").value = name;
document.getElementById("dept").value = dept;
document.getElementById("phone").value = phone;

}
// Initial Load
loadWorkers();
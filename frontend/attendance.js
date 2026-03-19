let user = localStorage.getItem("userId");

document.getElementById("workerName").innerText = "Welcome, " + user;

function updateTime(){

let now = new Date();

document.getElementById("dateTime").innerText =
now.toLocaleDateString() + " " + now.toLocaleTimeString();

}

setInterval(updateTime,1000);


function markAttendance(){

fetch("http://localhost:8080/api/attendance",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
userId:user
})

})

.then(response => response.json())

.then(data => {

if(data.status === "success"){

document.getElementById("message").innerHTML =
"<div class='success'>Attendance Marked Successfully</div>";

document.getElementById("attendanceBtn").disabled = true;
document.getElementById("attendanceBtn").innerText = "Attendance Marked ✔";

}

});

}
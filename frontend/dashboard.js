// Sample Values
let totalWorkers = 45;
let presentToday = 33;
let absentToday = totalWorkers - presentToday;
let upcomingShifts = 12;

document.getElementById("totalWorkers").innerText = totalWorkers;
document.getElementById("presentToday").innerText = presentToday;
document.getElementById("absentToday").innerText = absentToday;
document.getElementById("upcomingShifts").innerText = upcomingShifts;

// Chart
const ctx = document.getElementById('attendanceChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Present', 'Absent'],
        datasets: [{
            label: 'Today Attendance',
            data: [presentToday, absentToday],
            backgroundColor: ['#00aaff', '#ff4d4d']
        }]
    },
    options: {
        responsive: true
    }
});
// Attendance page navigation
document.getElementById("attendanceMenu").addEventListener("click", function () {
    window.location.href = "attendance.html";
});
document.getElementById("workersMenu").addEventListener("click", function () {
    window.location.href = "workers.html";
});
document.getElementById("logoutMenu").addEventListener("click", function () {
    window.location.href = "login.html";
});
document.getElementById("shiftsMenu").addEventListener("click", function () {
    window.location.href = "shifts.html";
});

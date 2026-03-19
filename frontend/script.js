function login() {
    const userId = document.getElementById("managerId").value;
    const password = document.getElementById("passcode").value;
    const error = document.getElementById("error");

    fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: userId,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {

        if (data.status === "success") {

            // save userId (optional)
            localStorage.setItem("userId", userId);
            localStorage.setItem("role", data.role);

            if (data.role === "WORKER") {
                window.location.href = "dashboard.html";
            }
            else if (data.role === "SUPERVISOR") {
                window.location.href = "dashboard.html";
            }
            else if (data.role === "MANAGER") {
                window.location.href = "dashboard.html";
            }

        } else {
            error.innerText = "Invalid User ID or Password";
        }
    })
    .catch(() => {
        error.innerText = "Server error";
    });
}


document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email.includes("@") || password.length < 6) {
        alert("Invalid email or password (min 6 characters).");
        return;
    }
})

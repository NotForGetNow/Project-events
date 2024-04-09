document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registerForm");

    let isFormSubmitted = false;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (isFormSubmitted) {
            return;
        }

        isFormSubmitted = true;

        const login = document.getElementById("login").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;
        
        const userData = {
            login: login,
            email: email,
            password: password,
            name: name
        };

        fetch("https://75c3e3547430a8a2.mokky.dev/Users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Ошибка сети");
            }
            return response.json();
        })
        .then(data => {
            window.location.href = "sign.html";
        })
        .catch(error => {
            console.error("Ошибка регистрации:", error.message);
        });

    });
});



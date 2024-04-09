document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const login = document.getElementById("login").value;
        const password = document.getElementById("password").value;

        const userData = {
            login: login,
            password: password
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
                throw new Error("Неправильный логин или пароль");
            }
            return response.json();
        })
        .then(data => {
            // Сохраняем имя пользователя в локальном хранилище
            localStorage.getItem("username", data.username);
            // Перенаправляем на страницу cards.html
            window.location.href = "cards.html";
        })
        .catch(error => {
            alert(error.message);
        });
    });
});

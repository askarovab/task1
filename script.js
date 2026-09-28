let users = [
    {
        login: "bermet",
        password: "5555",
        name: "Bermet"
    },
    {
        login: "admin",
        password: "admin1234",
        name: "Admin"
    },
    {
        login: "aibek",
        password: "1111",
        name: "Aibek"
    },
    {
        login: "bekzat",
        password: "2222",
        name: "Bekzat"
    },
    {
        login: "Alina",
        password: "3333",
        name: "Alina"
    }
];

let loginUser = () => {

    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    let user = users.find(user =>
        user.login === login && user.password === password
    );

    if (user) {
        document.getElementById("message").textContent =
            "Добро пожаловать, " + user.name + "!";
    } else {
        document.getElementById("message").textContent =
            "Неверный логин или пароль!";
    }
};

let loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", loginUser);
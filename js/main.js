
//---------------------------------------------------LOGIN-------------------------------------------------- //
function Login() {
    var email = document.getElementById("loginEmail").value
    var password = document.getElementById("loginPassword").value

    var errorElement = document.getElementById("loginError");

    if (!email || !password) {
        errorElement.textContent = "All inputs are required";
        errorElement.classList.remove("d-none");
        return;
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var user = users.find(user => user.email === email && user.password === password);

    if (user) {
        errorElement.classList.add("d-none");
        document.getElementById("userName").textContent = user.name;
        nextSection("box3");
    }
    else {
        errorElement.textContent = "Invalid email or password";
        errorElement.classList.remove("d-none");
    }
}




//----------------------------------------------------------SIGNUP------------------------------------------------------//
function Signup() {
    var name = document.getElementById("signupName").value
    var email = document.getElementById("signupEmail").value
    var password = document.getElementById("signupPassword").value
    var errorElement = document.getElementById("signupError");
    var successElement = document.getElementById("signupSuccess");

    if (!name || !email || !password) {
        errorElement.textContent = "All inputs are required";
        errorElement.classList.remove("d-none");
        successElement.classList.add("d-none");
        return;
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.email === email)) {
        errorElement.textContent = "email already exists";
        errorElement.classList.remove("d-none");
        successElement.classList.add("d-none");
        return;
    }

    users.push({ name, email, password });

    localStorage.setItem("users", JSON.stringify(users));

    errorElement.classList.add("d-none");
    successElement.classList.remove("d-none");

    document.getElementById("signupName").value = "";
    document.getElementById("signupEmail").value = "";
    document.getElementById("signupPassword").value = "";
}

//------------------------------------------------------------HOME-------------------------------------------------------------------//
function nextSection(section) {

    document.querySelector(".section1").classList.add("d-none");
    document.querySelector(".section2").classList.add("d-none");
    document.querySelector(".navbar").classList.add("d-none");
    document.querySelector(".box3").classList.add("d-none");

    if (section === "signup") {
        document.querySelector(".section2").classList.remove("d-none");
    }
    else if (section === "login") {
        document.querySelector(".section1").classList.remove("d-none");
    }
    else if (section === "box3") {
        document.querySelector(".navbar").classList.remove("d-none");
        document.querySelector(".box3").classList.remove("d-none");
    }
}

function click_Logout() {
    nextSection("login");
}

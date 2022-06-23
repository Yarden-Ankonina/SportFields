// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Sportfields" && password == "Sportfields#123") {
        alert("Login successfully");
        isLoggedIn = true
        window.localStorage.setItem('loggedIn', JSON.stringify(isLoggedIn))
        window.location = "index.html"; // Redirecting to other page.
    }
    else{
        alert("Wrong UserName or Password\nTry Again");
    }
}
let loginButton = document.getElementsByClassName('login-button')[0]
let registerButton = document.getElementsByClassName('register-button')[0]



let isLoggedIn = false
window.onload = (e)=>{
    if(window.localStorage.getItem('loggedIn') !== null && window.localStorage.getItem('loggedIn') !== undefined){
        isLoggedIn = JSON.parse(localStorage.getItem('loggedIn'))
    }
    if(isLoggedIn){
        loginButton.innerHTML = 'Welcome'
        loginButton.style.pointerEvents = 'none';
        registerButton.innerHTML = 'Logout'
        registerButton.addEventListener('click',()=>{
            if(isLoggedIn){
                localStorage.removeItem('loggedIn')
                window.location.reload()
            }
        })
        Array.from(document.getElementsByClassName('navbar-item')).forEach(e =>{
            e.style.pointerEvents = 'auto'
            e.style.backgroundColor = 'a9e0f4'
            e.style.color = 'black'
        })
    }
    else{
        Array.from(document.getElementsByClassName('navbar-item')).forEach(e =>{
            e.style.pointerEvents = 'none'
            e.style.backgroundColor = 'rgba(138, 138, 138, 0.491)'
            e.style.color = 'rgba(138, 138, 138, 0.8)'  
        })
    }
}


function updateHomePage(){
    loginButton.classList.toggle('logged')
}



let menu = document.querySelector('.fa-bars')
let navbar = document.querySelector('.navbar')
let navbarLogin = document.querySelector('.login')
let navbarLOGO = document.querySelector('.logo')


// navbar click
menu.onclick = () => {
    // open and close navbar
    menu.classList.toggle('fa-x')
    navbar.classList.toggle('open')
    navbarLogin.classList.toggle('open')
    navbarLOGO.classList.toggle('open')
}



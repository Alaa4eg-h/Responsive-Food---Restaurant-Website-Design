//Search Form
let searchForm = document.querySelector(".search-form-container");
let searchBtn = document.querySelector("#search-btn");
searchBtn.onclick = () => {
    searchForm.classList.toggle("active");
    Cart.classList.remove("active");
    Login.classList.remove("active");
    navbar.classList.remove("active");
}

//Shopping Cart
let Cart = document.querySelector(".shopping-cart-container");
let CartBtn = document.querySelector("#cart-btn");
CartBtn.onclick = () => {
    Cart.classList.toggle("active");
    searchForm.classList.remove("active");
    Login.classList.remove("active");
    navbar.classList.remove("active");
}
//Login Form
let Login = document.querySelector(".login-form-container");
let LoginBtn = document.querySelector("#login-btn");

LoginBtn.onclick = () => {
    Login.classList.toggle("active");
    Cart.classList.remove("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
}

//Navbar
let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector('#menu-btn');
menuBtn.onclick = () => {
    navbar.classList.toggle("active");
    Login.classList.remove("active");
    Cart.classList.remove("active");
    searchForm.classList.remove("active");
}

window.onscroll = () => {
    navbar.classList.remove("active");
}

//Home Section
let home = document.querySelector(".home");
home.onmousemove = (e) => {
    let x = (window.innerWidth - e.pageX * 2) / 90;
    let y = (window.innerHeight - e.pageY * 2) / 90;
    let parallax_Img = document.querySelector(".home-parallax-img");
    parallax_Img.style.transform = `translateX(${y}px) translateY(${x}px)`;
}

home.onmouseleave = () => {
    let parallax_Img = document.querySelector(".home-parallax-img");
    parallax_Img.style.transform = `translateX(0px) translateY(0px)`;
}
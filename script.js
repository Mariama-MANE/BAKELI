const burgeur = document.querySelector(".burguer")
const nav = document.querySelector("nav")

burgeur.onclick= function (){

    nav.classList.toggle("active")
}
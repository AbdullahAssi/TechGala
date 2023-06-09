import '../Styles/modern-normalize.css';
import '../Styles/style.css';


let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
} 

// const wrapper = document.querySelector('.wrapper');
// const loginlink = document.querySelector('.Login-link');
// const registerlink = document.querySelector('.register-link');


//     registerlink.addEventListener('click', () => {
//         wrapper.classList.add('active');
//     });
//     loginlink.addEventListener('click', () => {
//         wrapper.classList.remove('active');
//     });

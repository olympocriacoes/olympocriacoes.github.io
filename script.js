// Menu mobile simples

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if(menuBtn){
menuBtn.addEventListener("click", () => {
menu.classList.toggle("active");
});
}
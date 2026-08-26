
const btn =document.getElementById("btn");

const menuMobile = document.getElementById("menu_mobile");

const list = document.getElementById("list");

const close = document.getElementById("close")

btn.addEventListener("click", () => {
  menuMobile.classList.toggle("ativo");
  list.classList.toggle("ativo");
  close.classList.toggle("ativo");
});

menuMobile.addEventListener("click", () => {
    menuMobile.classList.remove("ativo");
      list.classList.toggle("ativo");
    close.classList.toggle("ativo");

});

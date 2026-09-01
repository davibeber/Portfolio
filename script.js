
const btn =document.getElementById("btn");
const menuMobile = document.getElementById("menu_mobile");
const list = document.getElementById("list");
const close = document.getElementById("close");

const container = document.getElementById("carrossel_container"); 
const btnleft = document.getElementById("btnleft");
const btnright = document.getElementById("btnright");


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


btnleft.addEventListener("click", () =>{
  container.scrollBy({
    left: -container.clientWidth,
    behavior:"smooth"
  });
});



btnright.addEventListener("click", () =>{
  container.scrollBy({
    left:container.clientWidth,
    behavior: "smooth"
  })
})
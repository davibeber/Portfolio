
const btn = document.getElementById("btn");
const menu = document.getElementById("menu");
const list = document.getElementById("list");
const close = document.getElementById("close");


// Função para abrir e fechar o menu mobile

btn.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  list.classList.toggle("ativo");
  close.classList.toggle("ativo");
});

menu.addEventListener("click", () => {
    menu.classList.remove("ativo");
    list.classList.toggle("ativo");
    close.classList.toggle("ativo");

});
// Fim da função para abrir e fechar o menu mobile



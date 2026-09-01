
const btn =document.getElementById("btn");
const menuMobile = document.getElementById("menu_mobile");
const list = document.getElementById("list");
const close = document.getElementById("close");

const container = document.getElementById("carrossel_container"); 
const btnleft = document.getElementById("btnleft");
const btnright = document.getElementById("btnright");


// Função para abrir e fechar o menu mobile

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
// Fim da função para abrir e fechar o menu mobile


// Função de mover o carrossel para esquerda e direita
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
// fim da função de mover o carrossel para esquerda e direita


// Funçao para o carrossel "teletransportar" para a primeira ou ultima foto quando chegar no final ou inicio do carrossel
window.addEventListener("load", () => {
  container.style.scrollBehavior = "auto"; //Pulo sem animação
  container.scrollLeft = container.clientWidth; //Avança a largura de 1 de foto (não entendi isso aqui)
  container.style.scrollBehavior = "smooth"; // Ativa a animação
});



// 4. O MÁGICO "TELETRANSPORTE" INVISÍVEL
container.addEventListener("scrollend", () => {
  const itemWidth = container.clientWidth;
  const maxScroll = container.scrollWidth - itemWidth;

  // Se chegou no CLONE DA FOTO 1 (no final do carrossel)
  if (Math.ceil(container.scrollLeft) >= maxScroll - 5) {
    container.style.scrollBehavior = "auto"; // Desliga a animação suave
    container.scrollLeft = itemWidth;         // Teleporta para a Foto 1 REAL
    container.style.scrollBehavior = "smooth"; // Religam a animação suave
  }

  // Se chegou no CLONE DA ÚLTIMA FOTO (no início do carrossel)
  if (container.scrollLeft <= 5) {
    container.style.scrollBehavior = "auto"; // Desliga a animação suave
    container.scrollLeft = maxScroll - itemWidth; // Teleporta para a Última Foto REAL
    container.style.scrollBehavior = "smooth"; // Religam a animação suave
  }
});
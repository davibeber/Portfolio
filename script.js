
const btn = document.getElementById("btn");
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
// Tem coisa que não faz diferença mudar. testei instant, inherit, smooth e o pulo sem animação nao teve nada de diferente, então alguams coisas para funcionarem preciso de um "auto" como padrao, procede? 

  container.scrollLeft = container.clientWidth; //Avança a largura de 1 de foto (não entendi isso aqui)
  // clientWidth é a largura visível do container, ou seja, a largura da foto. Então, ao definir scrollLeft como clientWidth, você está movendo o carrossel para a posição da segunda foto (a primeira foto real), pulando a primeira foto que é um clone da última foto. Isso cria o efeito de loop contínuo no carrossel.
  container.style.scrollBehavior = "smooth"; // Ativa a animação
});


// como explicar container.scrollLeft = container.clientWidth? 
// mas pq tem scrollLeft mas não scrollRight?


// 4. O MÁGICO "TELETRANSPORTE" INVISÍVEL
container.addEventListener("scrollend", () => {

  // o que é scrollend?


// Basicamente aqui em baixo, foi criado duas constantes para renomear funções com outros nomes e ficar mais facil de manipular
// elas identificam o momento exato em que estiver no clone da primeira ou da ultima foto
// Igualam o scrollLeft com a imagem correspondente e troca sem animação
// Tenho que aprender como fazer isso sem copiar
// E como desenvolver o que está dentro do if, pois não entendi como itemwidth consegue identificar a primeira figura
// faria sentido se por exemplo: figura 1 = itemwidth mas não é isso que ocorre

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
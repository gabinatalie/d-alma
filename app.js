//  header
document.addEventListener("DOMContentLoaded", () => {
  // Espera o DOM ser completamente carregado antes de executar o código
  const header = document.querySelector(".header");

  console.log(header); // Verifica se o elemento header foi encontrado

  if (header) {
    // Adiciona um ouvinte de evento para o evento de rolagem da página
    window.addEventListener("scroll", () => {
      // Verifica se o usuário rolou para baixo mais de 50 pixels
      if (window.scrollY > 50) {
        // Adiciona a classe "scrolled" ao elemento header
        header.classList.add("scrolled");
      } else {
        // Remove a classe "scrolled" do elemento header
        header.classList.remove("scrolled");
      }
    });
  } else {
    // Exibe uma mensagem de erro no console se o elemento header não for encontrado
    console.error("Elemento .header não encontrado");
  }
});

//Menu hamburguer
const hamburguerMenu = document.querySelector(".hamburguer-menu");
const navLinks = document.querySelector("nav ul");

// Adiciona um ouvinte de evento ao menu hamburguer
hamburguerMenu.addEventListener("click", () => {
  // Adiciona ou remove a classe "active" da lista de links para mostrar ou esconder o menu
  navLinks.classList.toggle("active");
});

// Pesquisa
function pesquisar(event) {
  event.preventDefault(); //evita o comportamento padrão do formulário

  // Seleciona a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  //Sleciona o campo de pesquisa e obtem o valor
  let campoPesquisa = document
    .getElementById("campo-pesquisa")
    .value.toLowerCase();

  section.innerHTML = ""; //limpa os resultados anteriores

  // Itera sobre os dados da pesquisa
  for (let dado of dados) {
    if (
      dado.titulo.toLowerCase().includes(campoPesquisa) ||
      dado.descricao.toLowerCase().includes(campoPesquisa) ||
      dado.place.toLowerCase().includes(campoPesquisa)
    ) {
      section.innerHTML += `<div class="card-resultado">
<img src=${dado.img} alt="pasta png image" class="card-logo"><div class="card-info">
<h2><a href=${dado.link} class="card-title">${dado.titulo}</a></h2>
<p class="card-content">${dado.descricao}</p>
 <div class="card-footer">
<p class="card-content">${dado.place}</p>
<a href="#" class="cardapio-link">${dado.menu}</a>
 </div>
 </div> `;
    }
  }
}

document.querySelector("form").addEventListener("submit", pesquisar);

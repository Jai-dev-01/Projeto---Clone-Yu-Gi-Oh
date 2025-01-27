const botaoAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

cartoes.forEach((cartao) => {
  cartao.addEventListener("click", function () {
    const cartaVirada = cartao.querySelector(".carta-virada");
    // virar o cartão
    cartao.classList.toggle("virar");
    //Mostrar o fundo da carta
    cartaVirada.classList.toggle("mostrar-fundo-carta");

    const descricao = cartao.querySelector(".descricao");
    descricao.classList.toggle("esconder");
  });
});

botaoAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();
  cartaoAtual++;
  mostrarCartao();
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();
  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});
function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

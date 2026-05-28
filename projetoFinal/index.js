let dadosOriginais = [];
let termoBusca = "";
let ordenacaoAtual = "numero_asc";

carregarDados();

async function carregarDados() {
  const resposta = await fetch("back_end/listar.php");

  dadosOriginais = await resposta.json();

  processarEExibir();
}

function processarEExibir() {
  // 1. Filtrar
  let dadosProcessados = dadosOriginais.filter((item) => {
    const nomeMatch = item.nome.toLowerCase().includes(termoBusca);
    const numeroMatch = item["n#"].toString().includes(termoBusca);
    return nomeMatch || numeroMatch;
  });

  // 2. Ordenar
  switch (ordenacaoAtual) {
    case "numero_asc":
      dadosProcessados.sort((a, b) => Number(a["n#"]) - Number(b["n#"]));
      break;
    case "numero_desc":
      dadosProcessados.sort((a, b) => Number(b["n#"]) - Number(a["n#"]));
      break;
    case "nome_asc":
      dadosProcessados.sort((a, b) => a.nome.localeCompare(b.nome));
      break;
    case "nome_desc":
      dadosProcessados.sort((a, b) => b.nome.localeCompare(a.nome));
      break;
  }

  montarCards(dadosProcessados);
}

function montarCards(listaDeDados) {
  const container = document.getElementById("containerCards");
  container.innerHTML = "";

  if (listaDeDados.length === 0) {
    container.innerHTML = "<p>nenhum dado encontrado</p>";
    return;
  }
  listaDeDados.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    const screen = document.createElement("div");
    screen.className = "card-screen";

    const img = document.createElement("img");
    img.src = item.img ? `imgs/${item.img}` : "https://via.placeholder.com/150";
    img.alt = item.nome;
    screen.appendChild(img);

    const titulo = document.createElement("h4");
    titulo.textContent = `#${item["n#"]} - ${item.nome}`;

    const descricao = document.createElement("p");
    descricao.textContent = item.email;

    const divBotoes = document.createElement("div");
    divBotoes.className = "btn-acoes";

    const botaoAtualizar = document.createElement("button");
    botaoAtualizar.textContent = "Atualizar";
    botaoAtualizar.onclick = function () {
      const url = `front_end/atualizar.html?id=${item.id}&nome=${encodeURIComponent(item.nome)}&numero=${item["n#"]}&email=${encodeURIComponent(item.email)}&img=${item.img}`;
      window.location.href = url;
    };

    const botaoDeletar = document.createElement("button");
    botaoDeletar.textContent = "Excluir";
    botaoDeletar.onclick = async function () {
      if (confirm(`Deseja realmente remover o Pokémon ${item.nome}?`)) {
        const res = await fetch(`back_end/deletar.php?id=${item.id}`);
        const status = await res.json();

        if (!status.sucesso) {
          alert("Erro ao excluir item: " + status.erro);
        }
        carregarDados();
      }
    };

    divBotoes.appendChild(botaoAtualizar);
    divBotoes.appendChild(botaoDeletar);

    card.appendChild(screen);
    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(divBotoes);

    container.appendChild(card);
  });
}

const campoFiltro = document.getElementById("barra");

campoFiltro.addEventListener("input", function (event) {
  termoBusca = event.target.value.toLowerCase();
  processarEExibir();
});

const campoOrdenacao = document.getElementById("campoFiltro");

campoOrdenacao.addEventListener("change", function (event) {
  ordenacaoAtual = event.target.value;
  processarEExibir();
});

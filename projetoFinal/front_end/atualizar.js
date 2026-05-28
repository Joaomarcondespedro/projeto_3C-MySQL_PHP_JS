const parametrosDaUrl = new URLSearchParams(window.location.search);

const campoId = document.getElementById("idAtualizar");
const campoNome = document.getElementById("nomeAtualizar");
const campoEmail = document.getElementById("emailAtualizar");
const campoNumero = document.getElementById("numeroAtualizar");
const inputImg = document.getElementById("imagem");
const imgPreview = document.getElementById("previewImagemUpload");
const campoImgAtual = document.getElementById("imagem_atual");

const formAtualizar = document.getElementById("formAtualizar");
formAtualizar
  .querySelectorAll("input:not([type='hidden']), textarea")
  .forEach((input) => {
    input.required = true;
  });

campoId.value = parametrosDaUrl.get("id");
campoNome.value = parametrosDaUrl.get("nome");
campoNumero.value = parametrosDaUrl.get("numero");
campoEmail.value = parametrosDaUrl.get("email");

const imgNome = parametrosDaUrl.get("img");
if (imgNome) {
  imgPreview.src = `../imgs/${imgNome}`;
  campoImgAtual.value = imgNome;
  imgPreview.style.display = "block";
}

formAtualizar.addEventListener("submit", function (event) {
  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const numero = campoNumero.value.trim();
  const temImagem = inputImg.files.length > 0 || campoImgAtual.value !== "";

  if (nome === "" || email === "" || numero === "" || !temImagem) {
    alert("Por favor, preencha todos os campos.");
    event.preventDefault();
  }
});

inputImg.addEventListener("change", () => {
  if (inputImg.files[0]) {
    imgPreview.src = URL.createObjectURL(inputImg.files[0]);
    imgPreview.style.display = "block";
  }
});

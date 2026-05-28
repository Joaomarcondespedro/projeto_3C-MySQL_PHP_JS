const formCadastro = document.getElementById("formCadastro");

formCadastro
  .querySelectorAll("input:not([type='hidden']), textarea")
  .forEach((input) => {
    input.required = true;
  });

formCadastro.addEventListener("submit", async function (event) {
  const campoNome = document.getElementById("nome");
  const campoEmail = document.getElementById("email");
  const campoNumero = document.getElementById("numero");

  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const numero = campoNumero.value.trim();

  if (
    nome === "" ||
    email === "" ||
    numero === "" ||
    inputImg.files.length === 0
  ) {
    alert("Por favor, preencha todos os campos e selecione uma imagem.");
    event.preventDefault();

    return;
  }
});

const inputImg = document.getElementById("imagem");
const imgPreview = document.getElementById("previewImagemUpload");
inputImg.addEventListener("change", () => {
  if (inputImg.files[0]) {
    if (imgPreview.src.startsWith("blob:")) {
      URL.revokeObjectURL(imgPreview.src);
    }
    imgPreview.src = URL.createObjectURL(inputImg.files[0]);
    imgPreview.style.display = "block";
  }
});

let led = "ligar";

const acender = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "acender") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada Acesa">`;

    imgLampada.src = "./img/acesa.jpg";
    imgLampada.alt = "Lâmpada Acesa";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada Acesa">`;

    imgLampada.src = "./img/apagada.jpg";
    imgLampada.alt = "Lâmpada Apagada";

    btnEnviar.innerHTML = "Acender";
    led = "acender";
  }
};

// --------------------------------------------------------------------------- \\

const gerarImagem = () => {
  let qtdImagens = document.getElementById("inQtdImg").value; // valor informado pelo usuário
  let canvas = document.getElementById("canvas");

  canvas.innerHTML = "";
  console.log(qtdImagens);

  for (let i = 1; i <= qtdImagens; i++) {
    canvas.innerHTML += `<img class="imagens" src="./img/logo.png">`;
  }

  // document.getElementById(
  //   "canvas"
  // ).innerHTML = `<img class="imagens" src="./img/logo.png" alt="logo do senai"></img>`;
};

// --------------------------------------------------------------------------- \\

const validaForm = () => {
  let data = document.getElementById("inData").value;
  let cliente = document.getElementById("inCli").value;
  let tel = document.getElementById("inFone").value;
  let mail = document.getElementById("inMail").value;
  let prod = document.getElementById("inProd").value;
  let qtd = document.getElementById("inQtd").value;
  let val = document.getElementById("inVal").value;
  let msgErro = document.getElementById("mensagem-erro");

  //apagando as informações de erro
  msgErro.innerText = "";

  //validação de dados
  data == "" && (msgErro.innerHTML += "Preencha o campo 'Data'!<br>");
  cliente == "" &&
    (msgErro.innerHTML += "Preencha o campo 'Nome do cliente'! <br>");
  cliente.length < 3 &&
    (msgErro.innerHTML += "Campo 'Nome do cliente' incompleto! <br>");
  tel == "" && (msgErro.innerHTML += "Preencha o campo 'Telefone'! <br>");
  mail == "" && (msgErro.innerHTML += "Preencha o campo 'E-mail'! <br>");
  mail.length < 5 && (msgErro.innerHTML += "Campo 'E-mail' incompleto! <br>");
  prod == "" &&
    (msgErro.innerHTML += "Preencha o campo 'Nome do produto'! <br>");
  prod.length < 5 &&
    (msgErro.innerHTML += "Campo 'Nome do produto' incompleto! <br>");
  qtd == "" && (msgErro.innerHTML += "Preencha o campo 'Quantidade'! <br>");
  qtd.length < 0 &&
    (msgErro.innerHTML += "Número de campo 'Quantidade' inválido! <br>");
  val == "" && (msgErro.innerHTML += "Preencha o campo 'Valor unitário'! <br>");
  val.length < 0 &&
    (msgErro.innerHTML += "Número de campo 'Valor unitário' inválido! <br>");

  //mostrar e ocultar erro
  msgErro.innerText == ""
    ? ((msgErro.style.display = "none"), (msgErro.innerText = "enviado!"))
    : (msgErro.style.display = "block");

  //envio de formulário
  msgErro.innerText == "enviado!" &&
    ((msgErro.style.display = "block"),
    (msgErro.innerText = "Formulário enviado com sucesso!"),
    msgErro.classList.add("verde"));
};

// --------------------------------------------------------------------------- \\

const calcular = () => {
  let valPedido = document.getElementById("inValorPedido");
  let perDesconto = document.getElementById("inPercDesc");
  let valDesconto = document.getElementById("inValDesc");
  let valFinal = document.getElementById("inValFinal");

  switch (true) {
    case valPedido.value >= 2000:
      perDesconto.value = 1.5;
      break;
    case valPedido.value >= 1500:
      perDesconto.value = 1;
      break;
    case valPedido.value >= 1000:
      perDesconto.value = 0.8;
      break;
    case valPedido.value >= 500:
      perDesconto.value = 0.5;
      break;
  }

  valDesconto.value = valPedido.value * (perDesconto.value / 100);
  valFinal.value = valPedido.value - valDesconto.value;
};

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
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

let i;

function mostraCarro() {
  for (i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (i = 0; i < xCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltarPosicaoOriginal() {
  for (i = 0; i < xCarros.length; i++) {
      if (passouTela(xCarros[i])) {
        xCarros[i] = 600;
    }
  }
}

function passouTela(xCarros){
  return xCarros < -50
}


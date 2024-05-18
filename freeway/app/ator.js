let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
        yAtor +=3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao){
      colidiu();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function colidiu(){
  yAtor = 366;
}

function mostraPontos(){
  textAlign (CENTER);
  textSize(25);
  fill(255,165,0);
  text(meusPontos, width/5, 25);
}

function pontosMaiorQueZero(){
  meusPontos > 0;
}

function marcarPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    colidiu();
  }
}

function podeSeMover(){
  return yAtor < 366;
}


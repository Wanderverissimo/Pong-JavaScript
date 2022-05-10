// variáveis Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;
let velocidadex = 6;
let velocidadey = 6;
let colide = false;

//variáveis minha raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaq = 10;
let larguraRaq = 100;

//Raquete do Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeOponente;
let meusPontos = 0;
let PontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 100, 0);
  mostraBolinha();
  movimentaBolinha();
  colideBorda();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraRaquete(xRaquete, yRaquete);
  placar();
  Pontos();

  movimentaMinhaRaquete();
  colideRaquete(xRaquete, yRaquete);
  colideRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente();

  function colideBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0)
      velocidadex = velocidadex * -1;
    if (yBolinha + raio > height || yBolinha - raio < 0)
      velocidadey = velocidadey * -1;
  }
  function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
  }
  function movimentaBolinha() {
    xBolinha = xBolinha + velocidadex;
    yBolinha = yBolinha + velocidadey;
  }

  function mostraRaquete(x, y) {
    rect(x, y, comprimentoRaq, larguraRaq);
  }

  function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
      yRaquete = yRaquete - 10;
    }

    if (keyIsDown(DOWN_ARROW)) {
      yRaquete = yRaquete + 10;
    }
  }

  function colideRaquete(xRaquete, yRaquete) {
    colide = collideRectCircle(
      xRaquete,
      yRaquete,
      comprimentoRaq,
      larguraRaq,
      xBolinha,
      yBolinha,
      diametro
    );
    if (colide) {velocidadex = velocidadex * -1;}
  }
 }

function movimentoRaqueteOponente() {
  velocidadeOponente = yBolinha - yRaqueteOponente - comprimentoRaq / 2 + 90;
  yRaqueteOponente = yRaqueteOponente + velocidadeOponente;
}

if (
  xBolinha - raio < xRaquete + comprimentoRaq &&
  yBolinha + raio > yRaquete &&
  yBolinha - raio < yRaquete + larguraRaq
) {
  velocidadex *= -1;
}

function placar() {
  fill(255);
  textSize(30);
  text(meusPontos, 100, 30);
  text(PontosOponente, 500, 30);
}
function Pontos() {
  if (xBolinha - raio < 0) {
    PontosOponente = PontosOponente + 1;
  }
  if (xBolinha + raio > 600) {
    meusPontos = meusPontos + 1;
  }
}

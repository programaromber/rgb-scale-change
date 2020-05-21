window.addEventListener('load', start);

var r, g, b;

function start() {
  console.log('Pagina totalmente carregada');
  var seletorR = document.querySelector('#seletorR');
  seletorR.addEventListener('input', alterarR);
  r = seletorR.value;
  seletorR.style.backgroundColor = 'rgb(' + r + ',0,0)';

  var seletorG = document.querySelector('#seletorG');
  seletorG.addEventListener('input', alterarG);
  g = seletorG.value;
  seletorG.style.backgroundColor = 'rgb(0,' + r + ',0)';

  var seletorB = document.querySelector('#seletorB');
  seletorB.addEventListener('input', alterarB);
  b = seletorB.value;
  seletorB.style.backgroundColor = 'rgb(0,0,' + r + ')';

  rgb(r, g, b);
}

function alterarR(event) {
  var valor = event.target.value;
  var valorR = document.querySelector('#valorR');
  valorR.value = valor;
  r = valor;
  var seletorR = document.querySelector('#seletorR');
  seletorR.style.backgroundColor = 'rgb(' + r + ',0,0)';
  rgb(r, g, b);
}

function alterarG(event) {
  var valor = event.target.value;
  var valorG = document.querySelector('#valorG');
  valorG.value = valor;
  g = valor;
  var seletorG = document.querySelector('#seletorG');
  seletorG.style.backgroundColor = 'rgb(0,' + g + ',0)';
  rgb(r, g, b);
}

function alterarB(event) {
  var valor = event.target.value;
  var valorB = document.querySelector('#valorB');
  valorB.value = valor;
  b = valor;
  var seletorB = document.querySelector('#seletorB');
  seletorB.style.backgroundColor = 'rgb(0,0,' + b + ')';
  rgb(r, g, b);
}

function rgb(r, g, b) {
  var resultado = document.querySelector('#resultado');
  resultado.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

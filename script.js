// função que gera os pixels no pixel-board
function generatePixels(quantidade) {
  const pai = document.querySelector('#pixel-board');
  for (let i = 0; i < quantidade; i += 1) {
    const pixel = document.createElement('span');
    pixel.classList.add('pixel');
    pai.appendChild(pixel);
  }
}
// chamando a função para gerar 25 pixels no pixel-board
generatePixels(25);

function colorSelect(e) {
  if (e.target.id !== 'color-palette') {
    document.querySelector('.selected').classList.remove('selected');
    e.target.classList.add('selected');
  }
}

function changeColor(e) {
  if (e.target.id !== 'pixel-board') {
    const color = document.querySelector('.selected').getAttribute('data-color');
    e.target.style.backgroundColor = color;
  }
}

function clearBoard() {
  const allPixels = document.querySelectorAll('.pixel');

  for (const pixel of allPixels) {
    pixel.style.backgroundColor = 'white';
  }
}

document.querySelector('#color-palette').addEventListener('click', colorSelect);
document.querySelector('#pixel-board').addEventListener('click', changeColor);
document.querySelector('#clear-board').addEventListener('click', clearBoard);

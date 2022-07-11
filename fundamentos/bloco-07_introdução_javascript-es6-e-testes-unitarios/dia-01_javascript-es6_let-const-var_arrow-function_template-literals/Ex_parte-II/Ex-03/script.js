const clickerElement = document.getElementById('clicker');
const clickCounterElement = document.getElementById('click-counter');
let clickCount = 0;

clickerElement.onclick = () => {
  clickCounterElement.innerText = `Você clicou ${clickCount += 1} vezes no botão.`;
}
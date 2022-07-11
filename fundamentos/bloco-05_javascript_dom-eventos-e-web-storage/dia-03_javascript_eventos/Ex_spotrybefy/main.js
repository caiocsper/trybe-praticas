const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function removeClass(classe) {
  let elements = document.querySelectorAll('ul li');

  for (let index = 0; index < elements.length; index += 1) {
    if (elements[index].classList.contains(classe)) {
      elements[index].classList.remove(classe);
    }
  }
}

function moveUp(event) {
  removeClass('tech');
  event.target.classList.add('tech');
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function changeText(event) {
  let featuredBlock = document.querySelector('.tech');
  featuredBlock.innerText = event.target.value;
}

function resetInput(event) {
  event.target.value = '';
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

function redirect() {
  window.open('https://www.youtube.com/watch?v=Hc6yi_FtoNo');
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function changeColor(event) {
  event.target.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}



// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

window.onload = function () {
  firstLi.addEventListener('click', moveUp);
  firstLi.addEventListener('dblclick', resetText);
  secondLi.addEventListener('click', moveUp);
  secondLi.addEventListener('dblclick', resetText);
  thirdLi.addEventListener('click', moveUp);
  thirdLi.addEventListener('dblclick', resetText);
  input.addEventListener('keyup', changeText);
  input.addEventListener('blur', resetInput);
  myWebpage.addEventListener('dblclick', redirect);
  myWebpage.addEventListener('mouseover', changeColor);
}

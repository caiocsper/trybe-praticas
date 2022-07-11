const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const pai = document.getElementById('pai');

ondeVoceEsta.parentElement.style.color = 'green';
primeiroFilhoDoFilho.innerText = 'Acessando o primeiro filho do filho';

console.log(pai.firstElementChild);
console.log(ondeVoceEsta.previousElementSibling);
console.log(ondeVoceEsta.nextSibling);
console.log(ondeVoceEsta.nextElementSibling);
console.log(pai.children[2]);
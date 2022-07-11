const ondeVoceEsta                      = document.getElementById('elementoOndeVoceEsta');
const primeiroFilhoDoFilho              = document.getElementById('primeiroFilhoDoFilho');
const pai                               = document.getElementById('pai');
const createIrmaoOndeVoceEsta           = document.createElement('section');
const createFilhoOndeVoceEsta           = document.createElement('section');
const createFilhoDoPrimeiroFilhoDoFilho = document.createElement('div');

createIrmaoOndeVoceEsta.id              = 'irmaoElementoOndeVoceEsta';
createFilhoOndeVoceEsta.id              = 'filhoElementoOndeVoceEsta';
createFilhoDoPrimeiroFilhoDoFilho.id    = 'filhoDoPrimeiroFilhoDoFilho';

pai.appendChild(createIrmaoOndeVoceEsta);
ondeVoceEsta.appendChild(createFilhoOndeVoceEsta);
primeiroFilhoDoFilho.appendChild(createFilhoDoPrimeiroFilhoDoFilho);

const filhoDoPrimeiroFilhoDoFilho = document.getElementById('filhoDoPrimeiroFilhoDoFilho');

console.log(filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.parentElement.children[2]);


const pai = document.getElementById('pai');

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChild = pai.childNodes[index];
  if (currentChild.id !== 'elementoOndeVoceEsta') {
    currentChild.remove();
  }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');

segundoEUltimoFilhoDoFilho.remove()
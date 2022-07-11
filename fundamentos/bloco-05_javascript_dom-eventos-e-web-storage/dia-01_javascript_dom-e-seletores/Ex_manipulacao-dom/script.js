/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

const myText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque sapien id dolor fermentum tincidunt. Ut nulla neque, vulputate vel sagittis blandit, eleifend eget quam. Vivamus viverra massa a dolor eleifend rhoncus. Maecenas sollicitudin lectus libero, ut dictum tellus hendrerit vitae. Curabitur eu odio non orci placerat dignissim. Aliquam vitae ex malesuada, viverra est eu, malesuada sem. Fusce aliquam dui at eleifend rhoncus. Donec non efficitur lectus, ut sollicitudin tellus. Ut non nunc condimentum, dignissim urna in, dictum lacus. Donec vehicula interdum magna quis iaculis. Donec pulvinar sollicitudin mi, eget aliquet lorem efficitur nec. Phasellus nec neque commodo, maximus risus sodales, lobortis nulla. Donec placerat enim nec nulla porttitor dictum. Vestibulum mattis rutrum lectus non sagittis.';
const bgColors = {
  white: 'rgb(255, 255, 255)',
  green: 'rgb(76, 164, 109)',
};
const correctText = 'Exercício 5.1 - JavaScript';

function changeTextByTagName(tag, text) {
  const tagElements = document.getElementsByTagName(tag);
  
  tagElements[0].innerText = text;
}

function changeBackgroundColorByClassName(className, bgColor) {
  const classElements = document.getElementsByClassName(className);

  for (let index = 0; index < classElements.length; index+= 1) {
    classElements[index].style.backgroundColor = bgColor;
  }
}

function innerTextToUppercaseByTagName(tag) {
  const tagElements = document.getElementsByTagName(tag);

  for (let index = 0; index < tagElements.length; index += 1) {
    tagElements[0].style.textTransform = 'uppercase';
  }
}

function showInnerHTMLByTagName(tag) {
  const tagElements = document.getElementsByTagName(tag);

  for(let index = 0; index < tagElements.length; index += 1) {
    console.log(tagElements[index].innerHTML);
  }
}

changeTextByTagName('p', myText);
changeBackgroundColorByClassName('main-content', bgColors.green);
changeBackgroundColorByClassName('center-content', bgColors.white);
changeTextByTagName('h1', correctText);
innerTextToUppercaseByTagName('p');
showInnerHTMLByTagName('p');
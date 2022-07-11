const listItemValues = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

function createElement(elementTag, classes) {
  let createdElement = document.createElement(elementTag);
  
  if(classes !== undefined) {
    addClasses(createdElement, classes);
  }

  return createdElement;
}

function verifyElementsNumber(num) {
  if (num !== undefined && num >= 2 && Number.isInteger(num)) {
    return num;
  }
  
  return num = 1;
}

function addClasses(element, classes) {
  const classesArray = classes.split('.');

  if (classesArray.length > 1) {
    for (let index = 1; index < classesArray.length; index += 1) {
      element.classList.add(classesArray[index]);
    }

    return element;
  }

  return false;
}

function addElementToParent(parentElement, elementTag, classes, num) {
  const parent = document.querySelector(parentElement);
  
  for (let index = 0; index < verifyElementsNumber(num); index += 1) {
    let element = createElement(elementTag, classes);
    
    parent.appendChild(element);
  }
}

function verifyText(text) {
  if (Array.isArray(text)) {
    return true;
  }

  return false;
}

function addTextToElement(parentElement, elements, text) {
  const parent = document.querySelector(parentElement);
  const elementsArray = document.querySelectorAll(`${parentElement} ${elements}`);
  
  for (let index = 0; index < verifyElementsNumber(elementsArray.length); index += 1) {
    verifyText(text) ? elementsArray[index].innerText = text[index] : elementsArray[index].innerText = text;
    parent.appendChild(elementsArray[index]);
  }
}

addElementToParent('body', 'h1');
addElementToParent('body', 'main', '.main-content');
addElementToParent('main', 'section', '.center-content');
addElementToParent('section', 'p');
addElementToParent('main', 'section', '.left-content');
addElementToParent('main', 'section', '.right-content');
addElementToParent('section.left-content', 'img', '.small-image');
addElementToParent('section.right-content', 'ul');
addElementToParent('section.right-content ul', 'li', '', 10);
addTextToElement('section.right-content ul', 'li', listItemValues);
addElementToParent('main', 'h3', '', 3);

const img = document.querySelector('img');
const titulo = document.querySelector('body > h1');
const subTitulo = document.querySelectorAll('main > h3');
const leftSection = document.querySelector('section.left-content');
const rightSection = document.querySelector('section.right-content');
const main = document.querySelector('main');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('ul > li');

img.src = 'https://picsum.photos/200';
titulo.classList.add('title');
main.removeChild(leftSection);
rightSection.style.marginRight = 'auto';
main.style.backgroundColor = 'green';
ul.removeChild(ul.lastElementChild);
ul.removeChild(ul.lastElementChild);

for (let index = 0; index < subTitulo.length; index += 1) {
  subTitulo[index].classList.add('description');
}

const textElement = document.querySelector('.section-text p');
const bodyElement = document.querySelector('body');
let configs = {};

function initializeStorageData() {
  if (localStorage.getItem('configs') !== null) {
    configs = JSON.parse(localStorage.getItem('configs'));

    bodyElement.style.backgroundColor = configs.backgroundColor;
    textElement.style.color           = configs.color;
    textElement.style.fontSize        = configs.fontSize;
    textElement.style.lineHeight      = configs.lineHeight;
    textElement.style.fontFamily      = configs.fontFamily;
  }
}

function changeBackgroundColor(bgColorSetting) {
  if (verifyInput(bgColorSetting)) {
    const colorDecimalValues = bgColorSetting.split(',');

    switch(verifyColors(colorDecimalValues)) {
      case 'success':
        bodyElement.style.backgroundColor = `rgb(${colorDecimalValues[0]}, ${colorDecimalValues[1]}, ${colorDecimalValues[2]})`;
        configs["backgroundColor"] = `rgb(${colorDecimalValues[0]}, ${colorDecimalValues[1]}, ${colorDecimalValues[2]})`;
        break;
      case 'numError':
        alert("Erro ao alterar a cor de fundo da tela: Pelo menos um dos números digitados é inválido.");
        break;
      case 'charError':
        alert("Erro ao alterar a cor de fundo da tela: Caracter ou número de caracteres inválidos. Tente novamente no seguinte formato '125,125,125'.");
        break;
      default:
        alert("Erro ao alterar a cor de fundo da tela: Erro desconhecido.");
    }
  }
}

function changeTextColor(textColorSetting) {
  if (verifyInput(textColorSetting)) {
    const colorDecimalValues = textColorSetting.split(',');

    switch(verifyColors(colorDecimalValues)) {
      case 'success':
        textElement.style.color = `rgb(${colorDecimalValues[0]}, ${colorDecimalValues[1]}, ${colorDecimalValues[2]})`;
        configs["color"] = `rgb(${colorDecimalValues[0]}, ${colorDecimalValues[1]}, ${colorDecimalValues[2]})`;
        break;
      case 'numError':
        alert("Erro ao alterar a cor do texto: Pelo menos um dos números digitados é inválido.");
        break;
      case 'charError':
        alert("Erro ao alterar a cor do texto: Caractere ou número de caracteres inválidos. Tente novamente no seguinte formato '125,125,125'.");
        break;
      default:
        alert("Erro ao alterar a cor do texto: Erro desconhecido.");
    }
  }
}

function changeTextFontSize(fontSizeSetting) {
  if (verifyInput(fontSizeSetting)) {
    const fontSizeValue = getCssUnitValue(fontSizeSetting);
    const fontSizeUnit  = getCssUnit(fontSizeSetting);
    
    if (fontSizeValue !== false && fontSizeUnit !== false) {
      textElement.style.fontSize = `${fontSizeValue}${fontSizeUnit}`;
      configs["fontSize"] = `${fontSizeValue}${fontSizeUnit}`;
    } else {
      alert("Erro ao alterar o tamanho fonte do texto: Caractere inválido ou número inválido. Tente novamente no seguinte formato '25px'.");
    }
  }
}

function changeTextLineHeight(lineHeightSetting) {
  if (verifyInput(lineHeightSetting)) {
    const lineHeightValue = getCssUnitValue(lineHeightSetting);
    const lineHeightUnit  = getCssUnit(lineHeightSetting);
    
    if (lineHeightValue !== false && lineHeightUnit !== false) {
      textElement.style.lineHeight = `${lineHeightValue}${lineHeightUnit}`;
      configs["lineHeight"] = `${lineHeightValue}${lineHeightUnit}`;
    } else {
      alert("Erro ao alterar o espaçamento das linhas do texto: Caractere inválido ou número inválido. Tente novamente no seguinte formato '25px'.");
    }
  }
}

function changeTextFontFamily(fontFamilySetting) {
  if (verifyInput(fontFamilySetting)) {
    textElement.style.fontFamily = fontFamilySetting;
    configs["fontFamily"] = fontFamilySetting;
  }
}

function clearInputs() {
  
  const inputs = document.querySelectorAll(`#settings input`);

  for (let index = 0; index < inputs.length; index += 1) {
    inputs[index].value = '';
  }
}

function verifyInput(inputValue) {
  if (inputValue !== undefined && inputValue !== '') {
    return true;
  }

  return false;
}

function verifyColors(colorValues) {
  let result = {}
  
  if (colorValues.length === 3) {
    for (let index = 0; index < colorValues.length; index += 1) {
      if (parseInt(colorValues[index]) < 0 || parseInt(colorValues[index]) > 255) {
        return result = 'numError';
      }
    }
    return result = 'success';
  }

  return result = 'charError';
}

function getCssUnit(cssUnit) {
  const regexFontUnit = /px|pt|pc|cm|mm|in|em|rem|%/i;
  
  if (cssUnit.match(regexFontUnit) !== null) {
    return cssUnit.match(regexFontUnit)[0];
  } 

  return false;
}

function getCssUnitValue(cssUnitValue) {
  const regexNum = /\d*/;

  if (cssUnitValue.match(regexNum) !== null && verifyCssUnitValue(cssUnitValue.match(regexNum)[0])) {
    return cssUnitValue.match(regexNum)[0];
  }

  return false;
}

function verifyCssUnitValue(cssUnitValue) {
  if (cssUnitValue >= 0) {
    return true;
  }

  return false;
}

window.onload = function () {
  const saveSettingsBtn   = document.getElementById('btn-save-settings');
  const bgColorSetting    = document.getElementById('bg-color-input');
  const textColorSetting  = document.getElementById('text-color-input');
  const fontSizeSetting   = document.getElementById('font-size-input');
  const lineHeightSetting = document.getElementById('line-height-input');
  const fontFamilySetting = document.getElementById('font-family-input');
  
  initializeStorageData();

  saveSettingsBtn.addEventListener('click', function () {
    changeBackgroundColor(bgColorSetting.value);
    changeTextColor(textColorSetting.value);
    changeTextFontSize(fontSizeSetting.value);
    changeTextLineHeight(lineHeightSetting.value);
    changeTextFontFamily(fontFamilySetting.value);
    clearInputs();
    localStorage.setItem('configs', JSON.stringify(configs));
  })
};
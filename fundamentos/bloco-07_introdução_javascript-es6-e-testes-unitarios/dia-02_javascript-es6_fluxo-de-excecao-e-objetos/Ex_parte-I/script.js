const sum = () => {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const result = parseInt(value1) + parseInt(value2);

    if(value1.length < 1 || value2.length < 1) {
      throw new Error('Erro: Um ou mais campos vazios.');
    }

    if(isNaN(value1) || isNaN(value2)) {
      throw new Error('Erro: Um ou mais caracteres inválidos, digite números válidos.')
    }

    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch(e) {
    document.getElementById('result').innerHTML = e.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
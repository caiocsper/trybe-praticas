const form = document.getElementById('trybetrip-form');
const btn = document.getElementById('send');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const consent = document.getElementById('consent');

btn.addEventListener('click', (e) => {
  
  const formData = new FormData(form);
  const fullnameValidation = formData.get('fullname').length <= 40 && formData.get('fullname').length >= 10;
  const emailValidation = formData.get('email').length <= 50 && formData.get('email').length >= 10;
  const consentValidation = formData.get('image-consent') === 'on';

  if (!fullnameValidation || !emailValidation || !consentValidation) {
    alert('Dados Inválidos');
    e.preventDefault();
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
})
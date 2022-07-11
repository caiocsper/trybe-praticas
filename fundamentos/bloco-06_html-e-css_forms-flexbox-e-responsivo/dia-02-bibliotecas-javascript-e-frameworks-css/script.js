window.onload = () => {
  

  let picker = new Pikaday({
    field: document.getElementById('trip-date'),
    toString(date) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
  });

  const validation = new JustValidate('#trybetrip-form', {
    errorFieldCssClass: 'is-invalid',
  });

  validation
    .addField('#fullname', [
      {
        rule: 'minLength',
        value: 10,
        errorMessage: 'Cumpra o valor mínimo de 10 caracteres!',
      },
      {
        rule: 'maxLength',
        value: 40,
        errorMessage: 'Cumpra o valor máximo de 40 caracteres!',
      },
      {
        rule: 'required',
        errorMessage: 'Campo obrigatório',
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Campo obrigatório',
      },
      {
        rule: 'email',
        errorMessage: 'Email inválido!',
      },
    ])
    .addField('#consent', [
      {
        rule: 'required',
        errorMessage: 'Campo obrigatório',
      }
    ]);
}
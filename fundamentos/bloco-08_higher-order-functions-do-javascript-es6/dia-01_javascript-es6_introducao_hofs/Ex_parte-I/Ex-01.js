const newEmployee = (nomeCompleto) => ({ nomeCompleto: nomeCompleto, email: `${nomeCompleto.toLowerCase().replace(' ', '_')}@trybe.com` });

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(newEmployee));
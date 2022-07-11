const { searchEmployee, professionalBoard } = require('./bonus.js');

describe('A Função searchEmployee', () => {
  it('Deve estar definida', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Deve ser uma de fato uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Deve retornar o "firstName" de um funcionário consultado através de seu id', () => {
    expect(searchEmployee(professionalBoard, '1256-4', 'firstName')).toEqual('Linda');
  });

  it('Deve retornar o "lastName" de um funcionário consultado através de seu id', () => {
    expect(searchEmployee(professionalBoard, '1256-4', 'lastName')).toEqual('Bezos');
  });

  it('Deve retornar as "specialities" de um funcionário consultado através de seu id', () => {
    expect(searchEmployee(professionalBoard, '1256-4', 'specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
  });

  it('Deve disparar um erro quando a informação e o ID são inexistentes', () => {
    expect(() => { searchEmployee(professionalBoard, '1256-8', 'specialities') }).toThrow();
    expect(() => { searchEmployee(professionalBoard, '4678-2', 'shift') }).toThrow();
  });

  it('Deve disparar um erro com uma mensagem para ID inexistente', () => {
    expect(() => { searchEmployee(professionalBoard, '1256-8', 'specialities') }).toThrowError(new Error("ID não identificada"));
  });

  it('Deve disparar um erro com uma mensagem para informação inexistente', () => {
    expect(() => { searchEmployee(professionalBoard, '4678-2', 'shift') }).toThrowError(new Error("Informação indisponível"));
  });
});
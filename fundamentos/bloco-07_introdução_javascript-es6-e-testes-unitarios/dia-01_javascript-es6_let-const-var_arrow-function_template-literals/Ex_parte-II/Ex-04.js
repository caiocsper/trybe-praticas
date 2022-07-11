const fillBlank = nome => `Tryber ${nome} aqui!`;
const fillTechs = fillBlank => {
  const skills = ['Javascript', 'HTML', 'CSS'];

  return `
  ${fillBlank}
  Minhas três principais habilidades são:

  ${skills.join('\n  ')}`
}

console.log(fillTechs(fillBlank('Bebeto')));
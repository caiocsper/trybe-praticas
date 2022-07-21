import React from 'react';

const myName = 'Caio César Pereira';
const myDescription = 'Só existo!';
const skills = ['HTML', 'CSS', 'JS', 'Problem Solving', 'Regex'] // adicione mais habilidades aqui
const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>

class About extends React.Component {
  render () {
    return (
      <section className='aboutContainer'>
        <h1>{myName}</h1>
        <p>{myDescription}</p>
        <h2>Minhas Habilidades</h2>
        <ul>
          {jsxSkills}
        </ul>
      </section>
    );
  }
}

export default About;
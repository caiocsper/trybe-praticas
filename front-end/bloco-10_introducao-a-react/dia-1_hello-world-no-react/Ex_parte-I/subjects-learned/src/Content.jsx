import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

function renderContent({ conteudo, bloco, status }, i) {
  return (
    <div key={i} className="card">
      <h2>{conteudo}</h2>
      <p>Status: {status}</p>
      <p>Bloco: {bloco}</p>
    </div>
  );
};

class Content extends React.Component {
  render () {
    return (
      <div className="row">
        {conteudos.map(renderContent)}
      </div>
    );
  }
}

export default Content;
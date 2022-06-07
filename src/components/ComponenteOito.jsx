import React from 'react'

function ComponenteOito(props) {
  function condicao() {
    switch (props.valor) {
      case 'Joao':
        return <p>E o nome do professor</p>
        break
      case 'Ana':
        return <p>E o nome da minha irma</p>
        break
      default:
        return <p>Desconheco quem tenha esse nome</p>
        break
    }
  }

  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      {condicao()}
    </div>
  )
}

export default ComponenteOito

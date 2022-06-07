import React from 'react'
import clientes from '../dados_clientes/dados_clientes'

const ComponenteSeis = props => {
  function cliente() {
    return clientes.map(cliente => {
      return (
        <li key={cliente.id_clientes}>
          Nome: {cliente.nome} | Email: {cliente.email}
        </li>
      )
    })
  }

  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <ul>{cliente()}</ul>
    </div>
  )
}

export default ComponenteSeis

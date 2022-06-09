import React from 'react'
import { ComponenteB } from './ComponenteB'

export const ComponenteA = props => {
  function executar(valor1, valor2) {
    console.log(valor1, valor2)
  }

  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <ComponenteB titulo="Filho B" funcao={executar} />
    </div>
  )
}

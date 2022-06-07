import React from 'react'
import CondicaoIf from './CondicaoIf'

export const ComponenteNove = props => {
  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>

      <CondicaoIf condicao={props.valor === 'Joao'}>
        <p>Verdadeiro</p>
      </CondicaoIf>

      <CondicaoIf condicao={props.valor !== 'Joao'}>
        <p>Falso</p>
      </CondicaoIf>
    </div>
  )
}

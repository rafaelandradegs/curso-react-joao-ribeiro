import React from 'react'

export const ComponenteFilho = props => {
  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <p>
        Cargo: {props.cargo} - {props.children}
      </p>
    </div>
  )
}

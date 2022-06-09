import React from 'react'

export function ComponenteFilha(props) {
  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <button onClick={props.handleClick}>Clicar</button>
    </div>
  )
}

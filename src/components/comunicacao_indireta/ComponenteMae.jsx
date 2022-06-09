import React from 'react'
import { ComponenteFilha } from './ComponenteFilha'

export function ComponenteMae(props) {
  function clicou() {
    console.log('Botao da filha foi clicado')
  }

  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <ComponenteFilha
        titulo="Componente filha"
        handleClick={clicou}
      ></ComponenteFilha>
    </div>
  )
}

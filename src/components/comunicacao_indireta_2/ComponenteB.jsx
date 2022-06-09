import React, { useState } from 'react'

export function ComponenteB(props) {
  const valor1 = 10

  function escutar() {
    props.funcao(Math.random(), 'rafael')
  }

  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <button onClick={escutar}>Executar</button>
      <p>Aqui vai o valor de valor1: {valor1}</p>
    </div>
  )
}

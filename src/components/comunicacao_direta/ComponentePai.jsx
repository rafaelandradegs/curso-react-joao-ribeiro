import React from 'react'
import { ComponenteFilho } from './ComponenteFilho'

export function ComponentePai(props) {
  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <p>Pai</p>
      <ComponenteFilho titulo="Componente filho" cargo="Administrador">
        Rafael
      </ComponenteFilho>
      <ComponenteFilho titulo="Componente filho" cargo="Secretaria">
        Ana Silva
      </ComponenteFilho>
      <ComponenteFilho titulo="Componente filho" cargo="Operador">
        Carlos Santos
      </ComponenteFilho>
    </div>
  )
}

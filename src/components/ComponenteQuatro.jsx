import React from 'react'
import ComponenteCinco from './ComponenteCinco'

const ComponenteQuatro = props => {
  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <ComponenteCinco texto="Aqui e o texo que vem direto do componente 5 porem esta dentro do componente 4" />
    </div>
  )
}

export default ComponenteQuatro

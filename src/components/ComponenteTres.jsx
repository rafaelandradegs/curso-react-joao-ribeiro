import React from 'react'

// export default props => (
//   <div className="componente">
//     <p>Componente arrow function</p>
//   </div>
// )

const ComponenteTres = props => {
  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      <p>Subtitulo: {props.subtitulo}</p>
    </div>
  )
}

export default ComponenteTres

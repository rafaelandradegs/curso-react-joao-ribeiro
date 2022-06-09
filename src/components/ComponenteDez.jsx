import React from 'react'

export default props => {
  // const estilo = { color: 'White', padding: '10px', backgroundColor: 'red' }

  return (
    <div className="componente">
      <p className="titulo">Titulo: {props.titulo}</p>
      {/* <p style={estilo}>Tudo bem</p> */}
      <p style={{ color: props.corTexto }}>Tudo bem</p>
    </div>
  )
}

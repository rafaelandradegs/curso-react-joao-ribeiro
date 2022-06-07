import React from 'react'
import { ComponenteUm } from './components/ComponenteUm'
import { ComponenteDois } from './components/ComponenteDois'
import ComponenteTres from './components/ComponenteTres'
import ComponenteQuatro from './components/ComponenteQuatro'

import './style.css'

export default function App() {
  return (
    <div>
      <ComponenteQuatro titulo="Componente Quatro">
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </ComponenteQuatro>
      <ComponenteTres
        titulo="Componente Tres"
        subtitulo="texto do componente 3"
      />
      <ComponenteDois />
      <ComponenteUm />
    </div>
  )
}

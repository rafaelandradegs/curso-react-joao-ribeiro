import React from 'react'
import { ComponenteUm } from './components/ComponenteUm'
import { ComponenteDois } from './components/ComponenteDois'
import ComponenteTres from './components/ComponenteTres'
import ComponenteQuatro from './components/ComponenteQuatro'
import ComponenteSeis from './components/ComponenteSeis'
import ComponenteSete from './components/ComponenteSete'

import './style.css'

export default function App() {
  return (
    <div>
      <ComponenteSete titulo="Componente Sete" valor={1} />
      <ComponenteSeis titulo="Componente seis" />
      <ComponenteQuatro titulo="Componente Quatro"></ComponenteQuatro>
      <ComponenteTres
        titulo="Componente Tres"
        subtitulo="texto do componente 3"
      />
      <ComponenteDois />
      <ComponenteUm />
    </div>
  )
}

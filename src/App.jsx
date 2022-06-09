import React from 'react'
import { ComponenteUm } from './components/ComponenteUm'
import { ComponenteDois } from './components/ComponenteDois'
import ComponenteTres from './components/ComponenteTres'
import ComponenteQuatro from './components/ComponenteQuatro'
import ComponenteSeis from './components/ComponenteSeis'
import ComponenteSete from './components/ComponenteSete'
import ComponenteOito from './components/ComponenteOito'
import { ComponenteNove } from './components/ComponenteNove'
import ComponenteDez from './components/ComponenteDez'

import './style.css'

export default function App() {
  return (
    <div>
      <ComponenteDez titulo="Componente dez" corTexto="green" />
      <ComponenteNove titulo="Componente Nove" valor="Joao" />
      <ComponenteOito titulo="Componente Oito" valor="Joao" />
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

import React from 'react'
import ComponenteTres from './components/ComponenteTres'
import ComponenteQuatro from './components/ComponenteQuatro'
import ComponenteSeis from './components/ComponenteSeis'
import ComponenteSete from './components/ComponenteSete'
import ComponenteOito from './components/ComponenteOito'
import ComponenteDez from './components/ComponenteDez'

import { ComponenteDois } from './components/ComponenteDois'
import { ComponenteUm } from './components/ComponenteUm'
import { ComponenteNove } from './components/ComponenteNove'
import { ComponentePai } from './components/comunicacao_direta/ComponentePai'
import { ComponenteMae } from './components/comunicacao_indireta/ComponenteMae'
import { ComponenteA } from './components/comunicacao_indireta_2/ComponenteA'
import { ComponenteAvoA } from './components/comunicacao_direta_2/ComponenteAvoA'

import './style.css'

export default function App() {
  return (
    <div>
      <ComponenteAvoA titulo="ComponenteAvoA" />
      <ComponenteA titulo="Comunicacao indireta v2" />
      <ComponenteMae titulo="Comunicacao indireta" />
      <ComponentePai titulo="Comunicacao direta"></ComponentePai>
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

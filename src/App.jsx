import React from 'react'
import { ComponenteUm } from './components/ComponenteUm'
import { ComponenteDois } from './components/ComponenteDois'
import ComponenteTres from './components/ComponenteTres'

import './style.css'

export default function App() {
  return (
    <div>
      <ComponenteTres />
      <ComponenteDois />
      <ComponenteUm />
    </div>
  )
}

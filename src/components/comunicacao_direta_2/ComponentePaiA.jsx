import React from 'react'
import { ComponenteFilhoA } from './ComponenteFilhoA'

export const ComponentePaiA = props => {
  return (
    <div>
      <p>Pai</p>
      <ComponenteFilhoA {...props} />
    </div>
  )
}

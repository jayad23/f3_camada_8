import React from 'react'
import EjemploKeys from './sesion-1/EjemploKeys'

const items = [
  { id: "a", value: "Apple" },
  { id: "b", value: "Banana" },
  { id: "c", value: "Carrot" },
  { id: "d", value: "Dewberry" }
]

const App = () => {

  return (
    <div>
      <EjemploKeys items={items} />
    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react'
import EjemploKeys from './sesion-1/EjemploKeys'
import ConKeyIndex from './sesion-1/extra/ConKeyIndex'
import ConProperKey from './sesion-1/extra/ConProperKey'
import SinKeys from './sesion-1/extra/SinKeys'
import { shuffle } from './sesion-1/extra/shuffle'

// const items = [
//   { id: "a", value: "Apple" },
//   { id: "b", value: "Banana" },
//   { id: "c", value: "Carrot" },
//   { id: "d", value: "Dewberry" }
// ]

const App = () => {
  const [items, setItems] = useState([
    { id: "a", value: "Apple" },
    { id: "b", value: "Banana" },
    { id: "c", value: "Carrot" },
    { id: "d", value: "Dewberry" }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(shuffle(items))
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div>
      <SinKeys items={items} />
      <ConKeyIndex items={items} />
      <ConProperKey items={items} />
    </div>
  )
}

export default App
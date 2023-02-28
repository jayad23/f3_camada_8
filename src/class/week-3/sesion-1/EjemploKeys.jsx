import React, { useState } from 'react'

const EjemploKeys = ({ items }) => {
  const [newItems, setNewItems] = useState(items.map((item, idx) => ({ id: idx, value: item.value })));
  const removeItem = (item) => {
    setNewItems(newItems.filter(i => i !== item));
  }

  return (
    <div>
      <h1>Entendamos por qué las Keys.</h1>
      <ul>
        {
          newItems.map((item, index) => (
            <li key={item.id}>
              <button onClick={() => removeItem(item)}>Eliminar</button>
              <span htmlFor={`${item.value}-input`}>{item.value}</span>
              <input id={`${item.value}-input`} defaultValue={item.value} />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default EjemploKeys
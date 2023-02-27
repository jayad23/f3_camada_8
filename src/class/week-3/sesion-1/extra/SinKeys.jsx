import React from 'react'

const SinKeys = ({ items }) => {
  return (
    <div>
      <h1>Sin Key</h1>
      {
        items.map((item) => (
          <input defaultValue={item.value} />
        ))
      }
    </div>
  )
}

export default SinKeys
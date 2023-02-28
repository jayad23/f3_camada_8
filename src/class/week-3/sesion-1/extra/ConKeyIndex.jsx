import React from 'react'

const ConKeyIndex = ({ items }) => {
  return (
    <div>
      <h1>Con Index como Key</h1>
      {
        items.map((item, index) => (
          <input key={item.id} defaultValue={item.value} />
        ))
      }
    </div>
  )
}

export default ConKeyIndex
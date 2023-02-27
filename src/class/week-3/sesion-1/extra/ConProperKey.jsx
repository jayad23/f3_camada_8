import React from 'react'

const ConProperKey = ({ items }) => {
  return (
    <div>
      <h1>Con Key adecuada.</h1>
      {
        items.map((item, index) => (
          <input key={item.id} defaultValue={item.value} />
        ))
      }
    </div>
  )
}

export default ConProperKey
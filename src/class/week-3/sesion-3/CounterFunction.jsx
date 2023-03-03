import React, { useState } from 'react'

const CounterFunction = ({ value }) => {
  const [counterValue, setCounterValue] = useState(value);
  console.log("El componente se renderiza")
  //Option A: () => setCounterValue(counterValue - 1);

  //Option B Función Handler
  const operation = (param) => {
    if (param === "minus") {
      //setCounterValue(counterValue - 1);
      setCounterValue(prevValue => prevValue - 1);
      return value - 1
    } else {
      //setCounterValue(counterValue + 1);
      setCounterValue(prevValue => prevValue + 1);
      return value + 1
    };
  };


  return (
    <div>
      <h1>Counter in: {value} / {counterValue}</h1>
      <button onClick={() => operation("minus")}>Subtract</button>
      <button onClick={() => operation("plus")}>Add</button>
    </div>
  )
}

export default CounterFunction
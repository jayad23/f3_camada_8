import React from 'react'
import { Container } from './sesion-2/styles/StyledComponents';
import Login from "./sesion-2/form-one/Login";
import Register from "./sesion-2/form-two/Register";

const App = () => {
  return (
    <Container className='App' content="evenly">
      <Login />
      <Register />
    </Container>
  )
}

export default App
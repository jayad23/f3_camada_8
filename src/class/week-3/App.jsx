import React from 'react'
import Login from './sesion-2/form-one/Login'
import Register from './sesion-2/form-two/Register'
import styled from "styled-components";
import { Container } from './sesion-2/styles/StyledComponents';

const App = () => {
  return (
    <Container content="evenly">
      <Login />
      <Register />
    </Container>
  )
}

export default App
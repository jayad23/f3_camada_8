import React from 'react'
import Login from './sesion-2-3/form-one/Login'
import Register from './sesion-2-3/form-two/Register'
import styled from "styled-components";
import { Container } from './sesion-2-3/styles/StyledComponents';
import User from './sesion-2-3/user/User';

const App = () => {
  return (
    <Container content="evenly">
      <Login />
      <Register />
    </Container>
  )
}

export default App
import React from 'react'
import { Container } from '../week-3/sesion-2/styles/StyledComponents';
import Login from './Login';
import Register from './Register';

const App = () => {
  return (
    <Container className='App' content="evenly">
      <Login />
      <Register />
    </Container>
  )
};

export default App;
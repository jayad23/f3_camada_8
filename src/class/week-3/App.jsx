import React, { useState } from 'react'
import Login from './sesion-2-3/form-one/Login'
import Register from './sesion-2-3/form-two/Register'
import styled from "styled-components";
import { Container } from './sesion-2-3/styles/StyledComponents';
import User from './sesion-2-3/user/User';

const App = () => {
  const [view, setView] = useState("register");
  const [values, setValues] = useState(null);

  const handleValues = (vls) => {
    console.log(vls);
    setView("login");
  }

  return (
    <Container content="evenly">
      {
        view === "register" && (<Register handleValues={handleValues} />)
      }
      {
        view === "login" && (<Login />)
      }
      {
        view === "user" && (
          <User
            name="Jaider Vanegas"
            email="iamkikevanegas@live.com"
            password="123456"
          />
        )
      }
    </Container>
  )
}

export default App
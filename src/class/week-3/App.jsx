import React, { useState } from 'react'
import Login from './sesion-2-3/form-one/Login'
import Register from './sesion-2-3/form-two/Register'
import { Button, Container } from './sesion-2-3/styles/StyledComponents';
import User from './sesion-2-3/user/User';

const App = () => {
  const [view, setView] = useState("register");
  const [values, setValues] = useState(null);

  const handleValuesinRegister = (vls) => {
    setValues(vls);
    setView("login");
  };

  const handleValuesinLogin = (vls) => {
    if (values.email === vls.email && values.password === vls.password) {
      setView("user");
    }
  };

  const handleCancel = (from) => {
    setView(from);
  }

  return (
    <Container content="evenly">
      {
        view === "register" && (
          <Register
            handleValues={handleValuesinRegister}
            handleCancel={handleCancel}
          />
        )
      }
      {
        view === "login" && (
          <Login
            handleValues={handleValuesinLogin}
            handleCancel={handleCancel}
          />
        )
      }
      {
        view === "user" && (
          <User {...values} />
        )
      }
    </Container>
  )
}

export default App
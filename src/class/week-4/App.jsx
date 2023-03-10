import React, { Fragment, useState } from 'react'
import { Container } from '../week-3/sesion-2/styles/StyledComponents';
import Login from './Login';
import Register from './Register';
import User from '../week-3/sesion-2/user/User';

const App = () => {
  const [view, setView] = useState("register");
  const [values, setValues] = useState(null);

  const handleView = (page) => {
    setView(page);
  };

  const handleFetchValues = (userInfomation) => {
    setValues(userInfomation);
    setView("login");
  };

  const handleCompareValues = (loginInfo) => {
    if (loginInfo.email === values.email && loginInfo.password === values.password) {
      setView("user");
    };
  };

  return (
    <Fragment>
      <nav>
        <menu>
          <button disabled={view === "register"} onClick={() => handleView("register")}>Register</button>
          <button disabled={view === "login"} onClick={() => handleView("login")}>Login</button>
        </menu>
      </nav>
      <Container className='App' content="evenly">
        {
          view === "register" && (<Register handleFetchValues={handleFetchValues} />)
        }
        {
          view === "login" && (<Login handleCompareValues={handleCompareValues} />)
        }
        {
          view === "user" && (<User {...values} />)
        }
      </Container>
    </Fragment>
  )
};

export default App;
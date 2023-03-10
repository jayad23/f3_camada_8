import React, { useState } from 'react'
import { Input } from '../week-3/sesion-2/common/CustomInput';
import { FormContainer, Container, Button } from '../week-3/sesion-2/styles/StyledComponents'
//import { CustomInput } from '../common/CustomInput'
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KV-logo.svg/1200px-KV-logo.svg.png";

const Login = ({ handleCompareValues }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCompareValues({ email, password });
    console.log({ email }, { password });
    setEmail("");
    setPassword("");
  };

  return (
    <FormContainer
      from="login"
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <h2>Login</h2>
        <img src={logo} width={120} />
      </div>
      <form id="login-form" onSubmit={handleSubmit}>
        <Container>
          <label>Email:</label>
          <Input
            placeholder="Ingresa tu Correo"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Container>
        <Container>
          <label>Password:</label>
          <Input
            placeholder="Ingresa tu Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Container>
      </form>
      <Container content="row">
        <Button btn="cancel">Cancel</Button>
        <Button form="login-form" btn="submit">Submit</Button>
      </Container>
    </FormContainer>
  )
}

export default Login
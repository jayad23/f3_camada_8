import React from 'react'
import { Input } from '../common/CustomInput';
import { FormContainer, Container, Button } from '../styles/StyledComponents'
//import { CustomInput } from '../common/CustomInput'
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KV-logo.svg/1200px-KV-logo.svg.png";

const Login = () => {

  return (
    <FormContainer
      from="login"
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <img src={logo} width={120} />
      </div>
      <form id="login-form">
        <Container>
          <label>Email:</label>
          <Input
            placeholder="Ingresa tu Correo"
          />
        </Container>
        <Container>
          <label>Password:</label>
          <Input
            placeholder="Ingresa tu Contraseña"
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
import React from 'react'
import { Input } from '../week-3/sesion-2/common/CustomInput';
import { FormContainer, Container, Button } from '../week-3/sesion-2/styles/StyledComponents';
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KV-logo.svg/1200px-KV-logo.svg.png";

const Register = () => {

  return (
    <FormContainer
      from="register"
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <img src={logo} width={120} />
      </div>
      <form id="register-form">
        <Container>
          <label>Name:</label>
          <Input
            placeholder="Ingresa tu nombre"
          />
        </Container>
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
        <Container>
          <label>Repeat Password:</label>
          <Input
            placeholder="La contraseña debe ser la misma"
          />
        </Container>
      </form>
      <Container content="row">
        <Button btn="cancel">Cancel</Button>
        <Button form="register-form" btn="submit">Submit</Button>
      </Container>
    </FormContainer>
  )
}

export default Register
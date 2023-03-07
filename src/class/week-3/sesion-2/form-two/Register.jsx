import React, { useState } from 'react'
import { CustomInput, Input } from '../common/CustomInput'
import { FormContainer, Container, Button } from '../styles/StyledComponents'
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KV-logo.svg/1200px-KV-logo.svg.png";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    repeatpassword: ""
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ values });
    setValues({
      name: "",
      email: "",
      password: "",
      repeatpassword: ""
    });
  };

  return (
    <FormContainer
      from="register"
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <img src={logo} width={120} />
      </div>
      <form id="register-form" onSubmit={onSubmit} >
        <Container>
          <label>Name:</label>
          <Input
            name="Name"
            type="text"
            placeholder="Ingresa tu nombre"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </Container>
        <Container>
          <label>Email:</label>
          <Input
            name="Email"
            type="text"
            placeholder="Ingresa tu Correo"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </Container>
        <Container>
          <label>Password:</label>
          <Input
            name="Password"
            type="text"
            placeholder="Ingresa tu Contraseña"
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
        </Container>
        <Container>
          <label>Repeat Password:</label>
          <Input
            name="repeatPassword"
            type="text"
            placeholder="La contraseña debe ser la misma"
            value={values.repeatpassword}
            onChange={(e) => setValues({ ...values, repeatpassword: e.target.value })}
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
import React, { useState } from 'react'
import { Input } from '../week-3/sesion-2/common/CustomInput';
import { FormContainer, Container, Button } from '../week-3/sesion-2/styles/StyledComponents';
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KV-logo.svg/1200px-KV-logo.svg.png";

const inputs = [
  { id: 1, label: "Nombre", placeholder: "Escribe tu nombre", name: "name" },
  { id: 2, label: "Correo", placeholder: "Escribe tu correo", name: "email" },
  { id: 3, label: "Contraseña", placeholder: "Escribe tu contraseña", name: "password" },
  { id: 4, label: "Repetir Contraseña", placeholder: "Repite la misma contraseña", name: "repeatpassword" }
]

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    repeatpassword: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Kike: 🤪 ~ Register ~ values:", values);
    setValues({
      name: "",
      email: "",
      password: "",
      repeatpassword: ""
    });
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [key]: value });
  };

  return (
    <FormContainer
      from="register"
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <img src={logo} width={120} />
      </div>
      <form id="register-form" onSubmit={handleSubmit}>
        {
          inputs.map(field => (
            <Container key={field.id}>
              <label>{field.label}</label>
              <Input
                name={field.name}
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={handleChange}
              />
            </Container>
          ))
        }
      </form>
      <Container content="row">
        <Button btn="cancel">Cancel</Button>
        <Button form="register-form" btn="submit">Submit</Button>
      </Container>
    </FormContainer>
  )
}

export default Register
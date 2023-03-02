import React, { useState } from 'react'
import { CustomInput } from '../common/CustomInput'
import { FormContainer, Container, Button } from '../styles/StyledComponents'
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KV-logo.svg/1200px-KV-logo.svg.png";

import { lengthValidator, passwordValidator, checkForNumber } from '../helper';
const REGEX = /^[a-z0-9]+$/i;
const Register = ({ handleValues }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    repeatpassword: ""
  });
  const [inputError, setInputError] = useState({ displayError: null })
  //const setFieldValues = (key, value) => setValues({ ...values, [key]: value });

  const handleChange = (e) => {
    // setInputError({
    //   name: null,
    //   email: null,
    //   password: null,
    //   repeatpassword: null
    // });
    const key = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [key]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordLength = lengthValidator(values.password);
    const matchPassword = passwordValidator(values.password, values.repeatpassword);
    console.log(passwordLength);
    if (passwordLength || matchPassword || !checkForNumber(values.name)) {
      if (passwordLength) {
        setInputError({ ...inputError, displayError: "La longitud de la constraseña debe ser mayor a 6." });
      }
      if (matchPassword) {

        setInputError({ ...inputError, displayError: "Las contraseñas deben coincidir." });
      }
      if (!checkForNumber(values.name)) {
        setInputError({ ...inputError, displayError: "Name must include a number" });
      }
    }
    console.log(inputError)
    //handleValues(values);
  };

  return (
    <FormContainer
      from="register"
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <img src={logo} width={120} />
      </div>
      <form id="register" onSubmit={handleSubmit}>
        <CustomInput name="Name" onChange={handleChange} error={inputError} />
        <CustomInput name="Email" onChange={handleChange} error={inputError} />
        <CustomInput name="Password" onChange={handleChange} error={inputError} />
        <CustomInput name="Repeat Password" onChange={handleChange} error={inputError} />
      </form>
      <Container content="row">
        <Button btn="cancel" type='button'>Cancel</Button>
        <Button btn="submit" form="register" type="submit">Submit</Button>
      </Container>
    </FormContainer>
  )
}

export default Register
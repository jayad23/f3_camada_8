import React, { useState } from 'react'
import { Input } from '../week-3/sesion-2/common/CustomInput';
import { FormContainer, Container, Button } from '../week-3/sesion-2/styles/StyledComponents';
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KV-logo.svg/1200px-KV-logo.svg.png";
import { useFormik } from 'formik';
import * as Yup from "yup";

const VALID_PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*?[a-z])(?=.*?[0-9]).{8,20}$/;

const inputs = [
  { id: 1, label: "Nombre", placeholder: "Escribe tu nombre", name: "name" },
  { id: 2, label: "Correo", placeholder: "Escribe tu correo", name: "email" },
  { id: 3, label: "Contraseña", placeholder: "Escribe tu contraseña", name: "password" },
  { id: 4, label: "Repetir Contraseña", placeholder: "Repite la misma contraseña", name: "repeatpassword" }
]

const Register = ({ handleFetchValues }) => {
  const getInitialValues = () => ({
    name: "",
    email: "",
    password: "",
    repeatpassword: ""
  });

  const getValidationSchema = () => (
    Yup.lazy(() =>
      Yup.object().shape({
        name: Yup.string().required("Campo Obligatorio"),
        email: Yup.string().email().required("Campo Obligatorio"),
        password: Yup.string()
          .min(8, 'La contraseña debe tener al menos 8 caracteres')
          .max(20, 'La contraseña no debe superar los 20 caracteres')
          .required('Campo Obligatorio')
          .matches(VALID_PASSWORD_REGEX,
            'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial',
          ),
        repeatpassword: Yup.string()
          .oneOf([Yup.ref('password'), null],
            'Las contraseñas no coinciden')
          .required('Campo Obligatorio'),
      })
    )
  )

  const onSubmit = (values) => {
    console.log(values);
    handleFetchValues(values);
  };

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit
  })

  return (
    <FormContainer
      from="register"
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <h2>Register</h2>
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
                onChange={(e) => setFieldValue(field.name, e.target.value)}
              />
              {
                errors[field.name] && (
                  <p style={{ color: "red", fontSize: "12px", padding: 0, margin: 0 }}>{errors[field.name]}</p>
                )
              }
            </Container>
          ))
        }
      </form>
      <Container content="row">
        <Button btn="cancel" type="button">Cancel</Button>
        <Button form="register-form" btn="submit" type="submit">Submit</Button>
      </Container>
    </FormContainer>
  )
}

export default Register